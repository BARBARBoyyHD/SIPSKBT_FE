import React, { useEffect } from "react";
import { getUserVal } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminGetValUserComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.getUserVal);

  useEffect(() => {
    dispatch(getUserVal());
  }, [dispatch]);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error)
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Daftar Validasi Pengguna
      </h2>
      {data && data.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Validasi ID
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Nama Admin
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Verifikasi Adfo
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Validasi Kasuadum
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Validasi Sekre
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Persetujuan Inspeksi
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                  Lihat Berkas
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {item.validasi_id}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {item.nama_admin || "-"}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {item.ver_Adfo || "-"}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {item.val_kasuadum || "-"}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {item.val_sekre || "-"}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    {item.perse_inspek || "-"}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
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
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    <Link to={`/pages/admin/edit/validasi/${item.validasi_id}`}>
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null // Display nothing if there is no data
      }
    </div>
  );
};

export default AdminGetValUserComponent;
