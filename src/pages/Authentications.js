import React from "react";
import AuthTopSection from "../components/AuthTopSection";
import AuthBox from "../components/AuthBox";
import AuthAboutUs from "../components/AuthAboutUs";
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
