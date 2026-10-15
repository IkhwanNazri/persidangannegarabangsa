
"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";

type PanelPerson = {
  name: string;
  position: string;
  organization: string;
  image: string;
  tag: string;
};

const ucapUtama: PanelPerson[] = [
  {
    name: "Sultan Nazrin Muizzuddin Shah",
    position: "DYMM Paduka Seri Sultan Perak Darul Ridzuan",
    organization: "Ucaptama Diraja Dan Titah Perasmian",
    image: "/images/panel/sultan.png",
    tag: "UCAPTAMA DIRAJA",
  },
  {
    name: "Tunku Azizah Aminah Maimunah Iskandariah binti Almarhum Sultan Iskandar Al-Haj",
    position: "Kebawah Duli Paduka Baginda Tengku Ampuan Pahang",
    organization: "",
    image: "/images/panel/tunku.png",
    tag: "UCAPTAMA 2",
  },
  {
    name: "Tun Pehin Sri Dr. Haji Wan Junaidi",
    position: "Yang di-Pertua Negeri Sarawak",
    organization: "",
    image: "/images/panel/sarawak.png",
    tag: "UCAPTAMA 4",
  },
    {
    name: "YAB Datuk Seri Anwar Ibrahim",
    position: "Perdana Menteri Malaysia",
    organization: "",
    image: "/images/panel/anwar.png",
    tag: "RUMUSAN PERSIDANGAN",
  },
  {
    name: "YBhg. Tan Sri Dato' Sri Nazir Razak",
    position: "Pengerusi Yayasan Tun Razak",
    organization: "",
    image: "/images/panel/nazir.png",
    tag: "PEMBENTANG KERTAS 8",
  },
 ];


const sesi1: PanelPerson[] = [
  {
    name: "YAA Wan Ahmad Farid Wan Salleh",
    position: "Ketua Hakim Negara",
    organization: "",
    image: "/images/panel/hakim.png",
    tag: "UCAPTAMA 1",
  },
  {
    name: "YBhg. Prof Emeritus Datuk Dr. Shad Saleem Faruqi",
    position:
      "Felo Penyelidik Utama Fakulti Undang-Undang Universiti Malaya",
    organization: "",
    image: "/images/panel/hakim.png",
    tag: "PEMBENTANG KERTAS 1",
  },
  {
    name: "Tuan Eddin Khoo",
    position:
      "Felo Kanan Institut Kajian Strategik dan Antarabangsa (ISIS) Malaysia",
    organization: "",
    image: "/images/panel/hakim.png",
    tag: "PEMBENTANG KERTAS 2",
  },
  {
    name: "YBrs. Dr. Sheila Ramalingam",
    position:
      "Pensyarah Kanan Fakulti Undang-Undang Universiti Malaya",
    organization: "",
    image: "/images/panel/hakim.png",
    tag: "MODERATOR",
  },
];

const sesi2: PanelPerson[] = [
  {
    name: "YBhg. Prof. Dr. Juli a/l Edo",
    position:
      "Ahli Panel Majlis Kebudayaan Negara (MAKEN), Felo Penyelidik Utama Fakulti Undang-Undang Universiti Malaya",
    organization: "",
    image: "/images/panel/hakim.png",
    tag: "PEMBENTANG KERTAS 3",
  },
  {
    name: "YBhg. Prof Emeritus Dato’ Dr. Abdul Rahman Embong",
    position:
      "Mantan Felo Utama Institut Kajian Malaysia dan Antarabangsa (IKMAS), Universiti Kebangsaan Malaysia",
    organization: "",
    image: "/images/panel/hakim.png",
    tag: "PEMBENTANG KERTAS 4",
  },
  {
    name: "YBrs. Dr. Gregory Anak Kiyai@Keai",
    position: "Pensyarah Kanan Fakulti Seni Kreatif Universiti Malaya",
    organization: "",
    image: "/images/panel/hakim.png",
    tag: "MODERATOR",
  },
];

const sesi3: PanelPerson[] = [
  {
    name: "YBhg. Prof Ulung Datuk Dr. Shamsul Amri Baharuddin",
    position:
      "Profesor Ulung Institut Kajian Etnik (KITA), Universiti Kebangsaan Malaysia",
    organization: "",
    image: "/images/panel/hakim.png",
    tag: "UCAPTAMA 3",
  },
  {
    name: "YBhg. Tan Sri Lee Lam Thye",
    position: "Pengerusi Pertubuhan Ikatan Komuniti Selama",
    organization: "",
    image: "/images/panel/hakim.png",
    tag: "PEMBENTANG KERTAS 5",
  },
  {
    name: "YBhg. Prof Emeritus Datuk Azizan Baharudin",
    position: "Pusat Dialog Peradaban (UMCCD), Universiti Malaya",
    organization: "",
    image: "/images/panel/hakim.png",
    tag: "PEMBENTANG KERTAS 6",
  },
  {
    name: "YBrs. Dr. Teo Lee Ken",
    position:
      "Pegawai Penyelidik KSI Strategic Institute for Asia Pacific",
    organization: "",
    image: "/images/panel/hakim.png",
    tag: "MODERATOR",
  },
];

