import React, { useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { io } from "socket.io-client";
import Authentications from "./pages/Authentications";
import { userLoggedIn, userLoggedOut } from "./redux/actions/userActions";
import HomePage from "./pages/HomePage";
import Canvas from "./components/common/Canvas";
import Modal from "./components/common/Modal";
import NotFound from "./pages/NotFound";
import { getSocketAction } from "./redux/actions/socketAction";
import LandingPage from "./pages/LandingPage";
import routes from "./config/routes.json";
function App() {
  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem("user"));
  const appDependency = useSelector((state) => state.appUseEffectDependency);
  const socket = useSelector((state) => state.socket);
  const history = useHistory();
  useEffect(() => {
    if (data && data.user) {
      dispatch(userLoggedIn());
      dispatch(getSocketAction(io("https://bestrong.onrender.com")));
    } else {
      dispatch(userLoggedOut());
    }
  }, [appDependency]);

  return (
    <>
      <ToastContainer />
      <Switch>
        <Route
          path={[
            routes["home-route"],
            routes["posts-route"],
            routes["single-post-route"],
            routes["profile-route"],
            routes["another-profile-route"],
          ]}
          render={(props) => {
            if (data && data.user) return <HomePage {...props} />;
            return <Redirect to={routes["landing-page-route"]} />;
          }}
          exact
        />
        <Route
          path={[routes["register-route"], routes["login-route"]]}
          render={(props) => {
            if (!data) return <Authentications {...props} />;
            return <Redirect to={routes["posts-page"]} />;
          }}
          exact
        />
        <Route
          path={routes["landing-page-route"]}
          render={(props) => {
            if (!data) return <LandingPage {...props} />;
            return <Redirect to={routes["posts-page"]} />;
          }}
        />
        <Route path={routes["notfound-route"]} component={NotFound} />
        <Redirect to={routes["notfound-route"]} />
      </Switch>
      <Canvas />
      <Modal />
    </>
  );
}

export default App;
