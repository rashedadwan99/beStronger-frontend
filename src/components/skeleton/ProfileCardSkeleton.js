import React from "react";
import "./skeleton.css";
function ProfileCardSkeleton() {
  return (
    <div className="profile-card-skeleton">
      <div className="profile-card-top-skeleton">
        <div className="skeleton-image-name">
          <div className="image" />
          <span />
        </div>
      </div>
    </div>
  );
}

export default ProfileCardSkeleton;
