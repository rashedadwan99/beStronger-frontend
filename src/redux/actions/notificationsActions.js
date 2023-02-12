import { Toast } from "../../components/common/Toast";
import {
  deleteNotification,
  getUserNotifications,
  readNotification,
  sendNotifications,
} from "../../services/notificiationServices";

export const GET_USER_NOTIFICATIONS = "GET_USER_NOTIFICATIONS";
export const SEND_USER_NOTIFICATIONS = "SEND_USER_NOTIFICATIONS";
export const IS_LOADING_NOTIFICATION = "IS_LOADING_NOTIFICATION";
export const RECIVE_NOTIFICATION = "RECIVE_NOTIFICATION";
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION";
export const IS_SENDING_NOTIFICATION_REQUEST =
  "IS_SENDING_NOTIFICATION_REQUEST";
export const REMOVE_NOTIFICATION_BY_TARGETID =
  "REMOVE_NOTIFICATION_BY_TARGETID";
export const TOGGLE_SHOW_NOTIFICATIONS = "TOGGLE_SHOW_NOTIFICATIONS";
export const READ_NOTIFICATION = "READ_NOTIFICATION";
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
export const removeNotificiation = (notificationId) => {
  return {
    type: REMOVE_NOTIFICATION,
    payload: { notificationId },
  };
};

export const deleteNotificationByTargetId = (targetId) => {
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
export const deleteNotificationByReciverUser = (targetId, senderId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_SENDING_NOTIFICATION_REQUEST });
      const { data: notification } = await deleteNotification(
        senderId,
        targetId
      );
      dispatch(removeNotificiation(notification._id));
      dispatch({ type: IS_SENDING_NOTIFICATION_REQUEST });
      Toast("info", "the notification was deletted successfully");
    } catch (error) {
      dispatch({ type: IS_SENDING_NOTIFICATION_REQUEST });
      Toast("error", error);
    }
  };
};

export const readNotificationAction = (notificationId) => {
  return async (dispatch) => {
    try {
      const { data: notification } = await readNotification(notificationId);
      dispatch({ type: READ_NOTIFICATION, payload: { notification } });
    } catch (error) {
      Toast("error", error);
    }
  };
};
