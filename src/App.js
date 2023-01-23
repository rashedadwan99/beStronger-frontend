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
import { getSocketAction } from "./redux/actions/socketAction";
import { io } from "socket.io-client";

function App() {
  const dispatch = useDispatch();

  const data = JSON.parse(localStorage.getItem("user"));
  const appDependency = useSelector((state) => state.appUseEffectDependency);

  useEffect(() => {
    dispatch(getSocketAction(io("http://localhost:5000")));
  }, []);
  useEffect(() => {
    if (data && data.user) {
      dispatch(userLoggedIn());
    } else dispatch(userLoggedOut());
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
            return <Redirect to="/login" />;
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

        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
      <Canvas />
      <Modal />
    </>
  );
}

export default App;
