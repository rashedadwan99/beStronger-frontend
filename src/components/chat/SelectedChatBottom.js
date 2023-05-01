import React from "react";
import RenderInputField from "../common/Forms";
import Button from "../common/button";
import { MdSend } from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageAction } from "../../redux/actions/messageActions";
function SelectedChatBottom({ setTheShownMessageWhenSending }) {
  const [content, setContent] = useState("");
  const selectedChat = useSelector((state) => state.chats.selectedChat);
  const isSendingMessage = useSelector(
    (state) => state.messages.isSendingMessage
  );
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const handleSendMessage = () => {
    if (!content) return;
    setTheShownMessageWhenSending({
      content,
      sender: {
        picture: user.picture,
        _id: user._id,
      },
    });
    setContent("");

    dispatch(sendMessageAction(selectedChat._id, content));
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
      <Button
        label={<MdSend />}
        disabled={isSendingMessage}
        onClick={handleSendMessage}
      />
    </div>
  );
}

export default SelectedChatBottom;
