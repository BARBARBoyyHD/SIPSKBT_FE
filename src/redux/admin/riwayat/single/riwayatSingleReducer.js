import {
  SINGLE_RIWAYAT_REQUEST,
  SINGLE_RIWAYAT_ERROR,
  SINGLE_RIWAYAT_SUCCESS,
} from "./riwayatSingleTypes";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const riwayatSingleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_RIWAYAT_REQUEST:
      return { ...state, loading: true };
    case SINGLE_RIWAYAT_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case SINGLE_RIWAYAT_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default riwayatSingleReducer;
