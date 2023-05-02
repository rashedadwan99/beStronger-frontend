import React from "react";
import { useSelector } from "react-redux";
import ChatListBody from "./ChatListBody";
import ChatListHeader from "./ChatListHeader";

function ChatList() {
  const selectedChat = useSelector((state) => state.chats.selectedChat);
  return (
    <div
      className={`chat-list ${
        !selectedChat._id ? "show-mobile-chat-list" : "hide-mobile-chat-list"
      }`}
    >
      <ChatListHeader />
      <ChatListBody />
    </div>
  );
}

export default ChatList;
