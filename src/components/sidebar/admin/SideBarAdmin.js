import React, { useState } from "react";
import { LuLogOut } from "react-icons/lu";
import { GoPerson, GoDot } from "react-icons/go";
import { SlEnvolopeLetter } from "react-icons/sl";
import { RiPieChartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SideBarAdmin = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <h1 className="ms-3 font-bold text-gray-900">Admin</h1>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/pages/admin/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <RiPieChartLine/>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                onClick={toggleDropdown}
              >
                <SlEnvolopeLetter />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Bebas Temuan
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } py-2 space-y-2`}
              >
                
                <li>
                  <Link
                    to="/pages/admin/show/all/validasi"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 hover:text-blue-700 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <GoDot />
                    List Riwayat Pengajuan
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <GoPerson />
                <span className="flex-1 ms-3 whitespace-nowrap">profile</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <LuLogOut />
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBarAdmin;
