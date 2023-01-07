import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Communication from "../components/Communication";
import Profile from "../components/Profile";

function HomePage() {
  const user = useSelector((state) => state.user.value);
  if (user._id) {
    return (
      <div className="home-page">
        <Header />
        <Switch>
          <Route
            path={["/profile", "/profile/:userId"]}
            component={Profile}
            exact
          />
          <Route
            path={["/posts", "/posts/:postId"]}
            component={Communication}
            exact
          />
          <Redirect to="/posts" />
        </Switch>
      </div>
    );
  }
  return <></>;
}

export default HomePage;
