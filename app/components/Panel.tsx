
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
    name: "YAB Dato' Seri Anwar Ibrahim",
    position: "Perdana Menteri Malaysia",
    organization: "",
    image: "/images/panel/anwar.png",
    tag: "RUMUSAN PERSIDANGAN",
  },

 ];


const sesi1: PanelPerson[] = [
  {
    name: "YAA Wan Ahmad Farid Wan Salleh",
    position: "Ketua Hakim Negara",
    organization: "",
    image: "/images/panel/hakimnegara.png",
    tag: "UCAPTAMA 1",
  },
  {
    name: "YBhg. Prof Emeritus Datuk Dr. Shad Saleem Faruqi",
    position:
      "Felo Penyelidik Utama Fakulti Undang-Undang Universiti Malaya",
    organization: "",
    image: "/images/panel/emeri",
    tag: "PEMBENTANG KERTAS 1",
  },
  {
    name: "Tuan Eddin Khoo",
    position:
      "Felo Kanan Institut Kajian Strategik dan Antarabangsa (ISIS) Malaysia",
    organization: "",
    image: "/images/panel/edin",
    tag: "PEMBENTANG KERTAS 2",
  },
  {
    name: "YBrs. Dr. Sheila Ramalingam",
    position:
      "Pensyarah Kanan Fakulti Undang-Undang Universiti Malaya",
    organization: "",
    image: "/images/panel/sheila.png",
    tag: "MODERATOR",
  },
];

const sesi2: PanelPerson[] = [
  {
    name: "YBhg. Prof. Dr. Juli a/l Edo",
    position:
      "Ahli Panel Majlis Kebudayaan Negara (MAKEN), Felo Penyelidik Utama Fakulti Undang-Undang Universiti Malaya",
    organization: "",
    image: "/images/panel/juli.",
    tag: "PEMBENTANG KERTAS 3",
  },
  {
    name: "YBhg. Prof Emeritus Dato’ Dr. Abdul Rahman Embong",
    position:
      "Mantan Felo Utama Institut Kajian Malaysia dan Antarabangsa (IKMAS), Universiti Kebangsaan Malaysia",
    organization: "",
    image: "/images/panel/emerti.",
    tag: "PEMBENTANG KERTAS 4",
  },
  {
    name: "YBrs. Dr. Gregory Anak Kiyai@Keai",
    position: "Pensyarah Kanan Fakulti Seni Kreatif Universiti Malaya",
    organization: "",
    image: "/images/panel/gregory.png",
    tag: "MODERATOR",
  },
];

const sesi3: PanelPerson[] = [
  {
    name: "YBhg. Prof Ulung Datuk Dr. Shamsul Amri Baharuddin",
    position:
      "Profesor Ulung Institut Kajian Etnik (KITA), Universiti Kebangsaan Malaysia",
    organization: "",
    image: "/images/panel/ulung.",
    tag: "UCAPTAMA 3",
  },
  {
    name: "YBhg. Tan Sri Lee Lam Thye",
    position: "Pengerusi Pertubuhan Ikatan Komuniti Selama",
    organization: "",
    image: "/images/panel/lee.png",
    tag: "PEMBENTANG KERTAS 5",
  },
  {
    name: "YBhg. Prof Emeritus Datuk Azizan Baharudin",
    position: "Pusat Dialog Peradaban (UMCCD), Universiti Malaya",
    organization: "",
    image: "/images/panel/azizah.png",
    tag: "PEMBENTANG KERTAS 6",
  },
  {
    name: "YBrs. Dr. Teo Lee Ken",
    position:
      "Pegawai Penyelidik KSI Strategic Institute for Asia Pacific",
    organization: "",
    image: "/images/panel/teo.png",
    tag: "MODERATOR",
  },
];

const sesi4: PanelPerson[] = [
  {
    name: "YBhg. Prof. Dr. Mohd. Tajuddin bin Mohd Rasdi",
    position: "Ahli Majlis Penasihat Perpaduan Negara",
    organization: "",
    image: "/images/panel/tajuddin.png",
    tag: "PEMBENTANG KERTAS 7",
  },
 
  {
  name: "Dato' Mustapha Mohamed",
  position: "",
  organization: "",
  image: "/images/panel/mustapa.",
  tag: "PEMBENTANG KERTAS 8",
},
 {
    name: "Tuan Luqman Hariz",
    position: "Personaliti TV Astro AWANI",
    organization: "",
    image: "/images/panel/luqman.png",
    tag: "MODERATOR",
  },
];

