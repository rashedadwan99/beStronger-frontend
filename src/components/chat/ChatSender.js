import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChatAction } from "../../redux/actions/chatActions";
import {
  handleChatUsersInfo,
  handleLatestMessage,
} from "../utils/handleChatUserInfo";

function ChatSender({ chat }) {
  const user = useSelector((state) => state.user.value);
  const selectedChat = useSelector((state) => state.chats.selectedChat);
  const dispatch = useDispatch();

  const senderUser = handleChatUsersInfo(chat, user);

  const hanldeSelectChat = () => {
    if (selectedChat._id === chat._id) return;

    dispatch(selectChatAction(chat));
  };
  return (
    <div
      className={`chat-info ${
        selectedChat._id === chat._id && "selected-user-to-chat"
      }`}
      onClick={hanldeSelectChat}
    >
      <div className="chat-sender">
        <img src={senderUser.picture} alt="" />
        <div className="chat-sender-name-content">
          <span>{senderUser.name}</span>
          <span>
            {chat.latestMessage.sender._id === user._id && "you : "}
            {handleLatestMessage(chat.latestMessage.content)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChatSender;
