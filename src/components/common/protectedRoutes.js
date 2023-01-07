import React from "react";
import { getCurrentUser } from "../../services/authService";
import { Route, Redirect } from "react-router-dom";
function ProtectedRoutes({ path, component: Component, render, ...rest }) {

  const user = getCurrentUser();
  return (
    <Route
      {...rest}
      path={path}
      render={(props) => {
        if (user)
          return Component ? (
            <Component {...props} />
          ) : (
            render(props)
          );
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }}
    />
  );
}

export default ProtectedRoutes;
