import React from "react";
import Logo from "../../images/logo.png";
function AuthTopSection() {
  return (
    <div className="auth-top-section">
      <h3 className="computer-view">log in or create your account</h3>
      <div className="mobile-view">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
}

export default AuthTopSection;
