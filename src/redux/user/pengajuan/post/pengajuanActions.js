import { POST_REQUEST,POST_SUCCESS,POST_ERROR } from "./pengajuanTypes";
import axios from "axios";

const postRequest = ()=>{
    return{
        type:POST_REQUEST
    }
}

const postSuccess = (data)=>{
    return{
        type:POST_SUCCESS,
        payload:data
    }
}

const postError = (error)=>{
    return{
        type:POST_ERROR,
        payload:error
    }
}

export const postPengajuan = (data, callback) => {
    return (dispatch) => {
      dispatch(postRequest());
      axios
        .post("http://localhost:5000/api/v1/post/pengajuan", data, {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure the correct content type
          },
          withCredentials: true,
        })
        .then((response) => {
          dispatch(postSuccess(response.data));
          if (callback) {
            callback(response.status);
          }
          console.log(response.status);
        })
        .catch((error) => {
          dispatch(postError(error.response?.data?.message || "An error occurred"));
        });
    };
  };