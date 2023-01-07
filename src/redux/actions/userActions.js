import {
  editUserInfo,
  register,
  sendFollowRequest,
  sendUnFollowRequest,
  updateUserInLocalStorage,
} from "../../services/userService";
import * as auth from "../../services/authService";
import { Toast } from "../../components/common/Toast";
import { TOGGLE_APP_DEPENCY } from "./appUseEffectDependencyAction";
import { UPDATE_PROFILE_DATA } from "./ProfileCardActions";
import { uploadPicture } from "../../services/uploadPictueService";
import { GET_PROFILE_POSTS, NO_POSTS } from "./postActions";
import { closeModal } from "./modalActions";

export const TOGGLE_LOADING = "TOGGLE_LOADING";

export const GET_USER = "GET_USER";

export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";

export const UPDATE_USER_DATA = "UPDATE_USER_DATA";
export const IS_SENDING_REQUEST = "IS_SENDING_REQUEST";

export const loginAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_LOADING });
    try {
      const response = await auth.login(data);

      auth.loginWithJwt({
        user: response.data,
        token: response.headers["x-auth-token"],
      });

      dispatch({ type: TOGGLE_APP_DEPENCY });
      Toast("info", "the user is sucssefully logged in");
    } catch (error) {
      dispatch({ type: TOGGLE_LOADING });
      Toast("error", error);
    }
  };
};
export const updateUserData = (user) => {
  return {
    type: UPDATE_USER_DATA,
    payload: user,
  };
};
export const userLoggedIn = () => {
  const user = auth.getCurrentUser();
  return {
    type: USER_LOGGED_IN,
    payload: user,
  };
};

export const userLoggedOut = () => {
  return {
    type: USER_LOGGED_OUT,
  };
};

export const registerUserAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TOGGLE_LOADING });
      const response = await register(data);

      auth.loginWithJwt({
        token: response.headers["x-auth-token"],
        user: response.data,
      });
      dispatch({ type: TOGGLE_LOADING });
      dispatch({ type: TOGGLE_APP_DEPENCY });
      Toast("info", "the user is successfully registered");
    } catch (error) {
      dispatch({ type: TOGGLE_LOADING });
      Toast("error", error);
    }
  };
};

export const sendFollowOrUFollowAction = (reciverUserId, isNotMe, unFollow) => {
  return async (dispatch) => {
    try {
      dispatch({ type: IS_SENDING_REQUEST });
      let response;
      if (unFollow) response = await sendUnFollowRequest(reciverUserId);
      else response = await sendFollowRequest(reciverUserId);

      const { data } = response;

      dispatch({ type: UPDATE_USER_DATA, payload: data.senderUser });
      if (isNotMe)
        dispatch({
          type: UPDATE_PROFILE_DATA,
          payload: data.reciverUser,
        });
      else dispatch({ type: UPDATE_PROFILE_DATA, payload: data.senderUser });

      updateUserInLocalStorage(data.senderUser);
    } catch (error) {
      dispatch({ type: IS_SENDING_REQUEST });
      Toast("error", error);
    }
  };
};
export const editUserInfoAction = (name, picture, user) => {
  return async (dispatch) => {
    try {
      let editResponse;
      dispatch({ type: IS_SENDING_REQUEST });
      const isSamePicture = user.picture === picture;
      if (!isSamePicture) {
        const response = await uploadPicture(picture);
        if (response) {
          editResponse = await editUserInfo(name, response.data.url);
        }
      } else editResponse = await editUserInfo(name, picture);
      const { data } = editResponse;
      if (!data.posts.length) dispatch({ type: NO_POSTS, payload: true });
      else
        dispatch({
          type: GET_PROFILE_POSTS,
          payload: { posts: data.posts },
        });
      dispatch({ type: UPDATE_PROFILE_DATA, payload: data.user });
      dispatch({ type: UPDATE_USER_DATA, payload: data.user });
      updateUserInLocalStorage(data.user);

      dispatch(closeModal());
    } catch (error) {
      dispatch({ type: IS_SENDING_REQUEST });
      Toast("error", error);
    }
  };
};
