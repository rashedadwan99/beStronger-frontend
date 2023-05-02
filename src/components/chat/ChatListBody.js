import React from "react";

import ChatSender from "./ChatSender";
import UserListSkeleton from "../skeleton/UserListSkeleton";
import { useSelector } from "react-redux";
function ChatListBody() {
  const chats = useSelector((state) => state.chats.value);
  const isLoadingChats = useSelector((state) => state.chats.isLoadingChats);

  return (
    <div className="chat-list-body">
      {!isLoadingChats ? (
        chats.map((chat) => {
          return <ChatSender chat={chat} key={chat._id} />;
        })
      ) : (
        <UserListSkeleton number={1} />
      )}
    </div>
  );
}

export default ChatListBody;
