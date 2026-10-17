"use client";

import Image from "next/image";
import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { motion } from "motion/react";


export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#062F63]">
      <div className="absolute inset-0">
        <Image
          src="/images/desktop.svg"
          alt="PICC Putrajaya"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-[#062F63]/90 via-[#062F63]/45 to-transparent" />

      <div className="absolute inset-0 bg-linear-to-t from-[#062F63]/85 via-transparent to-[#062F63]/10" />

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-none absolute -right-2 -top-28 h-170 w-[6px] rotate-32 bg-[#FFD21C] sm:h-[800px]"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="pointer-events-none absolute right-8 top-20 h-28 w-28 sm:right-16 sm:top-24"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.9) 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative mx-auto min-h-screen w-full max-w-[1600px] overflow-hidden">
       

        <div className="relative z-20 mt-0 max-w-[720px] px-5 pt-15 pb-4
  sm:px-10 sm:pt-28
  lg:absolute lg:left-16 lg:top-[180px]
  lg:px-0 lg:pt-0 lg:pb-0
  xl:left-20">
          <motion.h1
            initial="hidden"
            animate="show"
            className="font-jakarta text-[58px] font-black uppercase leading-[.84] tracking-[-3px] text-white sm:text-[76px] md:text-[90px] lg:text-[105px] xl:text-[118px]"
          >
            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: "easeOut",
                  },
                },
              }}
              className="block text-3xl tracking-widest font-medium font-poppins text-orange-300"
            >
              Persidangan Pembinaan 
            </motion.span>
            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: "easeOut",
                  },
                },
              }}
              className="block"
            >
              NEGARA
            </motion.span>

            <motion.span
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    delay: 0.15,
                    ease: "easeOut",
                  },
                },
              }}
              className="block font-poppins text-[#FFD21C]"
            >
              BANGSA
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.7,
              ease: "easeOut",
            }}
            style={{ transformOrigin: "left" }}
            className="mt-6 flex items-center gap-2"
          >
            <span className="h-1 w-20 bg-[#E30620] sm:w-28" />
            <span className="h-1 w-8 bg-[#FFD21C]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.8,
              ease: "easeOut",
            }}
            className="mb-6 mt-6 max-w-[570px] font-inter text-sm font-medium leading-6 text-white sm:text-base sm:leading-7 md:text-lg md:leading-8"
          >
            Bersama idea, melakar masa depan  negara bangsa,
            <br className="hidden sm:block" />
             yang lebih bersatu sejahtera dan berdaya saing.
            
            
          </motion.p>
            <div className="flex space-x-4  items-center">
          
          {/* <motion.a
            href="#rsvp"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1,
              ease: "easeOut",
            }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#FFD21C] px-6 py-3.5 font-montserrat text-sm font-bold text-[#062F63] shadow-lg transition-all duration-300 hover:bg-white sm:w-auto sm:min-w-[190px] sm:px-7 sm:py-4 sm:text-base"
          >
           Pra Pendaftaran
          </motion.a> */}
         
          </div>
          
        </div>

       <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    delay: 1.1,
    ease: "easeOut",
  }}
  className="relative z-10 mt-8 px-5 pb-28
  sm:px-10 sm:pb-32
  lg:absolute lg:bottom-10 lg:left-16 lg:right-16
  lg:mt-0 lg:px-0 lg:pb-0
  xl:left-20 xl:right-20"
>
  {/* MOBILE: KAD TARIKH, MASA DAN LOKASI */}
  <div className="flex flex-col gap-3 lg:hidden font-poppins">
    {/* TARIKH */}
    <div className="relative flex min-h-[122px] overflow-hidden rounded-2xl
