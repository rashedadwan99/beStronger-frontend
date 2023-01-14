import {
  GET_USER_NOTIFICATIONS,
  IS_LOADING_NOTIFICATION,
  RECIVE_NOTIFICATION,
  REMOVE_NOTIFICATION,
  REMOVE_NOTIFICATION_BY_TARGETID,
  SEND_USER_NOTIFICATIONS,
  TOGGLE_SHOW_NOTIFICATIONS,
} from "../actions/notificationsActions";

const initialState = {
  value: [],
  isLoading: false,
  show: false,
};

export const notificationsReducers = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_NOTIFICATION:
      return { ...state, isLoading: !state.isLoading };
    case GET_USER_NOTIFICATIONS:
      return {
        ...state,
        value: [...action.payload, ...state.value],
        isLoading: false,
      };

    case RECIVE_NOTIFICATION: {
      if (!state.value.includes(action.payload._id)) {
        return {
          ...state,
          value: [action.payload, ...state.value],
          isLoading: false,
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
    default:
      return state;
  }
};
