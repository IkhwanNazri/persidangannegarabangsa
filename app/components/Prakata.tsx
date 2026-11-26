"use client";

import Image from "next/image";
import { useState } from "react";
import { Great_Vibes } from "next/font/google";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const script = Great_Vibes({ subsets: ["latin"], weight: "400" });

type Ucapan = {
  id: string;
  tajuk: string;
  jawatanTajuk: string;
  gambar: string;
  /** Gambar hiasan penuh lebar di bawah blok (pilihan) */
  hiasanBawah?: string;
   latarGradient?: string;
  nama: string;
  jawatan: string;
  perenggan: string[];
};

// Bilangan perenggan yang dipaparkan sebelum klik "Baca Selanjutnya"
const PERENGGAN_AWAL = 3;

const ucapan: Ucapan[] = [
  {
    id: "pm",
    tajuk: "Sekapur Sirih",
    jawatanTajuk: "YAB Perdana Menteri",
    gambar: "/images/prakata/anwaribrahim.png",
    hiasanBawah: "/images/prakata/harimau-strip.png",
    
    nama: "ANWAR IBRAHIM",
    jawatan: "Perdana Menteri",
    perenggan: [
      "Assalamualaikum warahmatullahi wabarakatuh. Salam Sejahtera, Salam Perpaduan dan Salam Malaysia MADANI.",
      "Alhamdulillah, saya mengalu-alukan penganjuran Persidangan Pembinaan Negara Bangsa oleh Kementerian Perpaduan Negara. Persidangan ini menggalas amanah besar untuk memeterai kesepakatan nasional dan melakar hala tuju bersama, demi menjulang masa depan Malaysia yang utuh bersatu, berdaulat, dan makmur sejahtera.",
      "Kesepakatan ini berpaksikan keluhuran Perlembagaan Persekutuan, penghayatan prinsip-prinsip Rukun Negara dan kesetiaan kepada negara. Berteraskan asas tersebut, kepelbagaian etnik, agama, budaya dan wilayah perlu dipertaut melalui identiti kebangsaan yang mengukuhkan rasa memiliki tanah air.",
      "Tanggungjawab bersama ini bertambah kukuh apabila rakyat merasai mereka berada dalam sebuah negara yang dikongsi secara adil dan saksama. Peluang yang saksama, manfaat pembangunan yang dinikmati bersama dan institusi yang dipercayai memperteguh keyakinan rakyat terhadap tadbir urus negara. Keyakinan tersebut adalah antara asas yang boleh mengukuhkan perpaduan, manakala perpaduan menyediakan landasan bagi pembangunan yang stabil dan mampan.",
      "Hubungan erat antara perpaduan dan pembangunan inilah yang mendasari aspirasi Rancangan Malaysia Ketiga Belas 2026–2030 dalam pembentukan negara bangsa. Selaras dengan aspirasi Malaysia MADANI, usaha ini menuntut kesepaduan dasar, pembangunan sosial yang inklusif dan penyertaan seluruh institusi masyarakat. Usaha bersama ini perlu berteraskan wahdatul fikr, wahdatul ‘amal dan wahdatul ghayah, yakni kesatuan pemikiran, kesatuan gerak kerja dan kesatuan matlamat.",
      "Bagi merintis hala tuju dan kebersamaan tersebut, persidangan ini menghimpunkan pemimpin, sarjana, pembuat dasar dan masyarakat untuk meneliti cabaran serta menyepakati keutamaan negara. Saya mengharapkan persidangan ini menghasilkan kesepakatan dan resolusi yang memperkukuh pertimbangan dasar serta menggerakkan tanggungjawab bersama dalam pembinaan negara bangsa. Komitmen ini perlu diteruskan demi mewariskan sebuah negara yang aman, bermaruah, progresif dan bersatu padu kepada generasi akan datang.",
      "Tahniah kepada Kementerian Perpaduan Negara dan semua pihak yang menjayakan persidangan ini. Selamat bersidang.",
    ],
  },
  {
    id: "menteri",
    tajuk: "Seulas Pinang",
    jawatanTajuk: "YB Menteri Perpaduan",
    gambar: "/images/prakata/ybm.png",
    nama: "AARON AGO DAGANG",
    jawatan: "Menteri Perpaduan Negara",
    perenggan: [
      "Salam sejahtera, Salam Perpaduan dan Salam Malaysia MADANI.",
      "Pembinaan negara bangsa merupakan agenda strategik negara yang penting bagi memastikan Malaysia terus kekal sebagai sebuah negara majmuk yang aman, stabil, berdaulat dan dihormati. Pembinaan negara bangsa merupakan proses berterusan dalam membina identiti kebangsaan, rasa kepunyaan bersama, kepercayaan antara komuniti dan kesetiaan kepada asas kenegaraan negara.",
      "Persidangan ini seharusnya menjadi ruang untuk membina jaringan strategik merentas pelbagai organisasi dan institusi agar menjadi pemacu kepada pengukuhan kefahaman dan tanggungjawab bersama dalam menjayakan agenda pembinaan negara bangsa. Atas kepentingan gerak usaha yang sinergi, kefahaman bersama tersebut perlu diterjemahkan kepada kerjasama yang berterusan dan bersepadu melibatkan semua pihak.",
      "Melalui pembentangan kertas, diskusi dan perbincangan yang dilaksanakan, saya berharap persidangan ini dapat merumuskan dan memperkukuh kefahaman tentang pembinaan negara bangsa. Rumusan tersebut diharapkan dapat diterjemahkan kepada satu resolusi yang signifikan serta relevan dengan realiti fabrik sosial dalam negara kita, seterusnya dapat memandu kita merealisasikan aspirasi pembinaan negara bangsa yang dihasratkan.",
      "Akhir kata, saya merakamkan penghargaan kepada semua pihak dalam menjayakan persidangan ini khususnya para pembentang, moderator, peserta dan rakan strategik atas komitmen dan sumbangan dalam merealisasikan persidangan ini. Selamat bersidang.",
    ],
  },
  {
    id: "ksu",
    tajuk: "Selayang Pandang",
    jawatanTajuk: "Ketua Setiausaha",
    gambar: "/images/prakata/ksu-potong.jpeg",
      latarGradient: "bg-gradient-to-b from-white via-white to-[#E3F5FB]",
    nama: "HASLINA ABDUL HAMID",
    jawatan: "Ketua Setiausaha, Kementerian Perpaduan Negara",
    perenggan: [
      "Assalamualaikum warahmatullahi wabarakatuh. Salam Sejahtera, Salam Perpaduan dan Salam Malaysia MADANI.",
      "Saya mengalu-alukan kehadiran para peserta ke Persidangan Pembinaan Negara Bangsa yang berlangsung pada 30 November hingga 2 Disember 2026 di Pusat Konvensyen Antarabangsa Putrajaya (PICC).",
      "Penganjuran persidangan ini menyediakan ruang perkongsian ilmu bagi menyokong pelaksanaan agenda Pembentukan Negara Bangsa dalam Rancangan Malaysia Ketiga Belas 2026–2030 (RMK13). Pembentangan kertas dan sesi perbincangan dalam persidangan ini adalah satu manifestasi bahawa ruang diskusi dan konsultasi dibuka sewajarnya untuk mengumpul buah fikiran dan mendapatkan pelbagai pandangan bagi merealisasikan hala tuju dan usaha-usaha membina negara bangsa yang digagaskan oleh Kementerian Perpaduan Negara (KPN).",
      "Justeru, saya menyeru semua peserta agar memanfaatkan peluang bertukar pandangan dengan para sarjana dalam persidangan ini bagi memperoleh input yang bernilai untuk memperkukuh usaha pembinaan negara bangsa mengikut peranan dan bidang masing-masing. Saya mengharapkan hasil perbincangan serta perkongsian pandangan sepanjang persidangan ini dapat dirumuskan sebagai cadangan yang praktikal untuk memandu usaha pembinaan negara bangsa dengan lebih terarah dan berkesan.",
      "Saya ingin mengambil kesempatan untuk merakamkan penghargaan kepada jawatankuasa penganjur, urus setia serta warga KPN atas komitmen menjayakan persidangan ini. Penghargaan turut ditujukan kepada para pembentang, moderator, peserta dan rakan strategik atas sumbangan ilmu serta kerjasama yang diberikan.",
      "Semoga persidangan ini berjalan lancar dan menjadi titik tolak yang memperkukuh usaha membina negara bangsa kita bersama. Selamat bersidang.",
    ],
  },
];

