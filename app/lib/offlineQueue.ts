const QUEUE_KEY = "pnb_offline_queue";
const FAILED_KEY = "pnb_offline_failed";
const DUPLICATE_WINDOW_MS = 5 * 60 * 1000; // abaikan scan ID sama dalam 5 minit
const itemKey = (item: QueueItem) => `${item.id}|${item.scannedAt}`;// Kunci unik setiap scan

export type QueueItem = { id: string; scannedAt: string };
export type FailedItem = QueueItem & { error: string };

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
export const getFailed = () => read<FailedItem>(FAILED_KEY);
export const clearFailed = () => write(FAILED_KEY, []);

// Pulangkan false kalau ID sama baru diimbas
export const enqueue = (id: string) => {
  const queue = getQueue();
  const now = Date.now();
  const recent = queue.some(
    (item) => item.id === id && now - new Date(item.scannedAt).getTime() < DUPLICATE_WINDOW_MS
  );
  if (recent) return false;

  queue.push({ id, scannedAt: new Date(now).toISOString() });
  write(QUEUE_KEY, queue);
  return true;
};

// export const syncQueue = async () => {
//   const queue = getQueue();
//   const remaining: QueueItem[] = [];
//   const failed = getFailed();

//   for (let i = 0; i < queue.length; i++) {
//     const item = queue[i];
//     try {
//       const res = await fetch("/api/attendance", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ action: "check_in", id: item.id }),
//       });

//       // Akses tamat / server bermasalah: simpan baki, cuba lagi nanti
//       if (res.status === 401 || res.status >= 500) {
//         remaining.push(...queue.slice(i));
//         break;
//       }

//       const data = await res.json();
//       const duplicate = /sudah direkodkan/i.test(data.error || data.message || "");
//       if (!data.success && !duplicate) {
//         failed.push({ ...item, error: data.error || "Gagal" });
//       }
//     } catch {
//       remaining.push(...queue.slice(i)); // masih offline
//       break;
//     }
//   }

//   write(QUEUE_KEY, remaining);
//   write(FAILED_KEY, failed);
// };




export const syncQueue = async () => {
  const queue = getQueue(); // salinan masa mula
  const remaining: QueueItem[] = [];
  const newFailed: FailedItem[] = [];

  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    try {
      const res = await fetch("/api/attendance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify({ action: "check_in", id: item.id }),
               body: JSON.stringify({ action: "check_in", id: item.id, scannedAt: item.scannedAt }),

      });

      // Akses tamat / server bermasalah: simpan baki, cuba lagi nanti
      if (res.status === 401 || res.status >= 500) {
        remaining.push(...queue.slice(i));
        break;
      }

      const data = await res.json();
      const duplicate = /sudah direkodkan/i.test(data.error || data.message || "");
      if (!data.success && !duplicate) {
        newFailed.push({ ...item, error: data.error || "Gagal" });
      }
    } catch {
      remaining.push(...queue.slice(i)); // masih offline
      break;
    }
  }

  // Kekalkan scan yang masuk semasa sync sedang berjalan
  const sentKeys = new Set(queue.map(itemKey));
  const addedDuringSync = getQueue().filter((item) => !sentKeys.has(itemKey(item)));

  write(QUEUE_KEY, [...remaining, ...addedDuringSync]);
  write(FAILED_KEY, [...getFailed(), ...newFailed]);
};