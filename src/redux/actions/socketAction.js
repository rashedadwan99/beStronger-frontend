export const GET_SOCKET = "GET_SOCKET";

export const getSocketAction = (socket) => {
  return {
    type: GET_SOCKET,
    payload: socket,
  };
};
