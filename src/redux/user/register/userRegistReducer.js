import {
  USER_REGIST_REQUEST,
  USER_REGIST_SUCCESS,
  USER_REGIST_ERROR,
} from "./userRegistTypes";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const userRegistReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGIST_REQUEST:
      return { ...state, loading: true };
    case USER_REGIST_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case USER_REGIST_ERROR:
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
};

export default userRegistReducer;
