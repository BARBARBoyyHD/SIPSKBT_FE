import {
  PUT_RIWAYAT_REQUEST,
  PUT_RIWAYAT_SUCCESS,
  PUT_RIWAYAT_ERROR,
} from "./putRiwayatTypes";

const initialState = {
  loading: false,
  data: {},
  error: null,
};

const putRiwayatAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_RIWAYAT_REQUEST:
      return { ...state, loading: true };
    case PUT_RIWAYAT_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case PUT_RIWAYAT_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default putRiwayatAdminReducer;
