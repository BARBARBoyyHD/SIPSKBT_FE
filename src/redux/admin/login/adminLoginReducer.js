import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_ERROR,
} from "./adminLoginTypes";
const initialState = {
  loading: false,
  data: null,
  error: null,
};

const adminLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { ...state, loading: true };
    case ADMIN_LOGIN_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case ADMIN_LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default adminLoginReducer;
