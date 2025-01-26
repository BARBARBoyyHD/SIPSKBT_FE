import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import SidebarUserMobile from "../../sidebar/user/SidebarUserMobile";
import SideBarAdminMobile from "../../sidebar/admin/SideBarAdminMobile";

const NavbarAdmin = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => {
    setIsMobile(window.innerWidth < 768);
    // Close mobile menu when resizing to desktop
    if (window.innerWidth >= 768) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isDropdownOpen &&
        !event.target.closest("#user-menu-button") &&
        !event.target.closest("#user-dropdown")
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    window.addEventListener("resize", handleMobile);
    handleMobile(); // Initial check
    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  }, []);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Mobile Menu Toggle Button */}
        {isMobile && (
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <FaBarsStaggered className="w-6 h-6" />
          </button>
        )}

        {/* Mobile Sidebar */}
        <SideBarAdminMobile
          isOpen={isMobileMenuOpen}
          onClose={toggleMobileMenu}
        />

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            SIP - SKBT
          </span>
        </Link>

        {/* User Dropdown */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
         

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className="absolute right-4 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-700"
              id="user-dropdown"
            >
              <ul className="py-2">
                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
