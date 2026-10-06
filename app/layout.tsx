import type { Metadata } from "next";
import {
  Poppins,
  Montserrat,
  Instrument_Sans,
  Inter,
  Plus_Jakarta_Sans,
} from "next/font/google";
import Navbar from "@/app/components/BottomNavbar";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Persidangan Negara Bangsa",
  description: "Persidangan Negara Bangsa 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ms"
      className={`${poppins.variable} ${montserrat.variable} ${instrumentSans.variable} ${inter.variable} ${jakarta.variable} antialiased`}
    >
      <body className="min-h-full">
        {children}
        {/* <Navbar /> */}
      </body>
    </html>
  );
}