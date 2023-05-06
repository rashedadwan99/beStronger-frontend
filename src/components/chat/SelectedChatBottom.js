import React from "react";
import RenderInputField from "../common/Forms";
import Button from "../common/button";
import { MdSend } from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageAction } from "../../redux/actions/messageActions";
function SelectedChatBottom({
  setTheShownMessageWhenSending,
  theShownMessageWhenSending,
}) {
  const [content, setContent] = useState("");
  const selectedChat = useSelector((state) => state.chats.selectedChat);
  const user = useSelector((state) => state.user.value);
  const socket=useSelector(state=>state.socket)
  const messages = useSelector((state) => state.messages.value);
  const dispatch = useDispatch();
  const handleSendMessage = () => {
    if (!content) return;
    const messageInfo = {
      content,
      sender: {
        picture: user.picture,
        _id: user._id,
      },
    };
    let messagesWhenSending = theShownMessageWhenSending;
    if (!messagesWhenSending.includes(messageInfo)) {
      messagesWhenSending = [messageInfo, ...messagesWhenSending];
      setTheShownMessageWhenSending([messagesWhenSending[0]]);
    }
    setContent("");

    dispatch(
      sendMessageAction(
        selectedChat._id,
        content,
        setTheShownMessageWhenSending,
        theShownMessageWhenSending
      )
    );
  };
  return (
    <div className="selected-chat-bottom">
      <RenderInputField
        placeholder="write a message"
        data={content}
        setData={setContent}
        value={content}
        name="content"
      />
      <Button label={<MdSend />} onClick={handleSendMessage} />
    </div>
  );
}

export default SelectedChatBottom;
