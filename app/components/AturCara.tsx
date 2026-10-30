"use client";
import Image from "next/image";

import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  ChevronRightIcon,
  ChevronDownIcon,
    ArrowDownTrayIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const schedules = {
  "UCAPTAMA DIRAJA DAN MAJLIS PERASMIAN": [
  {
    session: "MAJLIS PERASMIAN PERSIDANGAN NEGARA BANGSA",
    hari: "30 November",
    venue: "Dewan Perdana - 11:00 pg - 1:00 tghari",

    events: [
      {
        time: " ",
        type: "MASJLIS PERASMIAN",
        title: "Ketibaan para jemputan & dif-dif kenamaan",
        description: "",
      },

      {
        time: "",
        type: "MAJLIS PERASMIAN",
        title:
          "Ketibaan Menteri Perpaduan Negara",
        description: "YB Datuk Aaron Ago Dagang",
      },

      {
        time: "",
        type: "MAJLIS PERASMIAN",
        title: "Keberangkatan tiba DYMM  Sultan Selangor  ",
        description: "Sultan Sharafuddin Idris Shah Al-Haj ibni Almarhum Sultan Salahuddin Abdul Aziz Shah Al-Haj",
      },

      {
        time: "",
        type: "MAJLIS PERASMIAN",
        title: "Nyanyian Lagu Negaraku",
        description: "",
      },

      {
        time: "",
        type: "MAJLIS PERASMIAN",
        title: "Bacaan Doa",
        description: "",
      },

      {
        time: "",
        type: "UCAPAN",
        title: "Ucapan Alu-Aluan Menjunjung Kasih",
        description: "YB Datuk Aaron Ago Dagang, Menteri Perpaduan Negara",
      },
      {
        time: "",
        type: "UCAPTAMA DIRAJA DAN TITAH PERASMIAN",
        title: "Institusi Raja Berperlembagaan:Payung Kedamaian dan Tonggak Keharmonian Negara",
        description: "Ucaptama Diraja dan Titah Perasmian oleh DYMM Sultan Selangor ",
      },
      {
        time: "",
        type: "MAJLIS PERASMIAN",
        title: "Sesi bergambar bersama DYMM Sultan Selangor ",
        description: "",
      },

      

      

      {
        time: "",
        type: "MAJLIS PERASMIAN",
        title: "Keberangkatan DYMM Sultan Selangor Meninggalkan Majlis",
        description: "",
      },
    ],
  },
],

  "PERSIDANGAN PEMBINAAN NEGARA BANGSA": [
    
  
{
      session:
        "SESI 1: PERLEMBAGAAN DAN RUKUN NEGARA TERAS PEMBINAAN NEGARA BANGSA",
         hari: "30 November",
      venue: "Putra Hall B - 2:30 ptg - 4:30 ptg",

      events: [
        {
          time: "",
          title: "Perlembagaan Persekutuan dan Rukun Negara: Tonggak Negara Bangsa",
          description:
            " YAA Wan Ahmad Farid Wan Salleh - Ketua Hakim Negara",
          type: "UCAPTAMA 1",
        },

        {
          time: "",
          title: "Perlembagaan Persekutuan: Tiang Seri Kedaulatan dan Kesatuan Negara Bangsa",
          description:
            "YBhg. Prof Emeritus Datuk Dr. Shad Saleem Faruqi - Felo Penyelidik Kanan Universiti Malaya",
          type: "KERTAS 1",
        },

        {
          time: "",
          title: "Penghayatan Rukun Negara: Memperkukuh Perpaduan dan Membina Jati Diri Bangsa",
          description:
            "Tuan Eddin Khoo - Felo Kanan Institut Kajian Strategik dan Antarabangsa (ISIS) Malaysia",
          type: "KERTAS 2",
        },
        // {
        //   time: "2:30 - 4:30 ptg",
        //   title: "Moderator",
        //   description:
        //     "YBrs. Dr. Sheila Ramalingam - Fakulti Undang-Undang Universiti Malaya",
          
        // },

        
        // {
        //   time: "4:30 ptg",
        //   title: "Penutup Hari",
        //   description: "Minum Petang & Bersurai",
        //   type: "PENUTUP HARI",
        // },
      ],
    },





  {
    session:
      "SESI 2: WARISAN DAN SEJARAH: AKAR IDENTITI NASIONAL",
       hari: "1 Disember",
    venue: "Putra Hall B - 11:00 pg - 1:00 ptg",
    events: [
    
      {
        time: "",
        type: "UCAPTAMA 2",
        title:
          "Naratif Sejarah Inklusif: Memperkukuh Identiti Nasional dalam Kepelbagaian",
        description:
          "Kebawah Duli Paduka Baginda Tengku Ampuan Pahang",
      },
      {
        time: "",
        type: "Kertas 3",
        title:
          "Nilai, Seni, Bahasa dan Budaya: Jiwa dan Warisan Negara Bangsa",
        description:
          "YBhg. Prof. Dr. Juli Edo - Ahli Panel Majlis Kebudayaan Negara (MAKEN) ",
      },
      {
        time: "",
        type: "Kertas 4",
        title:
          "Sejarah, Identiti dan Kesatuan: Membina Negara Bangsa",
        description:
          "YBhg. Prof Emeritus Dato’ Dr. Abdul Rahman Embong -  Mantan Felo Utama Institut Kajian Malaysia dan Antarabangsa (IKMAS) Universiti Kebangsaan Malaysia",
      },
      // {
      //   time: "",
        
      //   title: "Moderator",
      //   description: "YBrs. Dr. Gregory Anak Kiyai@Keai - Pensyarah Kanan Fakulti Seni Kreatif Universiti Malaya",
      // },
    
      // {
      //   time: "",
      //   type: "Rehat",
      //   title: "Makan Tengah Hari & Rehat",
      //   description: "Semua Peserta",
      // },
    ],
  },

  {
    session:
      "SESI 3: KEPELBAGAIAN, KEHARMONIAN DAN KESEPADUAN SOSIAL",
       hari: "1 Disember",
    venue: "Putra Hall B - 2:30 ptg - 4:30 ptg",
    events: [
      {
        time: "",
        type: "UCAPTAMA 3",
        title:
          "Memperkasa Perpaduan, Memperkukuh Kesepaduan, Menjayakan Penyatupaduan",
        description:
          "YBhg. Prof Ulung Datuk Dr. Shamsul Amri Baharuddin - Profesor Ulung Institut Kajian Etnik (KITA) Universiti Kebangsaan Malaysia",
      },
      {
        time: "",
        type: "Kertas 5",
        title:
          "Harmoni Dalam Kepelbagaian: Menghayati Nilai Kebersamaan",
        description: "YBhg. Tan Sri Lee Lam Thye - Pengerusi Pertubuhan Ikatan Komuniti Selamat",
      },
      {
        time: "",
        type: "Kertas 6",
        title:
          "Interaksi Rentas Etnik Sebagai Wahana Penyatuan Negara Bangsa",
        description:
          "YBhg. Prof Emeritus Datuk Azizan Baharudin - Pusat Dialog Peradaban Universiti Malaya",
      },
     
      // {
      //   time: "",
        
      //   title: "Moderator",
      //   description: "YBrs. Dr. Teo Lee Ken - Pegawai Penyelidik KSI Strategic Institute for Asia Pacific",
      // },
     
      // {
      //   time: "",
      //   type: "Penutup Hari",
      //   title: "Minum Petang & Bersurai",
      //   description: "Semua Peserta",
      // },
    ],
  },

{
    session:
      "SESI 4: POLITIK DAN CABARAN DALAM MEMBINA NEGARA BANGSA",
       hari: "2 Disember",
    venue: "Putra Hall B - 9:00 pg - 11:00 pg",
    events: [
     
      {
        time: "",
        type: "Ucaptama 4",
        title:
          "Keterangkuman dan Kesaksamaan Rentas Wilayah",
        description:
          "YABhg. Tun Pehin Sri Dr. Haji Wan Junaidi bin Tuanku Jaafar - Tuan Yang Terutama Yang di-Pertua Negeri Sarawak",
      },
      {
        time: "",
        type: "Kertas 7",
        title:
          "Politik Berasaskan Kaum & Agama dan Cabaran Membina Negara Bangsa",
        description:
          "YBhg. Prof. Dr. Mohd. Tajuddin bin Mohd Rasdi - Ahli Majlis Penasihat Perpaduan Negara ",
      },
    
      // {
      //   time: "",
        
      //   title: "Moderator",
      //   description: "Tuan Luqman Hariz - Personaliti TV Astro Awani",
      // },
      // {
      //   time: "",
      //   type: "Rehat",
      //   title: "Minum Pagi & Sesi Jaringan",
      //   description: "Semua Peserta",
      // },
    ],
  },

  {
    session:
      "SESI 5: TRANSFORMASI NEGARA BANGSA: NARATIF NASIONAL, EKONOMI INKLUSIF DAN MODAL INSAN",
       hari: "2 Disember",
    venue: "Putra Hall B - 11:00 pg - 1:00 ptg",
    events: [
      {
        time: "",
        type: "UCAPTAMA 5",
        title:
          "Komunikasi Sivil: Mengurus Naratif Untuk Keharmonian",
        description:
          "YBrs. Prof. Madya Dr. Chang Peng Kee - Felo Kanan Bersekutu Institut Kajian Etnik (KITA) Universiti Kebangsaan Malaysia",
      },
      {
        time: "",
        type: "Kertas 8",
        title:
          "Pembangunan Ekonomi Inklusif: Memperluas Penyertaan dan Kesejahteraan Rakyat",
        description:
          "YBhg. Dato' Sri  Mustapa Mohamed - Presiden Persatuan Bangsa-Bangsa Bersatu Malaysia (UNAM)",
      },
      {
        time: "",
        type: "Kertas 9",
        title:
          "Modal Insan Berkualiti, Negara Bangsa Berdaya Saing",
        description:
          "YBhg. Prof. Emeritus Tan Sri Dato’ Dzulkifli bin Abdul Razak - Profesor Emeritus Pusat Racun Negara Universiti Sains Malaysia",
      },
      
      // {
      //   time: "",
   
      //   title: "Moderator",
      //   description: "YBrs. Dr. Muhammad bin Abdul Khalid - Institut Kajian Malaysia dan Antarabangsa (IKMAS) Universiti Kebangsaan Malaysia",
      // },
      // {
      //   time: "",
      //   type: "Rehat",
      //   title: "Makan Tengah Hari & Rehat",
      //   description: "Semua Peserta",
      // },
    ],
  },


],

"SESI RUMUSAN DAN MAJLIS PENUTUP": [
  {
    session: "RUMUSAN PERSIDANGAN DAN MAJLIS PENUTUP",
     hari: "2 Disember",
    venue: "Dewan Perdana - 2.30 ptg -4.30 ptg ",

    events: [
      {
        time: "",
        type: "KETIBAAN",
        title: "Ketibaan para jemputan & dif-dif kenamaan",
        description: "",
      },

    {
        time: "",
        type: "KETIBAAN",
        title:
          "Ketibaan Menteri Perpaduan Negara",
        description: "YB Datuk Aaron Ago Dagang",
      },

      {
        time: "",
        type: "KETIBAAN",
        title:
          "Ketibaan Perdana Menteri ",
        description: "YAB Datuk Seri Anwar Ibrahim ",
      },

      {
        time: "",
        type: "MAJLIS PENUTUP",
        title: "Nyanyian Lagu Negaraku",
        description: "",
      },

      {
        time: "",
        type: "MAJLIS PENUTUP",
        title: "Bacaan Lafaz Ikrar Rukun Negara",
        description: "",
      },

      {
        time: "",
        type: "MAJLIS PENUTUP",
        title: "Bacaan Doa",
        description: "",
      },

      {
        time: "",
        type: "UCAPAN",
        title: "Ucapan Alu-Aluan",
        description: "YB Datuk Aaron Ago Dagang, Menteri Perpaduan Negara",
      },

      {
        time: "",
        type: "RUMUSAN & MAJLIS PENUTUP",
        title: "Ucapan Rumusan dan Penutup",
        description: "YAB Dato' Seri Anwar Ibrahim, Perdana Menteri",
      },

      {
        time: "",
        type: "SESI BERGAMBAR",
        title: "Sesi bergambar bersama YAB Perdana Menteri",
        description: "",
      },

    

      {
        time: "",
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
  "UCAPTAMA DIRAJA DAN MAJLIS PERASMIAN": {
    name: "UCAPTAMA DIRAJA DAN MAJLIS PERASMIAN",
    date: "30 November 2026",
    masa: "11:00 pg - 1:00 tghari",
    tempat:"Dewan Perdana",
  },

  "PERSIDANGAN PEMBINAAN NEGARA BANGSA": {
    name: "PERSIDANGAN PEMBINAAN NEGARA BANGSA",
    date: "30 NOVEMBER - 2 Disember 2026",
    masa: "8:00 pg - 4:30 ptg",
    tempat:"Putra Hall B",
  },

  "SESI RUMUSAN DAN MAJLIS PENUTUP": {
    name: "SESI RUMUSAN DAN MAJLIS PENUTUP",
    date: "2 Disember 2026",
    masa: "2:30 ptg - 4:30 ptg",
    tempat:"Dewan Perdana",
  },
};



export default function AturCara() {
  const [activeDay, setActiveDay] =
    useState<Day>("UCAPTAMA DIRAJA DAN MAJLIS PERASMIAN");
  const [showDetails, setShowDetails] = useState(false);

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
      className="relative overflow-hidden bg-white/95 py-20 sm:py-24 lg:py-28"
      
    >
       <div className="pointer-events-none absolute -left-4 top-24 z-10 h-32 w-9 rotate-[28deg] rounded-full bg-[#E30620] sm:-left-7 sm:top-28 sm:h-40 sm:w-11" />
      <div className="pointer-events-none absolute -right-3 -top-5 z-10 h-36 w-8 rotate-[28deg] rounded-full bg-[#FFD21C] sm:-right-5 sm:-top-8 sm:h-48 sm:w-10" />
      {/* <div className="absolute inset-0">
              <Image
                src="/images/"
                alt="PICC Putrajaya"
                fill
                priority
                sizes=""
                className="object-cover object-center opacity-"
              />
              <div className="absolute inset-0 bg-[#062F63]/0 " />
            </div>

      <div className="popoppins-events-none absolute inset-0 bg-[#F8F4E8]/20" /> */}

  <div className="pointer-events-none absolute left-3 -bottom-5 z-10 h-36 w-8 rotate-[28deg] rounded-full bg-purple-800 sm:left-3 sm:-bottom-5 sm:h-48 sm:w-10" />    
<div className="pointer-events-none absolute -bottom-5 right-8 z-10 h-28 w-8 rotate-[28deg] rounded-full bg-[#E30620] sm:right-12 sm:h-36 sm:w-10" />
      

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
            Persidangan Pembinaan Negara Bangsa 2026.
          </p>
        </motion.div>

        {/* PILIH PROGRAM: REKA BENTUK KAD PREMIUM */}
        {!showDetails ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mt-12 grid gap-5 md:grid-cols-3"
          >
            {(Object.keys(schedules) as Day[]).map((day, index) => {
              const cardTitles = [
                "UCAPTAMA DIRAJA DAN MAJLIS PERASMIAN",
                "PERSIDANGAN PEMBINAAN NEGARA BANGSA",
                "SESI RUMUSAN DAN MAJLIS PENUTUP",
              ];
              const subtitles = [
                "Majlis perasmian dan Ucaptama Diraja",
                "Rangkaian sesi perbincangan selama tiga hari",
                "Rumusan persidangan dan majlis penutup rasmi",
              ];
              const dates = ["30 NOVEMBER 2026", "30 NOV – 2 DIS 2026", "2 DISEMBER 2026"];
              const symbols = ["01", "02", "03"];

              return (
                <motion.button
                  key={day}
                  type="button"
                  onClick={() => {
                    changeDay(day);
                    setShowDetails(true);
                  }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.985 }}
                  className="group relative isolate flex min-h-[340px] flex-col overflow-hidden rounded-[26px] border border-white/15 bg-[#082B59] p-0 text-left shadow-[0_18px_45px_rgba(5,31,66,.24)] transition-shadow duration-300 hover:shadow-[0_24px_55px_rgba(5,31,66,.34)]"
                >
                  {/* Dekorasi latar */}
                  <span className="pointer-events-none absolute -right-14 -top-14 -z-10 h-48 w-48 rounded-full border-[24px] border-white/[0.04]" />
                  <span className="pointer-events-none absolute -bottom-20 -left-16 -z-10 h-56 w-56 rounded-full border-[28px] border-[#FFD21C]/[0.08]" />
                  {/* <span className="pointer-events-none absolute right-0 top-0 h-full w-1.5 bg-[#FFD21C] transition-all duration-300 group-hover:w-2.5" /> */}

                  {/* Kotak nombor kuning + ikon mahkota */}
                  <div className="relative flex items-start justify-between px-0 pt-0">
  <div className="flex h-[58px] w-[58px] flex-col items-center justify-center bg-[#FFD21C] text-[#082B59] shadow-lg ring-1 ring-black/5">
    <span className="font-poppins text-2xl font-extrabold leading-none">
      {symbols[index]}
    </span>
  </div>

  <span className="rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 font-poppins text-[10px] font-bold uppercase tracking-[.16em] text-white/75">
    Program rasmi
  </span>
</div>

                  <div className="relative flex flex-1 flex-col px-6 pb-6 pt-7 sm:px-7 sm:pb-7">
                    {/* <p className="font-poppins text-[11px] font-bold uppercase tracking-[.2em] text-[#FFD21C]/80">Pilihan {symbols[index]}</p> */}
                    <h3 className="mt-3 max-w-[95%] font-poppins text-xl font-extrabold uppercase leading-[1.2] text-white sm:text-[22px]">
                      {cardTitles[index]}
                    </h3>
                    <p className="mt-3 font-poppins text-sm leading-6 text-slate-300">
                      {subtitles[index]}.
                    </p> 

                    <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2">
                      <CalendarDaysIcon className="h-6 w-6 text-[#FFD21C]" />
                      <span className="font-poppins text-[11px] font-bold tracking-wide text-white">{dates[index]}</span>
                    </div>
                  

                    <div className=" flex items-center justify-between gap-3 border-t border-white/15 pt-6 mt-7">
                      <span className="font-poppins text-xs font-bold uppercase tracking-[.15em] text-white">Lihat butiran program</span>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E30620] text-white transition duration-300 group-hover:bg-[#FFD21C] group-hover:text-[#082B59]">
                        <ChevronRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                  <span className="absolute bottom-0 left-0 h-1.5 w-0 bg-[#E30620] transition-all duration-500 group-hover:w-full" />
                </motion.button>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-12"
          >
            <button
              type="button"
              onClick={() => setShowDetails(false)}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#062F63]/15 bg-white px-5 py-2.5 font-poppins text-sm font-bold text-[#062F63] transition hover:bg-[#FFD21C]"
            >
              <ChevronRightIcon className="h-4 w-4 rotate-180" />
              Kembali ke pilihan program
            </button>

            <div className="grid items-start gap-6 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.7fr)] lg:gap-8">
              {/* KAD MAKLUMAT PROGRAM DI KIRI — NAVY + LATAR SENI BINA */}
              <div className="relative isolate min-h-[440px] overflow-hidden rounded-2xl bg-[#062F63] p-6 text-white shadow-[0_20px_60px_rgba(6,47,99,.28)] sm:p-8 lg:sticky lg:top-24">
                {/* Letakkan gambar seni bina di public/images/architecture-bg.png */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-52 bg-contain bg-bottom bg-no-repeat opacity-55"
                  style={{ backgroundImage: "url('/images/architecture-bg.png')" }}
                />
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#062F63] via-[#062F63]/95 to-[#062F63]/45" />
                <div className="pointer-events-none absolute -right-8 -top-8 -z-10 h-28 w-28 rounded-full border-[18px] border-[#FFD21C]/20" />
                <div className="pointer-events-none absolute -bottom-12 -left-12 -z-10 h-32 w-32 rounded-full border-[20px] border-[#E30620]/15" />
                <p className="relative text-xs font-bold uppercase tracking-[.2em] text-[#FFD21C] font-poppins">Maklumat Program</p>
                <h3 className="relative mt-4 font-poppins text-2xl font-semibold uppercase leading-tight sm:text-3xl">
                  {dayInfo[activeDay].name}
                </h3>
                <div className="my-6 h-px bg-white/20" />
                <div className="space-y-5 font-poppins">
                  <div className="flex items-start gap-3"><CalendarDaysIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#FFD21C]" /><div><p className="text-xs font-bold uppercase tracking-wider text-white/60">Tarikh</p><p className="mt-1 text-sm font-semibold">{dayInfo[activeDay].date}</p></div></div>
                  <div className="flex items-start gap-3"><MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#FFD21C]" /><div><p className="text-xs font-bold uppercase tracking-wider text-white/60">Lokasi</p><p className="mt-1 text-sm font-semibold">{dayInfo[activeDay].tempat}</p></div></div>
                  <div className="flex items-start gap-3"><ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#FFD21C]" /><div><p className="text-xs font-bold uppercase tracking-wider text-white/60">Masa</p><p className="mt-1 text-sm font-semibold">{dayInfo[activeDay].masa}</p></div></div>
                </div>
              </div>

              {/* SENARAI SESI DI KANAN */}
              <div className="min-w-0 space-y-4">
                <div className="mb-5"><p className="font-poppins text-xs font-bold uppercase tracking-[.2em] text-[#E30620]">Jadual Program</p><h3 className="mt-2 font-poppins text-2xl font-extrabold text-[#062F63] sm:text-3xl">Senarai Sesi</h3></div>
                {schedules[activeDay].map((session, sessionIndex) => {
                  const sessionKey = `${activeDay}-session-${sessionIndex}`;
                  const isOpen = openSessions[sessionKey] ?? false;
                  return (
                    <div key={sessionKey} className="overflow-hidden rounded-2xl bg-[#062F63] shadow-lg">
                      <div className="border-l-[6px] border-[#FFD21C] p-5 sm:p-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div className="min-w-0 flex-1"><span className="inline-flex rounded-full font-poppins bg-[#FFD21C] px-3 py-1 text-xs font-bold text-[#062F63]">{session.hari}</span><h4 className="mt-3 font-poppins text-base font-semibold uppercase leading-snug text-white sm:text-lg">{session.session}</h4><p className="mt-2 font-poppins text-sm leading-6 text-white/65">{session.venue}</p></div>
                          <button type="button" onClick={() => toggleSession(sessionKey)} aria-expanded={isOpen} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#FFD21C] px-4 py-3 font-poppins text-xs font-extrabold uppercase tracking-wider text-[#062F63] transition hover:bg-white">{isOpen ? "Tutup Program" : "Lihat Program"}<ChevronDownIcon className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} /></button>
                        </div>
                      </div>
                      <AnimatePresence initial={false}>
                        {isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden"><div className="space-y-3 bg-slate-50 p-4 sm:p-6">{session.events.map((event, eventIndex) => <div key={`${sessionKey}-event-${eventIndex}`} className="rounded-xl border border-slate-200 bg-white p-4">{event.time && <p className="text-xs font-bold text-[#E30620]">{event.time}</p>}{event.type && <span className="mt-1 inline-block rounded bg-[#E30620] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">{event.type}</span>}<h5 className="mt-2 font-poppins font-bold leading-relaxed text-[#062F63]">{event.title}</h5>{event.description && <p className="mt-1 font-poppins text-sm leading-6 text-slate-500">{event.description}</p>}</div>)}</div></motion.div>}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-14 flex flex-wrap justify-center gap-4 ">
  {/* VIEW PDF */}
  <a
    href="/images/ATUR%20CARA%20TENTATIF%20PERSIDANGAN%20PEMBINAAN%20NEGARA%20BANGSA.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 rounded-xl bg-[#062F63] px-7 py-4 font-poppins text-xs font-bold uppercase tracking-[.12em] text-white transition hover:bg-[#E30620]"
  >
    <ArrowDownTrayIcon className="h-5 w-5" />
    <span>View Atur Cara</span>
  </a>

  {/* DOWNLOAD PDF */}
  <a
  href="/images/ATUR%20CARA%20TENTATIF%20PERSIDANGAN%20PEMBINAAN%20NEGARA%20BANGSA.pdf"
  download
  className="group inline-flex items-center gap-3 rounded-xl bg-[#E30620] px-7 py-4 font-poppins text-xs font-bold uppercase tracking-[.12em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#062F63] hover:shadow-xl"
>
  <ArrowDownTrayIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
  <span>Download Atur Cara</span>
</a>
</div>

        </div>
     
    </section>
  );
}