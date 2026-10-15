"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const panelMembers = [
  {
    name: "Tan Sri Nazir Razak",
    role: "Pengerusi",
    organization: "Yayasan Tun Razak",
    image: "/images/panel/nazir-razak.png",
  },
  {
    name: "H.E. Ruzaina Hasan",
    role: "Pemangku Timbalan Pesuruhjaya Tinggi British ke Malaysia",
    organization: "British High Commission Kuala Lumpur",
    image: "/images/panel/ruzaina-hasan.png",
  },
  {
    name: "YB Syahredzan Johan",
    role: "Ahli Parlimen Bangi",
    organization: "Parliament of Malaysia",
    image: "/images/panel/syahredzan-johan.png",
  },
  {
    name: "Ms Aira Azhari",
    role: "Ketua Pegawai Eksekutif",
    organization: "IDEAS",
    image: "/images/panel/aira-azhari.png",
  },
];

const moderators = [
  {
    name: "Jason Wee",
    role: "Pengasas Bersama",
    organization: "Architects of Diversity",
    badge: "MODERATOR",
    image: "/images/panel/jason-wee.png",
  },
  {
    name: "Ms Nurfarahanim Che Mansor",
    role: "Ahli Jawatankuasa",
    organization: "Chevening Alumni Malaysia",
    badge: "PENGACARA MAJLIS",
    image: "/images/panel/nurfarahanim.png",
  },
];

const biography =
  "YB Datuk Aaron Ago Dagang telah berkhidmat sebagai Menteri Perpaduan Negara sejak Disember 2022. Beliau memikul tanggungjawab dalam bidang Perpaduan dan Universiti Putra Malaysia, serta memainkan peranan dalam memperkukuh perpaduan nasional. Beliau turut menyokong usaha memelihara keharmonian masyarakat majmuk, memperkukuh penghayatan Rukun Negara dan memupuk semangat kebersamaan dalam kalangan rakyat Malaysia.";

