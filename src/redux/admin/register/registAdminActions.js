import axios from "axios";
import {
  ADMIN_REGIST_REQUEST,
  ADMIN_REGIST_SUCCESS,
  ADMIN_REGIST_ERROR,
} from "./registAdminTypes";

// Action Creators
const adminRegistRequest = () => ({
  type: ADMIN_REGIST_REQUEST,
});

const adminRegistSuccess = (data) => ({
  type: ADMIN_REGIST_SUCCESS,
  payload: data,
});

const adminRegistError = (error) => ({
  type: ADMIN_REGIST_ERROR,
  payload: error,
});

// Thunk Action for Admin Registration
export const adminRegist = (data, callback) => {
  return async (dispatch) => {
    dispatch(adminRegistRequest()); // Dispatch the request action

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/register/admin", // Replace with your API endpoint
        data,
        {
          withCredentials: true, // Include credentials (cookies) in the request
        }
      );

      dispatch(adminRegistSuccess(response.data)); // Dispatch the success action

      // Execute the callback function if provided
      if (callback) {
        callback(response.status);
      }

      console.log("Admin registration successful:", response.data);
    } catch (error) {
      // Handle errors
      const errorMessage =
        error.response?.data?.message ||
        "Admin registration failed. Please try again.";
      dispatch(adminRegistError(errorMessage)); // Dispatch the error action
      console.error("Admin registration error:", errorMessage);
    }
  };
};
