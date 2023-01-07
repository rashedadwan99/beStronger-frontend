import { GET_NAME } from "../actions/currentUserName";
const initialState = "";

export const nameOfUserReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_NAME:
      return action.payload;
    default:
      return state;
  }
};
