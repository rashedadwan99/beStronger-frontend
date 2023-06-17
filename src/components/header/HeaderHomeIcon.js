import React from "react";
import { HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { postRoute } from "../../config/routes";
function HeaderRightSectionIcons() {
  return (
    <div className="home-icon">
      <NavLink to={postRoute}>
        <HiHome />
      </NavLink>
    </div>
  );
}

export default HeaderRightSectionIcons;
