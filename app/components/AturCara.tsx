"use client";
import Image from "next/image";

import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  ChevronRightIcon,
  ChevronDownIcon,
    ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const schedules = {
  "MAJLIS PERASMIAN": [
  {
    session: "MAJLIS PERASMIAN PERSIDANGAN NEGARA BANGSA",
    venue: "Dewan Perdana",

    events: [
      {
        time: "10:30 Pagi ",
        type: "MASJLIS PERASMIAN",
        title: "Ketibaan para jemputan & dif-dif kenamaan",
        description: "",
      },

      {
        time: "10:45 Pagi",
        type: "MAJLIS PERASMIAN",
        title:
          "Ketibaan Menteri Perpaduan Negara",
        description: "YB Datuk Aaron Ago Dagang",
      },

      {
        time: "11:00 Pagi",
        type: "MAJLIS PERASMIAN",
        title: "Keberangkatan tiba DYMM Paduka Seri Sultan Perak Darul Ridzuan, ",
        description: "Sultan Nazrin Muizzuddin Shah",
      },

      {
        time: "11::00 Pagi",
        type: "MAJLIS PERASMIAN",
        title: "Nyanyian Lagu Negaraku",
        description: "",
      },

      {
        time: "11::00 Pagi",
        type: "MAJLIS PERASMIAN",
        title: "Bacaan Doa",
        description: "",
      },

      {
        time: "11::00 Pagi",
        type: "MAJLIS PERASMIAN",
        title: "Ucapan Alu-Aluan Menjunjung Kasih oleh YB Menteri Perpaduan Negara",
        description: "",
      },
      {
        time: "11::00 Pagi",
        type: "UCAPTAMA DIRAJA DAN TITAH PERASMIAN",
        title: "Institusi Raja Berperlembagaan:Payung Kedamaian dan Tonggak Keharmonian Negara",
        description: "Ucaptama Diraja dan Titah Perasmian oleh DYMM Paduka Seri Sultan Perak Darul Ridzuan",
      },
      {
        time: "11::00 Pagi",
        type: "MAJLIS PERASMIAN",
        title: "Sesi bergambar bersama DYMM Paduka Seri Sultan Perak Darul Ridzuan",
        description: "",
      },

      

      

      {
        time: "1.00 Petang",
        type: "MAJLIS PERASMIAN",
        title: "Keberangkatan DYMM Paduka Seri Sultan Perak Darul Ridzuan,",
        description: "",
      },
    ],
  },
],

  "MAJLIS PERSIDANGAN": [
    // {
    //   session:
    //     "MAJLIS PERASMIAN PERSIDANGAN PEMBINAAN NEGARA BANGSA",
    //   venue: "Putra Hall B",

    //   events: [
    //     {
    //       time: "8:00 - 10:00 PAGI",
    //       title: "Pendaftaran Peserta & Ketibaan Jemputan",
    //       description: "Semua Peserta",
    //       type: "PENDAFTARAN PESERTA",
    //     },

    //     {
    //       time: "10:00 - 10:30 PAGI",
    //       title:
    //         "Peserta dan jemputan mengambil tempat dalam Dewan Perdana.",
    //       description: "Semua Peserta dan Jemputan",
    //       type: "PERSEDIAAN PERASMIAN",
    //     },

    //     {
    //       time: "11:00 PAGI - 1:00 TENGAHARI",
    //       title: "Ucapan Alu-Aluan",
    //       description:
    //         "YB Datuk Aaron Ago Dagang, Menteri Perpaduan Negara",
    //       type: "UCAPAN ALU-ALUAN",
    //     },

    //     {
    //       time: "11:00 PAGI - 1:00 TENGAHARI",
    //       title: "Titah Perasmian",
    //       description:
    //         "DYMM Paduka Seri Sultan Perak Darul Ridzuan",
    //       type: "TITAH PERASMIAN",
    //     },

    //     {
    //       time: "1:00 - 2:30 PETANG",
    //       title: "Rehat",
    //       description: "Makan Tengah Hari & Rehat",
    //       type: "REHAT",
    //     },
    //   ],
    // },
  
{
      session:
        "SESI 1: PERLEMBAGAAN DAN RUKUN NEGARA TERAS PEMBINAAN NEGARA BANGSA",
      venue: "Putra Hall B",

      events: [
        {
          time: "2:30 - 4:30 ptg",
          title: "Perlembagaan Persekutuan dan Rukun Negara: Tonggak Negara Bangsa",
          description:
            " YAA Wan Ahmad Farid Wan Salleh - Ketua Hakim Negara",
          type: "UCAPTAMA 1",
        },

        {
          time: "2:30 - 4:30 ptg",
          title: "Perlembagaan Persekutuan: Tiang Seri Kedaulatan dan Kesatuan Negara Bangsa",
          description:
            "YBhg. Prof Emeritus Datuk Dr. Shad Saleem Faruqi - Felo Penyelidik Utama Fakulti Undang-Undang Universiti Malaya",
          type: "KERTAS 1",
        },

        {
          time: "2:30 - 4:30 ptg",
          title: "Penghayatan Rukun Negara: Memperkukuh Perpaduan dan Membina Jati Diri Bangsa",
          description:
            "Tuan Eddin Khoo - Felo Kanan Institut Kajian Strategik dan Antarabangsa (ISIS) Malaysia",
          type: "KERTAS 2",
        },
        {
          time: "2:30 - 4:30 ptg",
          title: "Moderator",
          description:
            "YBrs. Dr. Sheila Ramalingam - Fakulti Undang-Undang Universiti Malaya",
          
        },

        
        {
          time: "4:30 ptg",
          title: "Penutup Hari",
          description: "Minum Petang & Bersurai",
          type: "PENUTUP HARI",
        },
      ],
    },





  {
    session:
      "SESI 2: WARISAN DAN SEJARAH: AKAR IDENTITI NASIONAL",
    venue: "Putra Hall B",
    events: [
    
      {
        time: "11:00 pg – 1:00 ptg",
        type: "UCAPTAMA 2",
        title:
          "Naratif Sejarah Inklusif: Memperkukuh Identiti Nasional dalam Kepelbagaian",
        description:
          "Kebawah Duli Paduka Baginda Tengku Ampuan Pahang",
      },
      {
        time: "11:00 pg – 1:00 ptg",
        type: "Kertas 3",
        title:
          "Nilai, Seni, Bahasa dan Budaya: Jiwa dan Warisan Negara Bangsa",
        description:
          "YBhg. Prof. Dr. Juli a/l Edo - Ahli Panel Majlis Kebudayaan Negara (MAKEN) ",
      },
      {
        time: "11:00 pg – 1:00 ptg",
        type: "Kertas 4",
        title:
          "Sejarah, Identiti dan Kesatuan: Membina Negara Bangsa",
        description:
          "YBhg. Prof Emeritus Dato’ Dr. Abdul Rahman Embong -  Mantan Felo Utama Institut Kajian Malaysia dan Antarabangsa (IKMAS) Universiti Kebangsaan Malaysia",
      },
      {
        time: "11:00 pg - 1:00 ptg",
        
        title: "Moderator",
        description: "YBrs. Dr. Gregory Anak Kiyai@Keai - Pensyarah Kanan Fakulti Seni Kreatif Universiti Malaya",
      },
    
      {
        time: "1:00 – 2:30 ptg",
        type: "Rehat",
        title: "Makan Tengah Hari & Rehat",
        description: "Semua Peserta",
      },
    ],
  },

  {
    session:
      "SESI 3: KEPELBAGAIAN, KEHARMONIAN DAN KESPADUAN SOSIAL",
    venue: "Putra Hall B",
    events: [
      {
        time: "2:30 – 4:30 ptg",
        type: "UCAPTAMA 3",
        title:
          "Memperkasa Perpaduan, Memperkukuh Kesepaduan, Menjayakan Penyatuan",
        description:
          "YBhg. Prof Ulung Datuk Dr. Shamsul Amri Baharuddin - Profesor Ulung Institut Kajian Etnik (KITA) Universiti Kebangsaan Malaysia",
      },
      {
        time: "2:30 – 4:30 ptg",
        type: "Kertas 5",
        title:
          "Harmoni Dalam Kepelbagaian: Menghayati Nilai Kebersamaan",
        description: "YBhg. Tan Sri Lee Lam Thye - Pengerusi Pertubuhan Ikatan Komuniti Selamat",
      },
      {
        time: "2:30 – 4:30 ptg",
        type: "Kertas 6",
        title:
          "Interaksi Rentas Etnik Sebagai Wahana Penyatuan Negara Bangsa",
        description:
          "YBhg. Prof Emeritus Datuk Azizan Baharudin - Pusat Dialog Peradaban (UMCCD)Universiti Malaya",
      },
     
      {
        time: "2:30 - 4:30 ptg",
        
        title: "Moderator",
        description: "YBrs. Dr. Teo Lee Ken - Pegawai Penyelidik KSI Strategic Institute for Asia Pacific",
      },
     
      {
        time: "4:30 ptg",
        type: "Penutup Hari",
        title: "Minum Petang & Bersurai",
        description: "Semua Peserta",
      },
    ],
  },

{
    session:
      "SESI 4: POLITIK DAN CABARAN DALAM MEMBINA NEGARA BANGSA",
    venue: "Putra Hall B",
    events: [
     
      {
        time: "9:00 – 10:30 pg",
        type: "Ucaptama 4",
        title:
          "Keterangkuman dan Kesaksamaan Rentas Wilayah",
        description:
          "YABhg. Tun Pehin Sri Dr. Haji Wan Junaidi bin Tuanku Jaafar - Tuan Yang Terutama Yang di-Pertua Negeri Sarawak",
      },
      {
        time: "9:00 – 10:30 pg",
        type: "Kertas 7",
        title:
          "Politik Berasaskan Kaum & Agama dan Cabaran Membina Negara Bangsa",
        description:
          "YBhg. Prof. Dr. Mohd. Tajuddin bin Mohd Rasdi - Ahli Majlis Penasihat Perpaduan Negara ",
      },
    
      {
        time: "9:00 – 10:30 pg",
        
        title: "Moderator",
        description: "Tuan Luqman Hariz - Personaliti TV Astro Awani",
      },
      {
        time: "10:30 – 11:00 pg",
        type: "Rehat",
        title: "Minum Pagi & Sesi Jaringan",
        description: "Semua Peserta",
      },
    ],
  },

  {
    session:
      "SESI 5: TRANSFORMASI NEGARA BANGSA: NARATIF NASIONAL, EKONOMI INKLUSIF DAN MODAL INSAN",
    venue: "Putra Hall B",
    events: [
      {
        time: "11:00 - 1:00 ptg",
        type: "UCAPTAMA 5",
        title:
          "Komunikasi Sivil: Mengurus Naratif Untuk Keharmonian",
        description:
          "YBrs. Prof. Madya Dr. Chang Peng Kee - Felo Kanan Bersekutu Institut Kajian Etnik (KITA) Universiti Kebangsaan Malaysia",
      },
      {
        time: "11:00 - 1:00 ptg",
        type: "Kertas 8",
        title:
          "Pembangunan Ekonomi Inklusif: Memperluas Penyertaan dan Kesejahteraan Rakyat",
        description:
          "YBhg. Tan Sri Dato’ Sri Nazir Razak - Pengerusi Yayasan Tun Razak",
      },
      {
        time: "11:00 - 1:00 ptg",
        type: "Kertas 9",
        title:
          "Modal Insan Berkualiti, Negara Bangsa Berdaya Saing",
        description:
          "YBhg. Prof. Emeritus Tan Sri Dato’ Dzulkifli bin Abdul Raza",
      },
      
      {
        time: "11:00 - 1:00 ptg",
   
        title: "Moderator",
        description: "YBrs. Dr. Muhammad bin Abdul Khalid - Institut Kajian Malaysia dan Antarabangsa (IKMAS) Universiti Kebangsaan Malaysia",
      },
      {
        time: "1:00 – 2:30 ptg",
        type: "Rehat",
        title: "Makan Tengah Hari & Rehat",
        description: "Semua Peserta",
      },
    ],
  },


],

"MAJLIS PENUTUP": [
  {
    session: "RUMUSAN PERSIDANGAN DAN MAJLIS PENUTUP",
    venue: "Dewan Perdana",

    events: [
      {
        time: "3:00-4:00 PETANG",
        type: "KETIBAAN",
        title: "Ketibaan para jemputan & dif-dif kenamaan",
        description: "",
      },

      {
        time: "2:45 PETANG",
        type: "KETIBAAN",
        title:
          "Ketibaan YB Datuk Aaron Ago Dagang, Menteri Perpaduan Negara",
        description: "",
      },

      {
        time: "2:50 PETANG",
        type: "KETIBAAN",
        title: "Ketibaan YAB Datuk Seri Anwar Ibrahim",
        description: "",
      },

      {
        time: "3:00 PETANG",
        type: "MAJLIS PENUTUP",
        title: "Nyanyian Lagu Negaraku",
        description: "",
      },

      {
        time: "3:05 PETANG",
        type: "MAJLIS PENUTUP",
        title: "Bacaan Lafaz Ikrar Rukun Negara",
        description: "",
      },

      {
        time: "3:10 PETANG",
        type: "MAJLIS PENUTUP",
        title: "Bacaan Doa",
        description: "",
      },

      {
        time: "3:15 PETANG",
        type: "UCAPAN",
        title: "Ucapan Alu-Aluan oleh YB Menteri Perpaduan Negara",
        description: "YB Datuk Aaron Ago Dagang",
      },

      {
        time: "3:30 PETANG",
        type: "RUMUSAN & MAJLIS PENUTUP",
        title: "Rumusan dan Penutup",
        description: "YAB Dato' Seri Anwar Ibrahim, Perdana Menteri",
      },

      {
        time: "4:00 PETANG",
        type: "SESI BERGAMBAR",
        title: "Sesi bergambar bersama YAB Perdana Menteri",
        description: "",
      },

    

      {
        time: "4:30 PETANG",
        type: "BERSURAI",
        title: "Majlis Bersurai",
        description: "",
      },
    ],
  },
],
};

