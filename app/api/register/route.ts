
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json(
        { success: false, error: "Google Script URL tidak dikonfigurasi." },
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

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "follow",
    });

    const text = await response.text();

    console.log("GOOGLE SCRIPT DEBUG:", {
      status: response.status,
      finalUrl: response.url,
      contentType: response.headers.get("content-type"),
      body: text.slice(0, 1000),
    });

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
