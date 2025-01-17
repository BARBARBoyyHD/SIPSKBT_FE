import axios from "axios";
import { ADMIN_LOGIN_REQUEST,ADMIN_LOGIN_SUCCESS,ADMIN_LOGIN_ERROR } from "./adminLoginTypes";

const adminLoginRequest = ()=>{
    return{
        type:ADMIN_LOGIN_REQUEST
    }
}

const adminLoginSuccess = (data)=>{
    return{
        type:ADMIN_LOGIN_SUCCESS,
        payload:data
    }
}

const adminLoginError = (error)=>{
    return{
        type:ADMIN_LOGIN_ERROR,
        payload:error
    }
}

export const adminLogin =(data,callback)=>{
    return(dispatch)=>{
        dispatch(adminLoginRequest())
        axios.post("http://localhost:5000/api/v2/login/admin",data,{withCredentials:true})
        .then((response)=>{
            dispatch(adminLoginSuccess(response.data))
            if(callback){
                callback(response.status)
            }
            console.log(response.data);
        })
        .catch((error)=>{
            dispatch(adminLoginError(error))
        })
    }
}