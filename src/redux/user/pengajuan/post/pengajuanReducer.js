import { POST_REQUEST,POST_SUCCESS,POST_ERROR } from "./pengajuanTypes";

const initialState = {
    loading :false ,
    data:null,
    error:null
}

const postPengajuanReducer = (state = initialState , action)=>{
    switch(action.type){
        case POST_REQUEST:
            return {...state,loading:true}
        case POST_SUCCESS:
            return {...state,loading:false,data:action.payload}
        case POST_ERROR:
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export default postPengajuanReducer