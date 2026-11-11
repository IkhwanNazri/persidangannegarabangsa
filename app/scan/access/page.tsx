
"use client";

import { useEffect } from "react";

export default function ScanAccessPage() {
  useEffect(() => {
    const activateAccess = async () => {
      const params = new URLSearchParams(
        window.location.hash.substring(1)
      );

      const key = params.get("key");
//       console.log("URL KEY DEBUG:", {
//   received: !!key,
//   length: key?.length,
// });

      if (!key) {
        document.body.innerText = "Pautan akses tidak sah.";
        return;
      }

      try {
        const response = await fetch("/api/attendance/access", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key }),
        });

        const data = await response.json();

        if (data.success) {
          window.location.replace("/scan");
        } else {
          document.body.innerText = "Akses ditolak.";
        }
      } catch {
        document.body.innerText = "Gagal mendapatkan akses.";
      }
    };

    activateAccess();
  }, []);

  return <div className="p-10 text-center">
    Sedang mengesahkan akses urus setia...
  </div>;
}
