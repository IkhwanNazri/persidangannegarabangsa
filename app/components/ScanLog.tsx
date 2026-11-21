"use client";

import { useEffect, useMemo, useState } from "react";
import { clearLog, getLog, type LogItem, type LogStatus } from "@/app/lib/offlineQueue";

type Filter = "all" | "pending" | "failed";

const STATUS: Record<LogStatus, { label: string; dot: string; text: string }> = {
  pending: { label: "Belum sync", dot: "bg-orange-400", text: "text-orange-600" },
  success: { label: "Hadir", dot: "bg-emerald-500", text: "text-emerald-700" },
  duplicate: { label: "Sudah hadir", dot: "bg-slate-300", text: "text-slate-500" },
  failed: { label: "Gagal", dot: "bg-red-500", text: "text-red-600" },
};

// Ikut susunan lajur dalam Google Sheet
const SESSIONS = [
  { id: "perasmian", label: "Perasmian" },
  { id: "sesi-1", label: "Sesi 1" },
  { id: "sesi-2", label: "Sesi 2" },
  { id: "sesi-3", label: "Sesi 3" },
  { id: "sesi-4", label: "Sesi 4" },
  { id: "sesi-5", label: "Sesi 5" },
  { id: "penutup", label: "Penutup" },
];

const formatTime = (iso: string) =>
  new Date(iso).toLocaleTimeString("ms-MY", { hour: "2-digit", minute: "2-digit", hour12: false });

// Masa relatif: "baru", "5 min lalu", "2 jam lalu"
// const formatAgo = (iso: string, now: number) => {
//   const mins = Math.floor((now - new Date(iso).getTime()) / 60000);
//   if (mins < 1) return "baru";
//   if (mins < 60) return `${mins} min lalu`;
//   return `${Math.floor(mins / 60)} jam lalu`;
// };

// Tarikh scan: "21 Nov"
const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("ms-MY", { day: "numeric", month: "short" });

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4h6v3" />
  </svg>
);

