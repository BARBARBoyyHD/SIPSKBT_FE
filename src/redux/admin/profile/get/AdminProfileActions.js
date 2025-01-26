import axios from "axios";
import {
  GET_ADMIN_PROFILE_REQUEST,
  GET_ADMIN_PROFILE_SUCCESS,
  GET_ADMIN_PROFILE_ERROR,
} from "./AdminProfileTypes";

const getAdminProfileRequest = () => {
  return {
    type: GET_ADMIN_PROFILE_REQUEST,
  };
};

const getAdmiProfileSuccess = (data) => {
  return {
    type: GET_ADMIN_PROFILE_SUCCESS,
    payload: data,
  };
};

const getAdminProfileError = (error) => {
  return {
    type: GET_ADMIN_PROFILE_ERROR,
    payload: error,
  };
};

export const getAdminProfile = () => {
  return (dispatch) => {
    dispatch(getAdminProfileRequest());
    axios
      .get("http://localhost:5000/api/v2/get/Admin/profile", {
        withCredentials: true,
      })
      .then((response) => {
        dispatch(getAdmiProfileSuccess(response.data.data));
        console.log(response.data.data);
      })
      .catch((error) => {
        dispatch(getAdminProfileError(error));
      });
  };
};
