"use client";

import Image from "next/image";
import { motion } from "motion/react";

const sponsors = [
  {
    name: "Kementerian Perpaduan Negara",
    image: "/images/logo.png",
  },
  {
    name: "Chevening Alumni Malaysia",
    image: "/images/logo.png",
  },
  {
    name: "Koperasi Serbaguna Kebangsaan Berhad",
    image: "/images/logo.png",
  },
  {
    name: "Perintis Akal",
    image: "/images/logo.png",
  },
  {
    name: "Intramiles",
    image: "/images/logo.png",
  },
  {
    name: "HEYA Inc.",
    image: "/images/logo.png",
  },
  {
    name: "British High Commission Kuala Lumpur",
    image: "/images/logo.png",
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
            Rakan <span className="text-[#E30620]">&amp; Strategik</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl font-poppins text-sm leading-7 text-slate-500">
            Bersama menyokong usaha pembinaan negara bangsa.
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
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-white to-transparent sm:w-40" />

        {/* Fade kanan */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-white to-transparent sm:w-40" />

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
                className="group flex h-[120px] w-[180px] shrink-0 items-center justify-center border border-slate-200 bg-white px-6 shadow-[0_8px_25px_rgba(6,47,99,.05)] transition-all duration-300 hover:border-[#C8A23A]/60 hover:shadow-[0_12px_30px_rgba(6,47,99,.08)] sm:h-[135px] sm:w-[210px]"
              >
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  width={220}
                  height={140}
                  className="max-h-[80px] w-auto max-w-[150px] object-contain opacity-80 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-[90px] sm:max-w-[175px]"
                />
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
                  className="group flex h-[120px] w-[180px] shrink-0 items-center justify-center border border-slate-200 bg-[#F8F7F3] px-6 transition-all duration-300 hover:border-[#C8A23A]/60 hover:bg-white sm:h-[135px] sm:w-[210px]"
                >
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    width={220}
                    height={140}
                    className="max-h-[80px] w-auto max-w-[150px] object-contain opacity-70 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-[90px] sm:max-w-[175px]"
                  />
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