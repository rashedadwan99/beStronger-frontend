import React from "react";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function HeaderRightSectionIcons() {
  return (
    <div className="home-icon">
      <NavLink to="/posts">
        <AiFillHome />
      </NavLink>
    </div>
  );
}

export default HeaderRightSectionIcons;
