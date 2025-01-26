import axios from "axios";
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "./UserProfileTypes";

const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

const getUserSuccess = (data) => {
  return {
    type: GET_USER_SUCCESS,
    payload: data,
  };
};

const getUserError = (error) => {
  return {
    type: GET_USER_ERROR,
    payload: error,
  };
};

export const getUserProfile = () => {
  return (dispatch) => {
    dispatch(getUserRequest());
    axios
      .get("http://localhost:5000/api/v1/get/user/info/JWT", {
        withCredentials: true,
      })
      .then((response) => {
        dispatch(getUserSuccess(response.data.data));
        console.log(response.data.data);
      })
      .catch((error) => {
        dispatch(getUserError(error));
      });
  };
};
