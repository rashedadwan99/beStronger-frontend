import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendFollowOrUFollowAction } from "../../redux/actions/userActions";
import Button from "./button";
import "./followunfollowbtn.css";
function FollowUnfollowBtn({ user }) {
  const socket = useSelector((state) => state.socket);
  const currentUser = useSelector((state) => state.user.value);
  const isSendingRequest = useSelector((state) => state.user.isSendingRequest);
  const [disabledButton, setDisabledButton] = useState([]);
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
        followEachOther || followHim,
        socket,
        currentUser
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
      onMouseEnter={() => {
        setDisabledButton([]);
        setDisabledButton([user._id]);
      }}
      onMouseLeave={() => setDisabledButton([])}
      label={handleButtonLabel()}
      onClick={!isSendingRequest ? handleClickFollowUnFollow : () => {}}
      className={toggleClasses()}
      disabled={isSendingRequest && disabledButton.includes(user._id)}
    />
  );
}

export default FollowUnfollowBtn;
