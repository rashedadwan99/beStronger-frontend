import React from "react";

import "./chat.css";
import ChatBox from "./ChatBox";
import ChatList from "./ChatList";
function Chat() {
  return (
    <div className="chat-container">
      <ChatList />
      <ChatBox />
    </div>
  );
}

export default Chat;
