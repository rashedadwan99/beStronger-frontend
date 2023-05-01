export const handleChatUsersInfo = (chat, user) => {
  return chat.users.find((u) => u._id !== user._id);
};
export const handleLatestMessage = (message) => {
  return message.length > 15 ? message.slice(0, 15) + "..." : message;
};
