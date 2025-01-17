import axios from "axios";
import { PUT_RIWAYAT_REQUEST, PUT_RIWAYAT_SUCCESS, PUT_RIWAYAT_ERROR } from "./putRiwayatTypes";

const putRiwayatRequest = () => {
  return {
    type: PUT_RIWAYAT_REQUEST,
  };
};

const putRiwayatSuccess = (data) => {
  return {
    type: PUT_RIWAYAT_SUCCESS,
    payload: data,
  };
};

const putRiwayatError = (error) => {
  return {
    type: PUT_RIWAYAT_ERROR,
    payload: error,
  };
};

export const putRiwayatAdmin = (id, data, callback) => {
  return (dispatch) => {
    dispatch(putRiwayatRequest());
    console.log("Request URL:", `https://sipskbt-be.vercel.app/api/v1/validate/surat/${id}`);
    console.log("Request Payload:", data);
    axios
      .put(`https://sipskbt-be.vercel.app/api/v1/validate/surat/${id}`, data, { withCredentials: true })
      .then((response) => {
        dispatch(putRiwayatSuccess(response.data.data));
        if (callback) {
          callback(response.status);
        }
        console.log("Response Data:", response.data.data);
      })
      .catch((error) => {
        dispatch(putRiwayatError(error.response ? error.response.data : error.message));
        console.error("Error:", error.response ? error.response.data : error.message);
      });
  };
};