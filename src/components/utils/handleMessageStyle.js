export const handleStyle = (message, user) => {
  if (message.sender._id === user._id) {
    return {
      backgroundColor: "var(--blue)",
      color: "var(--white)",
    };
  }
  return {
    backgroundColor: "var(--light-gray)",
  };
};
