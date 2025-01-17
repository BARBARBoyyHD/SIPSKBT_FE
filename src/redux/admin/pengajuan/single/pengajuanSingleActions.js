import axios from "axios";
import {
  PENGAJUAN_SINGLE_REQUEST,
  PENGAJUAN_SINGLE_SUCCESS,
  PENGAJUAN_SINGLE_ERROR,
} from "./pengajuanSingleTypes";

const pengajuanSingleRequest = () => {
  return {
    type: PENGAJUAN_SINGLE_REQUEST,
  };
};

const pengajuanSingleSuccess = (data, user_info) => {
  return {
    type: PENGAJUAN_SINGLE_SUCCESS,
    payload: { data, user_info }, // Combine both into a single payload
  };
};

const pengajuanSingleError = (error) => {
  return {
    type: PENGAJUAN_SINGLE_ERROR,
    payload: error,
  };
};

export const pengajuanSingle = (id) => {
  return (dispatch) => {
    dispatch(pengajuanSingleRequest());
    axios
      .get(`https://sipskbt-be.vercel.app/api/v1/surat/pengajuan/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        dispatch(
          pengajuanSingleSuccess(response.data.data, response.data.user_info)
        );
        console.log(response.data.data);
        console.log(response.data.user_info);
      })
      .catch((error) => {
        dispatch(pengajuanSingleError(error));
      });
  };
};
