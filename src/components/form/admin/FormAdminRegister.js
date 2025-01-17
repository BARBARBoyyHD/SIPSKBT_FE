import React, { useState } from 'react'
import { adminRegist } from '../../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
const FormAdminRegister = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.adminRegist);
    const navigate = useNavigate();
    // State for form inputs
    const [form, setForm] = useState({
      username: "",
      password: "",
      email: "",
    });
  
    // Handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Dispatch the adminRegist action with form data
      dispatch(
        adminRegist(form, (status) => {
          if (status === 201) {
            alert("Registration successful!");
            // Reset the form after successful registration
            navigate("/pages/admin/login");
            setForm({
              username: "",
              password: "",
              email: "",
            });
          }
        })
      );
    };
  
    return (
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register Admin</h2>
  
        {/* Display error message if registration fails */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
  
        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4">
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
              onChange={handleChange}
              placeholder="Masukan Username atau NIP anda"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
  
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              placeholder="Masukan Email anda"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
  
          {/* Password Field */}
          <div className="mb-6">
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
              placeholder="Masukan password anda minmial 8 karakter"
              value={form.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {loading ? "Registering..." : "Register"}
          </button>
          <Link to={"/pages/admin/login"}>
            Sudah Punya Akun ?{" "}
            <span className="text-blue-700">silahkan login</span>
          </Link>
        </form>
  
        {/* Display success message if registration is successful */}
        {data && (
          <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Registration successful! Welcome, {data.username}.
          </div>
        )}
      </div>
    );
}

export default FormAdminRegister
