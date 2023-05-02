import { Toast } from "../../components/common/Toast";
import { getMessages, sendMessage } from "../../services/messageService";
import { UPDATE_LATEST_MESSAGE } from "./chatActions";

export const GET_MESSAGES = "GET_MESSAGES";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const IS_LOADING_MESSAGES = "IS_LOADING_MESSAGES";
export const IS_SENDING_MESSAGE = "IS_SENDING_MESSAGE";
export const RESET_MESSAGES = "RESET_MESSAGES";

export const getMessagesAction = (chatId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_LOADING_MESSAGES, payload: true });
      const { data: messages } = await getMessages(chatId);
      dispatch({ type: GET_MESSAGES, payload: messages });
      dispatch({ type: IS_LOADING_MESSAGES, payload: false });
    } catch (error) {
      dispatch({ type: IS_LOADING_MESSAGES, payload: false });
      Toast("error", error);
    }
  };
};

export const sendMessageAction = (
  chatId,
  content,
  setTheShownMessageWhenSending,
  theShownMessageWhenSending
) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_SENDING_MESSAGE, payload: true });
      const { data: message } = await sendMessage(chatId, content);
      setTheShownMessageWhenSending([message, ...theShownMessageWhenSending]);
      dispatch({ type: SEND_MESSAGE, payload: { message } });
      dispatch({
        type: UPDATE_LATEST_MESSAGE,
        payload: { chatId: message.chatId, message },
      });
      dispatch({ type: IS_SENDING_MESSAGE, payload: false });
    } catch (error) {
      dispatch({ type: IS_SENDING_MESSAGE, payload: false });
      Toast("error", error);
    }
  };
};
