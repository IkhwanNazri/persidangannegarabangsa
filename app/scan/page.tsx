import ScanQR from "@/app/components/Scanqr";

export default function ScanPage() {
  return (
    <main
      className="min-h-screen w-full bg-[#F5F7FA]"
      style={{
        backgroundColor: "#F5F7FA",
      }}
    >
      <ScanQR />
    </main>
  );
}