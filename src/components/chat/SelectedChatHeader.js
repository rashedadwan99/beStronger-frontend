import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { handleChatUsersInfo } from "../utils/handleChatUserInfo";

function SelectedChatHeader() {
  const user = useSelector((state) => state.user.value);
  const selectedChat = useSelector((state) => state.chats.selectedChat);
  const reciverUser = handleChatUsersInfo(selectedChat, user);
  const history = useHistory();
  const handleGoToProfile = () => {
    history.push(`/profile/${reciverUser._id}`);
  };
  return (
    <div className="selected-chat-header">
      <img src={reciverUser.picture} alt="" />
      <span onClick={handleGoToProfile}>{reciverUser.name}</span>
    </div>
  );
}

export default SelectedChatHeader;
