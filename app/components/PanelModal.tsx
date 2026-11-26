"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export type PanelModalPerson = {
  name: string;
  position: string;
  organization?: string;
  image: string;
  tag: string;
  bio?: string;
};

type PanelModalProps = {
  person: PanelModalPerson | null;
  onClose: () => void;
};

export default function PanelModal({ person, onClose }: PanelModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Lock scroll + tutup guna ESC
  useEffect(() => {
    if (!person) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [person, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {person && (
        <motion.div
          key="panel-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#031a38]/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={person.name}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[90dvh] w-full max-w-3xl flex-col overflow-hidden rounded-[24px] bg-white shadow-2xl sm:flex-row"
          >
            {/* TUTUP */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup"
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-[#062F63] shadow-md transition hover:bg-[#062F63] hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>

            {/* GAMBAR */}
            {/* <div className="relative h-80 w-full shrink-0 bg-gradient-to-br from-[#E9EEFA] via-[#F8F9FD] to-[#DCE5F7] sm:h-auto sm:w-[38%]">
              <Image
                src={person.image}
                alt={person.name}
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-cover object-top"
              />
              <span className="absolute bottom-4 left-0 border border-[#F8E4A0] bg-gradient-to-r from-[#F8E8B0] via-[#EBCB6B] to-[#F8E8B0] px-3 py-1.5 font-poppins text-[10px] font-bold text-black shadow-md sm:text-xs">
                {person.tag}
              </span>
            </div> */}

            {/* ISI */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7">
              <h3 className="pr-8 font-montserrat text-base font-bold leading-snug text-black sm:text-xl">
                {person.name}
              </h3>
              <div className="mt-3 h-0.5 w-12 rounded-full bg-gradient-to-r from-[#D4AF37] to-transparent" />

              <p className="mt-4 font-poppins text-sm font-medium text-[#062F63] sm:text-base">
                {person.position}
              </p>
              {person.organization && (
                <p className="mt-1 font-poppins text-xs font-semibold text-slate-700 sm:text-sm">
                  {person.organization}
                </p>
              )}

              {person.bio && (
                <p className="mt-3 text-justify font-poppins text-sm leading-6 text-slate-600">
                  {person.bio}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
