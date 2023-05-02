import { getAllChats } from "../../services/chatService";
import { RESET_MESSAGES } from "./messageActions";

export const GET_CHAT_LIST = "GET_CHAT_LIST";
export const IS_LOADING_CHATS = "IS_LOADING_CHATS";
export const SELECT_CHAT = "SELECT_CHAT";
export const UNSELECT_CHAT = "UNSELECT_CHAT";
export const UPDATE_LATEST_MESSAGE = "UPDATE_LATEST_MESSAGE";
export const geChatListAction = () => {
  return async (dispatch) => {
    dispatch({ type: IS_LOADING_CHATS, payload: true });
    const { data: chats } = await getAllChats();
    dispatch({ type: GET_CHAT_LIST, payload: chats });
    dispatch({ type: IS_LOADING_CHATS, payload: false });
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
