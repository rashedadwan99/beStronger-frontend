import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  UPDATE_USER_DATA,
  TOGGLE_LOADING,
  IS_SENDING_USER_REQUEST,
} from "../actions/userActions";

const initialState = {
  value: {},
  isLoading: false,
  isSendingRequest: false,
};

export const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        value: action.payload,
        isSendingRequest: false,
        isLoading: false,
      };
    case USER_LOGGED_OUT:
      return { ...state, value: {}, isLoading: false, isSendingRequest: false };
    case IS_SENDING_USER_REQUEST:
      return { ...state, isSendingRequest: !state.isSendingRequest };
    case UPDATE_USER_DATA:
      return { ...state, value: action.payload, isSendingRequest: false };

    case TOGGLE_LOADING:
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
};
