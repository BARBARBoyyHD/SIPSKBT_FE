import React, { useEffect, useState } from "react";
import NavbarUser from "../../components/navbar/user/NavbarUser";
import SidebarUser from "../../components/sidebar/user/SidebarUser";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const DashboardPages = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };
  const navigate = useNavigate();
  const ButtonOnclick = () => {
    navigate("/pages/user/pengajuan/baru");
  };

  useEffect(() => {
    window.addEventListener("resize", handleMobile);
    handleMobile();
    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  }, []);

  return (
    <div>
      {/* Fixed Navbar */}
      <header className="fixed w-full z-50">
        <NavbarUser />
      </header>

      {/* Main Content */}
      <main className="flex flex-row pt-16">
        {/* Fixed Sidebar - Only visible on larger screens */}
        {!isMobile && (
          <aside className="fixed h-screen w-64">
            <SidebarUser />
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

export default DashboardPages;
