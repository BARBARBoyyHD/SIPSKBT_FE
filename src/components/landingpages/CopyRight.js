import React from "react";

const CopyRight = () => {
  return (
    <div className="w-full bg-gray-900 py-4">
      <p className="text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Inspektorat Provinsi Sumatera Selatan.
        All rights reserved.
      </p>
    </div>
  );
};

export default CopyRight;