const sesi4: PanelPerson[] = [
  {
    name: "YBhg. Prof. Dr. Mohd. Tajuddin bin Mohd Rasdi",
    position: "Ahli Majlis Penasihat Perpaduan Negara",
    organization: "",
    image: "/images/panel/hakim.png",
    tag: "PEMBENTANG KERTAS 7",
  },
  {
    name: "Tuan Luqman Hariz",
    position: "Personaliti TV Astro AWANI",
    organization: "",
    image: "/images/panel/hakim.png",
    tag: "MODERATOR",
  },
];

const sesi5: PanelPerson[] = [
  {
    name: "YBrs. Prof. Madya Dr. Chang Peng Kee",
    position:
      "Felo Kanan Bersekutu Institut Kajian Etnik (KITA), Universiti Kebangsaan Malaysia",
    organization: "",
    image: "/images/panel/hakim.png",
    tag: "UCAPTAMA 5",
  },
  {
    name: "YBhg. Prof. Emeritus Tan Sri Dato’ Dzulkifli bin Abdul Raza",
    position:
      "Fellow Institut Kajian Malaysia dan Antarabangsa (IKMAS), Universiti Kebangsaan Malaysia",
    organization: "",
    image: "/images/panel/hakim.png",
    tag: "PEMBENTANG KERTAS 5",
  },
  {
    name: "YBrs. Dr. Muhammad bin Abdul Khalid",
    position:
      "Fellow Institut Kajian Malaysia dan Antarabangsa (IKMAS), Universiti Kebangsaan Malaysia",
    organization: "",
    image: "/images/panel/hakim.png",
    tag: "MODERATOR",
  },
];

const dots = [
  { left: "4%", top: "15%", size: 5, color: "#062F63", duration: 7 },
  { left: "9%", top: "38%", size: 3, color: "#D4AF37", duration: 9 },
  { left: "15%", top: "78%", size: 4, color: "#062F63", duration: 8 },
  { left: "23%", top: "24%", size: 3, color: "#E30620", duration: 10 },
  { left: "29%", top: "88%", size: 5, color: "#D4AF37", duration: 8 },
  { left: "38%", top: "12%", size: 3, color: "#062F63", duration: 9 },
  { left: "45%", top: "82%", size: 4, color: "#E30620", duration: 7 },
  { left: "54%", top: "20%", size: 5, color: "#D4AF37", duration: 10 },
  { left: "61%", top: "90%", size: 3, color: "#062F63", duration: 8 },
  { left: "69%", top: "32%", size: 4, color: "#E30620", duration: 9 },
  { left: "76%", top: "75%", size: 5, color: "#D4AF37", duration: 7 },
  { left: "84%", top: "14%", size: 3, color: "#062F63", duration: 10 },
  { left: "91%", top: "46%", size: 4, color: "#E30620", duration: 8 },
  { left: "96%", top: "82%", size: 3, color: "#D4AF37", duration: 9 },
];

