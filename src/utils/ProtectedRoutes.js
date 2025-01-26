import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Initialize as null

  const handleAuthUser = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/v1/v2/auth/user/admin", {
        method: "GET",
        credentials: "include", // Ensure cookies are included
      });
      if (res.ok) {
        const data = await res.json();
        if (data.message === "Access Passed") {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } else {
        console.error("Failed to fetch user data:", res.status, res.statusText);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error Fetching Data:", error);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    handleAuthUser();
  }, []); // Add empty dependency array

  if (isAuthenticated === null) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        Loading ...
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/pages/user/login" />;
};

export default ProtectedRoutes;