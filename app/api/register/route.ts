import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const ALLOWED_FIELDS = [
  "name", "email", "phone", "kategoriUtama", "kategoriLain", "kategoriLainDetail",
  "gelaran", "jabatanAgensi", "jawatan", "gred", "vegeterian", "vegeterianDetail",
  "oku", "kategoriOku", "kementerian", "kementerianDetail", "days", "sessions",
] as const;

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_IP = 30;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_IP;
}

export async function POST(request: NextRequest) {
  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    const scriptSecret = process.env.GOOGLE_SCRIPT_SECRET;

    if (!scriptUrl || !scriptSecret) {
      return NextResponse.json(
        { success: false, error: "Konfigurasi pelayan tidak lengkap." },
        { status: 500 }
      );
    }

    const ip =
      request.headers.get("x-real-ip") ??
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Terlalu banyak cubaan. Sila cuba sebentar lagi." },
        { status: 429 }
      );
    }

    const payload = await request.json();

    if (!["register", "update_sessions"].includes(payload.action)) {
      return NextResponse.json(
        { success: false, error: "Action tidak sah." },
        { status: 400 }
      );
    }

    if (payload.action === "update_sessions" && process.env.NODE_ENV !== "development") {
      return NextResponse.json(
        { success: false, error: "Tidak dibenarkan." },
        { status: 403 }
      );
    }

    const cleanPayload = Object.fromEntries(
      ALLOWED_FIELDS.filter((key) => key in payload).map((key) => [key, payload[key]])
    );

    const testMode =
      process.env.NODE_ENV === "development" &&
      process.env.TEST_MODE === "true";
    const testEmail = (process.env.TEST_EMAIL || "").trim().toLowerCase();
    const submittedEmail = String(payload.email || "").trim().toLowerCase();

    const allowExistingUpdate =
      testMode && testEmail !== "" && submittedEmail === testEmail;

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        ...cleanPayload,
        action: payload.action,
        allowExistingUpdate,
        secret: scriptSecret,
      }),
      cache: "no-store",
      redirect: "follow",
    });

    const text = await response.text();

    try {
      const result = JSON.parse(text);

      return NextResponse.json(
        {
          success: result.success === true,
          id: result.id,
          existing: result.existing,
          emailSent: result.emailSent,
          error: result.error,
        },
        { status: response.ok ? 200 : 502 }
      );
    } catch {
      return NextResponse.json(
        { success: false, error: "Pendaftaran tidak dapat diproses." },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("Registration API error:", error);

    return NextResponse.json(
      { success: false, error: "Pendaftaran tidak dapat diproses." },
      { status: 500 }
    );
  }
}