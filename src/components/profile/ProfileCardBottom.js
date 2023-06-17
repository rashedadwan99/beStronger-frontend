import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";
import { openModal } from "../../redux/actions/modalActions";
import ButtonsGroup from "../common/button";
import FollowUnfollowBtn from "../common/followUnfollowBtn";
import ProfileForm from "./ProfileForm";

import {
  createChatAction,
  selectChatAction,
} from "../../redux/actions/chatActions";
import { anotherProfileRoute, postRoute, profileRoute, singlePostRoute } from "../../config/routes";
function ProfileCardBottom() {
  const user = useSelector((state) => state.user.value);
  const { location, push } = useHistory();
  const { path, params } = useRouteMatch();
  const dispatch = useDispatch();
  const profileCardUser = useSelector((state) => state.profileCardUser.value);
  const chats = useSelector((state) => state.chats.value);
  const isCreatingChat = useSelector((state) => state.chats.isCreatingChat);
  const isPostPage =
    location.pathname === postRoute||
    path === singlePostRoute;

  const isAnotherProfilePage =
    path === anotherProfileRoute|| params.userId === user._id;

  const isMyProfile = location.pathname === profileRoute;

  const openProfileEdit = () => {
    dispatch(
      openModal({
        title: "Edit Profile",
        className: "profile-form-modal",
        Component: <ProfileForm />,
      })
    );
  };

  const handleStartChatting = () => {
    if (!chats.length) {
      dispatch(createChatAction([user._id, profileCardUser._id], false, push));
    } else {
      const chat = chats.find((c) => {
        return c.users.find((u) => u._id === profileCardUser._id) ? c : null;
      });

      if (chat) {
        dispatch(selectChatAction(chat));
        push("/chats");
      } else {
        dispatch(
          createChatAction([user._id, profileCardUser._id], false, push)
        );
      }
    }
  };
  return (
    <div className="profile-card-bottom">
      {isPostPage && <NavLink to={profileRoute}>my profile</NavLink>}

      {isMyProfile && (
        <ButtonsGroup label="edit profile" onClick={openProfileEdit} />
      )}

      {isAnotherProfilePage && (
        <>
          <FollowUnfollowBtn user={profileCardUser} />
          {/* <ButtonsGroup
            label="message"
            style={{ marginLeft: "5px" }}
            onClick={handleStartChatting}
            isLoading={isCreatingChat}
            disabled={isCreatingChat}
          /> */}
        </>
      )}
    </div>
  );
}

export default ProfileCardBottom;
