import React, { useEffect } from "react";
import { getUserProfile } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { RxPerson } from "react-icons/rx";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.getUserProfile);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  if (loading)
    return <div className="text-center text-gray-600">Loading...</div>;
  if (error)
    return <div className="text-center text-red-600">Error: {error}</div>;

  // Check if data is null or undefined
  if (!data) {
    return <div className="text-center text-gray-600">No data found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        User Profile
      </h1>
      <div className="space-y-4">
        {/* Profile Photo */}
        <div className="flex justify-center flex-col items-center border-b pb-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {data.foto_profile ? (
              <img
                src={data.foto_profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <RxPerson className="text-2xl"/>
            )}
          </div>
          <Link to={"/pages/user/edit/profile"}className="p-4 bg-blue-500 text-white rounded mt-4 hover:bg-blue-600">Edit Your Profile</Link>
        </div>

        {/* Profile Details */}
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium text-gray-600">Email:</span>
          <span className="text-gray-800">{data.email}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium text-gray-600">Username/NIP:</span>
          <span className="text-gray-800">{data.username_NIP}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium text-gray-600">Full Name:</span>
          <span className="text-gray-800">{data.nama_lengkap || "N/A"}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium text-gray-600">Phone/WhatsApp:</span>
          <span className="text-gray-800">{data.noHpWa || "N/A"}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium text-gray-600">Position:</span>
          <span className="text-gray-800">{data.jabatan || "N/A"}</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="font-medium text-gray-600">Rank/Region:</span>
          <span className="text-gray-800">{data.prngkt_daerah || "N/A"}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Rank/Golongan:</span>
          <span className="text-gray-800">{data.pangkatGol || "N/A"}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;