import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminProfile } from "../../redux";
import { Link } from "react-router-dom";

// Reusable component for profile detail rows
const ProfileDetail = ({ label, value }) => (
  <div className="flex justify-between border-b pb-2">
    <span className="font-medium text-gray-600">{label}:</span>
    <span className="text-gray-800">{value || "N/A"}</span>
  </div>
);

const AdminProfile = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.getAdminProfile);

  // Fetch admin profile data on component mount
  useEffect(() => {
    dispatch(getAdminProfile());
  }, [dispatch]);

  // Display loading state
  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  // Display error state
  if (error) {
    return <div className="text-center text-red-600">Error: {error}</div>;
  }

  // Display if no data is available
  if (!data) {
    return <div className="text-center text-gray-600">No profile data found.</div>;
  }

  // Destructure data for easier access
  const { email, username, nama_admin } = data;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Admin Profile
      </h1>
      <div className="space-y-4">
        {/* Profile Details */}
        <ProfileDetail label="Email" value={email} />
        <ProfileDetail label="Username" value={username} />
        <ProfileDetail label="Full Name" value={nama_admin} />

        {/* Link to Edit Profile */}
        <Link
          to="/pages/admin/edit/profile"
          className="inline-block p-2 bg-blue-700 text-white rounded-sm hover:bg-blue-600 transition-colors duration-200"
        >
          Update Your Profile
        </Link>
      </div>
    </div>
  );
};

export default AdminProfile;