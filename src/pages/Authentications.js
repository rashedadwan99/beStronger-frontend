import React from "react";
import AuthTopSection from "../components/auth/AuthTopSection";
import AuthForms from "../components/auth/AuthForms";
import AuthAboutUs from "../components/auth/AuthAboutUs";
import "./authenticanions.css";

function Authentications() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <AuthTopSection />
        <AuthForms />
      </div>
      <AuthAboutUs />
    </div>
  );
}

export default Authentications;
