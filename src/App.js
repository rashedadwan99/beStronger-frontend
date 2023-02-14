import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Authentications from "./pages/Authentications";
import { userLoggedIn, userLoggedOut } from "./redux/actions/userActions";
import HomePage from "./pages/HomePage";
import Canvas from "./components/common/Canvas";
import Modal from "./components/common/Modal";
import NotFound from "./pages/NotFound";
import {
  disconnectSocket,
  getSocketAction,
} from "./redux/actions/socketAction";
import { io } from "socket.io-client";
import LandingPage from "./pages/LandingPage";
import { resetAllNotifications } from "./redux/actions/notificationsActions";
import { resetAllPosts } from "./redux/actions/postActions";
import { resetAllProfileCardData } from "./redux/actions/ProfileCardActions";

function App() {
  const dispatch = useDispatch();

  const data = JSON.parse(localStorage.getItem("user"));
  const appDependency = useSelector((state) => state.appUseEffectDependency);
  const socket = useSelector((state) => state.socket);
  useEffect(() => {
    if (data && data.user) {
      dispatch(userLoggedIn());
      dispatch(getSocketAction(io("http://localhost:5000")));
    } else {
      dispatch(userLoggedOut());
      dispatch(disconnectSocket(socket));
      dispatch(resetAllNotifications());
      dispatch(resetAllPosts());
      dispatch(resetAllProfileCardData());
    }
  }, [appDependency]);

  return (
    <>
      <ToastContainer />
      <Switch>
        <Route
          path={[
            "/",
            "/posts",
            "/posts/:postId",
            "/profile",
            "/profile/:userId",
          ]}
          render={(props) => {
            if (data && data.user) return <HomePage {...props} />;
            return <Redirect to="/landing-page" />;
          }}
          exact
        />
        <Route
          path={["/register", "/login"]}
          render={(props) => {
            if (!data) return <Authentications {...props} />;
            return <Redirect to="/posts" />;
          }}
          exact
        />
        <Route
          path="/landing-page"
          render={(props) => {
            if (!data) return <LandingPage {...props} />;
            return <Redirect to="/posts" />;
          }}
        />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
      <Canvas />
      <Modal />
    </>
  );
}

export default App;
