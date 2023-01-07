import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";
import { openModal } from "../redux/actions/modalActions";
import ButtonsGroup from "./common/button";
import FollowUnfollowBtn from "./common/followUnfollowBtn";
import ProfileForm from "./ProfileForm";

function ProfileCardBottom() {
  const { location } = useHistory();
  const { path } = useRouteMatch();
  const dispatch = useDispatch();
  const profileCardUser = useSelector((state) => state.profileCardUser.value);
  const isPostPage =
    location.pathname === "/posts" || path === "/posts/:postId";

  const isAnotherProfilePage = path === "/profile/:userId";

  const isMyProfile = location.pathname === "/profile";

  const openProfileEdit = () => {
    dispatch(
      openModal({
        title: "Edit Profile",
        className: "profile-form-modal",
        Component: <ProfileForm />,
      })
    );
  };
  return (
    <div className="profile-card-bottom">
      {isPostPage && <NavLink to="/profile">my profile</NavLink>}

      {isMyProfile && (
        <ButtonsGroup label="edit profile" onClick={openProfileEdit} />
      )}

      {isAnotherProfilePage && <FollowUnfollowBtn user={profileCardUser} />}
    </div>
  );
}

export default ProfileCardBottom;
