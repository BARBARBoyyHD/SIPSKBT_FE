import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux"; // Import the loginUser action
import { Link, useNavigate } from "react-router-dom";

const FormLoginUser = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.loginUser); // Access Redux state
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!formData.username || !formData.password) {
      alert("Username and password are required.");
      return;
    }

    // Dispatch the loginUser action with the form data
    dispatch(
      loginUser(formData, (responseStatus) => {
        if (responseStatus === 200) {
          navigate("/pages/user/dashboard");
        } else {
          navigate("/pages/user/login");
        }
      })
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Login
      </h2>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {data && <p className="text-green-500 text-sm mb-4">{data.message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          disabled={loading} // Disable the button while loading
          className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <div className="flex flex-col">
          <Link to={"/pages/user/register"}>
            Belum punya akun ?{" "}
            <span className="text-blue-700">daftar disini</span>
          </Link>
          <Link to={"/pages/admin/login"}>
            Anda Admin ?
            <span className="text-blue-700">silahkan Login disini</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormLoginUser;
