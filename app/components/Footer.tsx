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

        <div className="grid grid-cols- items-center  gap-8 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1.2fr]">

          {/* HUBUNGI KAMI */}
          <div className="mx-auto justify-center items-center lg:px-50">
            <h3 className="mb-5 text-[18px] font-bold">
              HUBUNGI KAMI
            </h3>

            <div className="space-y-1.5 text-[13px] leading-5">
              <p className="font-bold whitespace-nowrap">
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
            {/* <div className="whitespace-nowrap mx-auto text-center  mt-6">
              <p className="font-light text-xs mx-auto  text-center items-center justify-center ">
               Paparan terbaik menggunakan pelayar Mozilla Firefox dan Google Chrome dengan resolusi skrin 1366x768.Hakcipta Terpelihara @ 2026 Kementerian Perpaduan Negara
              </p>
            </div> */}
          </div>

          {/* TAG AWAN */}
          {/* <div>
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
          </div> */}

          {/* PAUTAN */}
          {/* <div>
            <ul className="space-y-1 text-[13px] leading-5">
              <li>• &nbsp;Penafian</li>
              <li>• &nbsp;Dasar Privasi</li>
              <li>• &nbsp;Dasar Keselamatan</li>
              <li>• &nbsp;Peta Laman</li>
            </ul>
          </div> */}

          {/* INFO + SOCIAL */}
          <div className="flex flex-col justify-between">
            <Image
                src="/images/qr.webp"
                alt="QR Perpaduan Negara"
                width={100}
                height={100}
                sizes="50vw"
                className="block max-h-40 w-[100px] sm:w-[260px]  object-contain"
              />

            {/* <div className="text-[12px] leading-5">
              <p>
                Paparan terbaik menggunakan pelayar Mozilla
              </p>
              <p>
                Firefox dan Google Chrome dengan resolusi skrin
              </p>
              <p>1366x768.</p>

              <p>
                Hakcipta Terpelihara @ 2026 Kementerian
              </p>
              <p>Perpaduan Negara</p>
            </div> */}

            
            <div className=" flex items-center gap-2 mx-auto">
              <a
                href="https://www.facebook.com/PerpaduanNegara"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4267B2]"
              >
               <Image
                src="/images/icon/facebook.png"
                alt=""
                width={100}
                height={100}
                sizes="100vw"
                className="block max-h-96 w-[100px] sm:w-[260px]  object-cover"
              />
              </a>
              <a
                href="https://twitter.com/PerpaduanNegara"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4267B2]"
              >
               <Image
                src="/images/icon/twitter.webp"
                alt=""
                width={500}
                height={500}
                sizes="100vw"
                className="block max-h-96 w-[220px] sm:w-[260px]  object-cover"
              />
              </a>
              <a
                href="https://www.youtube.com/channel/UCGcsPzjDxzp_XUivH93WDwQ"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4267B2]"
              >
               <Image
                src="/images/icon/youtube.webp"
                alt=""
                width={500}
                height={500}
                sizes="100vw"
                className="block max-h-96 w-[220px] sm:w-[260px]  object-cover"
              />
              </a>
              <a
                href="https://www.instagram.com/perpaduannegara/"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4267B2]"
              >
               <Image
                src="/images/icon/ig.webp"
                alt=""
                width={500}
                height={500}
                sizes="100vw"
                className="block max-h-96 w-[220px] sm:w-[260px]  object-cover"
              />
              </a>
              <a
                href="https://www.perpaduan.gov.my/index.php/bm/perkhidmatann/perkhidmatan-lainn/e-penyertaann/rss"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4267B2]"
              >
               <Image
                src="/images/icon/rss.webp"
                alt=""
                width={500}
                height={500}
                sizes="100vw"
                className="block max-h-96 w-[220px] sm:w-[260px]  object-cover"
              />
              </a>

              
            </div>

          </div>
        </div>
        <div className="whitespace-nowrap mx-auto text-center  mt-6">
              <p className="font-light text-xs mx-auto  text-center items-center justify-center ">
               Paparan terbaik menggunakan pelayar Mozilla Firefox dan Google Chrome dengan resolusi skrin 1366x768.Hakcipta Terpelihara @ 2026 Kementerian Perpaduan Negara
              </p>
            </div>
      </div>
    </footer>
  );
}