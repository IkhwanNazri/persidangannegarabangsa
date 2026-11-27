"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import type { PageFlip } from "page-flip";

type FlipbookProps = {
  /** Senarai gambar setiap muka (jana guna scripts/pdf-to-flipbook.mjs) */
  pages: string[];
  /** Fail PDF asal untuk butang Download */
  downloadSrc?: string;
  open: boolean;
  onClose: () => void;
  title?: string;
};

// Preload semua gambar + dapatkan nisbah tinggi/lebar muka pertama
const preloadImages = (urls: string[], onProgress: (done: number) => void) => {
  let done = 0;
  return Promise.all(
    urls.map(
      (url) =>
        new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new window.Image();
          img.onload = () => {
            onProgress(++done);
            resolve(img);
          };
          img.onerror = () => reject(new Error(`Gagal load ${url}`));
          img.src = url;
        })
    )
  ).then((imgs) => imgs[0].naturalHeight / imgs[0].naturalWidth);
};

export default function Flipbook({
  pages,
  downloadSrc,
  open,
  onClose,
  title = "Buku Program",
}: FlipbookProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const flipRef = useRef<PageFlip | null>(null);
  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Kunci stabil supaya effect tak re-run bila parent hantar array baru setiap render
  const pagesKey = pages.join("|");

  useEffect(() => setMounted(true), []);

  // Lock scroll + tutup guna ESC
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") flipRef.current?.flipNext();
      if (e.key === "ArrowLeft") flipRef.current?.flipPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  // Load gambar + init flipbook
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setReady(false);
    setError(null);
    setPage(0);

    setLoaded(0);

    (async () => {
      try {
        const [ratio, { PageFlip }] = await Promise.all([
          preloadImages(pages, (n) => !cancelled && setLoaded(n)),
          import("page-flip"),
        ]);
        if (cancelled || !hostRef.current) return;

        // page-flip buang element ni masa destroy, jadi buat element sendiri (bukan milik React)
        const el = document.createElement("div");
        hostRef.current.appendChild(el);
        // Muat dalam skrin: lebar maksimum ikut tinggi viewport
        hostRef.current.style.maxWidth = `min(1400px, calc((100dvh - 170px) / ${ratio}))`;

        // Setiap muka buku program dah pun spread 2 muka (landscape), jadi paparkan satu
        // muka sekali gus. minWidth besar = page-flip sentiasa guna mod "portrait" (single page).
        const baseWidth = 1200;
        const flip = new PageFlip(el, {
          width: baseWidth,
          height: Math.round(baseWidth * ratio),
          size: "stretch",
          minWidth: 10000,
          maxWidth: 1200,
          minHeight: 100,
          maxHeight: Math.round(1200 * ratio),
          usePortrait: true,
          maxShadowOpacity: 0.5,
          flippingTime: 800,
          mobileScrollSupport: false,
        });
        flip.on("flip", (e) => setPage(Number(e.data)));

        // Guna mod HTML (<img> sebenar), bukan loadFromImages (canvas). Mod canvas tak kira
        // devicePixelRatio, jadi gambar nampak pecah/kabur kat phone (skrin 2x/3x).
        const pageEls = pages.map((src, i) => {
          const pageEl = document.createElement("div");
          pageEl.style.background = "#fff";
          const img = document.createElement("img");
          img.src = src;
          img.alt = `Muka ${i + 1}`;
          img.draggable = false;
          img.decoding = "async";
          img.style.cssText = "display:block;width:100%;height:100%;object-fit:contain;user-select:none;";
          pageEl.appendChild(img);
          return pageEl;
        });
        flip.loadFromHTML(pageEls);
        // page-flip set min-width = minWidth pada element (dalam loadFromHTML); buang supaya tak overflow
        el.style.minWidth = "0";
        window.dispatchEvent(new Event("resize"));
        flipRef.current = flip;
        setPageCount(pages.length);
        setReady(true);
      } catch (err) {
        console.error(err);
        if (!cancelled) setError("Gagal memuatkan buku program.");
      }
    })();

    return () => {
      cancelled = true;
      flipRef.current?.destroy();
      flipRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, pagesKey]);

  if (!mounted) return null;

  const percent = pages.length ? Math.round((loaded / pages.length) * 100) : 0;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="flipbook"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex flex-col bg-[#031a38]/10 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-4">
            <h3 className="bg-purple-800 px-5 py-2 rounded-2xl truncate font-poppins text-sm font-bold uppercase tracking-[.12em] text-white sm:text-base ">
              <span className="px-2">|</span>  
              {title}
            </h3>
            <div className="flex shrink-0 items-center gap-2">
              {downloadSrc && (
                <a
                  href={downloadSrc}
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E30620] px-3 py-2 font-poppins text-[11px] font-bold uppercase tracking-wider text-white transition hover:bg-[#FFD21C] hover:text-[#062F63]"
                >
                  <ArrowDownTrayIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">Download</span>
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup"
                className="rounded-lg bg-purple-900 p-2 text-white transition hover:bg-purple-500"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* BOOK */}
          <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center px-2 sm:px-16">
            {!ready && !error && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-[#FFD21C]" />
                <p className="font-poppins text-sm text-white/80">
                  Memuatkan buku program{` (${percent}%)`}
                </p>
                <div className="h-1.5 w-56 overflow-hidden rounded-full bg-white/15">
                  <div
                    className="h-full rounded-full bg-[#FFD21C] transition-all"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            )}

            {error && <p className="absolute inset-0 flex items-center justify-center font-poppins text-sm text-red-300">{error}</p>}

            <div
              ref={hostRef}
              className={`mx-auto w-full transition-opacity duration-500 ${
                ready ? "opacity-100" : "opacity-0"
              }`}
            />

            {ready && (
              <div className="mt-4 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => flipRef.current?.flipPrev()}
                  aria-label="Muka sebelum"
                  className="rounded-full bg-purple-900 p-2 text-white transition hover:bg-purple-500 "
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <span className="rounded-2xl bg-purple-800 px-3 py-2 font-poppins text-xs font-semibold tracking-wider text-white">
                  Muka {page + 1} / {pageCount}
                </span>
                <button
                  type="button"
                  onClick={() => flipRef.current?.flipNext()}
                  aria-label="Muka seterusnya"
                  className="rounded-full bg-purple-900 p-2 text-white transition hover:bg-purple-500 "
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>

          {/* FOOTER */}
          {/* {ready && (
            <div className="flex items-center justify-center gap-4 px-4 py-4">
              <button
                type="button"
                onClick={() => flipRef.current?.flipPrev()}
                aria-label="Muka sebelum"
                className="rounded-full bg-purple-900 p-2 text-white transition hover:bg-purple-500 sm:hidden"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <span className="font-poppins bg-purple-800 px-3 py-2 rounded-2xl  text-xs font-semibold tracking-wider text-white">
                Muka {page + 1} / {pageCount}
              </span>
              <button
                type="button"
                onClick={() => flipRef.current?.flipNext()}
                aria-label="Muka seterusnya"
                className="rounded-full bg-purple-900 p-2 text-white transition hover:bg-purple-500 sm:hidden"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          )} */}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
