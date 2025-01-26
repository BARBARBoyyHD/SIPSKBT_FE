import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, updateUser } from "../../redux";
import { useNavigate } from "react-router-dom";

const EditUserProfile = () => {
  const dispatch = useDispatch();
  const {
    data: userProfile,
    error,
    loading,
  } = useSelector((state) => state.getUserProfile);
  const { data: userData } = useSelector((state) => state.updateUser);
  const navigate = useNavigate();

  // State for form inputs
  const [form, setForm] = useState({
    nama_lengkap: "",
    pangkatGol: "",
    jabatan: "",
    prngkt_daerah: "",
    noHpWa: "",
    foto_profile: null,
  });

  // Fetch user profile data on component mount
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  // Pre-fill form with fetched data
  useEffect(() => {
    if (userProfile) {
      console.log("Fetched userProfile:", userProfile); // Debug: Check fetched data
      setForm({
        nama_lengkap: userProfile.nama_lengkap || "",
        pangkatGol: userProfile.pangkatGol || "",
        jabatan: userProfile.jabatan || "",
        prngkt_daerah: userProfile.prngkt_daerah || "",
        noHpWa: userProfile.noHpWa || "",
        foto_profile: null, // Keep as null for file input
      });
      console.log("Form state after update:", form); // Debug: Check form state
    }
  }, [userProfile]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm((prev) => ({ ...prev, foto_profile: file }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama_lengkap", form.nama_lengkap);
    formData.append("pangkatGol", form.pangkatGol);
    formData.append("jabatan", form.jabatan);
    formData.append("prngkt_daerah", form.prngkt_daerah);
    formData.append("noHpWa", form.noHpWa);
    if (form.foto_profile) {
      formData.append("foto_profile", form.foto_profile);
    }

    dispatch(
      updateUser(formData, (responseStatus) => {
        if (responseStatus === 200) {
          navigate("/pages/user/profile");
        }
      })
    );
  };

  if (loading)
    return <div className="text-center text-gray-600">Loading...</div>;
  if (error)
    return <div className="text-center text-red-600">Error: {error}</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Edit User Profile
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-600">Full Name:</label>
          <input
            type="text"
            name="nama_lengkap"
            value={form.nama_lengkap}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Rank/Golongan */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-600">Rank/Golongan:</label>
          <input
            type="text"
            name="pangkatGol"
            value={form.pangkatGol}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Position */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-600">Position:</label>
          <input
            type="text"
            name="jabatan"
            value={form.jabatan}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Rank/Region */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-600">Rank/Region:</label>
          <input
            type="text"
            name="prngkt_daerah"
            value={form.prngkt_daerah}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Phone/WhatsApp */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-600">Phone/WhatsApp:</label>
          <input
            type="number"
            name="noHpWa"
            value={form.noHpWa}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Profile Photo */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-600">Profile Photo:</label>
          <input
            type="file"
            name="foto_profile"
            onChange={handleFileChange}
            className="p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserProfile;
