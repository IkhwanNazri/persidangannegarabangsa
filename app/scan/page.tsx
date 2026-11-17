import ScanQR from "@/app/components/Scanqr";
import OfflineSync from "@/app/components/OfflineSync";

export default function ScanPage() {
  return (
    <main
      className="min-h-screen w-full bg-[#F5F7FA]"
      style={{
        backgroundColor: "#F5F7FA",
      }}
    >
       <OfflineSync />
      <ScanQR />
    </main>
  );
}