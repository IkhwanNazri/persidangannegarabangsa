"use client";

import Image from "next/image";
import { motion } from "motion/react";

const sponsors = [
  {
    name: "Kementerian Perpaduan Negara",
    image: "/images/logo.PNG",
  },
  {
    name: "Institut Kefahaman Islam Malaysia",
    image: "/images/rakan/ikim.png",
  },
  {
    name: "Majlis Belia Malaysia",
    image: "/images/rakan/mbm.png",
  },
  {
    name: "Institut Intergriti Malaysia",
    image: "/images/rakan/iim.png",
  },
  {
    name: "Majlis Perbandaran Kota Bharu",
    image: "/images/rakan/mpkb.png",
  },
  {
    name: "Majlis Bandaraya Shah Alam",
    image: "/images/rakan/mbsa.png",
  },
  {
    name: "Majlis Bandaraya Alor Setar",
    image: "/images/rakan/mbas.png",
  },
  {
    name: "Majlis Bandaraya Pulau Pinang",
    image: "/images/rakan/mbpp.png",
  },
  {
    name: "Majlis Bandaraya Melaka Bersejarah",
    image: "/images/rakan/mbmb.png",
  },
  {
    name: "Majlis Bandaraya Johor Bahru",
    image: "/images/rakan/mbjb.jpeg",
  },
  {
    name: "MRCB",
    image: "/images/rakan/mrcb.png",
  },
  {
    name: "Celcom Digi",
    image: "/images/rakan/celcom digi.png",
  },
  {
    name: "Perbadanan Putrajaya",
    image: "/images/rakan/putrajaya.png",
  },
  {
    name: "Kementerian Pengangkutan Malaysia",
    image: "/images/rakan/mot.png",
  },
  {
    name: "FINAS",
    image: "/images/rakan/finas.png",
  },
  {
    name: "Penerbit USM",
    image: "/images/rakan/USM Penerbit.png",
  },
  {
    name: "Penerbit UKM",
    image: "/images/rakan/UKM.png",
  },
  {
    name: "Universiti Sains Malaysia",
    image: "/images/rakan/USM.png",
  },
  {
    name: "Global Tourism Penang",
    image: "/images/rakan/Global tourism Penang.png",
  },
  {
    name: "Menara Kuala Lumpur",
    image: "/images/rakan/menara kuala lumpur.png",
  },
  {
    name: "Seni Jaya",
    image: "/images/rakan/SENI JAYA.png",
  },
  {
    name: "Parlimen Malaysia",
    image: "/images/rakan/logoparlimenmalaysia.png",
  },
  {
    name: "Mydin",
    image: "/images/rakan/mydin.png",
  },
  {
    name: "Alamanda",
    image: "/images/rakan/alamanda.jpg",
  },
  {
    name: "Suria KLCC",
    image: "/images/rakan/suria KLCC.png",
  },
  {
    name: "MAHB",
    image: "/images/rakan/MAHB.png",
  },
];

export default function RakanPenaja() {
  return (
    <section
      id="rakan-penaja"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
         

          <h2 className="mt-3 font-montserrat text-4xl font-bold uppercase tracking-[-1.5px] text-[#062F63] sm:text-5xl lg:text-6xl">
            Rakan <span className="text-[#E30620]"> Strategik</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl font-poppins text-lg leading-7 text-slate-800">
            Bersama menyokong usaha persidangan pembinaan negara bangsa.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-7 flex w-fit items-center gap-3">
            <span className="h-px w-14 bg-[#C8A23A]" />
            <span className="h-2.5 w-2.5 rotate-45 bg-[#C8A23A]" />
            <span className="h-px w-7 bg-[#C8A23A]" />
            <span className="h-2 w-2 rotate-45 bg-[#C8A23A]/60" />
            <span className="h-px w-14 bg-[#C8A23A]" />
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          SLIDER
      ===================================================== */}

      <div className="relative mt-14">
        {/* Fade kiri */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24  sm:w-40" />

        {/* Fade kanan */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24  sm:w-40" />

        {/* ROW 1 — KIRI */}
        <div className="overflow-hidden">
          <motion.div
            className="flex w-max items-center gap-5"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={`left-${sponsor.name}-${index}`}
                className="group flex min-h-[180px] w-[180px] shrink-0 flex-col items-center justify-center gap-3 px-6 transition-all duration-300 hover:bg-white hover:border-[#C8A23A]/60 hover:shadow-[0_12px_30px_rgba(6,47,99,.08)] sm:h-[135px] sm:w-[210px]"
              >
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  width={220}
                  height={140}
                  className="max-h-[80px] w-full  object-contain transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-[90px] sm:h-[170px]"
                />
                <h3 className="w-full whitespace-normal break-words text-center font-poppins text-sm font-semibold leading-4 text-[#062F63] sm:text-base">
          {sponsor.name}
        </h3>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2 — KANAN */}
        <div className="mt-5 overflow-hidden">
          <motion.div
            className="flex w-max items-center gap-5"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...sponsors.slice().reverse(), ...sponsors.slice().reverse()].map(
              (sponsor, index) => (
                <div
                  key={`right-${sponsor.name}-${index}`}
                  className="group flex min-h-[180px] w-[180px] flex-col gap-3  shrink-0 items-center justify-center px-6 transition-all duration-300 hover:border-[#C8A23A]/60 hover:bg-white sm:h-[135px] sm:w-[210px] hover:shadow-[0_12px_30px_rgba(6,47,99,.08)]"
                >
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    width={220}
                    height={140}
                    className="max-h-[80px] w-full max-w-[150px] object-contain  transition-all duration-500  sm:max-h-[90px] sm:max-w-[175px]"
                  />
                   <h3 className="w-full whitespace-normal break-words text-center font-poppins text-sm font-semibold leading-4 text-[#062F63] sm:text-base">
          {sponsor.name}
        </h3>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM LINE
      ===================================================== */}

      <div className="mx-auto mt-12 max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#062F63]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#E30620]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#FFD21C]" />
        </div>
      </div>
    </section>
  );
}
