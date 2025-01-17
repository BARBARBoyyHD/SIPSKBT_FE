import {
  ADMIN_REGIST_REQUEST,
  ADMIN_REGIST_SUCCESS,
  ADMIN_REGIST_ERROR,
} from "./registAdminTypes";

// Initial state
const initialState = {
  loading: false, // Indicates if the registration request is in progress
  data: null, // Stores the response data from a successful registration
  error: null, // Stores the error message if the registration fails
};

// Reducer function
const adminRegistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_REGIST_REQUEST:
      return {
        ...state,
        loading: true, // Set loading to true when the request starts
        error: null, // Clear any previous errors
      };

    case ADMIN_REGIST_SUCCESS:
      return {
        ...state,
        loading: false, // Set loading to false when the request succeeds
        data: action.payload, // Store the response data
        error: null, // Clear any errors
      };

    case ADMIN_REGIST_ERROR:
      return {
        ...state,
        loading: false, // Set loading to false when the request fails
        error: action.payload, // Store the error message
        data: null, // Clear any previous data
      };

    default:
      return state; // Return the current state for any unknown action types
  }
};

export default adminRegistReducer;
