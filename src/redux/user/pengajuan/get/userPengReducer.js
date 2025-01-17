import {
  GET_RIWAYAT_REQUEST,
  GET_RIWAYAT_SUCCESS,
  GET_RIWAYAT_ERROR,
} from "./userPengTypes";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const getUserRiwayatReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_RIWAYAT_REQUEST:
            return {...state,loading:true}
        case GET_RIWAYAT_SUCCESS:
            return {...state,loading:false,data:action.payload}
        case GET_RIWAYAT_ERROR:
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export default getUserRiwayatReducer
