import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./button";
import { sendFollowOrUFollowAction } from "../../redux/actions/userActions";
import "./followunfollowbtn.css";

import { useRouteMatch } from "react-router-dom";
import { useState } from "react";
function FollowUnfollowBtn({ user }) {
  const [activeButton, setActiveButton] = useState([]);

  const currentUser = useSelector((state) => state.user.value);
  const isSendingRequest = useSelector((state) => state.user.isSendingRequest);
  const { params } = useRouteMatch();
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

  const handleClickFollowUnFollow = () => {
    dispatch(
      sendFollowOrUFollowAction(
        user._id,
        params.userId,
        followEachOther || followHim
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
      onMouseEnter={() => setActiveButton([user._id])}
      onMouseLeave={() => setActiveButton([])}
      label={handleButtonLabel()}
      onClick={handleClickFollowUnFollow}
      className={toggleClasses()}
      disabled={isSendingRequest && activeButton.includes(user._id)}
    />
  );
}

export default FollowUnfollowBtn;