export default function Prakata() {
  return (
    <section id="prakata" className="relative overflow-hidden">
      {ucapan.map((item, index) => (
        <UcapanBlock key={item.id} item={item} reverse={index % 2 === 1} />
      ))}
    </section>
  );
}

function UcapanBlock({ item, reverse }: { item: Ucapan; reverse: boolean }) {
  const [open, setOpen] = useState(false);
  const awal = item.perenggan.slice(0, PERENGGAN_AWAL);
  const baki = item.perenggan.slice(PERENGGAN_AWAL);

  return (
    <div className={item.latarGradient ?? (reverse ? "bg-[#E3F5FB]" : "bg-white")}>
      <div
        className={`mx-auto flex w-full max-w-[1200px] flex-col gap-8 px-6 py-14 sm:px-10 sm:py-20 lg:items-start lg:gap-14 lg:px-16 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* GAMBAR */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-[75%] max-w-[300px] shrink-0 lg:sticky lg:top-28 lg:mx-0 lg:w-[34%] lg:max-w-none"
        >
          <div
            className={`absolute -inset-3 rounded-[32px] border-2 border-[#D4AF37]/60 ${
              reverse ? "" : ""
            }`}
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]  shadow-[0_18px_40px_rgba(31,42,122,0.18)]">
            <Image
              src={item.gambar}
              alt={item.nama}
              fill
              sizes="(max-width: 1024px) 300px, 400px"
              className="object-cover object-top"
            />
          </div>
        </motion.div>

        {/* TEKS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="min-w-0 flex-1"
        >
          <h2
            className={`${script.className} text-center text-[52px] leading-none text-[#1F2A7A] sm:text-[72px] lg:text-left`}
          >
            {item.tajuk}
          </h2>
          <p className="mt-2 text-center font-montserrat text-xl font-bold tracking-tight text-[#1F2A7A] sm:text-3xl lg:text-left">
            {item.jawatanTajuk}
          </p>
          <div className="mx-auto mt-4 h-0.5 w-20 rounded-full bg-gradient-to-r from-[#D4AF37] to-transparent lg:mx-0" />

          <div className="mt-6 space-y-4 text-left font-poppins text-sm leading-7 text-[#1F2A7A]/85 sm:text-[15px] lg:text-justify">
            {awal.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-4 overflow-hidden"
                >
                  {baki.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {baki.length > 0 && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37] px-5 py-2 font-poppins text-xs font-semibold uppercase tracking-wider text-[#1F2A7A] transition hover:bg-[#1F2A7A] hover:text-white"
            >
              {open ? "Tutup" : "Baca Selanjutnya"}
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
          )}

          {/* TANDATANGAN */}
          <div className="mt-8 border-l-4 border-[#D4AF37] pl-4">
            <p className="font-poppins text-sm font-bold tracking-wide text-[#1F2A7A]">
              {item.nama}
            </p>
            <p className="font-poppins text-sm text-[#1F2A7A]/80">{item.jawatan}</p>
          </div>
        </motion.div>
      </div>

      {/* HIASAN BAWAH */}
      {item.hiasanBawah && (
        <Image
          src={item.hiasanBawah}
          alt=""
          aria-hidden
          width={2400}
          height={518}
          sizes="100vw"
          className="pointer-events-none -mt-10 block h-auto w-full select-none sm:-mt-20"
          // Pudar ke atas: atas lutsinar, bawah biru penuh (macam poster)
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.7) 60%, #000 90%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.7) 60%, #000 90%)",
          }}
        />
      )}
    </div>
  );
}
