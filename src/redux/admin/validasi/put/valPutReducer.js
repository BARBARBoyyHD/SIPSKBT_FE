import { VAL_PUT_REQUEST,VAL_PUT_SUCCESS,VAL_PUT_ERROR } from "./valPutTypes"

const initialState = {
    loading:false,
    data:{},
    error:null
}

const putValReducer =(state = initialState,action)=>{
    switch(action.type){
        case VAL_PUT_REQUEST:
            return{...state,loading:true}
        case VAL_PUT_SUCCESS:
            return{...state,loading:false,data:action.payload}
        case VAL_PUT_ERROR:
            return{...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export default putValReducer