import { updateUserInLocalStorage } from "../../services/userService";
import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  UPDATE_USER_DATA,
  TOGGLE_LOADING,
  IS_SENDING_USER_REQUEST,
  INCREASE_FOLLOWERS_LIST,
  DECREASE_FOLLOWERS_LIST,
} from "../actions/userActions";

const initialState = {
  value: {},
  isLoading: false,
  isSendingRequest: false,
};

export const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        value: action.payload,
        isSendingRequest: false,
        isLoading: false,
      };
    case USER_LOGGED_OUT:
      return { ...state, value: {}, isLoading: false, isSendingRequest: false };
    case IS_SENDING_USER_REQUEST:
      return { ...state, isSendingRequest: !state.isSendingRequest };
    case UPDATE_USER_DATA:
      return { ...state, value: action.payload, isSendingRequest: false };

    case TOGGLE_LOADING:
      return { ...state, isLoading: !state.isLoading };

    case INCREASE_FOLLOWERS_LIST: {
      const updatedState = state;
      updatedState.value.followersNum = updatedState.value.followersNum + 1;
      updatedState.value.followersList = [
        action.payload.followerId,
        ...updatedState.value.followersList,
      ];
      updateUserInLocalStorage(updatedState.value);

      return updatedState;
    }
    case DECREASE_FOLLOWERS_LIST: {
      const updatedState = state;
      updatedState.value.followersNum = updatedState.value.followersNum - 1;

      updatedState.value.followersList =
        updatedState.value.followersList.filter(
          (uId) => uId !== action.payload.followerId
        );
      updateUserInLocalStorage(updatedState.value);

      return updatedState;
    }
    default:
      return state;
  }
};
