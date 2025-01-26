import axios from "axios";
import {
  ADMIN_EDIT_REQUEST,
  ADMIN_EDIT_SUCCESS,
  ADMIN_EDIT_ERROR,
} from "./AdminEditType";

const adminEditRequest = () => {
  return {
    type: ADMIN_EDIT_REQUEST,
  };
};

const adminEditSuccess = (data) => {
  return {
    type: ADMIN_EDIT_SUCCESS,
    payload: data,
  };
};

const adminEditError = (error) => {
  return {
    type: ADMIN_EDIT_ERROR,
    payload: error,
  };
};

export const adminEditProfile = (data, callback) => {
  return (dispatch) => {
    dispatch(adminEditRequest());
    axios
      .put("http://localhost:5000/api/v2/update/admin/profile", data, {
        withCredentials: true,
      })
      .then((response) => {
        dispatch(adminEditSuccess(response.data));
        if (callback) {
          callback(response.status);
        }
        console.log(response.data);
      })
      .catch((error) => {
        dispatch(adminEditError(error));
      });
  };
};
