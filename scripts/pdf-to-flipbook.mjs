// Tukar PDF jadi gambar JPG untuk Flipbook (sekali je, setiap kali PDF berubah).
// Guna: node scripts/pdf-to-flipbook.mjs "public/images/BUKU PROGRAM.pdf" public/images/buku-program
import { mkdir, writeFile, readFile, rm } from "node:fs/promises";
import path from "node:path";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import { createCanvas } from "@napi-rs/canvas";

const [input = "public/images/BUKU PROGRAM.pdf", outDir = "public/images/buku-program", widthArg = "1800"] =
  process.argv.slice(2);
const WIDTH = Number(widthArg);

const data = new Uint8Array(await readFile(input));
const pdf = await getDocument({ data }).promise;

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

for (let i = 1; i <= pdf.numPages; i++) {
  const page = await pdf.getPage(i);
  const base = page.getViewport({ scale: 1 });
  const viewport = page.getViewport({ scale: WIDTH / base.width });
  const canvas = createCanvas(Math.floor(viewport.width), Math.floor(viewport.height));
  await page.render({ canvas, canvasContext: canvas.getContext("2d"), viewport }).promise;
  const file = path.join(outDir, `${String(i).padStart(2, "0")}.jpg`);
  await writeFile(file, await canvas.encode("jpeg", 85));
  page.cleanup();
  console.log(`✓ ${file}`);
}
console.log(`Siap: ${pdf.numPages} muka`);
