import React, { useEffect, useState } from "react";
import NavbarAdmin from "../../components/navbar/admin/NavbarAdmin";
import SideBarAdmin from "../../components/sidebar/admin/SideBarAdmin";
import AdminEditProfile from "../../components/profile/AdminEditProfile";
const AdminEditProfilePages = () => {
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
    <div>
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
            {" "}
            {/* Add padding to the sides */}
            <AdminEditProfile />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminEditProfilePages;
