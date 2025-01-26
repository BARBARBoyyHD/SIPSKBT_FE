import {
  GET_ADMIN_PROFILE_REQUEST,
  GET_ADMIN_PROFILE_SUCCESS,
  GET_ADMIN_PROFILE_ERROR,
} from "./AdminProfileTypes";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const getAdminProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_PROFILE_REQUEST:
      return { ...state, loading: true };
    case GET_ADMIN_PROFILE_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_ADMIN_PROFILE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getAdminProfileReducer;
