import { LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS,LOGIN_USER_ERROR } from "./loginTypes";
import axios from "axios";

const loginUserRequest = ()=>{
    return{
        type:LOGIN_USER_REQUEST
    }
}

const loginUserSuccess = (data)=>{
    return{
        type:LOGIN_USER_SUCCESS,
        payload:data    
    }
}

const loginUserError = (error)=>{
    return{
        type:LOGIN_USER_ERROR,
        payload:error
    }
}

export const loginUser = (data,callback)=>{
    return(dispatch)=>{
        dispatch(loginUserRequest())
        axios.post("http://localhost:5000/api/v1/login/user",data,{withCredentials:true})
        .then((response)=>{
            dispatch(loginUserSuccess(response.data))
            if(callback){
                callback(response.status)
            }
            console.log("From Login : ", response.data);
            console.log("Status Login : ",response.status);
        })
        .catch((error)=>{
            dispatch(loginUserError(error))
        })
    }
}