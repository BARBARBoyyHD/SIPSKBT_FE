import {
  PENGAJUAN_SINGLE_REQUEST,
  PENGAJUAN_SINGLE_SUCCESS,
  PENGAJUAN_SINGLE_ERROR,
} from "./pengajuanSingleTypes";

const initialState = {
  loading: false,
  data: null,
  user_info: null,
  error: null,
};

const pengajuanSingleReducer = (state = initialState, action) => {
  switch (action.type) {
    case PENGAJUAN_SINGLE_REQUEST:
      return { ...state, loading: true };
    case PENGAJUAN_SINGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        user_info: action.payload.user_info, // Store user_info
        error: null,
      };
    case PENGAJUAN_SINGLE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default pengajuanSingleReducer;
