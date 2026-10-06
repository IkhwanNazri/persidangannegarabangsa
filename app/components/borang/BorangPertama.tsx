"use client";

import {
  FormEvent,
  ReactNode,
  useEffect,
    Suspense,
  useMemo,
  useState,
} from "react";

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  kategoriUtama,
  kategoriLain,
} from "@/app/data/kategori";

import { kementerian } from "@/app/data/kementerian";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BuildingOffice2Icon,
  CheckCircleIcon,
  EnvelopeIcon,
  LockClosedIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const API_URL =
  "https://script.google.com/macros/s/AKfycbyv7S5cQ5by4oePsuMTSJAxHkJlthvV6VubIbDM5ZxI_pdbs2B5b3rI5i9yVn2JFTSsnQ/exec";

type SessionId =
  | "perasmian"
  | "sesi-1"
  | "sesi-2"
  | "sesi-3"
  | "sesi-4"
  | "sesi-5"
  | "penutup";
  type CardId = "perasmian" | "forum" | "penutup";

type DayId = 1 | 2 | 3;

type Participant = {
  id: string;
  name: string;
  email: string;
  phone: string;
  kategoriUtama: string;
  kategoriLain: string;
  kementerian: string;
  sessions: SessionId[];
};

type Session = {
  id: SessionId;
  title: string;

  icon: "building" | "people";
};

type RSVPCard = {
  id: CardId;
  number: string;
  title: string;
  date: string;
 
  sessions: Session[];
};

const cards: RSVPCard[] = [
  {
    id: "perasmian",
    number: "01",
    title: "PERASMIAN",
    date: "30 NOVEMBER 2026",
   
    sessions: [
      {
        id: "perasmian",
        title: "Perasmian",
       
        icon: "building",
      },
      {
        id: "sesi-1",
        title: "Sesi 1",
      
        icon: "people",
      },
    ],
  },

  {
    id: "forum",
    number: "02",
    title: "FORUM",
    date: "30 NOVEMBER – 2 DISEMBER 2026",
   
    sessions: [
      {
        id: "sesi-2",
        title: "Sesi 2",
       
        icon: "people",
      },
      {
        id: "sesi-3",
        title: "Sesi 3",
      
        icon: "people",
      },
    ],
  },

  {
    id: "penutup",
    number: "03",
    title: "PENUTUP",
    date: "2 DISEMBER 2026",
    
    sessions: [
      {
        id: "sesi-4",
        title: "Sesi 4",
     
        icon: "people",
      },
      {
        id: "sesi-5",
        title: "Sesi 5",
        
        icon: "people",
      },
    ],
  },
];

const sessionDayMap: Record<SessionId, string> = {
  perasmian: "30 November 2026",
  "sesi-1": "30 November 2026",

  "sesi-2": "1 Disember 2026",
  "sesi-3": "1 Disember 2026",

  "sesi-4": "2 Disember 2026",
  "sesi-5": "2 Disember 2026",
  penutup: "2 Disember 2026",
};
const daySessions: Record<DayId, SessionId[]> = {
  1: ["perasmian", "sesi-1"],
  2: ["sesi-2", "sesi-3"],
  3: ["sesi-4", "sesi-5", "penutup"],
};

const dayInfo: Record<
  DayId,
  {
    date: string;
    title: string;
  }
> = {
  1: {
    date: "30 NOVEMBER 2026",
    title: "HARI 1",
  },
  2: {
    date: "1 DISEMBER 2026",
    title: "HARI 2",
  },
  3: {
    date: "2 DISEMBER 2026",
    title: "HARI 3",
  },
};
// const [selectedDays, setSelectedDays] = useState<DayId[]>([]);


function RSVPContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const typeParam = searchParams.get("type");

  const activeCard = (
    ["perasmian", "forum", "penutup"].includes(typeParam || "")
      ? typeParam
      : "perasmian"
  ) as CardId;

  const activeCardData = useMemo(
    () =>
      cards.find((card) => card.id === activeCard) ?? cards[0],
    [activeCard]
  );

  const [participant, setParticipant] =
    useState<Participant | null>(null);

const [selectedSessions, setSelectedSessions] =
  useState<SessionId[]>([]);
  const [selectedDays, setSelectedDays] = useState<DayId[]>([]);

const [currentDay, setCurrentDay] = useState<DayId>(1);

const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  kategoriUtama: "",
  kategoriLain: "",
  kementerian: "",
});

  const [modal, setModal] = useState<{
    open: boolean;
    type: "success" | "error";
    title: string;
    message: string;
  }>({
    open: false,
    type: "success",
    title: "",
    message: "",
  });

  useEffect(() => {
  try {
    const saved = sessionStorage.getItem("pnb_participant");

    if (!saved) return;

    const savedParticipant: Participant = JSON.parse(saved);

    setParticipant(savedParticipant);

    const savedSessions = savedParticipant.sessions ?? [];

    // Belum daftar Hari 1
    if (!daySessions[1].some((id) => savedSessions.includes(id))) {
      setCurrentDay(1);
      return;
    }

    // Hari 1 dah daftar, pergi Hari 2
    if (!daySessions[2].some((id) => savedSessions.includes(id))) {
      setCurrentDay(2);
      return;
    }

    // Hari 1 + Hari 2 dah daftar, pergi Hari 3
    setCurrentDay(3);
  } catch (error) {
    console.error("Gagal membaca rekod peserta:", error);
  }
}, []);

  useEffect(() => {
  if (!participant) {
    setSelectedSessions([]);
    return;
  }

  setSelectedSessions(participant.sessions);
}, [participant]);

function toggleDay(day: DayId) {
  setSelectedDays((previous) =>
    previous.includes(day)
      ? previous.filter((id) => id !== day)
      : [...previous, day]
  );
}

function toggleSession(sessionId: SessionId) {
  setSelectedSessions((previous) =>
    previous.includes(sessionId)
      ? previous.filter((id) => id !== sessionId)
      : [...previous, sessionId]
  );
}

function getCurrentDaySessions() {
  return selectedSessions.filter((id) =>
    daySessions[currentDay].includes(id)
  );
}
function getSessionsForCurrentDay() {
  return daySessions[currentDay];
}

function getNextDay(): DayId | null {
  if (currentDay === 1) return 2;
  if (currentDay === 2) return 3;

  return null;
}

  function getDaysFromSessions(sessions: SessionId[]) {
    return Array.from(
      new Set(sessions.map((id) => sessionDayMap[id]))
    );
  }

  function getAllSelectedSessions(card: RSVPCard) {
    if (!participant) return selectedSessions;

    const oldSessions = participant.sessions.filter(
      (id) =>
        !card.sessions.some(
          (session) => session.id === id
        )
    );

    const currentCardSessions =
      selectedSessions.filter((id) =>
        card.sessions.some(
          (session) => session.id === id
        )
      );

    return [...oldSessions, ...currentCardSessions];
  }

  function updateForm(
    field: keyof typeof form,
    value: string
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  async function handleNewRegistration(
  event: FormEvent<HTMLFormElement>
) {
  event.preventDefault();

  const currentSessions = selectedSessions.filter((id) =>
    daySessions[currentDay].includes(id)
  );

  if (currentSessions.length === 0) {
    setModal({
      open: true,
      type: "error",
      title: "Sesi Belum Dipilih",
      message: "Sila pilih sekurang-kurangnya satu sesi.",
    });
    return;
  }

  if (
    !form.name.trim() ||
    !form.email.trim() ||
    !form.phone.trim() ||
    !form.kategoriUtama.trim() ||
    (form.kategoriUtama === "Kementerian" &&
      !form.kementerian.trim()) ||
    (form.kategoriUtama === "Lain-lain" &&
      !form.kategoriLain.trim())
  ) {
    setModal({
      open: true,
      type: "error",
      title: "Maklumat Tidak Lengkap",
      message: "Sila lengkapkan semua maklumat peserta.",
    });
    return;
  }

  setLoading(true);

  const data: Participant = {
    id: `PNB-${Date.now()}`,
    name: form.name.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    kategoriUtama: form.kategoriUtama,
    kategoriLain: form.kategoriLain,
    kementerian: form.kementerian,
    sessions: currentSessions,
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        action: "register",
        id: data.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        kategoriUtama: data.kategoriUtama,
        kategoriLain: data.kategoriLain,
        kementerian: data.kementerian,
        days: getDaysFromSessions(data.sessions),
        sessions: data.sessions,
      }),
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || "Pendaftaran gagal.");
    }

    if (result.id) {
      data.id = result.id;
    }

    sessionStorage.setItem(
      "pnb_participant",
      JSON.stringify(data)
    );

    setParticipant(data);

    // TERUS KE HARI SETERUSNYA
    if (currentDay < 3) {
  setModal({
  open: true,
  type: "success",
  title: "Pendaftaran Berjaya",
  message: `Kehadiran ${dayInfo[currentDay].date} telah berjaya direkodkan.`,
});
  setLoading(false);
  return;
}

