"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Flag,
  Users,
  Lightbulb,
  ShieldCheck,
  Landmark,
} from "lucide-react";
import TopNavbar from "../components/TopNavbar";

const objectives = [
  {
    number: "01",
    title: "Platform Wacana Nasional",
    description:
      "Menyediakan platform untuk membincangkan hala tuju pembentukan negara bangsa selaras dengan matlamat Rancangan Malaysia Ketiga Belas (RMK13).",
    icon: Flag,
  },
  {
    number: "02",
    title: "Menghimpunkan Pemegang Taruh",
    description:
      "Menghimpunkan sarjana, pembuat dasar, agensi kerajaan, NGO, sektor swasta, media, komuniti dan generasi muda bagi merumuskan cadangan praktikal.",
    icon: Users,
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Identiti Kebangsaan",
    description:
      "Memperkukuh patriotisme, identiti nasional dan rasa kepunyaan bersama dalam kalangan rakyat.",
    icon: Flag,
  },
  {
    number: "02",
    title: "Perpaduan Nasional",
    description:
      "Memupuk kepercayaan antara komuniti dalam masyarakat Malaysia yang majmuk.",
    icon: Users,
  },
  {
    number: "03",
    title: "Hala Tuju Strategik",
    description:
      "Membincangkan cabaran serta pendekatan pelaksanaan agenda pembinaan negara bangsa.",
    icon: Lightbulb,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function MengenaiPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-poppins text-slate-800">
      <TopNavbar />

      <section className="relative isolate flex min-h-[36rem] items-center overflow-hidden bg-blue-950 text-white sm:min-h-[40rem] lg:min-h-[42rem]">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/desktop.svg"
            alt="Visual Persidangan Pembinaan Negara Bangsa"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/50" />
        <div className="absolute inset-x-0 top-0 h-2 bg-yellow-400" />
        <div className="absolute bottom-0 right-0 top-0 hidden w-1/4 bg-red-700/80 [clip-path:polygon(45%_0,100%_0,100%_100%,0_100%)] md:block" />
        <div className="absolute bottom-0 right-0 top-0 hidden w-24 bg-yellow-400 [clip-path:polygon(100%_0,100%_100%,0_100%)] md:block lg:w-32" />

        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-3 border-l-4 border-yellow-400 pl-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100 sm:text-sm">
                Wacana Nasional · 2026
              </span>
            </div>
            <h1 className="max-w-3xl text-4xl font-extrabold uppercase leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Persidangan
              <span className="mt-1 block text-red-400">Pembinaan</span>
              <span className="block text-yellow-400">Negara Bangsa</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-blue-50 sm:text-lg sm:leading-8">
              Medan wacana nasional bagi memperkukuh identiti kebangsaan,
              perpaduan dan hala tuju pembinaan negara bangsa Malaysia.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/borang"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-yellow-400 px-6 py-3 text-sm font-bold text-blue-950 transition hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:ring-offset-2 focus:ring-offset-blue-950"
              >
                Daftar Minat <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#latar-belakang"
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Ketahui Persidangan <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-12 grid overflow-hidden border-t-4 border-yellow-400 bg-white text-blue-950 shadow-2xl sm:grid-cols-2 lg:mt-16"
          >
            <div className="flex items-start gap-4 border-b border-slate-200 p-5 sm:border-b-0 sm:border-r sm:p-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-red-50 text-red-700">
                <CalendarDays className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Tarikh</p>
                <p className="mt-2 text-base font-bold sm:text-lg">30 November – 2 Disember 2026</p>
                <p className="mt-1 text-sm text-slate-500">Isnin – Rabu</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 sm:p-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-yellow-50 text-red-700">
                <MapPin className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Lokasi</p>
                <p className="mt-2 text-base font-bold sm:text-lg">PICC, Putrajaya</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">Pusat Konvensyen Antarabangsa Putrajaya</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="latar-belakang" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="lg:border-r lg:border-slate-200 lg:pr-10"
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-700">01 / Pengenalan</p>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
              Latar Belakang
            </h2>
            <div className="mt-5 h-1 w-16 bg-yellow-400" />
            <p className="mt-6 text-base leading-7 text-slate-600">
              Pembinaan negara bangsa merupakan agenda strategik negara untuk
              memastikan Malaysia kekal aman, stabil, berdaulat dan dihormati.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="space-y-5 text-base leading-7 text-slate-600"
          >
            <p>
              Dalam konteks masyarakat pelbagai kaum, agama, budaya, bahasa,
              wilayah dan latar sosioekonomi, pembinaan negara bangsa ialah
              proses berterusan untuk membina identiti kebangsaan, rasa
              kepunyaan bersama, kepercayaan antara komuniti dan kesetiaan
              kepada asas kenegaraan negara.
            </p>
            <div className="border-l-4 border-red-700 bg-slate-50 p-5 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-blue-950 text-yellow-400">
                  <Landmark className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-red-700">Rancangan Malaysia Ketiga Belas · RMK13</p>
                  <h3 className="mt-2 text-lg font-bold leading-7 text-blue-950">Agenda Pembentukan Negara Bangsa</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Di bawah Tonggak D: Mempertingkatkan Kesejahteraan Rakyat
                    dan Kelestarian Alam Sekitar.
                  </p>
                </div>
              </div>
            </div>
            <p>
              RMK13 menekankan pembentukan sistem sosial berteraskan insan
              MADANI, pengukuhan integrasi dan perpaduan nasional, patriotisme
              dan identiti nasional, diplomasi berkesan serta imej Malaysia di
              arena antarabangsa.
            </p>
            <p>
              Perpaduan yang berpaksikan Perlembagaan Persekutuan dan Rukun
              Negara turut menjadi asas kepada pembinaan identiti nasional yang
              kukuh. Persidangan ini menjadi medan wacana nasional untuk
              merumuskan cadangan strategik di peringkat nasional, wilayah dan
              komuniti.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-blue-950 py-16 text-white sm:py-20 lg:py-24">
        <div className="absolute inset-x-0 top-0 h-2 bg-red-700" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[2rem] border-white/5 sm:h-96 sm:w-96" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-400">02 / Matlamat</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold uppercase leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Objektif Persidangan
            </h2>
            <div className="mt-5 h-1 w-16 bg-red-600" />
            <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100">
              Menghimpunkan pelbagai perspektif bagi membina hala tuju negara bangsa yang lebih kukuh.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
            {objectives.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="group relative border-t-4 border-yellow-400 bg-white p-6 text-blue-950 transition hover:-translate-y-1 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-5xl font-extrabold tracking-tight text-red-700 sm:text-6xl">{item.number}</span>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-blue-50 text-blue-950">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold leading-7">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
                  <div className="mt-6 flex justify-end text-red-700 transition group-hover:translate-x-1">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-700">03 / Hala Tuju</p>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-blue-950 sm:text-4xl lg:text-5xl">
              Fokus Perbincangan
            </h2>
            <div className="mt-5 h-1 w-16 bg-yellow-400" />
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group border border-slate-200 border-t-4 border-t-red-700 bg-white p-6 transition hover:border-t-yellow-400 hover:shadow-lg sm:p-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex h-12 w-12 items-center justify-center bg-blue-950 text-yellow-400 transition group-hover:bg-red-700">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-sm font-extrabold tracking-widest text-red-700">{item.number}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold leading-7 text-blue-950">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
                  <div className="mt-6 h-1 w-10 bg-yellow-400 transition-all group-hover:w-16" />
                </motion.article>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col gap-5 border-l-4 border-yellow-400 bg-blue-950 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-1 h-7 w-7 shrink-0 text-yellow-400" />
              <div>
                <h3 className="text-lg font-bold sm:text-xl">Bersama memperkukuh negara bangsa</h3>
                <p className="mt-2 text-sm leading-6 text-blue-100 sm:text-base">
                  Perpaduan berteraskan Perlembagaan Persekutuan dan Rukun Negara.
                </p>
              </div>
            </div>
            <Link
              href="/borang"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-yellow-400 px-6 py-3 text-sm font-bold text-blue-950 transition hover:bg-yellow-300"
            >
              Daftar Minat <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden border-t-4 border-yellow-400 bg-blue-950 text-white">
        <div className="absolute inset-y-0 right-0 hidden w-24 bg-red-700 [clip-path:polygon(45%_0,100%_0,100%_100%,0_100%)] sm:block lg:w-32" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide sm:text-base">Persidangan Pembinaan Negara Bangsa</p>
            <p className="mt-2 text-sm leading-6 text-blue-100">30 November – 2 Disember 2026 · PICC, Putrajaya</p>
          </div>
          <Link href="/" className="inline-flex w-fit items-center gap-2 text-sm font-semibold transition hover:text-yellow-400">
            Laman Utama <ArrowRight className="h-4 w-4 text-yellow-400" />
          </Link>
        </div>
      </footer>
    </main>
  );
}
