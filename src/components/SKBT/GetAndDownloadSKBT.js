import React, { useEffect, useState } from "react";
import axios from "axios";

const GetAndDownloadSKBT = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/get/surat/SKBT",
          {
            withCredentials: true, // Include credentials (cookies) in the request
          }
        );
        setData(response.data.data); // Set the fetched data
        setLoading(false);
      } catch (err) {
        setError(err.message); // Set error message
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Determine the background color, text color, and message based on the status
  const getStatusStyle = (status) => {
    switch (status) {
      case "disetujui":
        return {
          bgColor: "bg-green-500", // Green background
          textColor: "text-white", // White text
          message: "Silahkan unduh SKBT ini",
        };
      case "ditolak":
        return {
          bgColor: "bg-red-500", // Red background
          textColor: "text-white", // White text
          message: "Pengajuan ditolak",
        };
      case "proses":
        return {
          bgColor: "bg-yellow-500", // Yellow background
          textColor: "text-white", // White text
          message: "Pengajuan sedang diproses",
        };
      default:
        return {
          bgColor: "bg-gray-500", // Gray background
          textColor: "text-white", // White text
          message: "Status tidak diketahui",
        };
    }
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error)
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Status Pengajuan SKBT
      </h2>

      {data && (
        <div
          className={`p-4 rounded-lg mb-4 ${
            getStatusStyle(data.status).bgColor
          }`}
        >
          <p
            className={`text-lg font-bold ${
              getStatusStyle(data.status).textColor
            }`}
          >
            Status: {data.status}
          </p>
          <p className={`mt-2 ${getStatusStyle(data.status).textColor}`}>
            {getStatusStyle(data.status).message}
          </p>

          {/* Show download link if status is "disetujui" */}
          {data.status === "disetujui" && (
            <div className="mt-4">
              <a
                href={data.surat_disetujui}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline font-semibold"
              >
                Unduh SKBT
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GetAndDownloadSKBT;
