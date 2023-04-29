import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllChats } from "../../services/chatService";
import { Toast } from "../common/Toast";
import ChatInfo from "./ChatInfo";
import UserListSkeleton from "../skeleton/UserListSkeleton";
function ChatListBody() {
  const [chats, setChats] = useState([]);
  const [isLoadingChats, setIsLoadingChats] = useState(false);
  useEffect(() => {
    const getChatsList = async () => {
      try {
        setIsLoadingChats(true);

        const { data: chats } = await getAllChats();
        setIsLoadingChats(false);
        setChats(chats);
      } catch (error) {
        setIsLoadingChats(false);
        Toast("error", error);
      }
    };
    getChatsList();
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
