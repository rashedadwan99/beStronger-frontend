import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendFollowOrUFollowAction } from "../../redux/actions/userActions";
import Button from "./button";
import "./followunfollowbtn.css";
import {
  followEachOther,
  followHim,
  handleFollowAndFollowBtnLabel,
  toggleClasses,
} from "../utils/handleFollowAndUnFollow";
function FollowUnfollowBtn({ user, isUserListButton }) {
  const socket = useSelector((state) => state.socket);
  const currentUser = useSelector((state) => state.user.value);
  const isSendingRequest = useSelector((state) => state.user.isSendingRequest);
  const match = useRouteMatch();
  const dispatch = useDispatch();

  /** */
  const handleClickFollowUnFollow = () => {
    dispatch(
      sendFollowOrUFollowAction(
        user._id,
        match.params.userId === user._id ||
          (match.path === "/profile/:userId" && !isUserListButton),
        followEachOther(currentUser, user) || followHim(currentUser, user),
        socket,
        currentUser._id,
        match.path === "/profile/:userId" && isUserListButton
      )
    );
  };

  return (
    <Button
      label={handleFollowAndFollowBtnLabel(currentUser, user)}
      onClick={
        !isSendingRequest ? () => handleClickFollowUnFollow(user._id) : () => {}
      }
      className={toggleClasses(currentUser, user)}
    />
  );
}

export default FollowUnfollowBtn;