const SessionPills = ({ attended, current }: { attended: string[]; current?: string }) => (
  <div className="mt-2 flex flex-wrap gap-1">
    {SESSIONS.map((s) => {
      const isCurrent = s.id === current;
      const isAttended = attended.includes(s.id);
      const style = isCurrent
        ? "border-[#062F63] bg-[#062F63] text-white"
        : isAttended
        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
        : "border-slate-200 text-slate-300";
      return (
        <span key={s.id} className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${style}`}>
          {s.label}
        </span>
      );
    })}
  </div>
);

const ConfirmClear = ({ count, onCancel, onConfirm }: { count: number; onCancel: () => void; onConfirm: () => void }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onCancel();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onCancel]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/40 p-4 backdrop-blur-sm sm:items-center" onClick={onCancel}>
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
          <TrashIcon />
        </div>
        <h3 className="text-center text-base font-bold text-slate-800">Kosongkan rekod?</h3>
        <p className="mt-1 text-center text-sm text-slate-500">
          <span className="tabular-nums">{count}</span> rekod yang dah selesai akan dibuang dari telefon ini.
          Rekod belum sync tetap disimpan. Data dalam Google Sheet tidak terjejas.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-2">
          <button onClick={onCancel} className="rounded-xl bg-slate-100 py-3 text-sm font-semibold text-slate-700 active:scale-[0.98]">
            Batal
          </button>
          <button onClick={onConfirm} className="rounded-xl bg-red-600 py-3 text-sm font-semibold text-white active:scale-[0.98]">
            Kosongkan
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ScanLog() {
  const [log, setLog] = useState<LogItem[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  // const [now, setNow] = useState(() => Date.now());
  const [confirming, setConfirming] = useState(false);

  // useEffect(() => {
  //   const refresh = () => setLog(getLog());
  //   refresh();
  //   window.addEventListener("pnb-queue", refresh);
  //   const timer = setInterval(() => setNow(Date.now()), 30000); // kemas kini masa relatif
  //   return () => {
  //     window.removeEventListener("pnb-queue", refresh);
  //     clearInterval(timer);
  //   };
  // }, []);
    useEffect(() => {
    const refresh = () => setLog(getLog());
    refresh();
    window.addEventListener("pnb-queue", refresh);
    return () => window.removeEventListener("pnb-queue", refresh);
  }, []);

  const counts = useMemo(() => {
    const c = { pending: 0, success: 0, duplicate: 0, failed: 0 };
    log.forEach((i) => c[i.status]++);
    return c;
  }, [log]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return log.filter((i) => {
      if (filter !== "all" && i.status !== filter) return false;
      if (!q) return true;
      return [i.name, i.id, i.detail].some((v) => v?.toLowerCase().includes(q));
    });
  }, [log, filter, query]);

  const doneCount = log.length - counts.pending;

  const filters: { id: Filter; label: string; count?: number }[] = [
    { id: "all", label: "Semua" },
    { id: "pending", label: "Belum sync", count: counts.pending },
    { id: "failed", label: "Gagal", count: counts.failed },
  ];

  return (
    <section className="px-4 pt-5 font-poppins">
      {/* TAJUK */}
      <header className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-[#062F63]">Rekod Imbasan</h2>
          <p className="mt-0.5 text-sm text-slate-500">
            Hari ini · <span className="tabular-nums">{log.length}</span> imbasan ·{" "}
            <span className="tabular-nums">{counts.success}</span> hadir
          </p>
        </div>
        {doneCount > 0 && (
          <button
            onClick={() => setConfirming(true)}
            aria-label="Kosongkan rekod yang dah selesai"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600 active:scale-95"
          >
            <TrashIcon />
          </button>
        )}
      </header>

      {/* CARIAN */}
      <label className="mb-3 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-slate-400 focus-within:border-[#062F63] focus-within:text-[#062F63]">
        <SearchIcon />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari nama atau ID peserta"
          className="w-full bg-transparent py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400"
        />
      </label>

      {/* PENAPIS */}
      <div className="mb-3 flex gap-1 rounded-xl bg-slate-200/60 p-1">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition-colors ${
              filter === f.id ? "bg-white text-[#062F63] shadow-sm" : "text-slate-500"
            }`}
          >
            {f.label}
            {!!f.count && (
              <span className={`tabular-nums ${f.id === "failed" ? "text-red-600" : "text-orange-600"}`}>
                {f.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* SENARAI */}
      {visible.length === 0 ? (
        <p className="py-16 text-center text-sm text-slate-400">
          {query ? `Tiada padanan untuk "${query}".` : filter === "all" ? "Belum ada imbasan hari ini." : "Tiada rekod."}
        </p>
      ) : (
        <ul className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {visible.map((item) => {
            const s = STATUS[item.status];
            return (
              <li key={item.key} className="flex gap-3 border-b border-slate-100 px-4 py-3 last:border-b-0">
                <div className="w-14 shrink-0 pt-0.5">
                  <time className="block text-xs font-medium tabular-nums text-slate-600">{formatTime(item.scannedAt)}</time>
                                    <span className="block text-[10px] text-slate-400">{formatDate(item.scannedAt)}</span>
                </div>

                <div className="min-w-0 flex-1">
                  <p className={`truncate text-sm font-semibold ${item.name ? "text-slate-800" : "font-mono text-slate-600"}`}>
                    {item.name || item.id}
                  </p>
                  <p className="truncate text-xs text-slate-400">
                    {item.name ? <span className="font-mono">{item.id}</span> : "Menunggu maklumat peserta"}
                    {item.detail && ` · ${item.detail}`}
                  </p>
                  {item.status === "failed" && item.message && (
                    <p className="mt-1 text-xs text-red-600">{item.message}</p>
                  )}
                  {(item.status === "success" || item.status === "duplicate") && item.sessions && (
                    <SessionPills attended={item.sessions} current={item.session} />
                  )}
                </div>

                <div className={`flex shrink-0 items-center gap-1.5 self-start pt-0.5 text-xs font-medium ${s.text}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                  {item.status === "success" && item.sessionName ? item.sessionName : s.label}
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {confirming && (
        <ConfirmClear
          count={doneCount}
          onCancel={() => setConfirming(false)}
          onConfirm={() => {
            clearLog();
            setConfirming(false);
          }}
        />
      )}
    </section>
  );
}