const sesi5: PanelPerson[] = [
  {
    name: "YBrs. Prof. Madya Dr. Chang Peng Kee",
    position:
      "Felo Kanan Bersekutu Institut Kajian Etnik (KITA), Universiti Kebangsaan Malaysia",
    organization: "",
    image: "/images/panel/change.png",
    tag: "UCAPTAMA 5",
  },
  {
    name: "YBhg. Prof. Emeritus Tan Sri Dato’ Dzulkifli bin Abdul Raza",
    position:
      "Fellow Institut Kajian Malaysia dan Antarabangsa (IKMAS), Universiti Kebangsaan Malaysia",
    organization: "",
    image: "/images/panel/zul.",
    tag: "PEMBENTANG KERTAS 5",
  },
  {
    name: "YBrs. Dr. Muhammad bin Abdul Khalid",
    position:
      "Fellow Institut Kajian Malaysia dan Antarabangsa (IKMAS), Universiti Kebangsaan Malaysia",
    organization: "",
    image: "/images/panel/kalidd.",
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
  const [selectedDay, setSelectedDay] = useState<1 | 2 | 3>(1);

  const days = [
    { id: 1 as const, label: "", date: "30 NOVEMBER", day: "" },
    { id: 2 as const, label: "", date: "1 DISEMBER", day: "" },
    { id: 3 as const, label: "", date: "2 DISEMBER", day: "" },
  ];

  return (
    <section
      id="panel"
      className="relative overflow-hidden bg-white py-12 sm:py-24 lg:py-28"
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
          <h2 className="font-montserrat text-[40px] font-bold uppercase leading-tight tracking-[-2px] text-[#062F63] sm:text-[60px] md:text-[72px] lg:text-[82px]">
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

        


{/* PILIHAN HARI */}
<div className="mx-auto mt-10 grid w-full max-w-3xl grid-cols-3 items-center rounded-full  border border-[#F0D47A] bg-white p-2 shadow-xl sm:mt-12 sm:p-3">
  {days.map((day) => {
    const active = selectedDay === day.id;

    return (
      <button
        key={day.id}
        type="button"
        onClick={() => setSelectedDay(day.id)}
        aria-pressed={active}
        className={`   shadow-xs relative flex min-w-0 items-center justify-center gap-1 overflow-hidden rounded-full px-1.5 py-3 transition-all duration-300 sm:gap-2 sm:px-3 sm:py-4 ${
          active
            ? "z-10 bg-gradient-to-b from-[#F9E7A1] to-[#D6A936] text-black shadow-[0_3px_10px_rgba(48,21,104,0.25)]"
            : "bg-transparent text-black hover:bg-[#F8F5FC]"
        }`}
      >
        <span
          className={`block min-w-0 font-montserrat text-[8px] font-bold leading-tight sm:text-sm ${
            active ? "text-black" : "whitespace-nowrap"
          }`}
        >
          {day.date}
        </span>

        <span
          className={`font-poppins text-[8px] leading-tight sm:text-[11px] ${
            active
              ? "mt-1 block"
              : "shrink-0 border-l border-[#E7E1F0] pl-1.5 text-[#77718A] sm:pl-2"
          }`}
        >
          {day.day}
        </span>
      </button>
    );
  })}
</div>




        {/* KANDUNGAN MENGIKUT HARI */}
        <motion.div
          key={selectedDay}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          {selectedDay === 1 && (
            <>
              <PanelSection
                title="Ucaptama Diraja dan Majlis Perasmian"
                panels={[ucapUtama[0]]}
                columns={2}
              />
              <PanelSection title="Sesi 1" panels={sesi1} columns={4} />
            </>
          )}

          {selectedDay === 2 && (
            <>
              <PanelSection
                title="Ucaptama 2"
                panels={[ucapUtama[1]]}
                columns={2}
              />
              <PanelSection title="Sesi 2" panels={sesi2} columns={3} />
              <PanelSection title="Sesi 3" panels={sesi3} columns={4} />
            </>
          )}

          {selectedDay === 3 && (
            <>
              <PanelSection
                title="Ucaptama 4"
                panels={[ucapUtama[2]]}
                columns={2}
              />
              <PanelSection title="Sesi 4" panels={sesi4} columns={3} />
              <PanelSection title="Sesi 5" panels={sesi5} columns={3} />
              <PanelSection
                title="Rumusan Persidangan dan Majlis Penutupan"
                panels={[ucapUtama[3]]}
                columns={2}
              />
            </>
          )}
        </motion.div>

        {/* LIHAT SEMUA PEMBENTANG */}
        <div className="mt-10 flex justify-center">
          <a
            href="/#"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border-2 border-[#062F63] px-8 py-4 font-poppins text-sm font-semibold text-[#062F63] transition-all duration-500 after:absolute after:bottom-0 after:left-5 after:z-0 after:h-1 after:w-1 after:translate-y-full after:rounded-md after:bg-[#062F63] after:transition-all after:duration-700 hover:after:scale-[300] hover:text-white"
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
    <section className="mt-10 sm:mt-14">
      <div className="mb-5 text-center sm:mb-7">
         <div className="mx-auto mt-3 flex max-w-[800px] items-center gap-2">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="h-2.5 w-2.5 rotate-45 border border-[#D4AF37] bg-white" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
        <h3 className="font-montserrat text-lg mt-3 font-extrabold uppercase tracking-wide text-black sm:text-2xl">
          {title}
        </h3>
        <div className="mx-auto mt-3 flex max-w-[800px] items-center gap-2">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="h-2.5 w-2.5 rotate-45 border border-[#D4AF37] bg-white" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>
      </div>

      <div
        className={`mx-auto grid w-full ${containerWidth} grid-cols-2 gap-3 ${gridColumns[columns]} sm:gap-5 lg:gap-6`}
      >
        {panels.map((panel, index) => (
          <motion.article
            key={panel.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: (index % columns) * 0.07 }}
           className={`group relative isolate flex min-w-0 flex-col overflow-hidden rounded-[18px] border border-[#D9DDF0] bg-white shadow-[0_7px_22px_rgba(36,16,93,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(36,16,93,0.18)] sm:rounded-[24px] ${
  panel.name === "Sultan Nazrin Muizzuddin Shah"||
    panel.name === "Tunku Azizah Aminah Maimunah Iskandariah binti Almarhum Sultan Iskandar Al-Haj" ||
    panel.name === "Tun Pehin Sri Dr. Haji Wan Junaidi" ||
    panel.name === "YAB Dato' Seri Anwar Ibrahim"
    ? "col-span-2 mx-auto w-1/2"
    : ""
}`}
          >
            <div className="relative aspect-[4/5.5] w-full overflow-hidden rounded-b bg-gradient-to-br from-[#E9EEFA] via-[#F8F9FD] to-[#DCE5F7]">
              <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-[#1F3B91]/15 via-transparent to-transparent" />
              <Image
                src={panel.image}
                alt={panel.name}              
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* Lengkungan emas */}
              {/* <div className="pointer-events-none absolute -left-8 top-[28%] z-[2] h-24 w-[130%] -rotate-[36deg] rounded-[50%] border-b-[5px] border-[#E6B943] sm:h-32 sm:border-b-[7px]" /> */}

              {/* Label gelaran */}
              <div className="absolute bottom-8  flex  sm: sm:bottom-8 ">
                <span className="max-w-full  border border-[#F8E4A0] bg-gradient-to-r from-[#F8E8B0] via-[#EBCB6B] to-[#F8E8B0] px-2.5 py-1.5 text-center font-poppins text-[9px] font-bold leading-tight text-black shadow-md sm:px-4 sm:text-sm">
                  {panel.tag}
                </span>
              </div>
            </div>

            <div className="relative flex flex-1 flex-col px-2.5 pb-3 pt-3 text-center sm:px-4 sm:pb-5 sm:pt-4">
              <h4 className="break-words font-montserrat text-[11px] font-bold leading-snug text-black sm:text-base">
                {panel.name}
              </h4>

              {panel.position && (
                <p className="mt-2 break-words font-poppins  rounded-2xl text-[9px] leading-relaxed text-black sm:text-sm sm:leading-6">
                  {panel.position}
                </p>
              )}

              {panel.organization && (
                <p className="mt-1 break-words font-poppins text-[9px] font-semibold leading-relaxed text-slate-800 sm:text-xs">
                  {panel.organization}
                </p>
              )}

              <div className="mx-auto mt-3 h-0.5 w-9 rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