type Day = keyof typeof schedules;
const dayInfo: Record<
  Day,
  {
    name: string;
    date: string;
    masa: string;
    tempat: string;
  }
> = {
  "MAJLIS PERASMIAN": {
    name: "MAJLIS PERASMIAN",
    date: "30 November 2026",
    masa: "11:00 Pagi - 1:00 Petang",
    tempat:"Dewan Perdana",
  },

  "MAJLIS PERSIDANGAN": {
    name: "MAJLIS PERSIDANGAN",
    date: "30 NOVEMBER - 2 Disember 2026",
    masa: "8:00 Pagi - 4:30 Petang",
    tempat:"Putra Hall B",
  },

  "MAJLIS PENUTUP": {
    name: "MAJLIS PENUTUP",
    date: "2 Disember 2026",
    masa: "2:30 Petang - 4:30 Petang",
    tempat:"Dewan Perdana",
  },
};



export default function AturCara() {
  const [activeDay, setActiveDay] =
    useState<Day>("MAJLIS PERASMIAN");

  /*
   * Simpan sesi yang sedang dibuka.
   * Contoh:
   * {
   *   "30 NOVEMBER-0": true
   * }
   */
  const [openSessions, setOpenSessions] =
    useState<Record<string, boolean>>({});

  const toggleSession = (sessionKey: string) => {
    setOpenSessions((prev) => ({
      ...prev,
      [sessionKey]: !prev[sessionKey],
    }));
  };

  const changeDay = (day: Day) => {
    setActiveDay(day);

    // Bila tukar tarikh, tutup semua sesi.
    setOpenSessions({});
  };

  return (
    <section
      id="aturcara"
      className="relative overflow-hidden bg-[#062F63] py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0">
              <Image
                src="/images/yellow.png"
                alt="PICC Putrajaya"
                fill
                priority
                sizes=""
                className="object-cover object-center opacity-"
              />
              <div className="absolute inset-0 bg-[#062F63]/0 " />
            </div>

      <div className="popoppins-events-none absolute inset-0 bg-[#F8F4E8]/20" />

     

      

      <div
        className="popoppins-events-none absolute right-8 top-20 h-24 w-24 opacity-40 sm:right-16"
        style={{
          backgroundImage:
            "radial-gradient(circle, #FFD21C 2px, transparent 2px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div
        className="popoppins-events-none absolute bottom-20 left-8 h-24 w-24 opacity-30 sm:left-16"
        style={{
          backgroundImage:
            "radial-gradient(circle, #E30620 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px",
        }}
      />

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
          <div className="flex items-center justify-center gap-3">
            <span className="h-1 w-10 bg-black sm:w-14" />

            <span className="font-poppins text-md font-bold uppercase tracking-[.35em] text-[#062F63] sm:text-xl">
              Program
            </span>

            <span className="h-1 w-10 bg-black sm:w-14" />
          </div>

          <h2 className="mt-5 font-poppins text-[48px] font-bold uppercase leading-[.9] tracking-[-2px] text-[#062F63] sm:text-[64px] md:text-[76px] lg:text-[88px]">
            ATUR
            <span className="text-[#E30620]"> CARA</span>
          </h2>

          <div className="mx-auto mt-6 flex w-fit items-center gap-2">
            <span className="h-1.5 w-24 rounded-full bg-[#E30620]" />
            <span className="h-1.5 w-8 rounded-full bg-[#FFD21C]" />
          </div>

          <p className="mx-auto mt-6 max-w-[650px] font-poppins text-sm leading-7 text-slate-900 sm:text-base sm:leading-8">
            Ikuti rangkaian program dan sesi perbincangan sepanjang
            Persidangan Negara Bangsa 2026.
          </p>
        </motion.div>

        {/* =====================================================
            DAY SELECTOR
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-10 grid max-w-[720px] grid-cols-3 gap-2 rounded-2xl bg-[#062F63] p-2 sm:mt-12 sm:gap-3"
        >
          {(Object.keys(schedules) as Day[]).map(
            (day, index) => {
              const active = activeDay === day;

              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => changeDay(day)}
                  className={`rounded-xl px-3 py-3.5 transition-all duration-300 sm:py-4 ${
                    active
                      ? "bg-[#FFD21C] text-[#062F63] shadow-lg"
                      : "text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="block font-montserrat text-[9px] font-bold uppercase tracking-[.15em] sm:text-[10px]">
                    Hari {index + 1}
                  </span>

                  <span className="mt-1 block font-jakarta text-sm font-extrabold sm:text-base">
                    {day}
                  </span>
                </button>
              );
            }
          )}
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[280px_1fr]  lg:gap-20">

          {/* ===================================================
              DATE / LOCATION / TIME CARD
          =================================================== */}
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:sticky lg:top-24 lg:h-fit"
          >
            <div className="relative overflow-hidden rounded-2xl bg-[#062F63] p-12 px-6 text-white shadow-[0_20px_60px_rgba(6,47,99,.15)] sm:p-4">

              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border-[18px] border-[#FFD21C]/20" />

              <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full border-[20px] border-[#E30620]/10" />

              

              

              <h3 className="relative mt-2 font-poppins text-3xl font-bold leading-[1.05] break-normal sm:text-4xl`">
                {dayInfo[activeDay].name}
              </h3>

              <div className="mt-6 h-px bg-white/15" />
              
              <div className="mt-5 flex items-start gap-3">
                <CalendarDaysIcon className="mt-0.5 h-5 w-5 shrink-0 text-white" />

                <div>
                  <p className="font-poppins text-sm font-semibold uppercase tracking-wider text-white">
                    Tarikh
                  </p>

                  <p className="mt-1 font-poppins text-sm font-medium tracking-wider">
                    {dayInfo[activeDay].date}
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="mt-5 flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-white" />

                <div>
                  <p className="font-poppins text-sm font-semibold uppercase tracking-wider text-white">
                    Lokasi
                  </p>

                  <p className="mt-1 font-poppins text-sm font-medium tracking-wider">
                   {dayInfo[activeDay].tempat}
                  </p>
                </div>
              </div>

              {/* TIME */}
              <div className="mt-6 flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-white" />

                <div>
                  <p className="font-poppins text-sm font-semibold uppercase tracking-wider text-white">
                    Masa
                  </p>

                  <p className="mt-1 font-poppins text-sm font-medium whitespace-nowrap">
                   {dayInfo[activeDay].masa}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===================================================
              SCHEDULE
          =================================================== */}
          <motion.div
            key={`schedule-${activeDay}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative"
          >
            <div className="space-y-8">

              {schedules[activeDay].map(
                (session, sessionIndex) => {
                  const sessionKey =
                    `${activeDay}-session-${sessionIndex}`;

                  const isOpen =
                    openSessions[sessionKey] ?? false;

                  return (
                    <div
                      key={sessionKey}
                      className="relative"
                    >

                      {/* =====================================
                          SESSION HEADER
                      ===================================== */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        className="overflow-hidden rounded-2xl bg-[#062F63] shadow-lg"
                      >
                        <div className="border-l-8 border-[#FFD21C] px-6 py-5 sm:px-8">

                          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                            {/* SESSION INFO */}
                            <div className="min-w-0 flex-1">
                              <p className="font-poppins text-[10px] font-bold uppercase tracking-[.3em] text-[#FFD21C]">
                                SESI
                              </p>

                              <h3 className="mt-2 font-jakarta text-lg font-extrabold uppercase leading-snug text-white sm:text-2xl">
                                {session.session}
                              </h3>

                              <div className="mt-3 flex items-center gap-2">
                                <MapPinIcon className="h-4 w-4 shrink-0 text-[#FFD21C]" />

                                <p className="font-poppins text-sm text-white/60">
                                  {session.venue}
                                </p>
                              </div>
                            </div>

                            {/* BUTTON */}
                            <button
                              type="button"
                              onClick={() =>
                                toggleSession(
                                  sessionKey
                                )
                              }
                              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#FFD21C] px-5 py-3 font-poppins text-md font-bold uppercase tracking-[.12em] text-[#062F63] transition-all duration-300 hover:bg-white"
                            >
                              {isOpen
                                ? "Tutup Program"
                                : "Lihat Program"}

                              <ChevronDownIcon
                                className={`h-4 w-4 transition-transform duration-300 ${
                                  isOpen
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>

                          </div>

                        </div>
                      </motion.div>

                      {/* =====================================
                          TIMELINE
                          HIDDEN UNTIL BUTTON CLICKED
                      ===================================== */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.45,
                              ease: "easeInOut",
                            }}
                            className="overflow-hidden"
                          >
                            <div className="relative mt-6 pl-0">

                              {/* TIMELINE LINE */}
                              <div className="absolute bottom-7 left-[21px] top-7 w-px bg-[#062F63]/15 sm:left-[27px]" />

                              <div className="space-y-5 sm:space-y-6">

                                {session.events.map(
                                  (item, index) => (
                                    <motion.div
                                      key={`${sessionKey}-${index}`}
                                      initial={{
                                        opacity: 0,
                                        x: 20,
                                      }}
                                      animate={{
                                        opacity: 1,
                                        x: 0,
                                      }}
                                      transition={{
                                        duration: 0.4,
                                        delay:
                                          index *
                                          0.08,
                                      }}
                                      className="relative flex gap-5 sm:gap-7"
                                    >

                                      {/* TIMELINE DOT */}
                                      <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 border-[#F8F4E8] bg-[#FFD21C] shadow-[0_0_0_1px_rgba(6,47,99,.15)] sm:h-14 sm:w-14">
                                        <ClockIcon
                                          className="h-5 w-5 text-[#062F63] sm:h-6 sm:w-6"
                                          strokeWidth={2}
                                        />
                                      </div>

                                      {/* EVENT CARD */}
                                      <div className="flex-1 rounded-2xl border border-[#062F63]/10 bg-white/95 p-5 shadow-[0_8px_30px_rgba(6,47,99,.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#062F63]/20 hover:shadow-[0_15px_40px_rgba(6,47,99,.08)] sm:p-6">

                                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                                          <div>

                                            {/* TYPE + TIME */}
                                            <div className="flex flex-wrap items-center gap-2">

                                              <span className="bg-[#E30620] px-4 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[.12em] text-white">
                                                {item.type}
                                              </span>

                                              <span className="font-poppins text-xs font-semibold text-slate-400">
                                                {item.time}
                                              </span>

                                            </div>

                                            {/* TITLE */}
                                            <h3 className="mt-3 font-jakarta text-lg font-extrabold text-[#062F63] sm:text-xl">
                                              {item.title}
                                            </h3>

                                            {/* DESCRIPTION */}
                                            <p className="mt-2 max-w-[650px] font-poppins text-sm leading-6 text-slate-500">
                                              {item.description}
                                            </p>

                                          </div>

                                          <ChevronRightIcon className="hidden h-5 w-5 shrink-0 text-slate-300 sm:block" />

                                        </div>

                                      </div>

                                    </motion.div>
                                  )
                                )}

                              </div>

                              {/* CLOSE BUTTON */}
                              <div className="mt-6 flex justify-center">
                                <button
                                  type="button"
                                  onClick={() =>
                                    toggleSession(
                                      sessionKey
                                    )
                                  }
                                  className="inline-flex items-center gap-2 rounded-full border border-[#062F63]/10 bg-white px-5 py-2.5 font-poppins text-[10px] font-bold uppercase tracking-[.12em] text-[#062F63]/60 transition-all duration-300 hover:bg-[#062F63] hover:text-white"
                                >
                                  Tutup Program

                                  <ChevronDownIcon className="h-4 w-4 rotate-180" />
                                </button>
                              </div>

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  );
                }
              )}

            </div>
          </motion.div>
              <div className="mt-14 flex justify-center">
  <a
    href="/documents/atur-cara-negara-bangsa-2026.pdf"
    download
    className="group inline-flex items-center gap-3 rounded-xl bg-[#E30620] px-7 py-4 font-poppins text-xs font-bold uppercase tracking-[.12em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#062F63] hover:shadow-xl"
  >
    <ArrowDownTrayIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />

    <span>Download Atur Cara</span>
  </a>
</div>
        </div>
      </div>
    </section>
  );
}