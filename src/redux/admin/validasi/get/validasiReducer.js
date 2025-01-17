import {
  GET_VALIDASI_REQUEST,
  GET_VALIDASI_SUCCESS,
  GET_VALIDASI_ERROR,
} from "./validasiTypes";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const getUserValReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VALIDASI_REQUEST:
      return { ...state, loading: true };
    case GET_VALIDASI_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET_VALIDASI_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getUserValReducer;
