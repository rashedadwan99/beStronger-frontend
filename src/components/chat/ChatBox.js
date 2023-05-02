import React from "react";
import { useSelector } from "react-redux";
import ChatBoxBeforeSelectChat from "./ChatBoxBeforeSelectChat";
import SelectedChat from "./SelectedChat";

function ChatBox() {
  const selectedChat = useSelector((state) => state.chats.selectedChat);
  return (
    <div
      className={`chat-box ${
        selectedChat._id
          ? "show-mobile-selected-chat"
          : "hide-mobile-selected-chat"
      }`}
    >
      {!selectedChat._id ? <ChatBoxBeforeSelectChat /> : <SelectedChat />}
    </div>
  );
}

export default ChatBox;
