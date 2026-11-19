"use client";

import { useEffect, useState } from "react";

export default function ScanSplash() {
  const [show, setShow] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as any).standalone === true;
    if (!standalone || sessionStorage.getItem("pnb_splash")) return;

    sessionStorage.setItem("pnb_splash", "1"); // sekali setiap kali app dibuka
    setShow(true);
    const t1 = setTimeout(() => setFade(true), 1200);
    const t2 = setTimeout(() => setShow(false), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#062F63] bg-[url('/images/splash.svg')] bg-cover bg-center transition-opacity duration-400 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <img src="/icons/scan-512.png" alt="" className="h-28 w-28 rounded-3xl  " />
      <p className="mt-5 font-poppins text-lg font-bold text-white">Persidangan Pembinaan Negara Bangsa</p>
      <p className="mt-1 font-poppins text-xs text-white/70">Imbas Kehadiran Urus Setia</p>
    </div>
  );
}