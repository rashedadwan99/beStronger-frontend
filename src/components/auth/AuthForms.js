import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Tabs from "./Tabs";
import { loginRoute, registerRoute } from "../../config/routes";

function AuthForms() {
  const tabs = [
    { label: "Login", path: loginRoute },
    { label: "Register", path: registerRoute },
  ];
  return (
    <div className="auth-box">
      <Tabs tabs={tabs} />
      <div className="auth-forms">
        <Switch>
          <Route path={loginRoute} component={Login} />
          <Route path={registerRoute} component={Register} />
        </Switch>
      </div>
    </div>
  );
}

export default AuthForms;
