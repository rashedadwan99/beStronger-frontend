import React from "react";
import { Route, Switch } from "react-router-dom";
import { BiDumbbell } from "react-icons/bi";
import { GiMuscleUp, GiStrongMan } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Tabs from "../components/auth/Tabs";
import Animations from "../components/common/Animations";
import BeStrongerInfo from "../components/BeStrongerInfo";
import routes from "../config/routes.json";
import "./authenticanions.css";

function Authentications() {
  const tabs = [
    { label: "Login", path: routes["login-route"] },
    { label: "Register", path: routes["register-route"] },
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
              <Route path={routes["login-route"]} component={Login} />
              <Route path={routes["register-route"]} component={Register} />
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