export default function PanelPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#102744] font-poppins">
      

      {/* BANNER */}
      <section className="relative flex min-h-[170px] items-center overflow-hidden sm:min-h-[300px]">
        <Image
          src="/images/bangunan.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-white/25" />

        <div className="relative mx-auto w-full max-w-[1240px] px-6 py-10 lg:px-10">
          <p className="font-serif text-3xl font-bold tracking-wide text-[#102744] sm:text-4xl">
            SUARA DIALOG
          </p>

          <p className="mt-2 max-w-xl text-sm text-[#243B58]">
            Perspektif terkemuka. Satu perbualan nasional yang penting.
          </p>

          <div className="mt-5 flex items-center gap-2">
            <span className="h-px w-10 bg-[#C8A23A]" />
            <span className="h-2 w-2 rotate-45 bg-[#C8A23A]" />
            <span className="h-px w-5 bg-[#C8A23A]" />
          </div>
        </div>
      </section>

      {/* PROFIL UTAMA */}
      <section className="relative overflow-hidden bg-[#102744] text-white">
        <Image
          src="/images/panel/background.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />

        <div className="absolute inset-0 bg-[#071B35]/85" />

        <div className="relative mx-auto grid max-w-[1000px] items-center gap-10 px-6 py-14 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-10 lg:py-20">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[300px] border-[5px] border-[#D7B13F] bg-white p-1 shadow-2xl sm:max-w-[340px]">
              <Image
                src="/images/panel/aaron-ago-dagang.png"
                alt="YB Datuk Aaron Ago Dagang"
                width={500}
                height={650}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D7B13F]">
              Ucaptama
            </p>

            <h1 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              YB Datuk Aaron
              <br />
              Ago Dagang
            </h1>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-px w-10 bg-[#D7B13F]" />
              <span className="h-2 w-2 rotate-45 bg-[#D7B13F]" />
              <span className="h-px w-5 bg-[#D7B13F]" />
            </div>

            <p className="mt-5 text-sm font-semibold">
              Menteri Perpaduan Negara
            </p>

            <p className="mt-1 text-xs text-white/60">
              Ministry of National Unity
            </p>

            <p className="mt-6 text-sm leading-7 text-white/75">
              {biography}
            </p>
          </div>
        </div>
      </section>

      {/* AHLI PANEL */}
      <section className="bg-[#FCFCFB] px-5 py-14 sm:py-16">
        <div className="mx-auto max-w-[1000px]">
          <SectionHeading title="AHLI PANEL" />

          <div className="mx-auto mt-9 grid max-w-[850px] grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
            {panelMembers.map((person) => (
              <ProfileCard
                key={person.name}
                name={person.name}
                role={person.role}
                organization={person.organization}
                image={person.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MENGEMUDI SESI PETANG */}
      <section className="border-y border-[#E6E4DE] bg-[#F3F3F0] px-5 py-14 sm:py-16">
        <div className="mx-auto max-w-[1000px]">
          <SectionHeading title="MENGEMUDI SESI PETANG" />

          <div className="mx-auto mt-9 grid max-w-[560px] grid-cols-2 gap-4 sm:gap-5">
            {moderators.map((person) => (
              <ProfileCard
                key={person.name}
                name={person.name}
                role={person.role}
                organization={person.organization}
                image={person.image}
                badge={person.badge}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex justify-center bg-white px-5 py-8">
        <Link
          href="/#rsvp"
          className="inline-flex items-center gap-3 bg-[#D1A51F] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#102744] transition hover:bg-[#102744] hover:text-white"
        >
          Daftar Sekarang
          <ArrowUpRightIcon className="h-4 w-4" />
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#071B35] px-6 py-12 text-white sm:py-14">
        <div className="mx-auto grid max-w-[1000px] gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/images/logo.PNG"
              alt="Seri Negara Dialogue"
              width={220}
              height={75}
              className="h-12 w-auto object-contain"
            />

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-16 w-12 items-center justify-center bg-white p-1">
                <Image
                  src="/images/chevening.png"
                  alt="Chevening"
                  width={80}
                  height={100}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#D7B13F]">
                  Dianjurkan oleh
                </p>
                <p className="mt-2 font-serif text-sm">
                  Chevening Alumni Malaysia
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D7B13F]">
              Pautan Pantas
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/75">
              <FooterLink href="https://www.perpaduan.gov.my">
                Ministry of National Unity
              </FooterLink>
              <FooterLink href="https://www.jmm.gov.my">
                Muzium Negara – Jabatan Muzium Malaysia
              </FooterLink>
              <FooterLink href="https://www.gov.uk/world/organisations/british-high-commission-kuala-lumpur">
                British High Commission Kuala Lumpur
              </FooterLink>
              <FooterLink href="https://www.chevening.org">
                Chevening
              </FooterLink>
            </div>

            <p className="mt-5 text-[10px] leading-5 text-white/45">
              Laman web rasmi, dibuka dalam tab baharu.
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8">
            <div className="flex justify-start md:justify-end">
              <Link
                href="https://www.instagram.com/"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-sm transition hover:border-[#D7B13F] hover:text-[#D7B13F]"
              >
                IG
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-white/60 md:justify-end">
              <Link href="/notis-privasi">Notis privasi</Link>
              <Link href="/terma-penggunaan">Terma Penggunaan</Link>
              <Link href="/hubungi">Hubungi</Link>
            </div>

            <p className="text-xs font-semibold uppercase leading-6 tracking-[0.15em] text-[#D7B13F] md:text-right">
              Malaysia yang lebih inklusif dan bersatu
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-[1000px] flex-col gap-4 border-t border-white/10 pt-6 text-[10px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dialog Seri Negara. Hak cipta terpelihara.</p>
          <p>Dikuasakan oleh Sistem Pengurusan Web.</p>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="font-serif text-2xl font-bold tracking-[0.08em] text-[#102744] sm:text-3xl">
        {title}
      </h2>

      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="h-px w-8 bg-[#C8A23A]" />
        <span className="h-2 w-2 rotate-45 bg-[#C8A23A]" />
        <span className="h-px w-4 bg-[#C8A23A]" />
        <span className="h-1.5 w-1.5 rotate-45 bg-[#C8A23A]/70" />
        <span className="h-px w-8 bg-[#C8A23A]" />
      </div>
    </div>
  );
}

type ProfileCardProps = {
  name: string;
  role: string;
  organization: string;
  image: string;
  badge?: string;
};

function ProfileCard({
  name,
  role,
  organization,
  image,
  badge,
}: ProfileCardProps) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden border border-[#E4E4E0] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#EAEAEA]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 45vw, 220px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {badge && (
          <span className="absolute right-0 top-3 bg-[#D7B13F] px-3 py-1 text-[8px] font-bold tracking-[0.1em] text-[#102744] sm:text-[9px]">
            {badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <h3 className="font-serif text-sm font-bold leading-5 text-[#102744] sm:text-base">
          {name}
        </h3>

        <p className="mt-2 text-[10px] leading-4 text-[#64748B] sm:text-xs sm:leading-5">
          {role}
        </p>

        <p className="mt-1 text-[10px] leading-4 text-[#64748B] sm:text-xs sm:leading-5">
          {organization}
        </p>

        <Link
          href="/#rsvp"
          className="mt-4 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#B58B12] transition hover:text-[#102744]"
        >
          Lihat Profil
          <ArrowUpRightIcon className="h-3 w-3" />
        </Link>
      </div>
    </article>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block transition hover:text-[#D7B13F]"
    >
      {children} ↗
    </Link>
  );
}