setModal({
  open: true,
  type: "success",
  title: "PENDAFTARAN BERJAYA",
  message: "Semua pendaftaran kehadiran anda telah berjaya disimpan.",
});
  } catch (error) {
    setModal({
      open: true,
      type: "error",
      title: "Pendaftaran Tidak Berjaya",
      message:
        error instanceof Error
          ? error.message
          : "Pendaftaran tidak berjaya disimpan.",
    });
  } finally {
    setLoading(false);
  }
}

 async function handleExistingParticipant(
  event: FormEvent<HTMLFormElement>
) {
  event.preventDefault();

  const currentSessions = selectedSessions.filter((id) =>
    daySessions[currentDay].includes(id)
  );

  if (currentSessions.length === 0) {
    setModal({
      open: true,
      type: "error",
      title: "Sesi Belum Dipilih",
      message: "Sila pilih sekurang-kurangnya satu sesi.",
    });
    return;
  }

  if (!participant) return;

  setLoading(true);

  // Kekalkan sesi hari-hari sebelumnya
  const previousSessions = participant.sessions.filter(
    (id) => !daySessions[currentDay].includes(id)
  );

  const allSessions = [
    ...previousSessions,
    ...currentSessions,
  ];

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        action: "update_sessions",
        id: participant.id,
        email: participant.email,
        name: participant.name,
        phone: participant.phone,
        kategoriUtama: participant.kategoriUtama,
        kategoriLain: participant.kategoriLain,
        kementerian: participant.kementerian,
        sessions: allSessions,
        days: getDaysFromSessions(allSessions),
      }),
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(
        result.error || "Gagal mengemaskini pendaftaran."
      );
    }

    const updatedParticipant = {
      ...participant,
      sessions: allSessions,
    };

    sessionStorage.setItem(
      "pnb_participant",
      JSON.stringify(updatedParticipant)
    );

    setParticipant(updatedParticipant);

    // TERUS KE HARI SETERUSNYA
    setParticipant(updatedParticipant);

if (currentDay < 3) {
  setModal({
    open: true,
    type: "success",
    title: `HARI ${currentDay} BERJAYA`,
    message: `Kehadiran ${dayInfo[currentDay].date} telah berjaya direkodkan..`,
  });
  setLoading(false);
  return;
}

