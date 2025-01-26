import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../components/navbar/admin/NavbarAdmin";
import AdminGetSingleValComp from "../../components/riwayat/validasi/AdminGetSingleValComp";
import SideBarAdmin from "../../components/sidebar/admin/SideBarAdmin";

const AdminEditValPages = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };
  useEffect(() => {
    window.addEventListener("resize", handleMobile);
    handleMobile();
    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Navbar */}
      <header className="fixed w-full z-50">
        <NavbarAdmin />
      </header>

      {/* Main Content */}
      <main className="flex flex-row pt-16">
        {/* Fixed Sidebar */}
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
          <div className="w-full px-4">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800">
                Validasi untuk pengajuan
              </h1>
            </div>

            {/* Table Section */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <AdminGetSingleValComp />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminEditValPages;
