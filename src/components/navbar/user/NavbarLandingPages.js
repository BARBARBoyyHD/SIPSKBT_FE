import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the mobile menu toggle

const NavbarLandingPages = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  const handleMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", handleMobile);
    handleMobile();
    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  }, []);

  const handleLogin = () => {
    navigate("/pages/user/login");
  };

  return (
    <nav className="fixed w-full flex flex-row justify-between items-center p-4 z-50">
      {/* Logo or Brand Name */}
      <h1 className="text-2xl font-bold text-white">SIP SKBT</h1>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-white text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`flex flex-row space-x-6 md:space-x-8 md:flex ${
          isMobile
            ? `absolute top-16 right-0 flex-col bg-gray-900 bg-opacity-95 w-full text-center space-y-4 py-4 transform transition-transform duration-300 ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`
            : "hidden"
        }`}
      >
        <li>
          <a
            href="#pelayanan"
            className="text-white hover:text-opacity-80 transition duration-300"
          >
            Pelayanan
          </a>
        </li>
      </ul>

      {/* Login Button */}
      <Link
        to={"/pages/user/login"}
        className="hidden md:flex w-[100px] h-[50px] justify-center items-center rounded-[50px] bg-gradient-to-br from-rose-800 from-0% via-purple-700 via-50% to-neutral-300 to-100% hover:bg-teal-500 hover:animate-pulse font-bold text-white"
      >
        Login
      </Link>
    </nav>
  );
};

export default NavbarLandingPages;
