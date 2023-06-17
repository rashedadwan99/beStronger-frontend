import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { io } from "socket.io-client";
import Authentications from "./pages/Authentications";
import { userLoggedIn, userLoggedOut } from "./redux/actions/userActions";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import {
  disconnectSocket,
  getSocketAction,
} from "./redux/actions/socketAction";
import LandingPage from "./pages/LandingPage";

import Canvas from "./components/common/Canvas";
import {
  LandingPageRoute,
  anotherProfileRoute,
  chatRoute,
  homeRoute,
  loginRoute,
  notFoundRoute,
  postRoute,
  profileRoute,
  registerRoute,
  singlePostRoute,
} from "./config/routes";
function App() {
  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem("user"));
  const appDependency = useSelector((state) => state.appUseEffectDependency);
  const socket = useSelector((state) => state.socket);
  useEffect(() => {
    dispatch(getSocketAction(io("https://bestrong.onrender.com")));

    return () => {
      dispatch(disconnectSocket(socket));
      socket.disconnect();
    };
  }, []);
  useEffect(() => {
    if (data && data.user) {
      dispatch(userLoggedIn());
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
            homeRoute,
            postRoute,
            singlePostRoute,
            profileRoute,
            anotherProfileRoute,
            chatRoute,
          ]}
          render={(props) => {
            if (data && data.user) return <HomePage {...props} />;
            return <Redirect to={loginRoute} />;
          }}
          exact
        />
        <Route
          path={[registerRoute, loginRoute]}
          render={(props) => {
            if (!data) return <Authentications {...props} />;
            return <Redirect to={postRoute} />;
          }}
          exact
        />
        <Route
          path={LandingPageRoute}
          render={(props) => {
            if (!data) return <LandingPage {...props} />;
            return <Redirect to={postRoute} />;
          }}
        />
        <Route path={notFoundRoute} component={NotFound} />
        <Redirect to={notFoundRoute} />
      </Switch>
      <Canvas />
    </>
  );
}

export default App;
