import { Toast } from "../../components/common/Toast";
import { createChat, getAllChats } from "../../services/chatService";
import { RESET_MESSAGES } from "./messageActions";

export const GET_CHAT_LIST = "GET_CHAT_LIST";
export const IS_LOADING_CHATS = "IS_LOADING_CHATS";
export const IS_CREATING_CHAT = "IS_CREATING_CHAT";
export const UPDATE_CHAT_LIST = "UPDATE_CHAT_LIST";
export const SELECT_CHAT = "SELECT_CHAT";
export const UNSELECT_CHAT = "UNSELECT_CHAT";
export const UPDATE_LATEST_MESSAGE = "UPDATE_LATEST_MESSAGE";
export const NO_CHATS = "NO_CHATS";
export const geChatListAction = () => {
  return async (dispatch) => {
    dispatch({ type: IS_LOADING_CHATS, payload: true });
    const { data: chats } = await getAllChats();
    dispatch({ type: GET_CHAT_LIST, payload: chats });
    dispatch({ type: IS_LOADING_CHATS, payload: false });
    if (!chats.length) dispatch({ type: NO_CHATS, payload: true });
  };
};

export const createChatAction = (users, isGroupChat, push) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_CREATING_CHAT, payload: true });
      const { data: chat } = await createChat(users, isGroupChat);

      dispatch({ type: SELECT_CHAT, payload: chat });
      dispatch({ type: UPDATE_CHAT_LIST, payload: { chat } });
      dispatch({ type: NO_CHATS, payload: false });

      dispatch({ type: IS_CREATING_CHAT, payload: false });
      push("/chats");
    } catch (error) {
      dispatch({ type: IS_CREATING_CHAT, payload: false });
      Toast("error", error);
    }
  };
};

export const selectChatAction = (chat) => {
  return { type: SELECT_CHAT, payload: chat };
};

export const unSelectChatAction = () => {
  return async (dispatch) => {
    dispatch({ type: UNSELECT_CHAT });
    dispatch({ type: RESET_MESSAGES });
  };
};
