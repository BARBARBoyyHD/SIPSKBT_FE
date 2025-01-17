import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSingleValUser, valPutAdmin } from "../../../redux";

const AdminGetSingleValComp = () => {
  const { validasi_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { updateAdmin } = useSelector((state) => state.valPutAdmin);

  const {
    data: singleData,
    loading,
    error,
  } = useSelector((state) => state.getSingleValUser);

  const [formData, setFormData] = useState({
    ver_Adfo: "",
    val_kasuadum: "",
    val_sekre: "",
    perse_inspek: "",
    status: "",
  });

  const [riwayatId, setRiwayatId] = useState(null); // <-- State to store riwayat_id

  // Fetch data when the component mounts or `validasi_id` changes
  useEffect(() => {
    if (validasi_id) {
      dispatch(getSingleValUser(validasi_id));
    }
  }, [dispatch, validasi_id]);

  // Update form data and riwayat_id when `singleData` is fetched
  useEffect(() => {
    if (Array.isArray(singleData) && singleData.length > 0) {
      console.log("form data : ", singleData);
      const validationData = singleData[0];
      setFormData({
        ver_Adfo: validationData.ver_Adfo || "",
        val_kasuadum: validationData.val_kasuadum || "",
        val_sekre: validationData.val_sekre || "",
        perse_inspek: validationData.perse_inspek || "",
        status: validationData.status || "",
      });
      setRiwayatId(validationData.riwayat_id); // <-- Set riwayat_id from singleData
    }
  }, [singleData]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      valPutAdmin(validasi_id, formData, (responseStatus) => {
        if (responseStatus === 200) {
          navigate("/pages/admin/dashboard");
        } else {
          console.error("Update failed with status:", responseStatus);
        }
      })
    );
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error)
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Edit Validasi Pengguna
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form fields */}
        {Object.entries(formData).map(([key, value]) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700">
              {key.replace(/_/g, " ")}
            </label>
            {key === "status" ? (
              <select
                name={key}
                value={value}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="proses">Proses</option>
                <option value="disetujui">Disetujui</option>
                <option value="ditolak">Ditolak</option>
              </select>
            ) : (
              <input
                type="text"
                name={key}
                value={value}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            )}
          </div>
        ))}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Simpan Perubahan
          </button>
          {/* Link to Riwayat Pengajuan */}
          {riwayatId && ( // <-- Only show the link if riwayatId is available
            <div className="mt-4 text-center">
              <Link
                to={`/pages/admin/riwayat/single/${riwayatId}`}
                className="text-blue-600 hover:underline"
              >
                Lihat Riwayat Pengajuan disini
              </Link>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AdminGetSingleValComp;
