import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";
const SectionPersyaratan = () => {
  // State to manage dropdown visibility
  const [openDropdown, setOpenDropdown] = useState(null);

  // Dropdown items
  const dropdownItems = [
    {
      id: 1,
      title: "Persyaratan ",
      content: (
        <ul className="list-inside space-y-3">
          <li className="flex items-start gap-2 hover:bg-gray-800 p-2 rounded-lg transition-all duration-300">
            <TiArrowRight className="text-blue-500 text-xl flex-shrink-0" />
            Rekomendasi/Surat Pengantar Kepala Perangkat Daerah
          </li>
          <li className="flex items-start gap-2 hover:bg-gray-800 p-2 rounded-lg transition-all duration-300">
            <TiArrowRight className="text-blue-500 text-xl flex-shrink-0" />
            Surat Keterangan Tidak ada Permasalahan Terkait Keuangan dan Aset
            Dari Kepala Perangkat Daerah/Kepala Biro
          </li>
          <li className="flex items-start gap-2 hover:bg-gray-800 p-2 rounded-lg transition-all duration-300">
            <TiArrowRight className="text-blue-500 text-xl flex-shrink-0" />
            Keputusan Pangkat Terakhir
          </li>
          <li className="flex items-start gap-2 hover:bg-gray-800 p-2 rounded-lg transition-all duration-300">
            <TiArrowRight className="text-blue-500 text-xl flex-shrink-0" />
            Keputusan Jabatan Terakhir
          </li>
          <li className="flex items-start gap-2 hover:bg-gray-800 p-2 rounded-lg transition-all duration-300">
            <TiArrowRight className="text-blue-500 text-xl flex-shrink-0" />
            Sasaran Kinerja Pegawai (SKP) Terakhir
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "Sistem,mekanisme,prosedur",
      content: (
        <div className="w-full h-auto flex justify-center items-center flex-col ">
          {/* Background Image */}
          <div
            className="bg-prosedur bg-cover bg-center w-full md:w-[600px] h-[300px] md:h-[450px] mb-8"
            role="img"
            aria-label="Prosedur Pengajuan Surat Keterangan Bebas Temuan"
          ></div>

          {/* List of Steps */}
          <ul className="list-inside space-y-4 max-w-2xl px-4">
            <li className="flex items-start gap-4">
              <FaRegCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
              <span>
                Pemohon mengajukan permohonan melalui Sistem Pengajuan Surat
                Keterangan Bebas Temuan di Aplikasi
              </span>
            </li>
            <li className="flex items-start gap-4">
              <FaRegCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
              <span>
                Admin Front Office menerima dan memeriksa berkas pemohon via
                Sistem Online/Daring
              </span>
            </li>
            <li className="flex items-start gap-4">
              <FaRegCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
              <span>
                Kasubbag Umum dan Kepegawaian memeriksa temuan pemohon pada
                daftar kompilasi temuan Inspektorat, BPK dan Irjen serta BPKP
              </span>
            </li>
            <li className="flex items-start gap-4">
              <FaRegCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
              <span>
                Sekretaris memeriksa dan validasi ulang sebelum diteruskan
                kepada Inspektur
              </span>
            </li>
            <li className="flex items-start gap-4">
              <FaRegCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
              <span>
                Inspektur menyetujui dan menandatangani Surat Bebas Temuan
                secara Digital
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: "Waktu Penyelesaian",
      content: <p>Maksimal 3 hari kerja</p>,
    },
    {
      id: 4,
      title: "Biaya / Tarif",
      content: <p>Tidak Dipungut Biaya</p>,
    },
    {
      id: 5,
      title: "Produk Pelayanan",
      content: <p>Surat Keterangan Bebas Temuan</p>,
    },
    {
      id: 6,
      title: "Pengaduan Pelayanan",
      content: (
        <ul className="list-inside space-y-3">
          <li className="flex items-start gap-2">
            <TiArrowRight className="text-blue-500 text-xl flex-shrink-0" />
            Tatap muka langsung kepada Pejabat Pengelola Pengaduan
          </li>
          <li className="flex items-start gap-2">
            <TiArrowRight className="text-blue-500 text-xl flex-shrink-0" />
            Tertulis disampaikan ke Kotak Pengaduan;
          </li>
          <li className="flex items-start gap-2">
            <TiArrowRight className="text-blue-500 text-xl flex-shrink-0" />
            Pos-el: inspektorat@sumselprov.go.id
          </li>
          <li className="flex items-start gap-2">
            <TiArrowRight className="text-blue-500 text-xl flex-shrink-0" />
            Online melalui website SP4N-LAPOR! (
            <a
              href="https://www.lapor.go.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              www.lapor.go.id
            </a>
            ).
          </li>
        </ul>
      ),
    },
  ];

  // Toggle dropdown
  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div>
      <div className="max-w-2xl px-6 mb-3 mt-3">
        <div className="text-center">
          <p className="font-bold bg-gradient-to-t from-pink-100 from-0% via-orange-600 via-50% to-purple-700 to-100% bg-clip-text text-transparent">
            STANDAR PELAYANAN
          </p>
          <h1 className="text-2xl font-bold text-white mb-4">
            Pelayanan Surat Bebas Temuan
          </h1>
        </div>

        {/* Dropdown Menus */}
        <div className="mt-8 space-y-4">
          {dropdownItems.map((item) => (
            <div key={item.id} className="border border-white rounded-lg">
              <button
                onClick={() => toggleDropdown(item.id)}
                className="w-full flex justify-between items-center p-4 text-white font-bold bg-gradient-to-r from-pink-500 to-purple-700 hover:from-pink-600 hover:to-purple-800 transition-all duration-300"
              >
                <span>{item.title}</span>
                <span className="transform transition-transform duration-300">
                  {openDropdown === item.id ? "▲" : "▼"}
                </span>
              </button>
              {openDropdown === item.id && (
                <div className="p-4 text-white bg-gray-800 rounded-b-lg">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionPersyaratan;
