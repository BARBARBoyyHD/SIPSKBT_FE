import React from "react";
import NavbarLandingPages from "../../components/navbar/user/NavbarLandingPages";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionPersyaratan from "../../components/landingpages/SectionPersyaratan";
import FooterLandingPages from "../../components/landingpages/FooterLandingPages";
import CopyRight from "../../components/landingpages/CopyRight";

const LandingPages = () => {
  return (
    <div className="bg-gradient-to-bl from-rose-700 from-0% via-cyan-900 via-50% to-gray-800 to-100% min-h-screen">
      {/* Navbar (positioned above everything) */}
      <header className="relative z-50">
        <NavbarLandingPages />
      </header>

      {/* Main Content */}
      <main>
        {/* Section with Dark Overlay */}
        <section className="relative bg-sumsel bg-cover md:bg-center w-full h-[100vh] flex justify-center items-center flex-col">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="bg-logo bg-cover md:bg-center w-[200px] h-[200px] flex justify-center z-50"></div>
          {/* Content (positioned above the overlay) */}
          <div className="relative z-10 text-center max-w-2xl px-4">
            <h1 className="text-2xl font-bold text-white mb-4">
              Sistem Pengajuan Surat Keterangan Bebas Temuan
            </h1>
            <div className="p-4 rounded-lg">
              <p className="text-[15px] text-white leading-relaxed">
                SiP-SKBT merupakan aplikasi berbasis web yang dirancang untuk
                memudahkan pengajuan dan pengelolaan Surat Keterangan Bebas
                Temuan. Aplikasi ini mempercepat proses pengajuan, meminimalkan
                kesalahan administrasi, serta memungkinkan pemohon untuk
                memantau status pengajuan secara real-time.
              </p>
            </div>
          </div>

          {/* Button (positioned above the overlay) */}
          <Link
            to={"/pages/user/login"}
            className="relative z-10 flex justify-center items-center gap-2 p-3 rounded-lg text-white font-bold bg-gradient-to-tl from-red-500 from-0% via-yellow-800 via-50% to-purple-600 to-100% hover:animate-bounce"
          >
            <FaRegArrowAltCircleRight /> Masuk Sistem
          </Link>
        </section>

        {/* Second Section (no overlay) */}
        <section id="pelayanan" className="w-full h-auto flex justify-center items-center flex-col">
          <SectionPersyaratan />
        </section>
        <footer>
          <FooterLandingPages/>
          <CopyRight/>
        </footer>
      </main>
    </div>
  );
};

export default LandingPages;
