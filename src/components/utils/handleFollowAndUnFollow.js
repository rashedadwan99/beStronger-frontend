export const followEachOther = (currentUser, user) => {
  return (
    currentUser.followersList.includes(user._id) &&
    currentUser.followingList.includes(user._id)
  );
};

// /**** */
export const followsYou = (currentUser, user) => {
  return (
    currentUser.followersList.includes(user._id) &&
    !currentUser.followingList.includes(user._id)
  );
  /*** */
};
export const followHim = (currentUser, user) => {
  return (
    !currentUser.followersList.includes(user._id) &&
    currentUser.followingList.includes(user._id)
  );
};

/** */
export const handleFollowAndFollowBtnLabel = (currentUser, user) => {
  if (followEachOther(currentUser, user) || followHim(currentUser, user))
    return "unFollow";
  if (followsYou(currentUser, user)) return "follow back";
  else return "follow";

  /** */
};

export const toggleClasses = (currentUser, user) => {
  return followEachOther(currentUser, user) || followHim(currentUser, user)
    ? "un-follow-btn-style"
    : "";
};
