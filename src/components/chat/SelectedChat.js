import React from "react";
import { useState } from "react";
import MessagesContainer from "./MessagesContainer";
import SelectedChatBottom from "./SelectedChatBottom";
import SelectedChatHeader from "./SelectedChatHeader";

function SelectedChat() {
  const [theShownMessageWhenSending, setTheShownMessageWhenSending] = useState(
    {}
  );
  return (
    <div className="selected-chat">
      <SelectedChatHeader />
      <MessagesContainer
        theShownMessageWhenSending={theShownMessageWhenSending}
      />
      <SelectedChatBottom
        setTheShownMessageWhenSending={setTheShownMessageWhenSending}
      />
    </div>
  );
}

export default SelectedChat;
