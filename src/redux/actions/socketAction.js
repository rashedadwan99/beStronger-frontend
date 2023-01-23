export const GET_SOCKET = "GET_SOCKET";
export const DIS_CONNECT="DIS_CONNECT"
export const getSocketAction = (socket) => {
  return {
    type: GET_SOCKET,
    payload: socket,
  };
};

export const disconnectSocket = (socket) => {
  socket.disconnect();
  return {
    type:DIS_CONNECT
  }
};