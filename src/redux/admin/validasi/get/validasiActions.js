import { GET_VALIDASI_REQUEST,GET_VALIDASI_SUCCESS,GET_VALIDASI_ERROR } from "./validasiTypes";
import axios from "axios";

const getValidasiRequest = ()=>{
    return{
        type:GET_VALIDASI_REQUEST
    }
}

const getValidasiSuccess = (data)=>{
    return{
        type:GET_VALIDASI_SUCCESS,
        payload:data
    }
}

const getValidasiError = (error)=>{
    return{
        type:GET_VALIDASI_ERROR,
        payload:error
    }
}

export const getUserVal = ()=>{
    return(dispatch)=>{
        dispatch(getValidasiRequest())
        axios.get("https://sipskbt-be.vercel.app/api/v2/show/all/riwayat/validasi",{withCredentials:true})
        .then((response)=>{
            dispatch(getValidasiSuccess(response.data.data))
            console.log(response.data.data);
        })
        .catch((error)=>{
            dispatch(getValidasiError(error))
        })
    }
}
