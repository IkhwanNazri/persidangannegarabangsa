"use client";

import { useEffect, useRef, useState } from "react";
import { clearFailed, getFailed, getQueue, syncQueue, type FailedItem } from "@/app/lib/offlineQueue";

export default function OfflineSync() {
  const [online, setOnline] = useState(true);
  const [pending, setPending] = useState(0);
  const [failed, setFailed] = useState<FailedItem[]>([]);
  const [syncing, setSyncing] = useState(false);
  const lock = useRef(false);

  const refresh = () => {
    setPending(getQueue().length);
    setFailed(getFailed());
  };

  const sync = async () => {
    if (lock.current || !navigator.onLine || getQueue().length === 0) return;
    lock.current = true;
    setSyncing(true);
    try {
      await syncQueue();
    } finally {
      lock.current = false;
      setSyncing(false);
      refresh();
    }
  };

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js", { scope: "/scan" }).catch(() => {});
    }

    setOnline(navigator.onLine);
    refresh();
    sync();

    const handleOnline = () => {
      setOnline(true);
      sync();
    };
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    window.addEventListener("pnb-queue", refresh);
    const timer = setInterval(sync, 30000);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("pnb-queue", refresh);
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 pt-4 sm:px-6">
      <div className={`flex items-center justify-between rounded-2xl border px-4 py-3 font-poppins text-xs ${
  online ? "border-slate-200 bg-white" : "border-red-300 bg-red-50"
}`}>
        <span className={`font-semibold ${online ? "text-green-700" : "text-red-600"}`}>
         {online ? "● Online" : "● Offline: scan tetap boleh"}
        </span>
        <span className="text-slate-500">
          {syncing ? "Sedang sync..." : `Belum sync: ${pending}`}
        </span>
        <button
          onClick={sync}
          disabled={!online || syncing || pending === 0}
          className="rounded-lg bg-[#062F63] px-3 py-1.5 font-semibold text-white disabled:opacity-40"
        >
          Sync
        </button>
      </div>

      {failed.length > 0 && (
        <div className="mt-2 rounded-2xl bg-red-50 px-4 py-3 font-poppins text-xs text-red-700">
          <p className="font-semibold">ID gagal semasa sync (sila semak):</p>
          <ul className="mt-1 font-mono">
            {failed.map((f, i) => (
              <li key={i}>
                {f.id} ({new Date(f.scannedAt).toLocaleTimeString("ms-MY")}): {f.error}
              </li>
            ))}
          </ul>
          <button onClick={() => { clearFailed(); refresh(); }} className="mt-2 underline">
            Kosongkan senarai
          </button>
        </div>
      )}
    </div>
  );
}