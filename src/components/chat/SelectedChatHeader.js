import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { handleChatUsersInfo } from "../utils/handleChatUserInfo";
import { BiArrowBack } from "react-icons/bi";
import { unSelectChatAction } from "../../redux/actions/chatActions";

function SelectedChatHeader() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const selectedChat = useSelector((state) => state.chats.selectedChat);
  const reciverUser = handleChatUsersInfo(selectedChat, user);
  const history = useHistory();
  const handleGoToProfile = () => {
    history.push(`/profile/${reciverUser._id}`);
  };
  const handleUnSelectChat = () => {
    dispatch(unSelectChatAction());
  };
  return (
    <div className="selected-chat-header">
      <BiArrowBack onClick={handleUnSelectChat} />
      <img src={reciverUser.picture} alt="" />
      <span onClick={handleGoToProfile}>{reciverUser.name}</span>
    </div>
  );
}

export default SelectedChatHeader;
