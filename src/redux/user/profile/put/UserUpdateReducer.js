import { data } from "react-router-dom";
import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "./UserUpdateTypes";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return { ...state, loading: true };
    case UPDATE_USER_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case UPDATE_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default updateUserReducer;
