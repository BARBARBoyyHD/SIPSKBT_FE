import axios from "axios";
import { GET_VALIDASI_REQUEST,GET_VALIDASI_SUCCESS,GET_VALIDASI_ERROR } from "./validasiUserTypes";

const getValidasiRequest = () => {
    return {
        type: GET_VALIDASI_REQUEST,
    }
}
const getValidasiSuccess = (data) => {
    return {
        type: GET_VALIDASI_SUCCESS,
        payload: data
    }
}
const getValidasiError = (error) => {
    return {
        type: GET_VALIDASI_ERROR,
        payload: error
    }
}

export const getValidasiUser = () => {
    return (dispatch) => {
        dispatch(getValidasiRequest())
        axios
            .get("https://sipskbt-be.vercel.app/api/v1/get/surat/riwayat/val/user", {
                withCredentials: true,
            })
            .then((response) => {
                dispatch(getValidasiSuccess(response.data.data))
            })
            .catch((error) => {
                dispatch(getValidasiError(error.response?.data?.message || "An error occurred"))
            })
    }
}