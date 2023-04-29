import React from "react";
import { useSelector } from "react-redux";

function ChatInfo({ chat }) {
  const user = useSelector((state) => state.user.value);

  const handleInfo = () => {
    return chat.users.find((u) => u._id !== user._id);
  };
  const senderUser = handleInfo();

  return (
    <div className="chat-info">
      <div className="chat-sender">
        <img src={senderUser.picture} alt="" />
        <div className="chat-sender-name-content">
          <span>{senderUser.name}</span>
          <span>
            {chat.latestMessage.sender._id === user._id && "you : "}
            {chat.latestMessage.content}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChatInfo;