setModal({
  open: true,
  type: "success",
  title: "PENDAFTARAN BERJAYA",
  message: "Semua pendaftaran kehadiran anda telah berjaya disimpan.",
});
  } catch (error) {
    setModal({
      open: true,
      type: "error",
      title: "Kemaskini Tidak Berjaya",
      message:
        error instanceof Error
          ? error.message
          : "Pendaftaran tidak berjaya dikemaskini.",
    });
  } finally {
    setLoading(false);
  }
}
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#062F63] px-5 py-20 sm:px-8 lg:px-16">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/images/rsvp.png"
          alt="PICC Putrajaya"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#062F63]/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px]">

        <div
          id="rsvp-form"
          className="overflow-hidden rounded-[24px] bg-white shadow-[0_30px_80px_rgba(0,0,0,.3)]"
        >

          <div className="h-[3px] bg-gradient-to-r from-[#FFD21C] via-[#E30620] to-[#062F63]" />

          <div className="p-5 sm:p-8">

            {/* HEADER */}
            <div className="flex items-start justify-between gap-4">

              <div>

                <button
                  type="button"
                  onClick={() => router.back()}
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50"
                >
                  <ArrowLeftIcon className="h-4 w-4" />
                </button>

                <span className="mt-5 font-montserrat text-xl font-bold uppercase tracking-[.2em] text-[#E30620]">
                  RSVP
                </span>

                <h3 className="mt-2 font-montserrat text-2xl font-semibold tracking-wider text-[#062F63]">
                  {activeCardData.title}
                </h3>

                <p className="mt-1 font-poppins text-xs text-slate-800">
                  {activeCardData.date}
                </p>

              </div>

            </div>

            {/* EXISTING PARTICIPANT */}
            {participant ? (

              <>
                <div className="mt-7 rounded-xl border border-slate-100 bg-slate-50 p-4">

                  <div className="flex items-center justify-between gap-3">

                    <div>
                      <p className="font-montserrat text-2xl font-bold uppercase tracking-[.15em] text-[#E30620]">
                        Peserta berdaftar
                      </p>

                      <p className="mt-1 font-poppins text-xl font-bold text-black">
                        Maklumat peserta
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5">

                      <LockClosedIcon className="h-3.5 w-3.5 text-slate-950" />

                      <span className="font-montserrat text-[8px] font-bold uppercase tracking-wide text-slate-400">
                        Dikunci
                      </span>

                    </div>

                  </div>

                  <div className="mt-4 grid gap-2 sm:grid-cols-2">

                    <LockedField
                      icon={
                        <UserIcon className="h-8 w-8" />
                      }
                      label="Nama Penuh"
                      value={participant.name}
                    />

                    <LockedField
                      icon={
                        <EnvelopeIcon className="h-4 w-4" />
                      }
                      label="Email"
                      value={participant.email}
                    />

                    <LockedField
                      icon={
                        <PhoneIcon className="h-4 w-4" />
                      }
                      label="No. Telefon"
                      value={participant.phone}
                    />

                    <LockedField
                      icon={
                        <BuildingOffice2Icon className="h-4 w-4" />
                      }
                      label="Organisasi / Agensi"
                      value={participant.kategoriUtama === "Kementerian"
      ? participant.kementerian
      : participant.kategoriLain}
                    />

                  </div>
                </div>

                <form
                  className="mt-7"
                  onSubmit={handleExistingParticipant}
                >

                  <SessionSelection
  selectedSessions={selectedSessions}
  onToggle={toggleSession}
  currentDay={currentDay}
/>

                  <Summary
                    sessions={participant.sessions}
                    currentSessions={selectedSessions}
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-5 flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#062F63] font-montserrat text-xl font-bold uppercase tracking-wide text-white hover:bg-[#E30620] disabled:opacity-50"
                  >
                    {loading
                      ? "Menyimpan..."
                      : "Simpan Kehadiran"}

                    {!loading && (
                      <CheckCircleIcon className="h-4 w-4" />
                    )}
                  </button>

                </form>
              </>

            ) : (

              /* NEW REGISTRATION */
              <form
                className="mt-7"
                onSubmit={handleNewRegistration}
              >

                <h4 className="font-jakarta text-lg font-bold text-[#062F63]">
                  Maklumat Peserta
                </h4>

                <p className="mt-1 font-inter text-xs leading-5 text-slate-400">
                  Maklumat ini hanya perlu diisi sekali untuk pendaftaran anda.
                </p>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">

                  {/* KATEGORI UTAMA */}
                  <div>
                    <label className="mb-1.5 block font-montserrat text-[8px] font-semibold text-slate-500">
                      Kategori Jemputan *
                    </label>

                    <select
                      required
                      value={form.kategoriUtama}
                      onChange={(e) => {
                        const value = e.target.value;

                        updateForm("kategoriUtama", value);

                        // Reset pilihan sebelumnya
                        updateForm("kategoriLain", "");
                        updateForm("kementerian", "");
                      }}
                      className="h-[54px] w-full rounded-lg border border-slate-200 bg-slate-50 px-3 font-inter text-[11px] text-[#062F63] outline-none focus:border-[#062F63] focus:bg-white"
                    >
                      <option value="">Pilih kategori</option>

                      {kategoriUtama.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>


                  {/* KATEGORI LAIN-LAIN */}
                  {form.kategoriUtama === "Lain-lain" && (
                    <div>
                      <label className="mb-1.5 block font-montserrat text-[8px] font-semibold text-slate-500">
                        Kategori *
                      </label>

                      <select
                        required
                        value={form.kategoriLain}
                        onChange={(e) =>
                          updateForm("kategoriLain", e.target.value)
                        }
                        className="h-[54px] w-full rounded-lg border border-slate-200 bg-slate-50 px-3 font-inter text-[11px] text-[#062F63] outline-none focus:border-[#062F63] focus:bg-white"
                      >
                        <option value="">Pilih kategori</option>

                        {kategoriLain.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}


                  {/* KEMENTERIAN */}
                  {form.kategoriUtama === "Kementerian" && (
                    <div>
                      <label className="mb-1.5 block font-montserrat text-[8px] font-semibold text-slate-500">
                        Kementerian *
                      </label>

                      <select
                        required
                        value={form.kementerian}
                        onChange={(e) =>
                          updateForm("kementerian", e.target.value)
                        }
                        className="h-[54px] w-full rounded-lg border border-slate-200 bg-slate-50 px-3 font-inter text-[11px] text-[#062F63] outline-none focus:border-[#062F63] focus:bg-white"
                      >
                        <option value="">Pilih kementerian</option>

                        {kementerian.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* NAMA */}
                  <InputField
                    icon={
                      <UserIcon className="h-4 w-4" />
                    }
                    label="Nama Penuh"
                    placeholder="Nama penuh"
                    value={form.name}
                    onChange={(value) =>
                      updateForm("name", value)
                    }

                    labelClassName="font-poppins text-[9px] font-bold text-[#062F63]"
                    inputClassName="font-jakarta text-[13px] font-semibold text-[#062F63]"
                    placeholderClassName="placeholder:font-poppins placeholder:text-[11px] placeholder:text-slate-300"
                    iconClassName="text-[#E30620]"
                    containerClassName="rounded-xl border-[#062F63]/20 bg-slate-50"
                  />

                  {/* EMAIL */}
                  <InputField
                    icon={
                      <EnvelopeIcon className="h-4 w-4" />
                    }
                    label="Email"
                    placeholder="nama@email.com"
                    type="email"
                    value={form.email}
                    onChange={(value) =>
                      updateForm("email", value)
                    }

                    labelClassName="font-poppins text-[9px] font-bold text-[#062F63]"
                    inputClassName="font-inter text-[12px] text-[#062F63]"
                    placeholderClassName="placeholder:font-poppins placeholder:text-[11px] placeholder:text-slate-300"
                    iconClassName="text-[#062F63]"
                    containerClassName="rounded-xl border-[#062F63]/20 bg-white"
                  />

                  {/* PHONE */}
                  <InputField
                    icon={
                      <PhoneIcon className="h-4 w-4" />
                    }
                    label="No. Telefon"
                    placeholder="01X-XXXXXXX"
                    value={form.phone}
                    onChange={(value) =>
                      updateForm("phone", value)
                    }

                    labelClassName="font-montserrat text-[8px] font-semibold text-slate-500"
                    inputClassName="font-inter text-[12px] font-medium text-[#062F63]"
                    placeholderClassName="placeholder:font-inter placeholder:text-[11px] placeholder:text-slate-300"
                    iconClassName="text-[#E30620]"
                    containerClassName="rounded-xl border-slate-200 bg-slate-50"
                  />

                  {/* ORGANISATION */}
                  

                </div>

  <SessionSelection
  selectedSessions={selectedSessions}
  onToggle={toggleSession}
  currentDay={currentDay}
/>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-5 flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#E30620] font-montserrat text-[10px] font-black uppercase tracking-wide text-white hover:bg-[#062F63] disabled:opacity-50"
                >
                  {loading
                    ? "Menyimpan..."
                    : `Daftar ${activeCardData.title}`}

                  {!loading && (
                    <ArrowRightIcon className="h-4 w-4" />
                  )}
                </button>

              </form>
            )}

          </div>
        </div>
      </div>

      {/* MODAL */}
      {modal.open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#031D40]/75 px-5 backdrop-blur-md">

          <div className="relative w-full max-w-[430px] overflow-hidden rounded-[28px] bg-white shadow-[0_30px_100px_rgba(0,0,0,.35)]">

            <div
              className={`h-1.5 ${
                modal.type === "success"
                  ? "bg-gradient-to-r from-[#FFD21C] via-[#FFD21C] to-[#062F63]"
                  : "bg-gradient-to-r from-[#E30620] via-[#E30620] to-[#062F63]"
              }`}
            />

            <div className="p-8 text-center sm:p-9">

              <div
                className={`mx-auto flex h-[76px] w-[76px] items-center justify-center rounded-full ${
                  modal.type === "success"
                    ? "bg-[#FFF8D9]"
                    : "bg-[#FFF0F1]"
                }`}
              >
                {modal.type === "success" ? (
                  <CheckCircleIcon className="h-10 w-10 text-[#062F63]" />
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-10 w-10 text-[#E30620]"
                  >
                    <path
                      d="M12 8V12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    <path
                      d="M12 16H12.01"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    <path
                      d="M10.3 3.7L2.8 17C2.1 18.2 3 19.7 4.4 19.7H19.6C21 19.7 21.9 18.2 21.2 17L13.7 3.7C13 2.5 11 2.5 10.3 3.7Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              <p className="mt-5 font-montserrat text-[9px] font-bold uppercase tracking-[.2em] text-[#E30620]">
                {modal.type === "success"
                  ? "Berjaya"
                  : "Perhatian"}
              </p>

              <h3 className="mt-2 font-jakarta text-2xl font-black tracking-[-.8px] text-[#062F63]">
                {modal.title}
              </h3>

              <p className="mx-auto mt-3 max-w-[340px] font-inter text-sm leading-6 text-slate-500">
                {modal.message}
              </p>

              <button
                type="button"
                onClick={() => {
                  const isSuccess =
                    modal.type === "success";

                  setModal({
                    open: false,
                    type: "success",
                    title: "",
                    message: "",
                  });

                  if (modal.type === "success") {
    router.push("/?rsvpSuccess=1#rsvp");
  }
                }}
                className={`mt-7 h-[50px] w-full rounded-xl font-montserrat text-[10px] font-black uppercase tracking-wide text-white transition ${
                  modal.type === "success"
                    ? "bg-[#062F63] hover:bg-[#E30620]"
                    : "bg-[#E30620] hover:bg-[#062F63]"
                }`}
              >
                {modal.type === "success"
                  ? "KEMBALI KE RSVP"
                  : "TUTUP"}
              </button>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}


/* =========================================================
   SESSION SELECTION
========================================================= */

function SessionSelection({
  selectedSessions,
  onToggle,
  currentDay,
}: {
  selectedSessions: SessionId[];
  onToggle: (sessionId: SessionId) => void;
  currentDay: DayId;
}) {
  const sessions: Record<SessionId, Session> = {
    perasmian: {
      id: "perasmian",
      title: "Perasmian",

      icon: "building",
    },
    "sesi-1": {
      id: "sesi-1",
      title: "Sesi 1",
  
      icon: "people",
    },
    "sesi-2": {
      id: "sesi-2",
      title: "Sesi 2",
     
      icon: "people",
    },
    "sesi-3": {
      id: "sesi-3",
      title: "Sesi 3",
   
      icon: "people",
    },
    "sesi-4": {
      id: "sesi-4",
      title: "Sesi 4",

      icon: "people",
    },
    "sesi-5": {
      id: "sesi-5",
      title: "Sesi 5",

      icon: "people",
    },
    penutup: {
      id: "penutup",
      title: "Penutup",
   
      icon: "building",
    },
  };

  return (
    <div className="mt-7">
      <h4 className="font-jakarta text-lg font-black text-[#062F63]">
        Pilih Kehadiran
      </h4>

      <p className="mt-1 font-montserrat text-sm font-bold text-[#E30620]">
        {dayInfo[currentDay].date}
      </p>

      <p className="mt-1 font-inter text-[10px] text-slate-500">
        Pilih sesi yang ingin dihadiri.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {daySessions[currentDay].map((sessionId) => (
          <SessionCard
            key={sessionId}
            session={sessions[sessionId]}
            selected={selectedSessions.includes(sessionId)}
            onClick={() => onToggle(sessionId)}
          />
        ))}
      </div>
    </div>
  );
}


/* =========================================================
   SUMMARY
========================================================= */

function Summary({
  sessions,
  currentSessions,
}: {
  sessions: SessionId[];
  currentSessions: SessionId[];
}) {
  const merged = Array.from(
    new Set([...sessions, ...currentSessions])
  );

  const labels: Record<SessionId, string> = {
    perasmian: "Perasmian",
    "sesi-1": "Sesi 1",
    "sesi-2": "Sesi 2",
    "sesi-3": "Sesi 3",
    "sesi-4": "Sesi 4",
    "sesi-5": "Sesi 5",
    penutup: "Penutup",
  };

  return (
    <div className="mt-5 rounded-xl bg-[#F8F4E8] p-4">

      <div className="flex items-center justify-between">

        <div>

          <p className="font-montserrat text-[9px] font-bold uppercase tracking-[.15em] text-[#E30620]">
            Ringkasan Pendaftaran
          </p>

          <p className="mt-1 font-jakarta text-sm font-black text-[#062F63]">
            {merged.length} sesi dipilih
          </p>

        </div>

        <CheckCircleIcon className="h-6 w-6 text-[#062F63]" />

      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">

        {merged.map((id) => (
          <span
            key={id}
            className="rounded-full bg-white px-2.5 py-1.5 font-inter text-[9px] font-semibold text-[#062F63] shadow-sm"
          >
            ✓ {labels[id]}
          </span>
        ))}

      </div>
    </div>
  );
}


/* =========================================================
   INPUT FIELD
   SEKARANG BOLEH CUSTOM SETIAP FIELD
========================================================= */

function InputField({
  icon,
  label,
  placeholder,
  value,
  onChange,
  type = "text",

  labelClassName = "",
  inputClassName = "",
  placeholderClassName = "",
  iconClassName = "",
  containerClassName = "",
}: {
  icon: ReactNode;

  label: string;
  placeholder: string;

  value: string;
  onChange: (value: string) => void;

  type?: string;

  /* CUSTOM STYLE */
  labelClassName?: string;
  inputClassName?: string;
  placeholderClassName?: string;
  iconClassName?: string;
  containerClassName?: string;
}) {
  return (
    <div
      className={`
        flex h-[54px] items-center rounded-lg
        border border-slate-200
        bg-slate-50
        px-3
        focus-within:border-[#062F63]
        focus-within:bg-white
        ${containerClassName}
      `}
    >

      {/* ICON */}
      <div
        className={`
          mr-3 flex h-7 w-7 shrink-0
          items-center justify-center
          text-slate-500
          ${iconClassName}
        `}
      >
        {icon}
      </div>

      {/* CONTENT */}
      <div className="min-w-0 flex-1">

        {/* LABEL */}
        <label
          className={`
            block
            font-montserrat
            text-[8px]
            font-semibold
            text-slate-400
            ${labelClassName}
          `}
        >
          {label}
        </label>

        {/* INPUT */}
        <input
          type={type}
          required
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          placeholder={placeholder}
          className={`
            mt-0.5
            block
            w-full
            bg-transparent
            font-inter
            text-[11px]
            text-[#062F63]
            outline-none

            placeholder:text-slate-300

            ${inputClassName}
            ${placeholderClassName}
          `}
        />

      </div>
    </div>
  );
}


/* =========================================================
   LOCKED FIELD
========================================================= */

function LockedField({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-h-[54px] items-center rounded-lg border border-slate-200 bg-white px-3">

      <div className="mr-3 flex h-7 w-7 shrink-0 items-center justify-center text-slate-400">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="font-montserrat text-[8px] font-semibold text-slate-400">
          {label}
        </p>

        <p className="mt-0.5 truncate font-inter text-[11px] font-medium text-[#062F63]">
          {value}
        </p>

      </div>

      <LockClosedIcon className="ml-2 h-3.5 w-3.5 shrink-0 text-slate-300" />

    </div>
  );
}


/* =========================================================
   SESSION CARD
========================================================= */

function SessionCard({
  session,
  selected,
  onClick,
}: {
  session: Session;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative min-h-[145px]
        rounded-xl border
        p-4 text-left
        transition-all duration-300

        ${
          selected
            ? "border-[#FFD21C] bg-[#FFF9E5] shadow-sm"
            : "border-slate-200 bg-white hover:border-[#062F63]/30 hover:shadow-sm"
        }
      `}
    >

      {/* CHECK */}
      <div
        className={`
          absolute right-3 top-3
          flex h-5 w-5
          items-center justify-center
          rounded-full border

          ${
            selected
              ? "border-[#FFD21C] bg-[#FFD21C]"
              : "border-slate-300 bg-white"
          }
        `}
      >
        {selected && (
          <CheckCircleIcon className="h-4 w-4 text-[#062F63]" />
        )}
      </div>

      {/* ICON */}
      <div
        className={`
          flex h-10 w-10
          items-center justify-center
          rounded-lg

          ${
            selected
              ? "bg-[#062F63] text-white"
              : "bg-[#062F63]/5 text-[#062F63]"
          }
        `}
      >
        {session.icon === "building" ? (
          <BuildingOffice2Icon className="h-5 w-5" />
        ) : (
          <UserIcon className="h-5 w-5" />
        )}
      </div>

      {/* TITLE */}
      <h5 className="mt-4 pr-7 font-jakarta text-sm font-black text-[#062F63]">
        {session.title}
      </h5>

      {/* DESCRIPTION */}
      {/* <p className="mt-1.5 pr-2 font-inter text-[9px] leading-4 text-slate-500 sm:text-[10px] sm:leading-5">
        {session.description}
      </p> */}

    </button>
  );
}
export default function RSVP() {
  return (
    <Suspense fallback={null}>
      <RSVPContent />
    </Suspense>
  );
}