import { NextRequest, NextResponse } from "next/server";
import { SCAN_COOKIE, SCAN_ACCESS_EXPIRES, scanToken } from "@/app/lib/scanAccess";

export async function POST(request: NextRequest) {
  try {
    const { key } = await request.json();
    const accessKey = process.env.URUSETIA_ACCESS_KEY;

    if (!accessKey || key !== accessKey) {
      return NextResponse.json({ success: false, message: "Akses ditolak" }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(SCAN_COOKIE, scanToken(accessKey), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      expires: SCAN_ACCESS_EXPIRES,
    });
    return response;
  } catch {
    return NextResponse.json({ success: false, message: "Ralat server" }, { status: 500 });
  }
}