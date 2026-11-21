"use client";

import { useEffect, useState } from "react";
import ScanQR from "@/app/components/Scanqr";
import ScanLog from "@/app/components/ScanLog";
import { getQueue } from "@/app/lib/offlineQueue";

type Tab = "scan" | "log";

// Warna nav: ubah di sini
// Warna nav: ubah di sini
// const NAV_GLASS = "bg-purple-800 border border-white/60 backdrop-blur-xl backdrop-saturate-150 "; // kaca
// const ACTIVE_BG = "bg-[#FFF] text-purple-900";   // tab aktif
// const IDLE_TEXT = "text-slate-200";        
// // Warna nav: ubah di sini
const NAV_GLASS = "bg-purple-900/85 border border-white/25 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"; // kaca biru
const ACTIVE_BG = "bg-white/90 text-[#062F63] shadow-sm"; // tab aktif
const IDLE_TEXT = "text-white/85";                        // tab tak aktif    // tab tak aktif

const ScanIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
    <path d="M7 12h10" />
  </svg>
);

const HistoryIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export default function ScanShell() {
  const [tab, setTab] = useState<Tab>("scan");
  const [pending, setPending] = useState(0);

  useEffect(() => {
    const refresh = () => setPending(getQueue().length);
    refresh();
    window.addEventListener("pnb-queue", refresh);
    return () => window.removeEventListener("pnb-queue", refresh);
  }, []);

  return (
    <>
      {/* Kamera ditutup bila tukar ke tab Rekod (jimat bateri, elak scan tak sengaja) */}
           {/* <div className="mx-auto w-full max-w-md pb-32">{tab === "scan" ? <ScanQR /> : <ScanLog />}</div> */}
           <div className="mx-auto w-full max-w-md pb-32">
        <div className={tab === "scan" ? "" : "hidden"}>
          <ScanQR active={tab === "scan"} />
        </div>
        {tab === "log" && <ScanLog />}
      </div>

            <nav className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[max(env(safe-area-inset-bottom),60px)] font-poppins">
        <div className={`pointer-events-auto flex items-center gap-1 rounded-full p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ${NAV_GLASS}`}>
          {/* IMBAS */}
          <button
            onClick={() => setTab("scan")}
            className={`flex flex-col items-center gap-0.5 rounded-full px-10 py-2 text-xs font-medium transition-all active:scale-95 ${
              tab === "scan" ? ACTIVE_BG : IDLE_TEXT
            }`}
          >
            {/* <ScanIcon /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13 9h5l-5-5zM6 22q-.825 0-1.412-.587T4 20v-3h16v3q0 .825-.587 1.413T18 22zm-5-7v-2h22v2zm3-4V4q0-.825.588-1.412T6 2h8l6 6v3z"/></svg>
            Imbas
          </button>

          {/* REKOD */}
          <button
            onClick={() => setTab("log")}
            className={`flex flex-col items-center gap-0.5 rounded-full px-10 py-2 text-xs font-medium transition-all active:scale-95 ${
              tab === "log" ? ACTIVE_BG : IDLE_TEXT
            }`}
          >
            {/* <HistoryIcon /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1200 1200"><path fill="currentColor" d="M600 0C446.454 0 292.879 58.549 175.728 175.705c-234.304 234.309-234.304 614.254 0 848.562c234.303 234.311 614.241 234.311 848.543 0c234.305-234.309 234.305-614.254 0-848.562C907.121 58.549 753.546 0 600 0m0 156.734c113.438 0 226.909 43.228 313.462 129.782c173.105 173.109 173.105 453.828 0 626.938c-173.104 173.108-453.817 173.108-626.924 0c-173.106-173.109-173.105-453.829 0-626.938C373.091 199.962 486.562 156.734 600 156.734M538.626 257.44v280.291h-155.34V691.17h308.775V257.44z"/></svg>
            Rekod
            {pending > 0 && (
              <span className="absolute -right-1 -top-1 min-w-[18px] rounded-full bg-orange-500 px-1 text-center text-[10px] font-semibold leading-[18px] text-white">
                {pending}
              </span>
            )}
          </button>
        </div>
      </nav>
    </>
  );
}