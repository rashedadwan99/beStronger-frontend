import { DIS_CONNECT, GET_SOCKET } from "../actions/socketAction";

const initialState = null;
export const socketReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_SOCKET:
      return action.payload;
    case DIS_CONNECT:
      return null;
    default:
      return state;
  }
};
