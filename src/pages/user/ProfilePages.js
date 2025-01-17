import React from 'react'
import NavbarUser from "../../components/navbar/user/NavbarUser";
import SidebarUser from "../../components/sidebar/user/SidebarUser";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ProfilePages = () => {
  return (
    <div>
    {/* Fixed Navbar */}
    <header className="fixed w-full z-50">
      <NavbarUser />
    </header>

    {/* Main Content */}
    <main className="flex flex-row pt-16">
      {/* Fixed Sidebar */}
      <aside className="fixed h-screen w-64">
        <SidebarUser />
      </aside>
      {/* Scrollable Main Content */}
      <section className="ml-64 w-full min-h-screen bg-blue-400 pt-16 flex justify-center">
        <div className="w-[900px] h-[400px] border border-black rounded-[10px] bg-slate-50 flex flex-col  items-center">
          {/* Ensure bg-person is defined in tailwind.config.js */}
          <div className="bg-person w-[200px] h-[200px] bg-cover bg-center"></div>
          <h1 className="text-2xl font-bold p-4">
            Sistem Pengajuan Surat Keterangan Bebas Temuan
          </h1>
          <button className="flex justify-center items-center border border-black p-3 rounded-[8px] bg-blue-700 text-white font-bold hover:bg-blue-400">
            Buat Pengajuan SKBT{" "}
            <IoIosArrowRoundForward className="text-2xl" />
          </button>
        </div>
      </section>
    </main>
  </div>
  )
}

export default ProfilePages
