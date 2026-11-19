// Service worker untuk /scan sahaja (scope: /scan)
const CACHE = "pnb-scan-v3";

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.add("/scan", "/images/splash.svg")));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

const putCache = (req, res) => {
  if (res && res.ok) {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(req, copy));
  }
  return res;
};

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return; // API tak pernah dicache

  // Page /scan: cuba network dulu, kalau offline guna cache
   if (req.mode === "navigate") {
    if (url.pathname !== "/scan") return;
    e.respondWith(
      fetch(req)
        .then((res) => putCache("/scan", res))
        .catch(() => caches.match("/scan"))
    );
    return;
  }

  // JS/CSS/font Next.js: cache dulu
  if (url.pathname.startsWith("/_next/static/") || url.pathname.startsWith("/images/")) {
    e.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => putCache(req, res)))
    );
  }
});