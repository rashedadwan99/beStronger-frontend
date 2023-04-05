import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { openModal } from "../redux/actions/modalActions";
import { getFollowersList, getFollowingList } from "../services/userService";

import FollowingFollowersList from "./FollowingFollowersList";
import "./profilestatistics.css";
function ProfileStatistics() {
  const dispatch = useDispatch();
  const { location } = useHistory();
  const { path } = useRouteMatch();
  const profileCardUser = useSelector((state) => state.profileCardUser.value);
  const posts = useSelector((state) => state.posts.value);
  const isProfilePage =
    location.pathname === "/profile" || path === "/profile/:userId";

  const showFollowingOrFollowersList = async (title, service) => {
    dispatch(
      openModal({
        title,
        Component: (
          <FollowingFollowersList
            service={service}
            profileCardUser={profileCardUser}
          />
        ),
      })
    );
  };

  return (
    <div className="profile-statistics">
      <div className="top">
        <span>followers</span>
        <span>following</span>
        {isProfilePage && <span>posts</span>}
      </div>
      <div className="bottom">
        <span
          onClick={() =>
            profileCardUser.followersNum &&
            showFollowingOrFollowersList("Followers List", getFollowersList)
          }
        >
          {profileCardUser.followersNum}
        </span>
        <span
          onClick={() =>
            profileCardUser.followingNum &&
            showFollowingOrFollowersList("Following List", getFollowingList)
          }
        >
          {profileCardUser.followingNum}
        </span>
        {isProfilePage && <span>{posts.length}</span>}
      </div>
    </div>
  );
}

export default ProfileStatistics;
