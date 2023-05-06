import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessagesAction } from "../../redux/actions/messageActions";
import LoadingMessages from "./LoadingMessages";

import Message from "./Message";

function MessagesContainer({ theShownMessageWhenSending }) {
  const selectedChat = useSelector((state) => state.chats.selectedChat);
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages.value);
  const isLoadingMessages = useSelector(
    (state) => state.messages.isLoadingMessages
  );
  const isSendingMessage = useSelector(
    (state) => state.messages.isSendingMessage
  );

  return (
    <div className="messages-container">
      {/* {isSendingMessage &&
        theShownMessageWhenSending.map((m, i) => {
          return (
            <div style={{ opacity: "0.5" }} key={m.sender._id + i}>
              <Message message={theShownMessageWhenSending[0]} />
            </div>
          );
        })} */}
      {!isLoadingMessages ? (
        messages.map((m) => <Message message={m} key={m._id} />)
      ) : (
        <LoadingMessages />
      )}
    </div>
  );
}

export default MessagesContainer;
