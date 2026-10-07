export const kategoriUtama = [
  "Agensi Kerajaan Persekutuan & Negeri",
  "Lain-lain",
];

export const kategoriLain = [
  "Institusi Pendidikan & Pelajar",
  "Komuniti Awam",
  "MPPN, MEXUnity, PADU Negeri/ Majlis Sejarawan",
  "NGO & MyFou",
  "Sektor Swasta / GLC / Persatuan Industri",
  "JK HARMONI/ Organisasi Agama",
  "Kumpulan Pakar/ Ahli Akademik",
  "Tokoh Masyarakat / Jemputan Khas/ Ikon Perpaduan",
  "Etnik & Kebudayaan",
  "KRT, Pemimpin Komuniti",
  "Belia",
  "Pengamal Media dan Komunikasi",
];

export type KategoriJemputan = (typeof kategoriUtama)[number] | (typeof kategoriLain)[number];
