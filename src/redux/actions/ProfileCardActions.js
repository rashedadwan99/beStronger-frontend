import { Toast } from "../../components/common/Toast";
import { getUser } from "../../services/userService";

export const GET_PROFILE_CARD_USER = "GET_PROFILE_CARD_USER";
export const TOGGLE_LOADING = "TOGGLE_LOADING";
export const LOADING_PROFILE_CARD_USER = "LOADING_PROFILE_CARD_USER";
export const UPDATE_PROFILE_DATA = "UPDATE_PROFILE_DATA";

export const getProfileCardUser = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: TOGGLE_LOADING });
      if (!user.name) {
        const { data: profileCardUser } = await getUser(user._id);

        dispatch({ type: GET_PROFILE_CARD_USER, payload: profileCardUser });
      } else dispatch({ type: GET_PROFILE_CARD_USER, payload: user });
    } catch (error) {
      dispatch({ type: TOGGLE_LOADING });
      Toast("error", error);
    }
  };
};

export const updateProfileCard = (user) => {
  return {
    type: UPDATE_PROFILE_DATA,
    payload: user,
  };
};
