import React from "react";
import NavbarUser from "../../components/navbar/user/NavbarUser";
import SidebarUser from "../../components/sidebar/user/SidebarUser";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import RiwayatPengajuanComp from "../../components/riwayat/pengajuan/RiwayatPengajuanComp";
import RiwayatValidasiComponen from "../../components/riwayat/validasi/RiwayatValidasiComponen";
import GetAndDownloadSKBT from "../../components/SKBT/GetAndDownloadSKBT";

const RiwayatUserPages = () => {
  const navigate = useNavigate();

  const ButtonOnclick = () => {
    navigate("/pages/user/pengajuan/baru");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Navbar */}
      <header className="fixed w-full z-50">
        <NavbarUser />
      </header>

      {/* Main Content */}
      <main className="flex flex-row pt-16">
        {/* Fixed Sidebar */}
        <aside className="fixed h-screen w-64 bg-white shadow-lg">
          <SidebarUser />
        </aside>

        {/* Scrollable Main Content */}
        <section className="ml-64 w-full min-h-screen bg-gray-100 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800">
                Riwayat Pengajuan dan Validasi
              </h1>
              <button
                onClick={ButtonOnclick}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                <span>Ajukan Baru</span>
                <IoIosArrowRoundForward className="ml-2 text-xl" />
              </button>
            </div>

            {/* Riwayat Table Section */}
            <div className="space-y-6">
              {/* Riwayat Pengajuan Section */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                  <GetAndDownloadSKBT />
                </div>
              </div>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                  <RiwayatPengajuanComp />
                </div>
              </div>

              {/* Riwayat Validasi Section */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                  <RiwayatValidasiComponen />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RiwayatUserPages;
