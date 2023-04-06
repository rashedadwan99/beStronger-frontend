import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../components/header/Header";
import Communication from "../components/Communication";
import Profile from "../components/Profile";
import routes from "../config/routes.json";
import "./homepage.css";
function HomePage() {
  const user = useSelector((state) => state.user.value);

  if (user._id) {
    return (
      <div className="home-page">
        <Header />
        <Switch>
          <Route
            path={[routes["profile-route"], routes["another-profile-route"]]}
            component={Profile}
            exact
          />
          <Route
            path={[routes["posts-route"], routes["single-post-route"]]}
            component={Communication}
            exact
          />
          <Redirect to={routes["posts-route"]} />
        </Switch>
      </div>
    );
  }
  return <></>;
}

export default HomePage;
