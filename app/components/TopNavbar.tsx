
"use client";

import { useState } from "react";
import {
  HomeIcon,
  InformationCircleIcon,
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  UserIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { label: "Utama", href: "#home", icon: HomeIcon },
  { label: "Pengenalan", href: "#pengenalan", icon: InformationCircleIcon },
  { label: "Atur Cara", href: "#aturcara", icon: CalendarDaysIcon },
  { label: "Panel", href: "#panel", icon: UserIcon },
  { label: "Rakan Strategik", href: "#rakan", icon: SwatchIcon },
  {
    label: "RSVP",
    href: "#rsvp", 
    icon: ClipboardDocumentCheckIcon,
  },
];

const mobileItems = navItems.filter(
  (item) =>
    ["#home", "#pengenalan", "#aturcara", "#rsvp"].includes(item.href)
);

export default function Navbar() {
  const [active, setActive] = useState("#home");

  return (
    <>
      {/* DESKTOP TOP NAVBAR — KEKAL */}
      <header className="fixed left-0 right-0 top-0 z-[100] hidden lg:block">
        <div className="mx-auto max-w-[1500px] px-8 pt-6">
          <nav className="flex items-center justify-between rounded-2xl bg-[#062F63]/95 px-6 py-3.5 shadow-xl backdrop-blur-xl">
            <a href="#home" className="flex items-center gap-3">
              <div>
                <p className="font-poppins text-sm font-semibold uppercase text-white/70">
                  Persidangan Pembinaan
                </p>
                <p className="font-montserrat text-lg font-bold uppercase tracking-wider text-white">
                  Negara Bangsa
                </p>
              </div>
            </a>

            <div className="flex items-center gap-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-1.5 rounded-xl px-2.5 py-2.5 whitespace-break-spaces font-montserrat text-md font-semibold uppercase tracking-normal text-white transition hover:text-yellow-400"
                  >
                    <Icon className="h-6 w-6" />
                    {item.label}
                  </a>
                );
              })}
            </div>

            <a
              href="#rsvp"
              className="rounded-xl bg-[#FFD21C] px-5 py-3 font-montserrat whitespace-nowrap text-sm font-extrabold uppercase tracking-wider text-[#062F63] transition hover:bg-white"
            >
              Pra Pendaftaran
            </a>
          </nav>
        </div>
      </header>

      {/* MOBILE FLOATING BOTTOM NAVBAR */}
      <nav className="fixed inset-x-0 bottom-0 z-[100] lg:hidden">
        <div className="mx-auto w-full max-w-[440px] px-2 pb-[max(12px,env(safe-area-inset-bottom))]">
          <div className="flex items-center justify-around rounded-full border border-white/30 bg-white/15 px-1 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-2xl backdrop-saturate-150">
            {mobileItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActive(item.href)}
                  aria-current={isActive ? "location" : undefined}
                  className="relative flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-full py-1 text-[#062F63] transition-transform duration-200 active:scale-95"
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-[#062F63] text-white shadow-md"
                        : "text-[#062F63]"
                    }`}
                  >
                    <Icon className="h-8 w-8" strokeWidth={1.5} />
                  </span>

                  <span
                    className={`whitespace-nowrap font-poppins text-sm leading-none  ${
                      isActive ? "font-bold" : "font-medium"
                    }`}
                  >
                    {item.label}
                  </span>
{/* 
                  {isActive && (
                    <span className="absolute -bottom-1 h-3 w-3 rounded-full bg-[#FFD21C]" />
                  )} */}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
