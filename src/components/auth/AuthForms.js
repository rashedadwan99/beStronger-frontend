import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../../config/routes.json";
import Login from "./Login";
import Register from "./Register";
import Tabs from "./Tabs";

function AuthForms() {
  const tabs = [
    { label: "Login", path: routes["login-route"] },
    { label: "Register", path: routes["register-route"] },
  ];
  return (
    <div className="auth-box">
      <Tabs tabs={tabs} />
      <div className="auth-forms">
        <Switch>
          <Route path={routes["login-route"]} component={Login} />
          <Route path={routes["register-route"]} component={Register} />
        </Switch>
      </div>
    </div>
  );
}

export default AuthForms;