"use client";

import {
  CalendarDaysIcon,
  MapPinIcon,
  FlagIcon,
  UserGroupIcon,
  LightBulbIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { motion } from "motion/react";

const backgroundPoints = [
  { number: "1.1", text: "Pembinaan negara bangsa merupakan agenda strategik negara bagi memastikan Malaysia kekal sebagai sebuah negara majmuk yang aman, stabil, berdaulat dan dihormati." },
  { number: "1.2", text: "Rancangan Malaysia Ketiga Belas (RMK13) memperkukuh agenda Pembentukan Negara Bangsa di bawah Tonggak D: Mempertingkatkan Kesejahteraan Rakyat dan Kelestarian Alam Sekitar." },
  { number: "1.3", text: "RMK13 meletakkan pembentukan negara bangsa sebagai asas keharmonian sosial, kestabilan negara dan pembangunan sosioekonomi yang terangkum serta mampan." },
  { number: "1.4", text: "Wacana nasional yang menghimpunkan pemimpin, sarjana, pembuat dasar, agensi kerajaan, masyarakat sivil, sektor swasta, media, belia dan komuniti akar umbi diperlukan untuk memperkukuh kefahaman bersama." },
  { number: "1.5", text: "Persidangan ini menjadi medan wacana nasional untuk membincangkan agenda pembinaan negara bangsa dan merumuskan cadangan strategik di peringkat nasional, wilayah dan komuniti." },
];

const objectivePoints = [
  {
    number: "2.1",
    title: "Menyediakan platform wacana nasional",
    text: "Membincangkan hala tuju pembentukan negara bangsa selaras dengan matlamat yang digagaskan di bawah RMK13.",
    icon: FlagIcon,
  },
  {
    number: "2.2",
    title: "Menghimpunkan pandangan pelbagai pihak",
    text: "Menghimpunkan sarjana, pembuat dasar, agensi kerajaan, NGO, sektor swasta, media, komuniti dan generasi muda bagi merumuskan cadangan praktikal untuk memperkukuh pelaksanaan agenda pembinaan negara bangsa.",
    icon: UserGroupIcon,
  },
];

const enter = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({
  number,
  eyebrow,
  title,
  inverse = false,
}: {
  number: string;
  eyebrow: string;
  title: string;
  inverse?: boolean;
}) {
  return (
    <motion.div
      variants={enter}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      className="mb-8 flex items-end justify-between gap-4 sm:mb-10"
    >
      <div>
        <p className={`font-poppins text-sm font-bold uppercase tracking-[0.18em] ${inverse ? "text-yellow-300" : "text-red-700"}`}>
          {number} / {eyebrow}
        </p>
        <h2 className={`mt-2 font-poppins text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ${inverse ? "text-white" : "text-slate-950"}`}>
          {title}
        </h2>
      </div>
      <span className={`mb-1 hidden h-1 w-20 sm:block ${inverse ? "bg-yellow-300" : "bg-red-700"}`} />
    </motion.div>
  );
}

export default function MengenaiDialog() {
  return (
    <main className="overflow-hidden bg-white font-poppins text-slate-800">
      {/* 1.0 LATAR BELAKANG — tiada hero section */}
      <section className="mt-8 px-5 py-12 sm:mt-10 sm:px-8 sm:py-16 lg:px-12 lg:py-20" style={{ backgroundColor: "#f5f5f4" }}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading number="1.0" eyebrow="Konteks" title="Latar Belakang" />

          <motion.figure
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="group relative mb-8 overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src="/images/Picture1.png"
              alt="Persidangan Pembinaan Negara Bangsa"
              className="block aspect-[16/8] w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] sm:aspect-[16/6] lg:aspect-[16/5]"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,31,67,.92), rgba(10,31,67,.08) 70%, transparent)" }} />
            <figcaption className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 sm:p-8">
              <div>
                <p className="font-poppins text-xs font-bold uppercase tracking-[0.18em] text-yellow-300 sm:text-sm">Wacana Nasional · 2026</p>
                <h3 className="mt-2 font-poppins text-xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">Persidangan Pembinaan Negara Bangsa</h3>
                <p className="mt-2 font-poppins text-sm text-white/90 sm:text-base">30 November – 2 Disember 2026 · PICC, Putrajaya</p>
              </div>
              <SparklesIcon className="hidden h-10 w-10 shrink-0 text-yellow-300 sm:block" />
            </figcaption>
          </motion.figure>

          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-7">
            <motion.aside
              initial="hidden"
              whileInView="visible"
              variants={enter}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="mb-4 h-1.5 w-16 bg-red-700" />
              <p className="font-poppins text-sm font-bold uppercase tracking-[0.18em] text-red-700">Intipati</p>
              <p className="mt-4 font-poppins text-lg font-medium leading-8 text-slate-600 sm:text-xl sm:leading-9">
                Pembinaan negara bangsa ialah usaha berterusan untuk mengukuhkan identiti bersama, rasa kekitaan dan kepercayaan antara komuniti.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full px-3 py-2 font-poppins text-sm font-semibold text-blue-950" style={{ backgroundColor: "#fef3c7" }}>
                <span className="h-2 w-2 rounded-full bg-red-700" />
                Asas strategik Malaysia
              </div>
            </motion.aside>

            <div className="grid gap-4 sm:grid-cols-2">
              {backgroundPoints.map((point, index) => (
                <motion.article
                  key={point.number}
                  initial="hidden"
                  whileInView="visible"
                  variants={enter}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ y: -5 }}
                  className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-6 ${index === 4 ? "sm:col-span-2" : ""}`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-poppins text-2xl font-extrabold text-red-700 sm:text-3xl">{point.number}</span>
                    <span className="h-1 w-10 bg-yellow-400" />
                  </div>
                  <p className="font-poppins text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">{point.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2.0 OBJEKTIF PERSIDANGAN */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20" style={{ backgroundColor: "#172554" }}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading number="2.0" eyebrow="Hala Tuju" title="Objektif Persidangan" inverse />

          <div className="grid gap-5 md:grid-cols-2">
            {objectivePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.article
                  key={point.number}
                  initial="hidden"
                  whileInView="visible"
                  variants={enter}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/20 p-6 shadow-xl transition-colors duration-300 sm:p-8 lg:p-10"
                  style={{ backgroundColor: "#243b68" }}
                >
                  <div className="absolute left-0 top-0 h-1.5 w-full bg-yellow-300" />
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-poppins text-4xl font-extrabold text-yellow-300 sm:text-5xl">{point.number}</span>
                    <div className="rounded-xl border border-yellow-300/30 p-3" style={{ backgroundColor: "#304875" }}>
                      <Icon className="h-8 w-8 text-yellow-300 sm:h-9 sm:w-9" />
                    </div>
                  </div>
                  <h3 className="mt-6 font-poppins text-xl font-bold leading-snug text-white sm:text-2xl lg:text-3xl">{point.title}</h3>
                  <p className="mt-4 font-poppins text-base leading-8 text-white sm:text-lg">{point.text}</p>
                  <div className="mt-7 h-px w-full bg-white/20" />
                  <p className="mt-4 font-poppins text-xs font-bold uppercase tracking-[0.18em] text-yellow-300">Objektif persidangan</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4.0 PELAKSANAAN PERSIDANGAN */}
      <section className="bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading number="4.0" eyebrow="Maklumat" title="Pelaksanaan Persidangan" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={enter}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="grid overflow-hidden rounded-2xl border border-slate-200 shadow-lg md:grid-cols-[0.8fr_1.2fr]"
          >
            <div className="relative overflow-hidden p-6 text-white sm:p-8 lg:p-10" style={{ backgroundColor: "#b91c3b" }}>
              <div className="absolute -bottom-12 -right-12 h-44 w-44 rounded-full border-[1.5rem] border-white/10" />
              <CalendarDaysIcon className="relative h-10 w-10 text-yellow-300" />
              <p className="relative mt-6 font-poppins text-sm font-bold uppercase tracking-[0.18em] text-white/80">Tarikh</p>
              <p className="relative mt-2 font-poppins text-2xl font-extrabold sm:text-3xl">30 Nov – 2 Dis 2026</p>
              <p className="relative mt-2 font-poppins text-base text-white/90 sm:text-lg">Isnin – Rabu</p>
            </div>

            <div className="bg-white p-6 sm:p-8 lg:p-10">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-50 p-3">
                  <MapPinIcon className="h-7 w-7 text-red-700" />
                </div>
                <div>
                  <p className="font-poppins text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Tempat</p>
                  <p className="mt-2 font-poppins text-xl font-bold leading-snug text-blue-950 sm:text-2xl">
                    Pusat Konvensyen Antarabangsa Putrajaya (PICC), Putrajaya
                  </p>
                </div>
              </div>
              <div className="mt-7 rounded-xl p-4 sm:p-5" style={{ backgroundColor: "#f5f5f4" }}>
                <div className="flex items-start gap-3">
                  <LightBulbIcon className="mt-1 h-6 w-6 shrink-0 text-red-700" />
                  <p className="font-poppins text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                    Persidangan ini menyokong usaha merumuskan cadangan strategik untuk memperkukuh pembinaan negara bangsa di peringkat nasional, wilayah dan komuniti.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
