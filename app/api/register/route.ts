
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    const scriptSecret = process.env.GOOGLE_SCRIPT_SECRET;

    if (!scriptUrl || !scriptSecret) {
      return NextResponse.json(
        { success: false, error: "Google Script configuration missing." },
        { status: 500 }
      );
    }

    const payload = await request.json();

    if (!["register", "update_sessions"].includes(payload.action)) {
      return NextResponse.json(
        { success: false, error: "Action tidak sah." },
        { status: 400 }
      );
    }

    const testMode =
  process.env.NODE_ENV === "development" &&
  process.env.TEST_MODE === "true";
    const testEmail = (process.env.TEST_EMAIL || "").trim().toLowerCase();
    const submittedEmail = String(payload.email || "").trim().toLowerCase();

    // Kebenaran testing ditentukan oleh server, bukan browser.
    const allowExistingUpdate =
      testMode &&
      testEmail !== "" &&
      submittedEmail === testEmail;

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        ...payload,
        allowExistingUpdate,
        secret: scriptSecret,
      }),
      cache: "no-store",
      redirect: "follow",
    });

    const text = await response.text();

    try {
      const result = JSON.parse(text);

      return NextResponse.json(result, {
        status: response.ok ? 200 : 502,
      });
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Google Apps Script memulangkan respons bukan JSON.",
        },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("Registration API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Gagal menghubungi Google Apps Script.",
      },
      { status: 500 }
    );
  }
}
