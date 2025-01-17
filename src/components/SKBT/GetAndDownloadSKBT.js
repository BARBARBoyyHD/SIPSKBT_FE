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
          "https://sipskbt-be.vercel.app/api/v1/get/surat/SKBT",
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

  // Determine the border color and text based on the status
  const getStatusStyle = (status) => {
    switch (status) {
      case "disetujui":
        return {
          borderColor: "green",
          textColor: "green",
          message: "Silahkan unduh SKBT ini",
        };
      case "ditolak":
        return {
          borderColor: "red",
          textColor: "red",
          message: "Pengajuan ditolak",
        };
      case "proses":
        return {
          borderColor: "yellow",
          textColor: "yellow",
          message: "Pengajuan sedang diproses",
        };
      default:
        return {
          borderColor: "gray",
          textColor: "gray",
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
          className={`p-4 border-2 rounded-lg mb-4`}
          style={{ borderColor: getStatusStyle(data.status).borderColor }}
        >
          <p
            className="text-lg font-semibold"
            style={{ color: getStatusStyle(data.status).textColor }}
          >
            Status: {data.status}
          </p>
          <p className="mt-2 text-gray-700">
            {getStatusStyle(data.status).message}
          </p>

          {/* Show download link if status is "disetujui" */}
          {data.status === "disetujui" && (
            <div className="mt-4">
              <a
                href={data.surat_disetujui}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
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
