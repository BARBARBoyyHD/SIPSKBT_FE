import React from "react";

const FooterLandingPages = () => {
  return (
    <footer className="w-full h-auto md:h-[200px] flex flex-col md:flex-row justify-center items-center md:justify-between p-4 bg-gray-800">
      {/* Logo Section */}
      <div className="bg-logo bg-cover bg-center w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex justify-center items-center z-50 mb-4 md:mb-0">
        {/* Add an alt text for accessibility */}
      </div>

      {/* Address and Contact Section */}
      <div className="text-white text-center md:text-left">
        <ul className="space-y-2">
          <li className="text-sm md:text-base">
            Alamat: Jl. Ade Irma Nasution, Ilir Timur I, Kota Palembang,
            Sumatera Selatan 30121
          </li>
          <li className="text-sm md:text-base">
            Email: inspektorat@sumselprov.go.id
          </li>
          <li className="text-sm md:text-base">Telp: (0711) 354221</li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterLandingPages;
