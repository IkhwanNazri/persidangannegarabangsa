"use client";

import { UsersIcon } from "@heroicons/react/16/solid";
import {
  HomeIcon,
  InformationCircleIcon,
  CalendarDaysIcon,
  ClipboardDocumentCheckIcon,
  UserCircleIcon,
  UserIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import { UserGroupIcon } from "lucide-react";

const navItems = [
  {
    label: "Utama",
    href: "#home",
    icon: HomeIcon,
  },
  {
    label: "Mengenai",
    href: "#mengenai",
    icon: InformationCircleIcon,
  },
  {
    label: "Atur Cara",
    href: "#aturcara",
    icon: CalendarDaysIcon,
  },
 
  {
    label: "Panel",
    href: "#panel",
    icon: UserIcon,
  },
  {
    label: "Rakan Strategik",
    href: "#rakan",
    icon: SwatchIcon,
  },
   {
    label: "RSVP",
    href: "#rsvp",
    icon: ClipboardDocumentCheckIcon,
  },
];

export default function Navbar() {
  return (
    <>
      {/* ================================
          DESKTOP TOP NAVBAR
          Hanya desktop
      ================================= */}
      <header className="fixed left-0 right-0 top-0 z-[100] hidden lg:block">
        <div className="mx-auto max-w-[1500px] px-8 pt-6">
          <nav className="flex items-center justify-between rounded-2xl bg-[#062F63]/95 px-6 py-3.5 shadow-xl backdrop-blur-xl">

            {/* LOGO */}
            <a href="#home" className="flex items-center gap-3">
              {/* <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFD21C]">
                <span className="font-jakarta text-sm font-black text-[#062F63]">
                  NB
                </span>
              </div> */}

              <div>
                <p className="font-poppins text-sm font-semibold uppercase text-white/70">
                  Persidangan
                </p>

                <p className="font-montserrat text-lg uppercase tracking-wider font-bold text-white">
                  Negara Bangsa
                </p>
              </div>
            </a>

            {/* MENU */}
            <div className="flex items-center gap-1 ">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 rounded-xl px-4 py-2.5 font-montserrat text-md font-semibold uppercase tracking-wide text-white transition  hover:text-yellow-400"
                  >
                    <Icon className="h-6 w-6" />
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#rsvp"
              className="rounded-xl bg-[#FFD21C] px-5 py-3 font-montserrat text-sm tracking-wider font-extrabold uppercase text-[#062F63] transition hover:bg-white"
            >
              Pra Pendaftaran
            </a>

          </nav>
        </div>
      </header>

      {/* ================================
          MOBILE + TABLET BOTTOM NAVBAR
          Hanya mobile & tablet
      ================================= */}
      <nav className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden">
        <div className="mx-auto max-w-xl px-3 pb-3">
          <div className="flex items-center justify-around rounded-2xl bg-[#062F63]/95 px-2 py-2 shadow-2xl backdrop-blur-xl">

            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex min-w-[65px] flex-col items-center justify-center rounded-xl px-3 py-2 transition hover:bg-white/10"
                >
                  <Icon className="h-5 w-5 text-white/70" />

                  <span className="mt-1 font-montserrat text-[8px] font-bold uppercase tracking-wide text-white/60">
                    {item.label}
                  </span>
                </a>
              );
            })}

          </div>
        </div>
      </nav>
    </>
  );
}