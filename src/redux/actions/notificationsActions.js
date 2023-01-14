import { Toast } from "../../components/common/Toast";
import {
  getUserNotifications,
  sendNotifications,
} from "../../services/notificiationServices";

export const GET_USER_NOTIFICATIONS = "GET_USER_NOTIFICATIONS";
export const SEND_USER_NOTIFICATIONS = "SEND_USER_NOTIFICATIONS";
export const IS_LOADING_NOTIFICATION = "IS_LOADING_NOTIFICATION";
export const RECIVE_NOTIFICATION = "RECIVE_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";
export const REMOVE_NOTIFICATION_BY_TARGETID =
  "REMOVE_NOTIFICATION_BY_TARGETID";
export const TOGGLE_SHOW_NOTIFICATIONS = "TOGGLE_SHOW_NOTIFICATIONS";
export const getNotificationsAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_LOADING_NOTIFICATION });
      const { data: notifications } = await getUserNotifications();
      dispatch({ type: GET_USER_NOTIFICATIONS, payload: notifications });
    } catch (error) {
      dispatch({ type: IS_LOADING_NOTIFICATION });
      Toast("error", error);
    }
  };
};

export const sendNotificationAction = (
  message,
  reciverId,
  targetId,
  socket
) => {
  return async (dispatch) => {
    try {
      const { data: notification } = await sendNotifications(
        message,
        reciverId,
        targetId
      );
      dispatch({ type: SEND_USER_NOTIFICATIONS });
      socket.emit("new notification", notification);
    } catch (error) {
      Toast("error", error);
    }
  };
};

export const reciveNotificiation = (notification) => {
  return {
    type: RECIVE_NOTIFICATION,
    payload: notification,
  };
};
export const removeNotificiationFromAnotherUser = (notificationId) => {
  return {
    type: REMOVE_NOTIFICATION,
    payload: { notificationId },
  };
};

export const deleteNotificationBuTargetId = (targetId) => {
  return {
    type: REMOVE_NOTIFICATION_BY_TARGETID,
    payload: { targetId },
  };
};

export const toggleShowNotificationsAction = (show) => {
  return {
    type: TOGGLE_SHOW_NOTIFICATIONS,
    payload: show,
  };
};
export const unSendNotificatin = () => {};
