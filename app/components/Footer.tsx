import {
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
// import {
//   Facebook,
//   Twitter,
//   Youtube,
//   Instagram,
//   Rss,
// } from "lucide-react";


export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#123c9c] text-white">

      {/* Corak background */}
      <div className="absolute inset-0 opacity-40 ">
        <div className="absolute inset-0">
                <Image
                  src="/images/blue.png"
                  alt="BG"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-[1366px] px-6 py-8 md:px-10 lg:px-12">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1.2fr]">

          {/* HUBUNGI KAMI */}
          <div>
            <h3 className="mb-5 text-[18px] font-bold">
              HUBUNGI KAMI
            </h3>

            <div className="space-y-1.5 text-[13px] leading-5">
              <p className="font-bold">
                KEMENTERIAN PERPADUAN NEGARA
              </p>

              <p>Aras 5 - 10, Blok F9, Parcel F,</p>
              <p>Lebuh Perdana Timur,</p>
              <p>Presint 1, 62000 Putrajaya, MALAYSIA</p>
            </div>

            <div className="mt-7 space-y-3 text-[13px]">
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-4 w-4 shrink-0" />
                <span>+603-8091 8000</span>
              </div>

              <div className="flex items-center gap-3">
                <EnvelopeIcon className="h-4 w-4 shrink-0" />
                <span>pro[at]perpaduan[dot]gov[dot]my</span>
              </div>
            </div>
          </div>

          {/* TAG AWAN */}
          <div>
            <h3 className="mb-5 text-[18px] font-bold">
              TAG AWAN
            </h3>

            <div className="flex flex-col items-start gap-2 text-[13px]">
              {[
                "Visi & Misi",
                "Sekretariat Majlis Perpaduan",
                "Sejarah",
                "Pengurusan Tertinggi",
                "Fungsi Bahagian",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="rounded-md bg-[#4337b8] px-3 py-1.5 transition hover:bg-[#5144d0]"
                >
                  •&nbsp; {item}
                </a>
              ))}
            </div>
          </div>

          {/* PAUTAN */}
          <div>
            <ul className="space-y-1 text-[13px] leading-5">
              <li>• &nbsp;Penafian</li>
              <li>• &nbsp;Dasar Privasi</li>
              <li>• &nbsp;Dasar Keselamatan</li>
              <li>• &nbsp;Peta Laman</li>
            </ul>
          </div>

          {/* INFO + SOCIAL */}
          <div className="flex flex-col justify-between">

            <div className="text-[12px] leading-5">
              <p>
                Paparan terbaik menggunakan pelayar Mozilla
              </p>
              <p>
                Firefox dan Google Chrome dengan resolusi skrin
              </p>
              <p>1366x768.</p>

              <p>
                Hakcipta Terpelihara @ 2021 Kementerian
              </p>
              <p>Perpaduan Negara</p>
            </div>

            {/* SOCIAL */}
            {/* <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4267B2]"
              >
                <Facebook size={17} fill="white" />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#29ABE2]"
              >
                <Twitter size={17} fill="white" />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F44336]"
              >
                <Youtube size={17} fill="white" />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E4405F]"
              >
                <Instagram size={17} />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F58220]"
              >
                <Rss size={17} />
              </a>
            </div> */}

          </div>
        </div>
      </div>
    </footer>
  );
}