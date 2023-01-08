import React from "react";
import { useSelector } from "react-redux";
import ProfileImage from "./common/ProfileImage";

function ProfileCardTop() {
  const profileCardUser = useSelector((state) => state.profileCardUser.value);
  const isLoading = useSelector((state) => state.profileCardUser.isLoading);

  return (
    <div className="profile-card-top">
      <div className="profile-image-name">
        <ProfileImage>
          <img
            src={profileCardUser.picture}
            alt={`${profileCardUser.name}'s picture`}
          />
        </ProfileImage>
        {profileCardUser.name && (
          <span>
            {profileCardUser.name.length > 17
              ? profileCardUser.name.slice(0, 17)
              : profileCardUser.name}
          </span>
        )}
      </div>
    </div>
  );
}

export default ProfileCardTop;
