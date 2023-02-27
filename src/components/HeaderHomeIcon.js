import React from "react";
import { HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import routes from "../config/routes.json";
function HeaderRightSectionIcons() {
  return (
    <div className="home-icon">
      <NavLink to={routes["posts-route"]}>
        <HiHome />
      </NavLink>
    </div>
  );
}

export default HeaderRightSectionIcons;
