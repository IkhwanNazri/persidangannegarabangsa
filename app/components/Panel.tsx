"use client";

import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";

const panels = [
  {
    name: "YB Datuk Aaron Ago Dagang",
    position: "Menteri Perpaduan Negara",
    organization: "Ministry of National Unity",
    image: "/images/panel/panel-01.jpg",
    tag: "UCAPTAMA",
  },
  {
    name: "Tan Sri Nazir Razak",
    position: "Pengerusi",
    organization: "Yayasan Tun Razak",
    image: "/images/panel/panel-02.jpg",
    tag: "AHLI PANEL",
  },
  {
    name: "H.E. Ruzina Hasan",
    position: "Pemangku Timbalan Pesuruhjaya Tinggi British ke Malaysia",
    organization: "British High Commission Kuala Lumpur",
    image: "/images/panel/panel-03.jpg",
    tag: "AHLI PANEL",
  },
  {
    name: "YB Syahredzan Johan",
    position: "Ahli Parlimen Bangi",
    organization: "Parliament of Malaysia",
    image: "/images/panel/panel-04.jpg",
    tag: "AHLI PANEL",
  },
];

/* ============================================================
   BACKGROUND DOTS
============================================================ */

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
  return (
    <section
      id="panel"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          MOVING DOT BACKGROUND
      ===================================================== */}

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

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* =====================================================
            HEADER
        ===================================================== */}

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

          {/* Gold Divider */}
          <div className="mx-auto mt-8 flex w-fit items-center gap-3">
            <span className="h-px w-20 bg-[#D4AF37] sm:w-24" />

            <span className="relative flex h-5 w-5 items-center justify-center">
              <span className="absolute h-3 w-3 rotate-45 bg-[#D4AF37]" />
              <span className="absolute h-1.5 w-1.5 rounded-full bg-white" />
            </span>

            <span className="h-px w-20 bg-[#D4AF37] sm:w-24" />
          </div>
        </motion.div>

        {/* =====================================================
            PANEL GRID
        ===================================================== */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {panels.map((panel, index) => (
            <motion.article
              key={panel.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden border border-slate-200 bg-white shadow-[0_10px_35px_rgba(6,47,99,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(6,47,99,.12)]"
            >
              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="relative aspect-[4/4.7] overflow-hidden bg-slate-100">
                <Image
                  src={panel.image}
                  alt={panel.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />

                {/* Gold tag */}
                <div className="absolute right-0 top-4 bg-[#D4AF37] px-4 py-2 sm:px-5">
                  <span className="font-poppins text-[9px] font-bold uppercase tracking-[.18em] text-[#062F63]">
                    {panel.tag}
                  </span>
                </div>
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="p-5 sm:p-6">
                <h3 className="font-serif text-xl font-bold leading-snug text-[#062F63] sm:text-[21px]">
                  {panel.name}
                </h3>

                <p className="mt-3 font-poppins text-sm leading-6 text-[#062F63]/75">
                  {panel.position}
                </p>

                <p className="font-poppins text-sm leading-6 text-[#062F63]/60">
                  {panel.organization}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            LIHAT SEMUA PEMBENTANG
        ===================================================== */}

        
<div className="mt-5 flex justify-center">
  <a
    href="#semua-pembentang"
    className="
      group
      relative
      z-30
      inline-flex
      items-center
      justify-center
      overflow-hidden
      rounded-md
      border-purple-900
      border-2
      px-8
      py-4
      font-poppins
      text-sm
      font-semibold
      text-purple-950
      transition-all
      duration-700

      after:absolute
      after:bottom-0
      after:left-5
      after:z-[-20]
      after:h-1
      after:w-1
      after:translate-y-full
      after:rounded-md
      after:bg-[#062F63]

      after:transition-all
      after:duration-700

      hover:after:scale-[300]

   
      hover:text-white
    "
  >
    <span className="relative z-10">
      Lihat Semua Pembentang
    </span>

    <ArrowUpRightIcon
      className="
        relative
        z-10
        ml-3
        h-4
        w-4
        transition-transform
        duration-300
        group-hover:translate-x-1
        group-hover:-translate-y-1
      "
    />
  </a>
</div>

        {/* =====================================================
            BOTTOM DECORATION
        ===================================================== */}

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