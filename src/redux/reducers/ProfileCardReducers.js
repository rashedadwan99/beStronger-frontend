import {
  GET_PROFILE_CARD_USER,
  TOGGLE_LOADING,
  UPDATE_PROFILE_DATA,
  UPDATE_PROFILE_FOLLOWERS_LIST,
} from "../actions/ProfileCardActions";

const initialState = { value: {}, isLoading: false };

export const ProfilCardReucers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return { ...state, isLoading: !state.isLoading };

    case GET_PROFILE_CARD_USER:
      return { ...state, value: action.payload, isLoading: false };

    case UPDATE_PROFILE_DATA:
      return { ...state, value: action.payload };
    case UPDATE_PROFILE_FOLLOWERS_LIST: {
      return action.payload;
    }
    default:
      return state;
  }
};
