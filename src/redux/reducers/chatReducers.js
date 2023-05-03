import {
  GET_CHAT_LIST,
  IS_CREATING_CHAT,
  IS_LOADING_CHATS,
  NO_CHATS,
  SELECT_CHAT,
  UNSELECT_CHAT,
  UPDATE_CHAT_LIST,
  UPDATE_LATEST_MESSAGE,
} from "../actions/chatActions";

const initialState = {
  value: [],
  isLoadingChats: false,
  isCreatingChat: false,
  selectedChat: {},
  noChats: false,
};
export const chatReducers = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_CHATS: {
      return { ...state, isLoadingChats: action.payload };
    }
    case IS_CREATING_CHAT: {
      return { ...state, isCreatingChat: action.payload };
    }
    case UPDATE_CHAT_LIST:
      return { ...state, value: [action.payload.chat, ...state.value] };
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
    case NO_CHATS:
      return { ...state, noChats: action.payload };
    default: {
      return state;
    }
  }
};
