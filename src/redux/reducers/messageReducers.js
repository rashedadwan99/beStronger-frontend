import {
  GET_MESSAGES,
  IS_LOADING_MESSAGES,
  IS_SENDING_MESSAGE,
  SEND_MESSAGE,
} from "../actions/messageActions";

const initialState = {
  value: [],
  isLoadingMessages: false,
  isSendingMessage: false,
};

export const messageReducers = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_MESSAGES:
      return { ...state, isLoadingMessages: action.payload };
    case GET_MESSAGES:
      return { ...state, value: [...action.payload] };
    case SEND_MESSAGE:
      return { ...state, value: [action.payload.message, ...state.value] };
    case IS_SENDING_MESSAGE:
      return { ...state, isSendingMessage: action.payload };

    default:
      return state;
  }
};
