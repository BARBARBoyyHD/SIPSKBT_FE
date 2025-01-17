import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pengajuanSingle } from "../../../redux";
import { useParams } from "react-router-dom";

const GetSinglePengajuanComponent = () => {
  const { pengajuan_id } = useParams();
  const dispatch = useDispatch();
  const { data, user_info, error, loading } = useSelector(
    (state) => state.pengajuanSingle
  );

  useEffect(() => {
    if (pengajuan_id) {
      dispatch(pengajuanSingle(pengajuan_id));
    }
  }, [dispatch, pengajuan_id]);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error)
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;
  if (!data) return <div className="text-center py-4">No data found.</div>;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Detail Pengajuan
      </h2>
      <div className="space-y-4">
        {/* General Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">
            Informasi Umum
          </h3>
          <div className="mt-2 space-y-2">
            <p>
              <span className="font-medium">Pengajuan ID:</span>{" "}
              {data.pengajuan_id}
            </p>
            <p>
              <span className="font-medium">User ID:</span> {data.user_id}
            </p>
            <p>
              <span className="font-medium">Instansi Tujuan:</span>{" "}
              {data.instansi_tujuan}
            </p>
            <p>
              <span className="font-medium">Maksud Perjalanan:</span>{" "}
              {data.maksud_per}
            </p>
            <p>
              <span className="font-medium">No. HP Kepala OPD:</span>{" "}
              {data.noHpkepalaOPD}
            </p>
            <p>
              <span className="font-medium">Tanggal Dibuat:</span>{" "}
              {data.created_at}
            </p>
          </div>
        </div>

        {/* User Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">
            Informasi Pengaju
          </h3>
          <div className="mt-2 space-y-2">
            <p>
              <span className="font-medium">Username/NIP:</span>{" "}
              {user_info?.username_NIP}
            </p>
            <p>
              <span className="font-medium">Email:</span> {user_info?.email}
            </p>
            <p>
              <span className="font-medium">Nama Lengkap:</span>{" "}
              {user_info?.nama_lengkap || "N/A"}
            </p>
            <p>
              <span className="font-medium">Pangkat/Golongan:</span>{" "}
              {user_info?.pangkatGol || "N/A"}
            </p>
            <p>
              <span className="font-medium">Jabatan:</span>{" "}
              {user_info?.jabatan || "N/A"}
            </p>
            <p>
              <span className="font-medium">Perangkat Daerah:</span>{" "}
              {user_info?.prngkt_daerah || "N/A"}
            </p>
            <p>
              <span className="font-medium">No. HP/WA:</span>{" "}
              {user_info?.noHpWa || "N/A"}
            </p>
          </div>
        </div>

        {/* File Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Berkas</h3>
          <div className="mt-2 space-y-2">
            {Object.entries(data).map(([key, value]) => {
              // Only render file links (URLs that start with "http")
              if (typeof value === "string" && value.startsWith("http")) {
                return (
                  <div key={key} className="flex items-center">
                    <span className="font-medium mr-2">{key}:</span>
                    <a
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Download {key}
                    </a>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetSinglePengajuanComponent;
