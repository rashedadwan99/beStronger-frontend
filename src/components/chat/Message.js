import React from "react";
import { useSelector } from "react-redux";
import { handleStyle } from "../utils/handleMessageStyle";
import { isLastMessageRecieved } from "../utils/handleSenderMessagePicture";

function Message({ message }) {
  const { content, sender } = message;
  const user = useSelector((state) => state.user.value);
  const messages = useSelector((state) => state.messages.value);
  const isMyMessage = user._id === sender._id;
  return (
    <div
      className={`message-sender-content ${isMyMessage && "my-message"}`}
      style={
        isLastMessageRecieved(messages, message, user)
          ? {}
          : { marginLeft: "33px" }
      }
    >
      {isLastMessageRecieved(messages, message, user) && (
        <img src={message.sender.picture} alt="" />
      )}
      <span
        className={`message-content ${
          isLastMessageRecieved(messages, message, user) && "recived-message"
        }`}
        style={handleStyle(message, user)}
      >
        {content}
      </span>
    </div>
  );
}

export default Message;
