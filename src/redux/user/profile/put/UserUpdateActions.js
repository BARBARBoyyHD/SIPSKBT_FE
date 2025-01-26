import axios from "axios";
import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "./UserUpdateTypes";

const updateUserRequest = () => {
  return {
    type: UPDATE_USER_REQUEST,
  };
};

const updateUserSuccess = (data) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: data,
  };
};

const updateUserError = (error) => {
  return {
    type: UPDATE_USER_ERROR,
    payload: error,
  };
};

export const updateUser = (data, callback) => {
  return (dispatch) => {
    dispatch(updateUserRequest());
    axios
      .put("http://localhost:5000/api/v1/update/user/profile", data, {
        withCredentials: true,
      })
      .then((response) => {
        dispatch(updateUserSuccess(response.data));
        if (callback) {
          callback(response.status);
        }
        console.log("updated User : ", response.data);
        console.log("Status : ", response.staus);
      })
      .catch((error) => {
        dispatch(updateUserError(error));
      });
  };
};
