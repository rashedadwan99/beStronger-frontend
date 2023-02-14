import React from "react";
import Notifications from "./Notifications";
import HeaderHomeIcon from "./HeaderHomeIcon";
import HeaderProfileToolTip from "./HeaderProfileToolTip";
function HeaderRightSection() {
  return (
    <div className="header-right-section">
      <HeaderHomeIcon />
      <Notifications />
      <HeaderProfileToolTip />
    </div>
  );
}

export default HeaderRightSection;
