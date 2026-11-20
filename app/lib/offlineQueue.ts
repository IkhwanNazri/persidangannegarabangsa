const QUEUE_KEY = "pnb_offline_queue";
const LOG_KEY = "pnb_scan_log";
const DUPLICATE_WINDOW_MS = 5 * 60 * 1000; // abaikan scan ID sama dalam 5 minit
const MAX_LOG = 500;
const RETRYABLE = /lock timeout|server error|too many times/i; // ralat sementara: cuba lagi

export type QueueItem = { id: string; scannedAt: string };
export type LogStatus = "pending" | "success" | "duplicate" | "failed";
export type LogItem = QueueItem & {
  key: string;
  status: LogStatus;
  name?: string;
  detail?: string;
  sessionName?: string;
  message?: string;
};

const itemKey = (item: QueueItem) => `${item.id}|${item.scannedAt}`; // kunci unik setiap scan

const read = <T>(key: string): T[] => {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
};

const write = (key: string, items: unknown[]) => {
  try {
    localStorage.setItem(key, JSON.stringify(items));
  } catch {}
  window.dispatchEvent(new Event("pnb-queue"));
};

export const getQueue = () => read<QueueItem>(QUEUE_KEY);
export const getLog = () => read<LogItem>(LOG_KEY);

// Log simpan rekod hari ini sahaja (yang belum sync sentiasa disimpan)
const isToday = (iso: string) => new Date(iso).toDateString() === new Date().toDateString();
const saveLog = (log: LogItem[]) =>
  write(LOG_KEY, log.filter((i) => i.status === "pending" || isToday(i.scannedAt)).slice(0, MAX_LOG));

const addLog = (item: LogItem) => saveLog([item, ...getLog()]);
const updateLog = (key: string, patch: Partial<LogItem>) =>
  saveLog(getLog().map((i) => (i.key === key ? { ...i, ...patch } : i)));

export const clearLog = () => saveLog(getLog().filter((i) => i.status === "pending"));

// Tukar respons server kepada maklumat log
const toLogFields = (data: any): Partial<LogItem> => {
  const duplicate = data.alreadyPresent || /sudah direkodkan/i.test(data.error || "");
  const status: LogStatus = data.success ? "success" : duplicate ? "duplicate" : "failed";
  return {
    status,
    name: data.participant?.name,
    detail: data.participant?.kategoriLain,
    sessionName: data.sessionName,
    message: data.success ? data.message : data.error,
  };
};

// Scan online: terus masuk log dengan keputusan server
export const logOnlineScan = (id: string, data: any) => {
  const item = { id, scannedAt: new Date().toISOString() };
  addLog({ ...item, key: itemKey(item), status: "failed", ...toLogFields(data) });
};

// Scan offline: masuk queue + log (pending). Pulangkan false kalau ID sama baru diimbas
export const enqueue = (id: string) => {
  const queue = getQueue();
  const now = Date.now();
  const recent = queue.some(
    (item) => item.id === id && now - new Date(item.scannedAt).getTime() < DUPLICATE_WINDOW_MS
  );
  if (recent) return false;

  const item = { id, scannedAt: new Date(now).toISOString() };
  queue.push(item);
  write(QUEUE_KEY, queue);
  addLog({ ...item, key: itemKey(item), status: "pending", message: "Menunggu internet" });
  return true;
};

export const syncQueue = async () => {
  const queue = getQueue(); // salinan masa mula
  const remaining: QueueItem[] = [];

  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    try {
      const res = await fetch("/api/attendance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "check_in", id: item.id, scannedAt: item.scannedAt }),
      });

      // Akses tamat / server bermasalah: simpan baki, cuba lagi nanti
      if (res.status === 401 || res.status >= 500) {
        remaining.push(...queue.slice(i));
        break;
      }

      const data = await res.json();
      if (RETRYABLE.test(data.error || "")) {
        remaining.push(...queue.slice(i));
        break;
      }

      updateLog(itemKey(item), toLogFields(data));
    } catch {
      remaining.push(...queue.slice(i)); // masih offline
      break;
    }
  }

  // Kekalkan scan yang masuk semasa sync sedang berjalan
  const sentKeys = new Set(queue.map(itemKey));
  const addedDuringSync = getQueue().filter((item) => !sentKeys.has(itemKey(item)));
  write(QUEUE_KEY, [...remaining, ...addedDuringSync]);
};