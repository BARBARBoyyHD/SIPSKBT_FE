import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSingleRiwayat, putRiwayatAdmin } from "../../../redux";

const AdminGetSingleRiwayatComp = () => {
  const { riwayat_id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data,
    loading: fetchLoading,
    error: fetchError,
  } = useSelector((state) => state.getSingleRiwayat);

  const { loading: updateLoading, error: updateError } = useSelector(
    (state) => state.putRiwayatAdmin
  );

  const [formData, setFormData] = useState({
    status: "",
    surat_disetujui: null, // For file upload
  });

  const [file, setFile] = useState(null); // State to store the uploaded file
  const [pengajuan_id, setPengajuanId] = useState(null); // State to store pengajuan_id

  // Fetch data when the component mounts or `riwayat_id` changes
  useEffect(() => {
    if (riwayat_id) {
      dispatch(getSingleRiwayat(riwayat_id));
    }
  }, [dispatch, riwayat_id]);

  // Update form data and pengajuan_id when `data` is fetched
  useEffect(() => {
    if (data && data.data && data.data.length > 0) {
      const riwayatData = data.data[0]; // Access the first element of the array
      console.log("riwayat data : ", riwayatData);

      setFormData({
        status: riwayatData.status || "",
        surat_disetujui: riwayatData.surat_disetujui || null,
      });

      setPengajuanId(riwayatData.pengajuan_id); // Set pengajuan_id from riwayatData
    }
  }, [data]);

  // Handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFormData((prevData) => ({
      ...prevData,
      surat_disetujui: selectedFile,
    }));
    console.log("Selected File:", selectedFile); // Debugging
  };

  // Handle status dropdown change
  const handleStatusChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      status: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    // Append non-file fields
    formDataToSend.append("status", formData.status);

    // Append the file if it exists
    if (formData.surat_disetujui) {
      formDataToSend.append("surat_disetujui", formData.surat_disetujui);
    }

    // Log the FormData entries for debugging
    for (let [key, value] of formDataToSend.entries()) {
      console.log(key, value);
    }

    dispatch(
      putRiwayatAdmin(riwayat_id, formDataToSend, (responseStatus) => {
        if (responseStatus === 200) {
          navigate("/pages/admin/dashboard");
        } else {
          console.error("Update failed with status:", responseStatus);
        }
      })
    );
  };

  if (fetchLoading) return <div className="text-center py-4">Loading...</div>;
  if (fetchError)
    return (
      <div className="text-center py-4 text-red-500">Error: {fetchError}</div>
    );

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Detail Riwayat Pengajuan
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Status Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleStatusChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="proses">Proses</option>
            <option value="ditolak">Ditolak</option>
            <option value="disetujui">Disetujui</option>
          </select>
        </div>

        {/* Surat Disetujui (File Upload) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Surat Disetujui
          </label>
          <div className="mt-1 flex items-center">
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span>Choose File</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                onChange={handleFileChange}
                className="sr-only" // Hide the default file input
              />
            </label>
            {file && (
              <p className="ml-4 text-sm text-gray-500">
                File selected:{" "}
                <span className="font-semibold">{file.name}</span>
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={updateLoading}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 disabled:bg-blue-300"
          >
            {updateLoading ? "Submitting..." : "Simpan Perubahan"}
          </button>

          {/* Map over data.data to generate Links */}
          {data && data.data && data.data.length > 0 && (
            <div className="mt-4 text-center">
              {data.data.map((item, index) => (
                <div key={index} className="mb-2">
                  <Link
                    to={`/pages/admin/check/user/pengajuan/${item.pengajuan_id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Cek berkas untuk pengajuan 
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Update Error Message */}
        {updateError && (
          <div className="mt-4 text-center text-red-500">
            Error: {updateError}
          </div>
        )}
      </form>
    </div>
  );
};

export default AdminGetSingleRiwayatComp;
