import React from "react";
import HeaderRightSection from "./HeaderRightSection";
import HeaderLeftSection from "./HeaderLeftSection";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <HeaderLeftSection />
      <div className="header-middle-section">
        <h3>beStronger</h3>
      </div>
      <HeaderRightSection />
    </div>
  );
}

export default Header;
