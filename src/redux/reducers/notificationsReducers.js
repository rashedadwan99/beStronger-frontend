import {
  GET_USER_NOTIFICATIONS,
  IS_LOADING_NOTIFICATION,
  IS_SENDING_NOTIFICATION_REQUEST,
  READ_NOTIFICATION,
  RECIVE_NOTIFICATION,
  REMOVE_NOTIFICATION,
  REMOVE_NOTIFICATION_BY_TARGETID,
  RESET_ALL_NOTIFICATIONS,
  SEND_USER_NOTIFICATIONS,
  TOGGLE_SHOW_NOTIFICATIONS,
} from "../actions/notificationsActions";

const initialState = {
  value: [],
  isLoading: false,
  show: false,
  isSendingDeleteRequest: false,
};

export const notificationsReducers = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_NOTIFICATION:
      return { ...state, isLoading: !state.isLoading };

    case GET_USER_NOTIFICATIONS:
      return {
        ...state,
        value: [...action.payload],
        isLoading: false,
        isSendingDeleteRequest: false,
        noNotifcations: false,
      };

    case RECIVE_NOTIFICATION: {
      if (!state.value.includes(action.payload._id)) {
        return {
          ...state,
          value: [action.payload, ...state.value],
          isLoading: false,
          noNotifcations: false,
        };
      }
      return state;
    }
    case REMOVE_NOTIFICATION: {
      return {
        ...state,
        value: state.value.filter(
          (n) => n._id !== action.payload.notificationId
        ),
      };
    }
    case SEND_USER_NOTIFICATIONS:
      return state;

    case TOGGLE_SHOW_NOTIFICATIONS:
      return {
        ...state,
        show: action.payload,
      };
    case REMOVE_NOTIFICATION_BY_TARGETID: {
      return {
        ...state,
        value: state.value.filter(
          (n) => n.targetId !== action.payload.targetId
        ),
      };
    }
    case IS_SENDING_NOTIFICATION_REQUEST:
      return {
        ...state,
        isSendingDeleteRequest: !state.isSendingDeleteRequest,
      };

    case READ_NOTIFICATION: {
      const notifications = state.value;
      const notification = notifications.find(
        (n) => n._id === action.payload.notification._id
      );
      const indexOfNotification = notifications.indexOf(notification);
      notifications[indexOfNotification].isRead = true;
      return { ...state, value: [...notifications] };
    }
    case RESET_ALL_NOTIFICATIONS:
      return initialState;
    default:
      return state;
  }
};
