import React, { useEffect, useState } from "react";
import NavbarUser from "../../components/navbar/user/NavbarUser";
import SidebarUser from "../../components/sidebar/user/SidebarUser";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import UserProfile from "../../components/profile/UserProfile";

const ProfilePages = () => {
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
        <NavbarUser />
      </header>

      {/* Main Content */}
      <main className="flex flex-row pt-16">
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
          <div className="w-full px-4">
            {" "}
            {/* Add padding to the sides */}
            <UserProfile />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePages;
