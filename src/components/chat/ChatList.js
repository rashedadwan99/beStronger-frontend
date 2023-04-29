import React from "react";
import ChatListBody from "./ChatListBody";
import ChatListHeader from "./ChatListHeader";

function ChatList() {
  return (
    <div className="chat-list">
      <ChatListHeader />
      <ChatListBody />
    </div>
  );
}

export default ChatList;
