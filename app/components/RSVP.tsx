"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

type SessionId =
  | "perasmian"
  | "sesi-1"
  | "sesi-2"
  | "sesi-3"
  | "sesi-4"
  | "sesi-5"
  | "penutup";

type CardId = "Persidangan" | "penutup";

type Participant = {
  id: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  sessions: SessionId[];
};

type Session = {
  id: SessionId;
  title: string;
  description: string;
  icon: "building" | "people";
};

type RSVPCard = {
  id: CardId;
  number: string;
  title: string;
  date: string;
  description: string;
  sessions: Session[];
};

const cards: RSVPCard[] = [
  {
    id: "Persidangan",
    number: "01",
    title: "PERSIDANGAN",
    date: "30 NOVEMBER • 1 DISEMBER • 2 DISEMBER 2026",
    description:
      "Daftar kehadiran untuk Persidangan  Negara Bangsa selama tiga hari.",
    sessions: [
      {
        id: "perasmian",
        title: "Perasmian",
        description:
          "Majlis Perasmian Persidangan  Negara Bangsa.",
        icon: "building",
      },
      {
        id: "sesi-1",
        title: "Sesi 1",
        description:
          "Perlembagaan dan Rukun Negara Teras  Negara Bangsa.",
        icon: "people",
      },
      {
        id: "sesi-2",
        title: "Sesi 2",
        description:
          "Warisan dan Sejarah: Akar Identiti Nasional.",
        icon: "people",
      },
      {
        id: "sesi-3",
        title: "Sesi 3",
        description:
          "Kepelbagaian, Keharmonian dan Kesepaduan Sosial.",
        icon: "people",
      },
      {
        id: "sesi-4",
        title: "Sesi 4",
        description:
          "Politik dan Cabaran dalam Membina Negara Bangsa.",
        icon: "people",
      },
      {
        id: "sesi-5",
        title: "Sesi 5",
        description:
          "Transformasi Negara Bangsa: Naratif Nasional, Ekonomi Inklusif dan Modal Insan.",
        icon: "people",
      },
    ],
  },

  {
    id: "penutup",
    number: "02",
    title: "PENUTUP",
    date: "2 DISEMBER 2026",
    description:
      "Majlis Penutupan Persidangan  Negara Bangsa.",
    sessions: [
      {
        id: "penutup",
        title: "Penutup",
        description:
          "Majlis Penutupan Persidangan  Negara Bangsa.",
        icon: "building",
      },
    ],
  },
];

export default function RSVP() {
  const [participant, setParticipant] = useState<Participant | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("pnb_participant");
      if (saved) {
        setParticipant(JSON.parse(saved));
      }

      const params = new URLSearchParams(window.location.search);
      if (params.get("rsvpSuccess") === "1") {
        setSuccess(true);

        window.history.replaceState(
          {},
          "",
          `${window.location.pathname}#rsvp`
        );
      }
    } catch (error) {
      console.error("Gagal membaca rekod peserta:", error);
    }
  }, []);

  const isCardRegistered = (card: RSVPCard) => {
    if (!participant) return false;

    return card.sessions.some((session) =>
      participant.sessions.includes(session.id)
    );
  };

  return (
    <section
      id="rsvp"
      className="relative min-h-screen overflow-hidden  px-5 py-20 sm:px-8 lg:px-16"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/rsvp.png"
          alt="PICC Putrajaya"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#062F63]/50" />
      </div>

      <div className="pointer-events-none absolute left-[-120px] top-20 h-[350px] w-[350px] rounded-full bg-[#E30620]/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-120px] h-[350px] w-[350px] rounded-full bg-[#FFD21C]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1100px]">
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[3px] w-10 bg-[#FFD21C]" />
            <span className="font-poppins text-2xl font-bold uppercase tracking-[.3em] text-white">
              Kehadiran
            </span>
            <span className="h-[3px] w-10 bg-[#FFD21C]" />
          </div>

          <h2 className="mt-4 font-montserrat text-5xl font-bold  uppercase tracking-widest text-white sm:text-6xl">
            RSVP
          </h2>

          <p className="mt-3 font-poppins text-sm text-white">
            Persidangan Negara Bangsa 2026
          </p>
        </div>

        {/* 3 CARD KEKAL DI SINI */}
        <div
          id="rsvp-cards"
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {cards.map((card) => {
            const registered = isCardRegistered(card);

            return (
              <div
                key={card.id}
                className="group relative overflow-hidden rounded-[22px] bg-white shadow-[0_25px_70px_rgba(0,0,0,.28)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-[5px] bg-gradient-to-r from-[#FFD21C] via-[#E30620] to-[#062F63]" />

                <div className="flex min-h-[370px] flex-col p-7 sm:p-8">
                  <div className="font-jakarta text-[46px] font-black leading-none tracking-[-3px] text-slate-200">
                    {card.number}
                  </div>

                  <h3 className="mt-7 font-jakarta text-[25px] font-black tracking-[-1px] text-[#062F63]">
                    {card.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#E30620]" />
                    <p className="font-montserrat text-sm font-bold leading-5 tracking-[.08em] text-[#E30620]">
                      {card.date}
                    </p>
                  </div>

                  <p className="mt-5 min-h-[72px] font-poppins text-sm leading-5 text-[#64748B]">
                    {card.description}
                  </p>

                  <Link
                    href={
  card.id === "penutup"
    ? "/penutup"
    : `/borang/borangpertama?type=${card.id}`
}
                    className={`mt-auto flex h-[48px] w-full items-center justify-center gap-3 rounded-xl font-montserrat text-md font-bold tracking-wide text-white transition-all duration-300 ${
                      registered
                        ? "bg-[#062F63] hover:bg-[#E30620]"
                        : "bg-[#E30620] hover:bg-[#062F63]"
                    }`}
                  >
                    {registered ? "TAMBAH / LIHAT SESI" : `DAFTAR ${card.title}`}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>

                  <div className="mt-4 flex items-center justify-center gap-1.5">
                    <CheckCircleIcon
                      className={`h-6 w-6  ${
                        registered ? "text-[#062F63]" : "text-purple-950"
                      }`}
                    />
                    <span
                      className={`font-montserrat text-lg ${
                        registered
                          ? "font-semibold text-purple-600"
                          : "text-purple-950"
                      }`}
                    >
                      {registered
                        ? "Pendaftaran direkodkan"
                        : "Pendaftaran dibuka"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {success && (
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
            <div className="flex items-start gap-3">
              <CheckCircleIcon className="mt-0.5 h-6 w-6 shrink-0 text-[#FFD21C]" />
              <div>
                <p className="font-jakarta text-sm font-black text-white">
                  Pendaftaran berjaya direkodkan
                </p>
                <p className="mt-1 font-inter text-[11px] leading-5 text-white/60">
                  Kehadiran anda telah disimpan. Anda boleh memilih card lain
                  untuk menambah sesi.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="ml-auto text-white/50 hover:text-white"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
