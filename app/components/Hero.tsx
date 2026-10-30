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
    <section className="relative min-h-screen overflow-hidden ">
      {/* Background mobile dan tablet */}
<div className="absolute inset-0 lg:hidden">
  <Image
    src="/images/bgsmart-01.jpg"
    alt="Background Mobile"
    fill
    priority
    sizes="100vw"
    className="object-cover object-[center_65%]"
  />
</div>

{/* Background desktop */}
<div className="absolute inset-0 hidden lg:block">
  <Image
    src="/images/bgts-01.jpg"
    alt="Background Desktop"
    fill
    priority
    sizes="100vw"
    className="object-cover object-center"
  />
</div>

      <div className="absolute inset-0 " />

      <div className="absolute inset-0 " />

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
       

        <div className="relative z-20 mt-0 w-full max-w-[720px] px-5 pt-10 pb-0
  sm:px-10 sm:pt-20
  lg:absolute lg:left-16 lg:top-[180px]
  lg:max-w-[720px] lg:px-0 lg:pt-0 lg:pb-0
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
              className="block text-3xl tracking-widest font-medium font-poppins text-purple-800"
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
              className="block text-purple-950 font-poppins font-bold"
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
              className="block font-poppins text-yellow-500"
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
            className="mb-10 mt-2 max-w-[570px] font-inter text-sm font-medium leading-6 text-purple-950 sm:mb-6  sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:mb-6"
          >
            Bersama idea, melakar masa depan  negara bangsa,
            <br className="hidden sm:block" />
             yang lebih bersatu sejahtera dan berdaya saing.
            
            
          </motion.p>
  <div className="h-[500px] w-full sm:h-[500px] lg:hidden">
 
</div>
          
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
  className="relative z-10 mt-0 px-5 pb-36
  sm:px-10 sm:pb-36
  lg:absolute lg:bottom-6 lg:left-16 lg:right-16
  lg:mt-0 lg:px-0 lg:pb-0
  xl:left-20 xl:right-20"
>
  {/* MOBILE: KAD TARIKH, MASA DAN LOKASI */}
  
{/* MOBILE — KEKALKAN RESPONSIVE ASAL */}
<div className="flex flex-col gap-3 font-poppins lg:hidden">

  {/* TARIKH */}
  <div className="border bg-gradient-to-b from-[#F9E7A1] to-[#D6A936] rounded-2xl ">
  <div className="relative flex min-h-[122px] overflow-hidden rounded-2xl border border-yellow-300/30 bg-gradient-to-br from-[#21094F]/95 via-[#351078]/95 to-[#19063F]/95 text-white shadow-lg">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent 0 12px, #FACC15 13px, transparent 14px 24px), repeating-linear-gradient(-45deg, transparent 0 12px, #C4B5FD 13px, transparent 14px 24px)",
        backgroundSize: "32px 32px",
      }}
    />
    <div className="relative z-10 flex w-[90px] shrink-0 items-center justify-center">
      <img src="/images/calendar.svg" alt="Tarikh" className="h-16 w-16 object-contain" />
    </div>
    <div className="relative z-10 flex min-w-0 flex-1 flex-col items-start justify-center gap-2 px-4 py-3">
      <span className="text-xs font-semibold tracking-[0.2em] text-white font-poppins">TARIKH</span>
      <span className="break-words text-base font-medium leading-5 sm:text-lg">
        30 November – 2 Disember 2026
      </span>
      <span className="w-fit rounded-lg bg-[#FFD21C] px-3 py-1 text-xs font-bold text-[#062F63]">
        Isnin – Rabu
      </span>
    </div>
    <CalendarDaysIcon className="pointer-events-none absolute right-2 top-4 h-16 w-16 text-white/30" />
  </div>
