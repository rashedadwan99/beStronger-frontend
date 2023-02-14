import React from "react";
import HeaderRightSection from "./HeaderRightSection";
import HeaderLeftSection from "./HeaderLeftSection";
import HeaderMiddleSection from "./HeaderMiddleSection";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <HeaderLeftSection />
      <HeaderMiddleSection />
      <HeaderRightSection />
    </div>
  );
}

export default Header;
