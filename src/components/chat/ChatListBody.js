import React from "react";

import ChatSender from "./ChatSender";
import UserListSkeleton from "../skeleton/UserListSkeleton";
import { useSelector } from "react-redux";
function ChatListBody() {
  const chats = useSelector((state) => state.chats.value);
  const isLoadingChats = useSelector((state) => state.chats.isLoadingChats);
  const noChats = useSelector((state) => state.chats.noChats);

  return (
    <div className="chat-list-body">
      {!isLoadingChats ? (
        !noChats ? (
          chats.map((chat) => {
            return <ChatSender chat={chat} key={chat._id} />;
          })
        ) : (
          <p>there are no chats</p>
        )
      ) : (
        <UserListSkeleton number={1} />
      )}
    </div>
  );
}

export default ChatListBody;
