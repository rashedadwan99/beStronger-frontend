import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";
import { openModal } from "../redux/actions/modalActions";
import ButtonsGroup from "./common/button";
import FollowUnfollowBtn from "./common/followUnfollowBtn";
import ProfileForm from "./ProfileForm";
import routes from "../config/routes.json";
function ProfileCardBottom() {
  const user = useSelector((state) => state.user.value);
  const { location } = useHistory();
  const { path, params } = useRouteMatch();
  const dispatch = useDispatch();
  const profileCardUser = useSelector((state) => state.profileCardUser.value);
  const isPostPage =
    location.pathname === routes["posts-route"] ||
    path === routes["single-post-route"];

  const isAnotherProfilePage =
    path === routes["another-profile-route"] || params.userId === user._id;

  const isMyProfile = location.pathname === routes["profile-route"];

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
      {isPostPage && <NavLink to={routes["profile-route"]}>my profile</NavLink>}

      {isMyProfile && (
        <ButtonsGroup label="edit profile" onClick={openProfileEdit} />
      )}

      {isAnotherProfilePage && <FollowUnfollowBtn user={profileCardUser} />}
    </div>
  );
}

export default ProfileCardBottom;
