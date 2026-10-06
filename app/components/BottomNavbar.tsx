"use client";

import Link from "next/link";
import {
  House,
  MessagesSquare,
  BookOpen,
  UsersRound,
  ArrowRight,
} from "lucide-react";

const navItems = [
  {
    label: "UTAMA",
    href: "/",
    icon: House,
  },
  {
    label: "MENGENAI",
    href: "/MengenaiDialog",
    icon: MessagesSquare,
  },
  {
    label: "ATUR CARA",
    href: "/AturCara",
    icon: BookOpen,
  },
  {
    label: "PENAJA",
    href: "/penaja",
    icon: UsersRound,
  },
];

export default function Navbar() {
  return (
    <nav className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-24px)] max-w-[620px] -translate-x-1/2 ">
      <div className="relative flex h-[72px] items-center justify-between rounded-full border border-white/30 bg-white/15 px-2 shadow-[0_15px_50px_rgba(0,0,0,.3),inset_0_1px_0_rgba(255,255,255,.4)] backdrop-blur-[25px] backdrop-saturate-150 sm:h-[78px] sm:px-3">

        <NavItem
          href={navItems[0].href}
          label={navItems[0].label}
          icon={navItems[0].icon}
        />

        <NavItem
          href={navItems[1].href}
          label={navItems[1].label}
          icon={navItems[1].icon}
        />

        <div className="relative -mt-12 flex shrink-0 flex-col items-center">
          <Link
            href="/daftar"
            className="group flex h-[82px] w-[82px] items-center justify-center rounded-full border-[6px] border-[#062F63]/60 bg-[#FFD21C] shadow-[0_10px_30px_rgba(0,0,0,.35)] transition duration-300 hover:scale-105 sm:h-[90px] sm:w-[90px]"
          >
            <div className="flex flex-col items-center">
              <ArrowRight
                size={30}
                strokeWidth={3}
                className="-rotate-12 text-[#062F63] transition-transform duration-300 group-hover:translate-x-1"
              />

              <span className="mt-1 text-[9px] font-black tracking-wide text-[#062F63] sm:text-[10px]">
                DAFTAR
              </span>
            </div>
          </Link>
        </div>

        <NavItem
          href={navItems[2].href}
          label={navItems[2].label}
          icon={navItems[2].icon}
        />

        <NavItem
          href={navItems[3].href}
          label={navItems[3].label}
          icon={navItems[3].icon}
        />

      </div>
    </nav>
  );
}

function NavItem({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
}) {
  return (
    <Link
      href={href}
      className="group flex min-w-[55px] flex-1 flex-col items-center justify-center gap-1 text-white/80 transition duration-200 hover:text-white sm:min-w-[75px]"
    >
      <Icon
        size={21}
        strokeWidth={2.3}
        className="transition-transform duration-200 group-hover:-translate-y-0.5"
      />

      <span className="text-[8px] font-bold tracking-wide sm:text-[9px]">
        {label}
      </span>
    </Link>
  );
}