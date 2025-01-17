import {
  GET_RIWAYAT_REQUEST,
  GET_RIWAYAT_SUCCESS,
  GET_RIWAYAT_ERROR,
} from "./userPengTypes";
import axios from "axios";

const getRiwayatRequest = () => {
  return {
    type: GET_RIWAYAT_REQUEST,
  };
};

const getRiwayatSuccess = (data) => {
  return {
    type: GET_RIWAYAT_SUCCESS,
    payload: data,
  };
};

const getRiwayatError = (error) => {
  return {
    type: GET_RIWAYAT_ERROR,
    payload: error,
  };
};

export const getUserRiwayat = () => {
  return (dispatch) => {
    dispatch(getRiwayatRequest());
    axios
      .get("https://sipskbt-be.vercel.app/api/v1/get/surat/pengajuan/user", {
        withCredentials: true,
      })
      .then((response) => {
        dispatch(getRiwayatSuccess(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        dispatch(getRiwayatError(error));
      });
  };
};
