import React from "react";
import AdminGetValUserComponent from "../../components/riwayat/validasi/AdminGetValUserComponent";
import NavbarUser from "../../components/navbar/user/NavbarUser";
import SideBarAdmin from "../../components/sidebar/admin/SideBarAdmin";

const AdminListValidasiPages = () => {
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
          <SideBarAdmin />
        </aside>

        {/* Scrollable Main Content */}
        <section className="ml-64 w-full min-h-screen bg-gray-100 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800">
                Daftar Validasi Pengguna
              </h1>
            </div>

            {/* Table Section */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <AdminGetValUserComponent />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminListValidasiPages;
