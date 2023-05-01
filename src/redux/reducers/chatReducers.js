import {
  GET_CHAT_LIST,
  IS_LOADING_CHATS,
  SELECT_CHAT,
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
    default: {
      return state;
    }
  }
};
