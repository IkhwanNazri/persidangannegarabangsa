
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { key } = await request.json();

    const accessKey = process.env.URUSETIA_ACCESS_KEY;
    console.log("ACCESS KEY DEBUG:", {
  envLoaded: !!accessKey,
  keyReceived: !!key,
  keyLength: key?.length,
  envLength: accessKey?.length,
  match: key === accessKey,
});

    if (!accessKey || key !== accessKey) {
      return NextResponse.json(
        { success: false, message: "Akses ditolak" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ success: true });

    response.cookies.set("pnb_scan_access", accessKey, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 12,
    });

    return response;
  } catch {
    return NextResponse.json(
      { success: false, message: "Ralat server" },
      { status: 500 }
    );
  }
}
