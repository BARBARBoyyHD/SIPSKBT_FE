import axios from "axios";
import { SINGLE_RIWAYAT_REQUEST,SINGLE_RIWAYAT_ERROR,SINGLE_RIWAYAT_SUCCESS } from "./riwayatSingleTypes";

const singleRiwayatRequest = ()=>{
    return{
        type:SINGLE_RIWAYAT_REQUEST
    }
}

const singleRiwayatSuccess = (data)=>{
    return{
        type:SINGLE_RIWAYAT_SUCCESS,
        payload:data
    }
}

const singleRiwayatError = (error)=>{
    return{
        type:SINGLE_RIWAYAT_ERROR,
        payload:error
    }
}

export const getSingleRiwayat = (id)=>{
    return(dispatch)=>{
        dispatch(singleRiwayatRequest())
        axios.get(`http://localhost:5000/api/v1/single/riwayat/surat/${id}`,{withCredentials:true})
        .then((response)=>{
            dispatch(singleRiwayatSuccess(response.data))
            console.log(response.data);
        })
        .catch((error)=>{
            dispatch(singleRiwayatError(error))
        })
    }   
}