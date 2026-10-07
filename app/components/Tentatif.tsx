"use client";

export default function Tentatif() {
  return (
    
    <div className="mt-7 overflow-hidden rounded-2xl   bg-white ">
      {/* HEADER */}
      <h2 className="font-montserrat px-2 text-2xl font-bold uppercase tracking-[0.25em] text-slate-800">
          Tentatif
        </h2>
      {/* <div className="border-b border-slate-200 px-5 py-5 sm:px-7">
        <p className="font-montserrat text-xs font-bold uppercase tracking-[0.25em] text-[#E30620]">
          Tentatif
        </p>

        <h2 className="mt-1 font-poppins text-xl font-bold text-[#062F63] sm:text-2xl">
          Persidangan Pembinaan Negara Bangsa
        </h2>

        <p className="mt-1 font-poppins text-xs text-slate-500 sm:text-sm">
          30 November – 2 Disember 2026
        </p>
      </div> */}

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px] border-collapse font-poppins text-sm">
          <thead>
            <tr className="bg-[#062F63] text-white">
              <th className="w-[25%] border border-white/30 px-4 py-3 text-left font-semibold">
                Tarikh & Masa
              </th>

              <th className="w-[50%] border border-white/30 px-4 py-3 text-left font-semibold">
                Perkara
              </th>

              <th className="w-[25%] border border-white/30 px-4 py-3 text-left font-semibold">
                Lokasi
              </th>
            </tr>
          </thead>

          <tbody>
            {/* HARI 1 */}
            <tr className="align-top">
              <td
                rowSpan={2}
                className="border border-slate-200 bg-slate-50 px-4 py-4 font-medium text-slate-600"
              >
                Isnin,
                <br />
                30 November 2026
              </td>

              <td className="border border-slate-200 px-4 py-4">
                <p className="text-xs font-medium text-slate-500">
                  11:00 pagi – 1:00 tengah hari
                </p>

                <p className="mt-1 font-bold uppercase leading-6 text-[#062F63]">
                  MAJLIS PERASMIAN PERSIDANGAN PEMBINAAN NEGARA BANGSA
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  oleh DYMM Paduka Seri Sultan Perak Darul Ridzuan Sultan
                  Nazrin Muizzuddin Shah
                </p>
              </td>

              <td className="border border-slate-200 px-4 py-4 text-slate-600">
                Dewan Perdana
              </td>
            </tr>

            <tr className="align-top">
              <td className="border border-slate-200 px-4 py-4">
                <p className="text-xs font-medium text-slate-500">
                  2:30 petang – 4:30 petang
                </p>

                <p className="mt-1 font-bold uppercase leading-6 text-[#062F63]">
                  SESI 1: PERLEMBAGAAN DAN RUKUN NEGARA TERAS PEMBINAAN NEGARA
                  BANGSA
                </p>
              </td>

              <td className="border border-slate-200 px-4 py-4 text-slate-600">
                Putra Hall B
              </td>
            </tr>

            {/* HARI 2 */}
            <tr className="align-top">
              <td
                rowSpan={2}
                className="border border-slate-200 bg-slate-50 px-4 py-4 font-medium text-slate-600"
              >
                Selasa,
                <br />
                1 Disember 2026
              </td>

              <td className="border border-slate-200 px-4 py-4">
                <p className="text-xs font-medium text-slate-500">
                  11:00 pagi – 1:00 tengah hari
                </p>

                <p className="mt-1 font-bold uppercase leading-6 text-[#062F63]">
                  SESI 2: WARISAN DAN SEJARAH: AKAR IDENTITI NASIONAL
                </p>
              </td>

              <td className="border border-slate-200 px-4 py-4 text-slate-600">
                Putra Hall B
              </td>
            </tr>

            <tr className="align-top">
              <td className="border border-slate-200 px-4 py-4">
                <p className="text-xs font-medium text-slate-500">
                  2:30 petang – 4:30 petang
                </p>

                <p className="mt-1 font-bold uppercase leading-6 text-[#062F63]">
                  SESI 3: KEPELBAGAIAN, KEHARMONIAN DAN KESEPADUAN SOSIAL
                </p>
              </td>

              <td className="border border-slate-200 px-4 py-4 text-slate-600">
                Putra Hall B
              </td>
            </tr>

            {/* HARI 3 */}
            <tr className="align-top">
              <td
                rowSpan={3}
                className="border border-slate-200 bg-slate-50 px-4 py-4 font-medium text-slate-600"
              >
                Rabu,
                <br />
                2 Disember 2026
              </td>

              <td className="border border-slate-200 px-4 py-4">
                <p className="text-xs font-medium text-slate-500">
                  9:00 pagi – 10:30 pagi
                </p>

                <p className="mt-1 font-bold uppercase leading-6 text-[#062F63]">
                  SESI 4: POLITIK DAN CABARAN DALAM MEMBINA NEGARA BANGSA
                </p>
              </td>

              <td className="border border-slate-200 px-4 py-4 text-slate-600">
                Putra Hall B
              </td>
            </tr>

            <tr className="align-top">
              <td className="border border-slate-200 px-4 py-4">
                <p className="text-xs font-medium text-slate-500">
                  11:00 pagi – 1:00 tengah hari
                </p>

                <p className="mt-1 font-bold uppercase leading-6 text-[#062F63]">
                  SESI 5: TRANSFORMASI NEGARA BANGSA: NARATIF NASIONAL, EKONOMI
                  INKLUSIF DAN MODAL INSAN
                </p>
              </td>

              <td className="border border-slate-200 px-4 py-4 text-slate-600">
                Putra Hall B
              </td>
            </tr>

            <tr className="align-top">
              <td className="border border-slate-200 px-4 py-4">
                <p className="text-xs font-medium text-slate-500">
                  3:00 petang – 4:30 petang
                </p>

                <p className="mt-1 font-bold uppercase leading-6 text-[#062F63]">
                  RUMUSAN PERSIDANGAN DAN MAJLIS PENUTUP
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  oleh YAB Perdana Menteri
                </p>
              </td>

              <td className="border border-slate-200 px-4 py-4 text-slate-600">
                Dewan Perdana
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}