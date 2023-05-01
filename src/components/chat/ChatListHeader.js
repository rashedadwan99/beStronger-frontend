import React from "react";
import ButtonsGroup from "../common/button";

function ChatListHeader() {
  return (
    <div className="chat-list-header">
      <h4>chats</h4>
      <ButtonsGroup label="create group +" />
    </div>
  );
}

export default ChatListHeader;
