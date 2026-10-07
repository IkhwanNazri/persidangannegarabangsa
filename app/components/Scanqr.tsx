"use client";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyv7S5cQ5by4oePsuMTSJAxHkJlthvV6VubIbDM5ZxI_pdbs2B5b3rI5i9yVn2JFTSsnQ/exec";

export default function ScanQR() {
  const scannerRef = useRef<Html5Qrcode | null>(null);

  const [result, setResult] = useState("");
  const [participant, setParticipant] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [checkingIn, setCheckingIn] = useState(false);

  // =========================
  // SCAN PESERTA
  // =========================
  const scanParticipant = async (id: string) => {
    setLoading(true);
    setResult("");
    setParticipant(null);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          action: "scan_participant",
          id,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        setParticipant(null);
        setResult(data.error || "Peserta tidak dijumpai.");
        return;
      }

      setParticipant(data.participant);

      // TERUS REKOD HADIR
      await checkInParticipant(data.participant.id);
    } catch (error) {
      console.error(error);
      setResult("Gagal berhubung dengan server.");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // REKOD KEHADIRAN
  // =========================
  const checkInParticipant = async (id: string) => {
    setCheckingIn(true);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
          action: "check_in",
          id,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        setResult(
          data.error || "Kehadiran gagal direkodkan."
        );
        return;
      }

      setResult(
        data.message || "Kehadiran berjaya direkodkan."
      );
    } catch (error) {
      console.error(error);
      setResult("Gagal merekodkan kehadiran.");
    } finally {
      setCheckingIn(false);
    }
  };

  // =========================
  // QR SCANNER
  // =========================
  useEffect(() => {
    const scanner = new Html5Qrcode("qr-reader");

    scannerRef.current = scanner;

    scanner.start(
      { facingMode: "environment" },
      {
        fps: 10,
        qrbox: {
          width: 250,
          height: 250,
        },
      },
      async (decodedText) => {
        await scanner.stop();
        await scanParticipant(decodedText);
      },
      () => {}
    );

    return () => {
      if (scanner.isScanning) {
        scanner.stop().catch(() => {});
      }
    };
  }, []);

  const isSuccess =
    result.toLowerCase().includes("berjaya") ||
    result.toLowerCase().includes("hadir");

  const isDuplicate =
    result.toLowerCase().includes("sudah direkodkan");

  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      <div className="mx-auto w-full max-w-2xl px-4 py-6 sm:px-6">

        {/* HEADER */}
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#062F63] shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 7h4v4H7zM13 7h4v4h-4zM7 13h4v4H7zM13 13h4v4h-4z"
              />
            </svg>
          </div>

          <h1 className="font-poppins text-2xl font-bold text-[#062F63]">
            Imbas QR Peserta
          </h1>

          <p className="mt-1 font-poppins text-sm text-slate-500">
            Imbas QR peserta untuk merekodkan kehadiran
          </p>
        </div>

        {/* SCANNER CARD */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          <div className="border-b border-slate-100 px-5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-poppins text-sm font-bold text-[#062F63]">
                  Kamera Pengimbas
                </p>

                <p className="mt-0.5 font-poppins text-xs text-slate-400">
                  Halakan kamera kepada QR peserta
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="font-poppins text-xs font-semibold text-green-700">
                  Aktif
                </span>
              </div>
            </div>
          </div>

          {/* CAMERA */}
          <div className="relative bg-black p-2 sm:p-3">
            <div
              id="qr-reader"
              className="w-full overflow-hidden rounded-2xl"
            />

            {/* SCAN FRAME */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="relative h-[220px] w-[220px] sm:h-[250px] sm:w-[250px]">

                {/* TOP LEFT */}
                <span className="absolute left-0 top-0 h-8 w-8 border-l-4 border-t-4 border-white rounded-tl-lg" />

                {/* TOP RIGHT */}
                <span className="absolute right-0 top-0 h-8 w-8 border-r-4 border-t-4 border-white rounded-tr-lg" />

                {/* BOTTOM LEFT */}
                <span className="absolute bottom-0 left-0 h-8 w-8 border-b-4 border-l-4 border-white rounded-bl-lg" />

                {/* BOTTOM RIGHT */}
                <span className="absolute bottom-0 right-0 h-8 w-8 border-b-4 border-r-4 border-white rounded-br-lg" />
              </div>
            </div>
          </div>

          {/* STATUS */}
          <div className="px-5 py-5">

            {loading || checkingIn ? (
              <div className="flex items-center justify-center gap-3 rounded-2xl bg-blue-50 px-4 py-4">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#062F63] border-t-transparent" />

                <p className="font-poppins text-sm font-semibold text-[#062F63]">
                  {checkingIn
                    ? "Merekodkan kehadiran..."
                    : "Mencari peserta..."}
                </p>
              </div>
            ) : result ? (
              <div
                className={`rounded-2xl px-4 py-4 text-center ${
                  isSuccess
                    ? "bg-green-50 text-slate-600"
                    : isDuplicate
                    ? "bg-amber-50 text-amber-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                <p className="font-poppins text-sm font-semibold">
                  {result}
                </p>
              </div>
            ) : (
              <div className="rounded-2xl bg-slate-50 px-4 py-4 text-center">
                <p className="font-poppins text-sm text-slate-500">
                  Sedia untuk mengimbas QR peserta
                </p>
              </div>
            )}
          </div>
        </div>

        {/* PARTICIPANT */}
        {participant && (
          <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            {/* HEADER */}
            <div className="bg-[#062F63] px-5 py-5">
              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19a4 4 0 00-8 0"
                    />
                    <circle
                      cx="11"
                      cy="7"
                      r="4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 8v6M22 11h-6"
                    />
                  </svg>
                </div>

                <div>
                  <p className="font-poppins text-xs font-medium uppercase tracking-wider text-blue-200">
                    Peserta Ditemui
                  </p>

                  <h2 className="font-poppins text-lg font-bold text-white">
                    {participant.name}
                  </h2>
                </div>
              </div>
            </div>

            {/* DETAILS */}
            <div className="divide-y divide-slate-100">

              <div className="px-5 py-4">
                <p className="font-poppins text-xs font-medium text-slate-400">
                  ID Peserta
                </p>

                <p className="mt-1 font-mono text-sm font-bold tracking-wider text-[#062F63]">
                  {participant.id}
                </p>
              </div>

              <div className="px-5 py-4">
                <p className="font-poppins text-xs font-medium text-slate-400">
                  Kategori
                </p>

                <p className="mt-1 font-poppins text-sm font-semibold text-slate-600">
                  {participant.kategoriUtama}
                </p>
              </div>

              {participant.kategoriLain && (
                <div className="px-5 py-4">
                  <p className="font-poppins text-xs font-medium text-slate-400">
                    Detail
                  </p>

                  <p className="mt-1 font-poppins text-sm font-semibold text-slate-600">
                    {participant.kategoriLain}
                  </p>
                </div>
              )}

              {participant.sessions?.length > 0 && (
                <div className="px-5 py-4">
                  <p className="font-poppins text-xs font-medium text-slate-400">
                    Sesi Dipilih
                  </p>

                  <p className="mt-1 font-poppins text-sm font-semibold text-slate-600">
                    {participant.sessions.join(", ")}
                  </p>
                </div>
              )}

            </div>

            {/* ATTENDANCE */}
            <div className="border-t border-slate-100 bg-slate-50 px-5 py-5">
              <div className="flex items-center justify-center gap-2 rounded-2xl bg-green-100 px-4 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-slate-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="font-poppins text-sm font-bold text-slate-600">
                  Kehadiran Direkodkan
                </span>
              </div>
            </div>

          </div>
        )}

        {/* FOOTER */}
        <p className="mt-6 text-center font-poppins text-xs text-slate-400">
          Persidangan Pembinaan Negara Bangsa
        </p>

      </div>

      {/* HTML5 QR CSS */}
      <style jsx global>{`
        #qr-reader {
          width: 100%;
        }

        #qr-reader video {
          width: 100% !important;
          height: auto !important;
          display: block !important;
          object-fit: cover !important;
        }

        #qr-reader__scan_region {
          width: 100% !important;
          min-height: 300px;
          border: none !important;
        }

        #qr-reader__scan_region img {
          display: none !important;
        }

        #qr-reader__dashboard {
          padding: 12px !important;
          background: #ffffff !important;
        }

        #qr-reader__dashboard_section {
          margin: 0 !important;
        }

        #qr-reader__dashboard_section_csr {
          margin-top: 8px !important;
        }

        #qr-reader button {
          border: none !important;
          border-radius: 10px !important;
          background: #062f63 !important;
          color: white !important;
          padding: 9px 14px !important;
          font-family: inherit !important;
          font-weight: 600 !important;
        }

        #qr-reader select {
          border-radius: 8px !important;
          border: 1px solid #e2e8f0 !important;
          padding: 8px !important;
        }

        @media (max-width: 640px) {
          #qr-reader__scan_region {
            min-height: 280px;
          }
        }
      `}</style>
    </main>
  );
}