import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./profilestatistics.css";
function ProfileStatistics() {
  const { location } = useHistory();
  const { path } = useRouteMatch();
  const profileCardUser = useSelector((state) => state.profileCardUser.value);
  const posts = useSelector((state) => state.posts.value);
  const isProfilePage =
    location.pathname === "/profile" || path === "/profile/:userId";
  return (
    <div className="profile-statistics">
      <div className="top">
        <span>followers</span>
        <span>following</span>
        {isProfilePage && <span>posts</span>}
      </div>
      <div className="bottom">
        <span>{profileCardUser.followersNum}</span>
        <span>{profileCardUser.followingNum}</span>
        {isProfilePage && <span>{posts.length}</span>}
      </div>
    </div>
  );
}

export default ProfileStatistics;
