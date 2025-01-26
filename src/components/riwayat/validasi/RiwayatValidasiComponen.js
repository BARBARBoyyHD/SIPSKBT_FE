import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getValidasiUser } from "../../../redux";

const RiwayatValidasiComponen = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.getValidasiUser
  );

  useEffect(() => {
    dispatch(getValidasiUser());
  }, [dispatch]);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error)
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;

  // Define the steps in the validation process
  const steps = [
    { key: "nama_admin", label: "Nama Admin" },
    { key: "ver_Adfo", label: "Verifikasi Adfo" },
    { key: "val_kasuadum", label: "Validasi Kasuadum" },
    { key: "val_sekre", label: "Validasi Sekre" },
    { key: "perse_inspek", label: "Persetujuan Inspeksi" },
    { key: "status", label: "Status" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Riwayat Validasi</h1>
      {data && data.length > 0 ? (
        <div className="space-y-6">
          {data.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">
                  Validasi ID: {item.validasi_id}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    item.status === "disetujui"
                      ? "bg-green-200 text-green-800"
                      : item.status === "proses"
                      ? "bg-yellow-200 text-yellow-800"
                      : item.status === "ditolak"
                      ? "bg-red-200 text-red-800"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {item.status || "-"}
                </span>
              </div>
              {/* Wrapper for horizontal scrolling */}
              <div className="overflow-x-auto">
                <div className="flex justify-between relative min-w-[600px]">
                  {/* Progress line */}
                  <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 z-0"></div>
                  {steps.map((step, stepIndex) => (
                    <div
                      key={stepIndex}
                      className="flex flex-col items-center z-10"
                    >
                      {/* Circle (dot) */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          item[step.key]
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-gray-500"
                        }`}
                      >
                        {stepIndex + 1}
                      </div>
                      {/* Label */}
                      <p className="mt-2 text-sm text-center text-gray-600">
                        {step.label}
                      </p>
                      {/* Value */}
                      <p className="mt-1 text-sm text-center text-gray-800">
                        {item[step.key] || "-"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-4 text-gray-500">No data available</div>
      )}
    </div>
  );
};

export default RiwayatValidasiComponen;
