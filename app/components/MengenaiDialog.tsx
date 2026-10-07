"use client";

import Image from "next/image";
import {
  ArrowUpRightIcon,
  LightBulbIcon,
  UserGroupIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";
import { motion } from "motion/react";

const contents = [
  {
    title: "OBJEKTIF",
    text: "Menjana idea dan cadangan strategik untuk masa depan negara bangsa yang lebih bersatu dan berdaya saing.",
    icon: FlagIcon,
    color: "bg-[#062F63]",
  },
  {
    title: "PESERTA",
    text: "Pemimpin, pakar, pengamal, belia, institusi, NGO dan masyarakat umum.",
    icon: UserGroupIcon,
    color: "bg-[#E30620]",
  },
  {
    title: "TUMPUAN",
    text: "Perpaduan, kesejahteraan, tadbir urus, ekonomi, pembangunan sosial dan inovasi.",
    icon: LightBulbIcon,
    color: "bg-[#FFD21C]",
  },
];

export default function MengenaiDialog() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:min-h-screen lg:py-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#062F63]/[0.025]" />

      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[220px] bg-[#FFD21C]/[0.04] [clip-path:polygon(45%_0,100%_0,100%_100%,0_100%)]" />

      <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16 xl:gap-24">

          <div>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-1 w-12 bg-[#FFD21C] sm:w-16" />

              <span className="font-inter text-[10px] font-bold uppercase tracking-[.35em] text-[#062F63] sm:text-xs">
                Mengenai
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="font-jakarta text-[52px] font-black uppercase leading-[.86] tracking-[-3px] text-[#062F63] sm:text-[68px] md:text-[78px] lg:text-[82px] xl:text-[94px]"
            >
              Persidangan
              <span className="block text-[#E30620]">
                NEGARA{" "}
                <span className="text-[#062F63]">
                  BANGSA
                </span>
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ transformOrigin: "left" }}
              className="mt-7 flex items-center gap-2"
            >
              <span className="h-1.5 w-28 rounded-full bg-[#E30620] sm:w-40" />
              <span className="h-1.5 w-10 rounded-full bg-[#FFD21C]" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-7 max-w-[650px] font-poppins text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-[17px]"
            >
              Persidangan Negara Bangsa merupakan platform ilmiah yang
              menghimpunkan pemimpin, pakar, pengamal dan masyarakat untuk
              membincangkan isu-isu strategik demi memperkukuh perpaduan,
              kesejahteraan dan daya saing negara.
            </motion.p>

            <div className="mt-9 space-y-3 sm:mt-10 sm:space-y-4">
              {contents.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 * index,
                    }}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-[0_15px_40px_rgba(6,47,99,.08)] sm:p-4"
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${item.color} ${
                        item.color === "bg-[#FFD21C]"
                          ? "text-[#062F63]"
                          : "text-white"
                      } sm:h-16 sm:w-16`}
                    >
                      <Icon
                        className="h-7 w-7 sm:h-8 sm:w-8"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-montserrat text-xs font-extrabold tracking-[.08em] text-[#062F63] sm:text-sm">
                        {item.title}
                      </h3>

                      <p className="mt-1 font-poppins text-base leading-5 text-black sm:text-base sm:leading-6">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#062F63] px-6 py-3.5 font-montserrat text-sm font-bold text-white transition-all duration-300 hover:bg-[#E30620] sm:w-auto sm:min-w-[190px] sm:px-7 sm:py-4"
            >
              Ketahui Lebih Lanjut

              <ArrowUpRightIcon
                className="h-5 w-5"
                strokeWidth={2}
              />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[620px]"
          >
            <div className="pointer-events-none absolute -right-3 -top-5 z-10 h-36 w-8 rotate-[28deg] rounded-full bg-[#FFD21C] sm:-right-5 sm:-top-8 sm:h-48 sm:w-10" />

            <div className="pointer-events-none absolute -left-4 top-24 z-10 h-32 w-9 rotate-[28deg] rounded-full bg-[#E30620] sm:-left-7 sm:top-28 sm:h-40 sm:w-11" />

            <div className="pointer-events-none absolute -bottom-5 right-8 z-10 h-28 w-8 rotate-[28deg] rounded-full bg-[#E30620] sm:right-12 sm:h-36 sm:w-10" />

            <div className="relative z-20 overflow-hidden rounded-[28px] border-[8px] border-white bg-[#062F63] shadow-[0_30px_80px_rgba(6,47,99,.18)] sm:rounded-[36px]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/Picture1.png"
                  alt="Dialog Negara Bangsa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#062F63]/35 via-transparent to-transparent" />
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-8 left-10 z-10 grid h-20 w-28 grid-cols-6 gap-2 opacity-50 sm:left-16">
              {Array.from({ length: 36 }).map((_, index) => (
                <span
                  key={index}
                  className="h-1.5 w-1.5 rounded-full bg-[#062F63]"
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}