export default function Panel() {
  const [showSessions, setShowSessions] = useState(false);

  return (
    <section
      id="panel"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* BACKGROUND DOTS */}
      <div className="pointer-events-none absolute inset-0">
        {dots.map((dot, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full"
            style={{
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
              backgroundColor: dot.color,
            }}
            animate={{
              x: [0, 18, -10, 0],
              y: [0, -20, 12, 0],
              opacity: [0.15, 0.55, 0.25, 0.15],
              scale: [1, 1.4, 0.8, 1],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.25,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="font-montserrat text-[46px] font-bold uppercase leading-none tracking-[-2px] text-[#062F63] sm:text-[60px] md:text-[72px] lg:text-[82px]">
            AHLI PANEL
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] font-poppins text-sm leading-7 text-[#062F63]/80 sm:text-base">
            Perspektif pelbagai. Perbincangan bermakna untuk pembinaan negara
            bangsa.
          </p>

          <div className="mx-auto mt-8 flex w-fit items-center gap-3">
            <span className="h-px w-20 bg-[#D4AF37] sm:w-24" />
            <span className="relative flex h-5 w-5 items-center justify-center">
              <span className="absolute h-3 w-3 rotate-45 bg-[#D4AF37]" />
              <span className="absolute h-1.5 w-1.5 rounded-full bg-white" />
            </span>
            <span className="h-px w-20 bg-[#D4AF37] sm:w-24" />
          </div>
        </motion.div>

        {/* PAPARAN UTAMA: SEMUA TITAH DIRAJA DAN PEMBENTANGAN KHAS */}
        <PanelSection
          title="Titah Diraja, Sesi Ucaptama dan Pembentangan Khas"
          panels={ucapUtama}
          columns={3}
        />

        {/* DROPDOWN: RUMUSAN DAN SEMUA SESI */}
        <div className="mt-8 flex flex-col items-center">
          <button
            type="button"
            onClick={() => setShowSessions((current) => !current)}
            aria-expanded={showSessions}
            className="group inline-flex items-center gap-3 rounded-md border-2 border-[#062F63] px-6 py-3 font-poppins text-sm font-semibold text-[#062F63] transition-colors duration-300 hover:bg-[#062F63] hover:text-white"
          >
            {showSessions ? "Tutup Senarai Sesi" : "Lihat Lebih"}
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${showSessions ? "rotate-180" : ""}`}
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {showSessions && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            
            <PanelSection title="Sesi 1" panels={sesi1} columns={4} />
            <PanelSection title="Sesi 2" panels={sesi2} columns={3} />
            <PanelSection title="Sesi 3" panels={sesi3} columns={4} />
          </motion.div>
        )}

        {/* LIHAT SEMUA PEMBENTANG */}
        <div className="mt-10 flex justify-center">
          <a
            href="/Panel"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border-2 border-purple-900 px-8 py-4 font-poppins text-sm font-semibold text-purple-950 transition-all duration-500 after:absolute after:bottom-0 after:left-5 after:z-0 after:h-1 after:w-1 after:translate-y-full after:rounded-md after:bg-[#062F63] after:transition-all after:duration-700 hover:after:scale-[300] hover:text-white"
          >
            <span className="relative z-10">Lihat Semua Pembentang</span>
            <ArrowUpRightIcon className="relative z-10 ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* BOTTOM DECORATION */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-14 flex max-w-[500px] items-center justify-center gap-3"
        >
          <span className="h-px flex-1 bg-[#062F63]/10" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#062F63]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#E30620]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#FFD21C]" />
          <span className="h-px flex-1 bg-[#062F63]/10" />
        </motion.div>
      </div>
    </section>
  );
}

function PanelSection({
  title,
  panels,
  columns,
}: {
  title: string;
  panels: PanelPerson[];
  columns: 2 | 3 | 4;
}) {
  const gridColumns = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  const containerWidth =
    columns === 2 ? "max-w-[900px]" : "max-w-full";

  return (
    <section className="mt-12 sm:mt-16">
      <h3 className="bg-amber-500 p-3 text-center font-montserrat text-xl font-bold text-slate-900 sm:text-3xl">
        {title}
      </h3>

      <hr className="mt-6 border-2 border-slate-200" />

      <div
        className={`mx-auto mt-8 grid w-full ${containerWidth} grid-cols-1 gap-6 ${gridColumns[columns]} lg:mt-10`}
      >
        {panels.map((panel, index) => (
          <motion.article
            key={panel.name}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: (index % columns) * 0.08 }}
            className="group relative overflow-hidden border border-slate-200 bg-white shadow-[0_10px_35px_rgba(6,47,99,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(6,47,99,.12)]"
          >
            {/* IMAGE — KEKALKAN DESIGN ASAL */}
            <div className="relative aspect-[4/5.5] overflow-hidden bg-slate-100">
              <Image
                src={panel.image}
                alt={panel.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />

              {/* GOLD TAG */}
              <div className="absolute right-0 top-4 bg-[#D4AF37] px-4 py-2 sm:px-5">
                <span className="font-poppins text-[9px] font-bold uppercase tracking-[.18em] text-[#062F63]">
                  {panel.tag}
                </span>
              </div>
            </div>

            {/* CONTENT — KEKALKAN DESIGN ASAL */}
            <div className="p-5 sm:p-6">
              <h4 className="break-words font-serif text-xl font-bold leading-snug text-[#062F63] sm:text-[21px]">
                {panel.name}
              </h4>

              <p className="mt-3 break-words font-poppins text-sm leading-6 text-[#062F63]/75">
                {panel.position}
              </p>

              {panel.organization && (
                <p className="mt-1 break-words font-poppins text-sm font-semibold leading-6 text-[#062F63]/60">
                  {panel.organization}
                </p>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