</div>
  {/* MASA */}
  <div className="border bg-gradient-to-b from-[#F9E7A1] to-[#D6A936] rounded-2xl">
  <div className="relative flex min-h-[108px] overflow-hidden rounded-2xl border border-yellow-300/30 bg-gradient-to-br from-[#21094F]/95 via-[#351078]/95 to-[#19063F]/95 text-white shadow-lg">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent 0 12px, #FACC15 13px, transparent 14px 24px), repeating-linear-gradient(-45deg, transparent 0 12px, #C4B5FD 13px, transparent 14px 24px)",
        backgroundSize: "32px 32px",
      }}
    />
    <div className="relative z-10 flex w-[90px] shrink-0 items-center justify-center">
      <img src="/images/jam-01.svg" alt="Masa" className="h-16 w-16 object-contain" />
    </div>
    <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center px-4 py-3">
      <span className="mb-2 text-xs font-semibold tracking-[0.2em] text-white font-poppins">MASA</span>
      <span className="break-words text-base font-medium leading-5 sm:text-lg">
        8:00 Pagi – 4:30 Petang
      </span>
    </div>
    <ClockIcon className="pointer-events-none absolute right-2 top-4 h-16 w-16 text-white/30" />
  </div>
  </div>

  {/* LOKASI */}
  <div className="border bg-gradient-to-b from-[#F9E7A1] to-[#D6A936] rounded-2xl">
  <div className="relative flex min-h-[114px] overflow-hidden rounded-2xl border border-yellow-300/30 bg-gradient-to-br from-[#21094F]/95 via-[#351078]/95 to-[#19063F]/95 text-white shadow-lg">
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent 0 12px, #FACC15 13px, transparent 14px 24px), repeating-linear-gradient(-45deg, transparent 0 12px, #C4B5FD 13px, transparent 14px 24px)",
        backgroundSize: "32px 32px",
      }}
    />
    <div className="relative z-10 flex w-[90px] shrink-0 items-center justify-center">
      <img src="/images/maps.svg" alt="Lokasi" className="h-16 w-16 object-contain" />
    </div>
    <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center px-4 py-3">
      <span className="mb-2 text-xs font-semibold tracking-[0.2em] text-white font-poppins">LOKASI</span>
      <span className="break-words text-sm font-medium leading-5 sm:text-base">
        Pusat Konvensyen Antarabangsa Putrajaya (PICC), Putrajaya
      </span>
    </div>
    <MapPinIcon className="pointer-events-none absolute right-2 top-4 h-16 w-16 text-white/30" />
  </div>
  </div>
</div>

{/* DESKTOP — HORIZONTAL CARD */}
<div className="relative hidden overflow-hidden rounded-2xl border border-yellow-300/30 bg-gradient-to-br from-[#16083D] via-[#30106B] to-[#180744] shadow-[0_20px_60px_rgba(20,5,60,0.4)] lg:block">

  {/* CORAK GEOMETRI ISLAMIK */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.10]"
    style={{
      backgroundImage:
        "repeating-linear-gradient(45deg, transparent 0 16px, #FACC15 17px, transparent 18px 32px), repeating-linear-gradient(-45deg, transparent 0 16px, #C4B5FD 17px, transparent 18px 32px)",
      backgroundSize: "42px 42px",
    }}
  />

  <div className="relative h-[3px] w-full bg-gradient-to-r from-[#FFD21C] via-[#E30620] to-[#A855F7]" />

  <div className="relative grid grid-cols-3">

    {/* TARIKH */}
    <div className="flex min-w-0 items-center gap-4 border-r border-white/15 p-4 xl:gap-5 xl:p-6">
   
       <img
  src="/images/calendar.svg"
  alt="Tarikh"
  className="h-20 w-20 object-contain xl:h-20 xl:w-20"
/>
   
      <div className="min-w-0">
        <p className="mb-2 text-[10px] font-bold tracking-[0.2em] font-poppins text-white xl:text-xs">TARIKH</p>
        <div className="flex min-w-0 flex-col items-start gap-2">
          <span className="break-words font-poppins text-sm font-bold leading-relaxed text-white xl:text-base">
            30 November – 2 Disember 2026
          </span>
          <span className="inline-flex w-fit font-poppins rounded-lg bg-[#FFD21C] px-3 py-1 text-sm font-semibold text-[#062F63]">
            Isnin – Rabu
          </span>
        </div>
      </div>
    </div>

    {/* MASA */}
    <div className="flex min-w-0 items-center gap-4 border-r border-white/15 p-4 xl:gap-5 xl:p-6">
           <img
  src="/images/jam-01.svg"
  alt="Tarikh"
  className="h-20 w-20 object-contain xl:h-20 xl:w-20"
/>
      <div className="min-w-0">
        <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-white font-poppins xl:text-xs">MASA</p>
        <p className="break-words text-sm font-poppins font-bold leading-relaxed text-white xl:text-base">
          8:00 Pagi – 4:30 Petang
        </p>
      </div>
    </div>

    {/* LOKASI */}
    <div className="flex min-w-0 items-center gap-4 p-4 xl:gap-5 xl:p-6">
               <img
  src="/images/maps.svg"
  alt="Tarikh"
  className="h-20 w-20 object-contain xl:h-20 xl:w-20"
/>
      <div className="min-w-0">
        <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-white font-poppins xl:text-xs">LOKASI</p>
        <p className="break-words text-sm font-poppins font-bold leading-relaxed text-white xl:text-base">
          Pusat Konvensyen Antarabangsa Putrajaya (PICC), Putrajaya
        </p>
      </div>
    </div>

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

        <p className="mt-1 break-words font-jakarta text-sm font-extrabold leading-snug text-white sm:text-base lg:text-base">
          {value}
        </p>
      </div>
    </div>
  );
}