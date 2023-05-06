import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Socket({ children }) {
  const socket = useSelector((state) => state.socket);
  const user = useSelector((state) => state.user.value);
  useEffect(() => socket.emit("setup", user._id), []);
  return <>{children}</>;
}

export default Socket;
