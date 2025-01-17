import { LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS,LOGIN_USER_ERROR } from "./loginTypes";

const initialState = {
    loading:false,
    data:null,
    error:null
}

const loginUserReducer = (state = initialState,action)=>{
    switch(action.type){
        case LOGIN_USER_REQUEST:
            return {...state,loading:true}
        case LOGIN_USER_SUCCESS:
            return {...state,loading:false,data:action.payload}
        case LOGIN_USER_ERROR:
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export default loginUserReducer