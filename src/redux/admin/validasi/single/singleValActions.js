import axios from "axios";
import { GET_SINGLE_VALIDASI_REQUEST,GET_SINGLE_VALIDASI_SUCCESS,GET_SINGLE_VALIDASI_ERROR } from "./singleValTypes";

const getSingleValRequest = (id)=>{
    return{
        type:GET_SINGLE_VALIDASI_REQUEST,
        payload:id
    }
}

const getSingleValSuccess = (data)=>{
    return{
        type:GET_SINGLE_VALIDASI_SUCCESS,
        payload:data
    }
}

const getSingleValError = (error)=>{
    return{
        type:GET_SINGLE_VALIDASI_ERROR,
        payload:error
    }
}

export const getSingleValUser= (id)=>{
    return(dispatch)=>{
        dispatch(getSingleValRequest())
        axios.get(`http://localhost:5000/api/v1/surat/riwayat/${id}`,{withCredentials:true})
        .then((response)=>{
            dispatch(getSingleValSuccess(response.data))
            console.log("Single : ", response.data);
        })
        .catch((error)=>{
            dispatch(getSingleValError(error))
        })
    }
}