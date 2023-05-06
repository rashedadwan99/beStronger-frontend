import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessagesAction } from "../../redux/actions/messageActions";

import "./chat.css";
import ChatBox from "./ChatBox";
import ChatList from "./ChatList";
function Chat() {
  const selectedChat = useSelector((state) => state.chats.selectedChat);
  const socket = useSelector((state) => state.socket);

  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedChat) {
      dispatch(getMessagesAction(selectedChat._id));
      socket.emit("join chat", selectedChat);
    }
  }, [selectedChat]);
  return (
    <div className="chat-container">
      <ChatList />
      <ChatBox />
    </div>
  );
}

export default Chat;
