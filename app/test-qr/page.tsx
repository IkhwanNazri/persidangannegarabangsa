"use client";

import { QRCodeCanvas } from "qrcode.react";

export default function TestQR() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">
        Test QR Peserta
      </h1>

      <QRCodeCanvas
        value="PNB-0001"
        size={300}
      />

      <p className="font-semibold">
        PNB-0001
      </p>
    </main>
  );
}