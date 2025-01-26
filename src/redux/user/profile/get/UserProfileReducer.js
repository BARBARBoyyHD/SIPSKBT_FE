import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "./UserProfileTypes";

const initialState = {
  loading: false,
  data: {},
  error: null,
};

const getUserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getUserProfileReducer;
