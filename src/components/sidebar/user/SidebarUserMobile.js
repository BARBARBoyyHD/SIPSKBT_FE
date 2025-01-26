import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { GoPerson, GoDot } from "react-icons/go";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiPieChartLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Sidebar = ({ isOpen, onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 z-50 w-64 h-screen bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="h-full flex flex-col">
          {/* Close Button (Mobile Only) */}
          <button
            onClick={onClose}
            className="lg:hidden absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <IoClose className="w-6 h-6" />
          </button>

          {/* Sidebar Header */}
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Pegawai
            </h1>
          </div>

          {/* Sidebar Menu */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <ul className="space-y-2">
              {/* Dashboard */}
              <li>
                <Link
                  to="/pages/user/dashboard"
                  className="flex items-center p-3 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  onClick={onClose}
                >
                  <RiPieChartLine className="w-5 h-5" />
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>

              {/* Bebas Temuan Dropdown */}
              <li>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full p-3 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <SlEnvolopeLetter className="w-5 h-5" />
                    <span className="ml-3">Bebas Temuan</span>
                  </div>
                  {isDropdownOpen ? (
                    <IoIosArrowDown className="w-4 h-4" />
                  ) : (
                    <IoIosArrowForward className="w-4 h-4" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <ul className="mt-2 space-y-2 pl-11">
                    <li>
                      <Link
                        to="/pages/user/pengajuan/baru"
                        className="flex items-center p-2 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        onClick={onClose}
                      >
                        <GoDot className="w-4 h-4" />
                        <span className="ml-2">Pengajuan Baru</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/pages/user/riwayat/pengajuan"
                        className="flex items-center p-2 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        onClick={onClose}
                      >
                        <GoDot className="w-4 h-4" />
                        <span className="ml-2">Riwayat</span>
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Profile */}
              <li>
                <Link
                  to="/pages/user/profile"
                  className="flex items-center p-3 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  onClick={onClose}
                >
                  <GoPerson className="w-5 h-5" />
                  <span className="ml-3">Profile</span>
                </Link>
              </li>

              {/* Logout */}
              <li>
                <Link
                  to="/"
                  className="flex items-center p-3 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  onClick={onClose}
                >
                  <LuLogOut className="w-5 h-5" />
                  <span className="ml-3">Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
