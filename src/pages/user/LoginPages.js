import React from "react";
import FormLoginUser from "../../components/form/user/FormLoginUser";

const LoginPages = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-rose-700 from-0% via-cyan-900 via-50% to-gray-800 to-100% flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-3xl font-bold text-center text-white">Silahkan Login</h1>
        <FormLoginUser />
      </div>
    </div>
  );
};

export default LoginPages;