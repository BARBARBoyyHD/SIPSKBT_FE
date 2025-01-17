import {
  GET_SINGLE_VALIDASI_REQUEST,
  GET_SINGLE_VALIDASI_SUCCESS,
  GET_SINGLE_VALIDASI_ERROR,
} from "./singleValTypes";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const getSingleValReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_VALIDASI_REQUEST:
      return { ...state, loading: true };
    case GET_SINGLE_VALIDASI_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_SINGLE_VALIDASI_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getSingleValReducer;
