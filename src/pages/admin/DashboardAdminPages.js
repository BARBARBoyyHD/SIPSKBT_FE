import React, { useEffect, useState } from "react";
import NavbarUser from "../../components/navbar/user/NavbarUser";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/navbar/admin/NavbarAdmin";
import SideBarAdmin from "../../components/sidebar/admin/SideBarAdmin";

const DashboardAdminPages = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const ButtonOnclick = () => {
    navigate("/pages/user/pengajuan/baru");
  };

  useEffect(() => {
    window.addEventListener("resize", handleMobile);
    handleMobile(); // Initial check
    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  }, []);

  return (
    <div>
      {/* Fixed Navbar */}
      <header className="fixed w-full z-50">
        <NavbarAdmin />
      </header>

      {/* Main Content */}
      <main className="flex flex-row pt-16">
        {/* Fixed Sidebar */}
        {/* Always visible on larger screens, conditionally rendered on mobile */}
        {!isMobile && (
          <aside className="fixed h-screen w-64">
            <SideBarAdmin />
          </aside>
        )}

        {/* Scrollable Main Content */}
        <section
          className={`w-full min-h-screen bg-blue-400 pt-16 flex justify-center ${
            !isMobile ? "ml-64" : ""
          }`}
        >
          <div className="w-[900px] h-[400px] border border-black rounded-[10px] bg-slate-50 flex flex-col items-center">
            {/* Ensure bg-person is defined in tailwind.config.js */}
            <div className="bg-person w-[200px] h-[200px] bg-cover bg-center"></div>
            <h1 className="text-2xl font-bold p-4">
              Sistem Pengajuan Surat Keterangan Bebas Temuan
            </h1>
            <button
              onClick={ButtonOnclick}
              className="flex justify-center items-center border border-black p-3 rounded-[8px] bg-blue-700 text-white font-bold hover:bg-blue-400"
            >
              Buat Pengajuan SKBT{" "}
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardAdminPages;
