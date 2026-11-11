import { createHmac, timingSafeEqual } from "crypto";

export const SCAN_COOKIE = "pnb_scan_access";
export const SCAN_ACCESS_EXPIRES = new Date("2026-12-03T00:00:00+08:00");

export function scanToken(accessKey: string) {
  return createHmac("sha256", accessKey).update("pnb-scan-v1").digest("hex");
}

export function isValidScanCookie(cookie: string | undefined) {
  const accessKey = process.env.URUSETIA_ACCESS_KEY;
  if (!accessKey || !cookie) return false;
  if (Date.now() >= SCAN_ACCESS_EXPIRES.getTime()) return false;

  const expected = Buffer.from(scanToken(accessKey));
  const received = Buffer.from(cookie);
  return expected.length === received.length && timingSafeEqual(expected, received);
}