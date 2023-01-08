import React from "react";
import Posts from "./common/Posts";
import ProfileCard from "./common/ProfileCard";
import "./profile.css";
function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-page_card">
        <ProfileCard />
      </div>
      <div className="profile-page_posts">
        <Posts />
      </div>
    </div>
  );
}

export default Profile;
