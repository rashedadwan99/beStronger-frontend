import {
  GET_CHAT_LIST,
  IS_LOADING_CHATS,
  SELECT_CHAT,
  UNSELECT_CHAT,
  UPDATE_LATEST_MESSAGE,
} from "../actions/chatActions";

const initialState = {
  value: [],
  isLoadingChats: false,
  selectedChat: {},
};
export const chatReducers = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_CHATS: {
      return { ...state, isLoadingChats: action.payload };
    }
    case GET_CHAT_LIST:
      return {
        ...state,
        value: [...action.payload],
      };
    case SELECT_CHAT:
      return {
        ...state,
        selectedChat: { ...action.payload },
      };
    case UNSELECT_CHAT:
      return {
        ...state,
        selectedChat: {},
      };
    case UPDATE_LATEST_MESSAGE: {
      return {
        ...state,
        value: state.value.map((c) => {
          if (c._id === action.payload.chatId) {
            return { ...c, latestMessage: action.payload.message };
          }
          return c;
        }),
      };
    }
    default: {
      return state;
    }
  }
};
