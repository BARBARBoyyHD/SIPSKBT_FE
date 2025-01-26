import {
    ADMIN_EDIT_REQUEST,
    ADMIN_EDIT_SUCCESS,
    ADMIN_EDIT_ERROR,
  } from "./AdminEditType";

const initialState = {
    loading:false,
    data:null,
    error:null
}

const adminEditProfileReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADMIN_EDIT_REQUEST:
        return { ...state, loading: true };
      case ADMIN_EDIT_SUCCESS:
        return { ...state, loading: false, data: action.payload };
      case ADMIN_EDIT_ERROR:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
}

export default adminEditProfileReducer