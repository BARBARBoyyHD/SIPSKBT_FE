import React, { useState } from "react";
import { adminLogin } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const FromLoginAdmin = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.adminLogin);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      adminLogin(form, (responseStatus) => {
        if (responseStatus === 200) {
          navigate("/pages/admin/dashboard");
        }
      })
    );
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Admin Login
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username Field */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your username"
            required
          />
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-center text-red-500 text-sm">{error}</div>
        )}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 disabled:bg-blue-300"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <Link to={"/pages/admin/register"}>Belum punya akun ? <span className="text-blue-700">daftar disini</span></Link>
        </div>
      </form>
    </div>
  );
};

export default FromLoginAdmin;
