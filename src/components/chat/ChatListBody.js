import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllChats } from "../../services/chatService";
import { Toast } from "../common/Toast";
import ChatInfo from "./ChatInfo";
import UserListSkeleton from "../skeleton/UserListSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { geChatListAction } from "../../redux/actions/chatActions";
function ChatListBody() {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chats.value);
  const isLoadingChats = useSelector((state) => state.chats.isLoadingChats);
  useEffect(() => {
    dispatch(geChatListAction());
  }, []);
  return (
    <div className="chat-list-body">
      {!isLoadingChats ? (
        chats.map((chat) => {
          return <ChatInfo chat={chat} key={chat._id} />;
        })
      ) : (
        <UserListSkeleton number={1} />
      )}
    </div>
  );
}

export default ChatListBody;
