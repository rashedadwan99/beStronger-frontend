import React from "react";
import AuthTopSection from "../components/auth/AuthTopSection";
import AuthBox from "../components/auth/AuthBox";
import AuthAboutUs from "../components/auth/AuthAboutUs";
import "./authenticanions.css";

function Authentications() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <AuthTopSection />
        <AuthBox />
      </div>
      <AuthAboutUs />
    </div>
  );
}

export default Authentications;
