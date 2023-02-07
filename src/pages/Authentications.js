import React from "react";
import { Route, Switch } from "react-router-dom";
import { BiDumbbell } from "react-icons/bi";
import { GiMuscleUp, GiStrongMan } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Tabs from "../components/auth/Tabs";
import Animations from "../components/common/Animations";
import "./authenticanions.css";
import BeStrongerInfo from "../components/BeStrongerInfo";

function Authentications() {
  const tabs = [
    { label: "Login", path: "/login" },
    { label: "Register", path: "/register" },
  ];
  const shapes = [
    { icon: <BiDumbbell /> },
    { icon: <GiMuscleUp /> },
    { icon: <GiStrongMan /> },
    { icon: <AiFillHeart /> },
  ];
  return (
    <div className="auth-page">
      <div className="auth-container">
        <Animations shapes={shapes} />
        <h3 className="computer-view">log in or create your account</h3>
        <h3 className="mobile-view">beStronger</h3>
        <div className="auth-box">
          <Tabs tabs={tabs} />
          <div className="auth-forms">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </div>
        </div>
      </div>
      <div className="auth-aboutus">
        <BeStrongerInfo />
        <div className="aboutus-background" />
      </div>
    </div>
  );
}

export default Authentications;
