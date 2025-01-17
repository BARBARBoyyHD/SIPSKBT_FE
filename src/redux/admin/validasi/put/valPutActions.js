import axios from "axios"
import { VAL_PUT_REQUEST,VAL_PUT_SUCCESS,VAL_PUT_ERROR } from "./valPutTypes"

const valPutRequest = (id)=>{
    return{
        type:VAL_PUT_REQUEST,
        paylad:id
    }
}

const valPutSuccess = (data)=>{
    return{
        type:VAL_PUT_SUCCESS,
        payload:data
    }
}

const valPutError = (error)=>{
    return{
        type:VAL_PUT_ERROR,
        payload:error
    }
}

export const valPutAdmin = (id,data,callback) =>{
    return(dispatch)=>{
        dispatch(valPutRequest())
        console.log("Request URL:", `https://sipskbt-be.vercel.app/api/v1/validate/berkas/${id}`);
    console.log("Request Payload:", data);

        axios.put(`https://sipskbt-be.vercel.app/api/v1/validate/berkas/${id}`,data,{withCredentials:true})
        .then((response)=>{
            dispatch(valPutSuccess(response.data))
            if(callback){
                callback(response.status)
            }
            console.log(response.data);
        })
        .catch((error)=>{
            dispatch(valPutError(error))
        })
    }
}