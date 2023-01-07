import React from "react";
import "./profile-image.css";
function ProfileImage({ children }) {
  return children && <div className="profile-image-container">{children}</div>;
}

export default ProfileImage;
