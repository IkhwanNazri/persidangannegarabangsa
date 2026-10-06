export const kategoriUtama = [
  "Kementerian",
  "Lain-lain",
];

export const kategoriLain = [
  "ORANG AWAM",
  "PIHAK SWASTA",
  "GLC",
  "NGO",
  "PERSATUAN",
  "PELAJAR IPT",
];

export type KategoriJemputan = (typeof kategoriUtama)[number] | (typeof kategoriLain)[number];
