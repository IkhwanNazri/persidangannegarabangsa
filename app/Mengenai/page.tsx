"use client";
import {
  CalendarDaysIcon,
  MapPinIcon,
  FlagIcon,
  UserGroupIcon,
  LightBulbIcon,
  ArrowUpRightIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion } from "motion/react";
const backgroundPoints = [
  {
    number: "1.2",
    text: "Hala tuju ini turut diperkukuh dalam Rancangan Malaysia Ketiga Belas 2026-2030 (RMK13) melalui agenda Pembentukan Negara Bangsa di bawah Tonggak D: Mempertingkatkan Kesejahteraan Rakyat dan Kelestarian Alam Sekitar. RMK13 menekankan pembentukan sistem sosial berteraskan insan MADANI, pengukuhan integrasi dan perpaduan nasional, patriotisme dan identiti nasional, diplomasi berkesan serta imej Malaysia di arena antarabangsa. Perpaduan yang berpaksikan Perlembagaan Persekutuan dan Rukun Negara turut menjadi asas kepada pembinaan identiti nasional yang kukuh.",
  },
  {
    number: "1.3",
    text: "RMK13 juga meletakkan pembentukan negara bangsa sebagai asas kepada keharmonian sosial, kestabilan negara dan pembangunan sosioekonomi yang terangkum serta mampan",
  },
  {
    number: "1.4",
    text: "Justeru, wacana nasional yang menghimpunkan pemimpin, sarjana, pembuat dasar, agensi kerajaan, masyarakat sivil, sektor swasta, media, belia dan komuniti akar umbi amat diperlukan bagi memperkukuh kefahaman bersama tentang hala tuju, cabaran dan pendekatan pelaksanaan agenda ini",
  },
  {
    number: "1.5",
    text: "Penganjuran Persidangan Pembinaan Negara Bangsa merupakan medan wacana nasional untuk membincangkan pembinaan negara bangsa secara menyeluruh. Pengisian persidangan dirangka bagi menyokong hala tuju RMK13 dengan memberi tumpuan kepada penyertaan pelbagai pemegang taruh, dengan jangkaan persidangan ini dapat menghasilkan rumusan strategik untuk memperkukuh misi pembinaan negara bangsa di peringkat nasional, wilayah dan komuniti",
  },
];
const objectivePoints = [
  {
    number: "2.1",
    title: "Menyediakan platform wacana nasional bagi membincangkan hala tuju pembentukan negara bangsa selaras dengan matlamat yang digagaskan di bawah RMK13",
    text: "",
    icon: FlagIcon,
  },
  {
    number: "2.2",
    title: "Menghimpunkan pandangan sarjana, pembuat dasar, agensi kerajaan, NGO, sektor swasta, media, komuniti dan generasi muda bagi merumuskan cadangan praktikal yang boleh memperkukuh pelaksanaan agenda pembinaan negara bangsa",
    text: "",
    icon: UserGroupIcon,
  },
];
const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};
function ReadMore({ text, light = false }: { text: string; light?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <p className={`text-base leading-8 text-inherit sm:text-lg sm:leading-9 ${expanded ? "" : "line-clamp-3"}`}>
        {text}
      </p>
      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        className={`mt-3 inline-flex items-center gap-2 text-sm font-bold transition-colors  focus-visible:outline-offset-4 ${light ? "text-yellow-300 hover:text-yellow-200 focus-visible:outline-yellow-300" : "text-red-700 hover:text-red-900 focus-visible:outline-red-700"}`}
      >
        {expanded ? "Read less" : "Read more"}
        {/* <ChevronDownIcon className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} /> */}
      </button>
    </div>
  );
}
function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={reveal}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="mb-8 flex items-end justify-between gap-5 sm:mb-12"
    >
      <div>
        <p
          className={`font-poppins text-xs font-bold uppercase tracking-[0.22em] sm:text-sm ${
            light ? "text-amber-300" : "text-red-700"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-3 max-w-4xl font-poppins text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl ${
            light ? "text-white" : "text-slate-950"
          }`}
        >
          {title}
        </h2>
      </div>
      <span
        className={`mb-1 hidden h-px w-24 shrink-0 sm:block ${
          light ? "bg-amber-300/80" : "bg-red-700/70"
        }`}
      />
    </motion.div>
  );
}
export default function MengenaiDialog() {
  return (
    <main className="overflow-hidden bg-[#f2efe8] font-poppins text-slate-800">
      <style jsx global>{`
        @keyframes slow-pan {
          0% {
            transform: scale(1.04) translate3d(0, 0, 0);
          }
          50% {
            transform: scale(1.11) translate3d(-1%, 0.5%, 0);
          }
          100% {
            transform: scale(1.04) translate3d(0, 0, 0);
          }
        }
        @keyframes light-sweep {
          0% {
            transform: translateX(-120%) rotate(12deg);
          }
          100% {
            transform: translateX(220%) rotate(12deg);
          }
        }
        @keyframes slow-drift {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .conference-photo-motion {
          animation: slow-pan 28s ease-in-out infinite;
          will-change: transform;
        }
        .conference-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http\://www\.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.18'/%3E%3C/svg%3E");
          mix-blend-mode: soft-light;
        }
        .conference-sweep::after {
          content: "";
          position: absolute;
          inset: -20% auto -20% 0;
          width: 25%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.12),
            transparent
          );
          animation: light-sweep 9s ease-in-out infinite;
          pointer-events: none;
        }
        .conference-drift {
          animation: slow-drift 8s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .conference-photo-motion,
          .conference-sweep::after,
          .conference-drift {
            animation: none !important;
          }
        }
      `}</style>
      {/* 1.0 LATAR BELAKANG */}
      <section className="relative isolate overflow-hidden bg-[#e9e4da]">
        <div className="absolute inset-0">
          <img
            src="/images/PALE.png"
            alt=""
            aria-hidden="true"
            className="conference-photo-motion h-full w-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f2efe8]/30 via-[#f2efe8]/50 to-[#f2efe8]/80" />
          <div className="conference-grain absolute inset-0 opacity-30" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-5 pb-12 sm:px-8 sm:pb-16 lg:px-14 lg:pb-20">
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="conference-sweep group relative left-1/2 isolate min-h-[460px] w-screen -translate-x-1/2 overflow-hidden bg-[#102653] sm:min-h-[520px] lg:min-h-[600px]"
          >
            <motion.img
              src="/images/Picture1.png"
              alt="Persidangan Pembinaan Negara Bangsa"
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07152f]/90 via-[#07152f]/50 to-[#07152f]/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07152f]/85 via-transparent to-[#07152f]/10" />
            <div className="conference-grain pointer-events-none absolute inset-0 opacity-35" />
            <div className="relative flex min-h-[460px] flex-col justify-center p-6 sm:min-h-[520px] sm:px-10 sm:py-12 lg:min-h-[600px] lg:px-14 lg:py-14">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-amber-300" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200 sm:text-sm">
                  PERSIDANGAN NEGARA BANGSA · 2026
                </p>
              </div>
              <div className="mt-5 max-w-6xl pb-2 sm:mt-6">
                <motion.h1
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.12 }}
                  className="max-w-6xl text-4xl font-bold leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl lg:text-7xl"
                >
                  Persidangan
                  <br />
                  Pembinaan Negara Bangsa
                </motion.h1>
                <div className="mt-8 flex flex-col gap-3 border-t border-white/30 pt-5 text-sm text-white/90 sm:flex-row sm:items-center sm:gap-8 sm:text-base">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDaysIcon className="h-5 w-5 text-amber-300" />
                    30 November – 2 Disember 2026
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPinIcon className="h-5 w-5 text-amber-300" />
                    Pusat Konvensyen Antarabangsa Putrajaya (PICC)
                  </span>
                </div>
              </div>
            </div>
          </motion.figure>
          <div className="mt-0">
            <SectionHeading eyebrow="" title="Latar Belakang" />
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <motion.aside
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="relative self-start border-l-[3px] border-red-700 py-2 pl-5 sm:pl-7 lg:sticky lg:top-10"
            >
              <div className="conference-drift absolute -right-2 top-0 hidden h-20 w-20 rounded-full border border-amber-500/50 sm:block" />
              <p className="text-2xl font-black uppercase tracking-[0.2em] text-red-700">
               1.1
              </p>
              <div className="mt-4 max-w-md">
                <ReadMore text="Pembinaan negara bangsa merupakan agenda strategik negara yang penting bagi memastikan Malaysia terus kekal sebagai sebuah negara majmuk yang aman, stabil, berdaulat dan dihormati. Dalam konteks masyarakat pelbagai kaum, agama, budaya, bahasa, wilayah dan latar sosioekonomi, pembinaan negara bangsa adalah proses berterusan untuk membina identiti kebangsaan, rasa kepunyaan bersama, kepercayaan antara komuniti dan kesetiaan kepada asas kenegaraan negara" />
              </div>
            </motion.aside>
            <div className="divide-y divide-slate-400/40 border-y border-slate-400/50">
              {backgroundPoints.map((point, index) => (
                <motion.article
                  key={point.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  className="group grid gap-3 py-6 transition-colors duration-300 hover:bg-white/35 sm:grid-cols-[76px_1fr] sm:gap-5 sm:py-7"
                >
                  <span className="text-2xl font-bold tracking-tight text-red-700 transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                    {point.number}
                  </span>
                  <ReadMore text={point.text} />
                </motion.article>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="group relative min-h-[260px] overflow-hidden bg-[#102653] sm:min-h-[330px]"
            >
              <img src="/images/bangunan.png" alt="Bangunan persidangan" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152f]/65 via-transparent to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="group relative min-h-[260px] overflow-hidden bg-[#102653] sm:min-h-[330px]"
            >
              <img src="/images/Picture1.png" alt="Persidangan Pembinaan Negara Bangsa" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152f]/65 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>
      {/* 2.0 OBJEKTIF PERSIDANGAN */}
      <section className="relative isolate overflow-hidden bg-[#102653]">
        <div className="absolute inset-0">
          <img
            src="/images/blue.png"
            alt=""
            aria-hidden="true"
            className="conference-photo-motion h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-[#07152f]/80" />
          <div className="conference-grain absolute inset-0 opacity-35" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
          <SectionHeading
            eyebrow=""
            title="Objektif Persidangan"
            light
          />
          <div className="grid gap-0 border-y border-white/25 md:grid-cols-2 md:divide-x md:divide-white/25">
            {objectivePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.article
                  key={point.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  className="group relative overflow-hidden py-8 text-white sm:py-10 md:px-8 lg:px-12 lg:py-14"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 transition-colors duration-500 group-hover:from-white/[0.08] group-hover:to-transparent" />
                  <div className="relative flex items-start justify-between gap-5">
                    <span className="text-4xl font-bold tracking-[-0.04em] text-amber-300 sm:text-5xl">
                      {point.number}
                    </span>
                    <Icon className="h-9 w-9 text-amber-300 transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110 sm:h-11 sm:w-11" />
                  </div>
                  <div className="relative mt-8 max-w-xl">
                    <ReadMore text={point.title} light />
                  </div>
                  <div className="relative mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                    <span className="h-px w-8 bg-amber-300 transition-all duration-500 group-hover:w-14" />
                    Objektif persidangan
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
      {/* 4.0 PELAKSANAAN PERSIDANGAN */}
      <section className="relative isolate overflow-hidden bg-[#f2efe8]">
        <div className="absolute inset-0">
          <img
            src="/images/navy.png"
            alt=""
            aria-hidden="true"
            className="conference-photo-motion h-full w-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f2efe8]/80 to-[#f2efe8]/95" />
          <div className="conference-grain absolute inset-0 opacity-20" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
          <SectionHeading
            eyebrow=""
            title="Pelaksanaan Persidangan"
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="grid overflow-hidden bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)] md:grid-cols-[0.85fr_1.15fr]"
          >
            <div className="relative isolate min-h-[280px] overflow-hidden bg-red-800 p-6 text-white sm:p-9 lg:p-12">
              <img
                src="/images/bangunan.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 -z-20 h-full w-full object-cover "
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-900/75 via-red-800/50 to-[#671e2c]/70" />
              <div className="conference-grain absolute inset-0 opacity-30" />
              <CalendarDaysIcon className="h-10 w-10 text-amber-300" />
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                Tarikh
              </p>
              <p className="mt-3 text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl">
                30 Nov – 2 Dis 2026
              </p>
              <p className="mt-3 text-base text-white/80 sm:text-lg">
                Isnin – Rabu
              </p>
              <div className="mt-8 h-px w-full bg-white/30" />
              <p className="mt-5 text-sm leading-7 text-white/80">
                Tiga hari perbincangan dan perkongsian pandangan.
              </p>
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
              <div className="flex items-start gap-4">
                <div className="shrink-0 border border-red-700/20 bg-red-50 p-3">
                  <MapPinIcon className="h-7 w-7 text-red-700" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                    Tempat
                  </p>
                  <p className="mt-3 text-xl font-semibold leading-snug text-[#102653] sm:text-2xl">
                    Pusat Konvensyen Antarabangsa Putrajaya (PICC), Putrajaya
                  </p>
                </div>
              </div>
              <div className="mt-8 border-l-2 border-amber-400 bg-[#f7f4ed] p-5 sm:p-6">
                <LightBulbIcon className="h-7 w-7 text-red-700" />
                <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
                  Persidangan ini menyokong usaha merumuskan cadangan strategik
                  untuk memperkukuh pembinaan negara bangsa di peringkat
                  nasional, wilayah dan komuniti.
                </p>
              </div>
            </div>
          </motion.div>
          {/* <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <motion.figure
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="group relative min-h-[230px] overflow-hidden bg-[#102653] sm:min-h-[300px]"
            >
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                alt="Ruang perbincangan"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152f]/85 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-5 text-lg font-semibold text-white sm:p-7 sm:text-xl">
                Ruang perbincangan
              </figcaption>
              <ArrowUpRightIcon className="absolute right-5 top-5 h-6 w-6 text-white opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
            </motion.figure>
            <motion.figure
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="group relative min-h-[230px] overflow-hidden bg-[#102653] sm:min-h-[300px]"
            >
              <img
                src="https://images.unsplash.com/photo-1517457373958-b7fde1e5c2fd?auto=format&fit=crop&w=1200&q=85"
                alt="Dewan persidangan"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152f]/85 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-5 text-lg font-semibold text-white sm:p-7 sm:text-xl">
                Dewan persidangan
              </figcaption>
              <ArrowUpRightIcon className="absolute right-5 top-5 h-6 w-6 text-white opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
            </motion.figure>
          </div> */}
        </div>
      </section>
    </main>
  );
}
