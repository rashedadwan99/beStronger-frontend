import React from "react";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import routes from "../config/routes.json";
function HeaderRightSectionIcons() {
  return (
    <div className="home-icon">
      <NavLink to={routes["posts-route"]}>
        <AiFillHome />
      </NavLink>
    </div>
  );
}

export default HeaderRightSectionIcons;
