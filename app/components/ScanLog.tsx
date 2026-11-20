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

const formatTime = (iso: string) =>
  new Date(iso).toLocaleTimeString("ms-MY", { hour: "2-digit", minute: "2-digit", hour12: false });

export default function ScanLog() {
  const [log, setLog] = useState<LogItem[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

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

  const visible = filter === "all" ? log : log.filter((i) => i.status === filter);

  const filters: { id: Filter; label: string; count?: number }[] = [
    { id: "all", label: "Semua" },
    { id: "pending", label: "Belum sync", count: counts.pending },
    { id: "failed", label: "Gagal", count: counts.failed },
  ];

  const handleClear = () => {
    if (confirm("Kosongkan rekod yang dah selesai? Rekod belum sync tetap disimpan.")) clearLog();
  };

  return (
    <section className="px-4 pt-5 font-poppins">
      {/* TAJUK */}
      <header className="mb-4">
        <h2 className="text-xl font-bold text-[#062F63]">Rekod Imbasan</h2>
        <p className="mt-0.5 text-sm text-slate-500">
          Hari ini · <span className="tabular-nums">{log.length}</span> imbasan ·{" "}
          <span className="tabular-nums">{counts.success}</span> hadir
        </p>
      </header>

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
          {filter === "all" ? "Belum ada imbasan hari ini." : "Tiada rekod."}
        </p>
      ) : (
        <ul className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {visible.map((item) => {
            const s = STATUS[item.status];
            return (
              <li key={item.key} className="flex gap-3 border-b border-slate-100 px-4 py-3 last:border-b-0">
                <time className="w-11 shrink-0 pt-0.5 text-xs tabular-nums text-slate-400">
                  {formatTime(item.scannedAt)}
                </time>

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

      {log.some((i) => i.status !== "pending") && (
        <button onClick={handleClear} className="mx-auto mt-4 block text-xs text-slate-400 hover:text-slate-600">
          Kosongkan rekod yang dah selesai
        </button>
      )}
    </section>
  );
}