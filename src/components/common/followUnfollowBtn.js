import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendFollowOrUFollowAction } from "../../redux/actions/userActions";
import Button from "./button";
import "./followunfollowbtn.css";
function FollowUnfollowBtn({ user, isUserListButton }) {
  const [disableExactFollowButton, setDisableExactFollowButton] = useState();
  const socket = useSelector((state) => state.socket);
  const currentUser = useSelector((state) => state.user.value);
  const isSendingRequest = useSelector((state) => state.user.isSendingRequest);
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const followEachOther =
    currentUser.followersList.includes(user._id) &&
    currentUser.followingList.includes(user._id);
  // /**** */
  const followsYou =
    currentUser.followersList.includes(user._id) &&
    !currentUser.followingList.includes(user._id);
  /*** */
  const followHim =
    !currentUser.followersList.includes(user._id) &&
    currentUser.followingList.includes(user._id);
  /** */
  const isBlocked =
    currentUser.blockList && currentUser.blockList.includes(user._id);
  const handleClickFollowUnFollow = (userId) => {
    setDisableExactFollowButton(userId);
    dispatch(
      sendFollowOrUFollowAction(
        user._id,
        match.params.userId === user._id ||
          (match.path === "/profile/:userId" && !isUserListButton),
        followEachOther || followHim,
        socket,
        currentUser._id,
        match.path === "/profile/:userId" && isUserListButton
      )
    );
  };

  const handleButtonLabel = () => {
    if (isBlocked) return "Unblock";
    if (followEachOther || followHim) return "unFollow";
    if (followsYou) return "follow back";
    else return "follow";
  };

  const toggleClasses = () => {
    return followEachOther || followHim ? "un-follow-btn-style" : "";
  };
  return (
    <Button
      onMouseLeave={() => setDisableExactFollowButton()}
      label={handleButtonLabel()}
      onClick={
        !isSendingRequest ? () => handleClickFollowUnFollow(user._id) : () => {}
      }
      className={toggleClasses()}
      disabled={isSendingRequest && user._id === disableExactFollowButton}
    />
  );
}

export default FollowUnfollowBtn;
