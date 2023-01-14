import { GET_SOCKET } from "../actions/socketAction";

const initialState = null;
export const socketReducers = (state = "", actino) => {
  switch (actino.type) {
    case GET_SOCKET:
      return actino.payload;
    default:
      return state;
  }
};
