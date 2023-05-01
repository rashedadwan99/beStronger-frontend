export const handleSenderMessagePicture = (messages, message) => {
  const theLastMessage = messages.find(
    (m) => m.sender._id === message.sender._id
  );

  const indexOfLastMessage = messages.indexOf(theLastMessage);

  return indexOfLastMessage;
};

export const isLastMessageRecieved = (messages, message, user) => {
  const indexOfMessage = messages.indexOf(message);
  const indexOfLastMessage = handleSenderMessagePicture(messages, message);
  const isLastMessage = indexOfLastMessage === indexOfMessage;
  const showThePictureOnLastMessage =
    user._id !== message.sender._id && isLastMessage;
  return showThePictureOnLastMessage;
};
