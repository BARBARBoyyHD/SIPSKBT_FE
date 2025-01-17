import axios from "axios";
import {
  USER_REGIST_REQUEST,
  USER_REGIST_SUCCESS,
  USER_REGIST_ERROR,
} from "./userRegistTypes";

// Action Creators
const userRegistRequest = () => ({
  type: USER_REGIST_REQUEST,
});

const userRegistSuccess = (data) => ({
  type: USER_REGIST_SUCCESS,
  payload: data,
});

const userRegistError = (error) => ({
  type: USER_REGIST_ERROR,
  payload: error,
});

// Thunk Action for User Registration
export const userRegist = (data, callback) => {
  return async (dispatch) => {
    dispatch(userRegistRequest()); // Dispatch the request action

    try {
      const response = await axios.post(
        "https://sipskbt-be.vercel.app/api/v1/register/user",
        data,
        {
          withCredentials: true, // Include credentials (cookies) in the request
        }
      );

      dispatch(userRegistSuccess(response.data)); // Dispatch the success action

      // Execute the callback function if provided
      if (callback) {
        callback(response.status);
      }

      console.log("Registration successful:", response.data);
    } catch (error) {
      // Handle errors
      const errorMessage =
        error.response?.data?.message ||
        "Registration failed. Please try again.";
      dispatch(userRegistError(errorMessage)); // Dispatch the error action
      console.error("Registration error:", errorMessage);
    }
  };
};
