import ScanQR from "@/app/components/Scanqr";
import OfflineSync from "@/app/components/OfflineSync";
import type { Metadata, Viewport } from "next";
import ScanSplash from "@/app/components/ScanSplash";
// tukar import ScanQR kepada:
import ScanShell from "@/app/components/ScanShell";

export const metadata: Metadata = {
  manifest: "/scan.webmanifest",
  appleWebApp: { capable: true, title: "Negara Bangsa", statusBarStyle: "default" },
  icons: { apple: "/icons/scan-192.png" },
};
export const viewport: Viewport = { themeColor: "#062F63" };

export default function ScanPage() {
  return (
    <main
      className="min-h-screen w-full bg-[#F5F7FA]"
      style={{
        backgroundColor: "#F5F7FA",
      }}
    >
         <ScanSplash />

           <div className="mx-auto w-full max-w-md">
        <OfflineSync />
      </div>
     
      {/* <ScanQR /> */}
      <ScanShell />
    </main>
  );
}