border border-white/30 bg-[#062F63]/35 text-white
shadow-lg backdrop-blur-xl backdrop-saturate-150">
      <div className="flex w-[90px] shrink-0 items-center justify-center  text-white ">
        <img
    src="/images/calendar.svg"
    alt="Google Calendar"
    className="h-20 w-20 object-contain"
  />
      </div>

      <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center px-4 py-3 gap-5">
        <span className="mb-2 text-md  font-semibold tracking-[0.3em] text-white/70">
          TARIKH
        </span>

        <span className="text-base font-medium leading-5 sm:text-lg">
          30 November –
          <br />
          2 Disember 2026
        </span>

        <span className="mt-2 w-fit rounded-lg bg-[#FFD21C] px-3 py-1 text-xs font-bold text-[#062F63]">
          Isnin – Rabu
        </span>
      </div>

      <CalendarDaysIcon className="pointer-events-none absolute right-2 top-4 h-16 w-16 text-slate-200/10" />
    </div>

    {/* MASA */}
    <div className="relative flex min-h-[108px] overflow-hidden rounded-2xl
border border-white/30 bg-[#062F63]/35 text-white
shadow-lg backdrop-blur-xl backdrop-saturate-150">
      <div className="flex w-[90px] shrink-0 items-center justify-center  text-white">
         <img
    src="/images/jam-01.svg"
    alt="Google Calendar"
    className="h-18 w-18 object-contain"
  />
      </div>

      <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center px-4 py-3">
        <span className="mb-2 text-sm font-semibold tracking-[0.3em] text-white/70">
          MASA
        </span>

        <span className="text-base font-medium leading-5 sm:text-lg">
          8:00 Pagi –
          <br />
          4:30 Petang
        </span>
      </div>

      <ClockIcon className="pointer-events-none absolute right-2 top-4 h-16 w-16 text-slate-200/10" />
    </div>

    {/* LOKASI */}
    <div className="relative flex min-h-[114px] overflow-hidden rounded-2xl
border border-white/30 bg-[#062F63]/35 text-white
shadow-lg backdrop-blur-xl backdrop-saturate-150">
      <div className="flex w-[90px] shrink-0 items-center justify-center  text-white">
        <img
    src="/images/maps.svg"
    alt="Maps"
    className="h-18 w-18 object-contain"
  />
      </div>

      <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center px-4 py-3">
        <span className="mb-2 text-sm font-semibold tracking-[0.3em] text-white/70">
          LOKASI
        </span>

        <span className="text-sm font-medium leading-5 sm:text-base">
          Pusat Konvensyen
          <br />
          Antarabangsa Putrajaya
          <br />
          (PICC)
        </span>
      </div>

      <MapPinIcon className="pointer-events-none absolute right-2 top-4 h-16 w-16 text-slate-200/10" />
    </div>
  </div>

  {/* DESKTOP: KEKALKAN DESIGN ASAL */}
  <div className="hidden overflow-hidden rounded-xl border border-white/25 bg-white/[0.12] shadow-[0_20px_60px_rgba(0,0,0,.3),inset_0_1px_0_rgba(255,255,255,.3)] backdrop-blur-xl backdrop-saturate-150 lg:block">
    <div className="h-[3px] w-full bg-gradient-to-r from-[#FFD21C] via-[#E30620] to-transparent" />

    <div className="grid grid-cols-3 tracking-widest">
      <EventInfo
        icon={
          <CalendarDaysIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        }
        label="TARIKH"
        value={
          <>
            <span>30 November - 2 Disember 2026</span>

            <span className="mt-1 inline-flex w-fit rounded-lg bg-yellow-500 px-5 text-lg font-semibold tracking-normal text-black">
              Isnin – Rabu
            </span>
          </>
        }
      />

      <EventInfo
        icon={
          <ClockIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        }
        label="MASA"
        value="8:00 Pagi – 4:30 Petang"
        bordered
      />

      <EventInfo
        icon={
          <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        }
        label="LOKASI"
        value="Pusat Konvensyen Antarabangsa Putrajaya (PICC)"
        bordered
      />
    </div>
  </div>
</motion.div>

        

        <motion.div
          initial={{ x: -150 }}
          animate={{ x: 0 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="pointer-events-none absolute -bottom-24 -left-40 z-30 h-7 w-155 rotate-18 bg-[#FFD21C]"
        />
      </div>
    </section>
  );
}

function EventInfo({
  icon,
  label,
  value,
  bordered = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  bordered?: boolean;
}) {
  return (
    <div
      className={[
        "flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6",
        bordered
          ? "border-t border-white/15 sm:border-l sm:border-t-0"
          : "",
      ].join(" ")}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#E30620]/90 text-white shadow-lg shadow-black/20 sm:h-12 sm:w-12 lg:h-14 lg:w-14">
        {icon}
      </div>

      <div>
        <p className="font-montserrat text-[9px] font-bold uppercase tracking-[.18em] text-white/55 sm:text-[10px]">
          {label}
        </p>

        <p className="mt-1 font-jakarta text-sm font-extrabold text-white sm:text-base lg:text-lg">
          {value}
        </p>
      </div>
    </div>
  );
}