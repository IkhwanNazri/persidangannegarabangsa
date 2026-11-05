
import { NextRequest, NextResponse } from "next/server";

const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
const API_SECRET = process.env.GOOGLE_SCRIPT_SECRET;
const ACCESS_KEY = process.env.URUSETIA_ACCESS_KEY;

export async function POST(request: NextRequest) {
  try {
    // Semak akses urus setia
    const cookie = request.cookies.get("pnb_scan_access")?.value;

    if (!ACCESS_KEY || cookie !== ACCESS_KEY) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { action, id } = await request.json();

    if (!["scan_participant", "check_in"].includes(action)) {
      return NextResponse.json(
        { success: false, error: "Invalid action" },
        { status: 400 }
      );
    }

    if (!id || !SCRIPT_URL || !API_SECRET) {
      return NextResponse.json(
        { success: false, error: "Missing configuration or ID" },
        { status: 400 }
      );
    }

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action,
        id,
        secret: API_SECRET,
      }),
      cache: "no-store",
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
