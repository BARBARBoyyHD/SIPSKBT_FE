import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminProfile, adminEditProfile } from "../../redux";

const AdminEditProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.getAdminProfile);
  const { data: updatedAdmin, error } = useSelector(
    (state) => state.adminEditProfile
  );
  const [form, setForm] = useState({
    nama_lengkap: "",
    email: "",
  });

  // Fetch admin profile data on component mount
  useEffect(() => {
    dispatch(getAdminProfile());
  }, [dispatch]);

  // Populate form fields when user data is fetched
  useEffect(() => {
    if (user) {
      setForm({
        nama_lengkap: user.nama_lengkap || "",
        email: user.email || "",
      });
    }
  }, [user]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminEditProfile(form));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Edit Admin Profile
        </h1>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        {/* Success Message */}
        {updatedAdmin && (
          <p className="text-green-500 text-sm mb-4 text-center">
            Profile updated successfully!
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="nama_lengkap"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Lengkap:
            </label>
            <input
              type="text"
              id="nama_lengkap"
              name="nama_lengkap"
              value={form.nama_lengkap}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminEditProfile;
