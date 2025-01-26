import React, { useEffect, useState } from "react";
import NavbarUser from "../../components/navbar/user/NavbarUser";
import SidebarUser from "../../components/sidebar/user/SidebarUser";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import FormPengajuan from "../../components/form/FormPengajuan";

const PengajuanBaru = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", handleMobile);
    handleMobile();
    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar */}
      <header className="fixed w-full z-50">
        <NavbarUser />
      </header>

      {/* Main Content */}
      <main className="flex flex-row pt-16 ">
        {/* Fixed Sidebar */}
        {!isMobile && (
          <aside className="fixed h-screen w-64">
            <SidebarUser />
          </aside>
        )}

        {/* Scrollable Main Content */}
        <section className={`w-full min-h-screen bg-blue-400 pt-16 flex justify-center ${
            !isMobile ? "ml-64" : ""
          }`}>
          <div className="w-full flex justify-center">
            <div className="w-[900px] border border-black rounded-[10px] bg-slate-50 p-8">
              <div className="w-full p-4 flex  items-center">
                <div className="bg-form w-[100px] h-[100px] bg-cover bg-center"></div>
                <h1 className="text-2xl font-bold">
                  Silahkan Isi Form Pengajuan Di Bawah Ini{" "}
                </h1>
              </div>
              <FormPengajuan />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PengajuanBaru;
