import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../components/header/Header";
import Communication from "../components/Communication";
import Profile from "../components/Profile";
import routes from "../config/routes.json";
import "./homepage.css";
import Modal from "../components/common/Modal";
import Chat from "../components/chat/Chat";
import { geChatListAction } from "../redux/actions/chatActions";
import { useEffect } from "react";
import Socket from "../components/Socket";

function HomePage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const modalChild = useSelector((state) => state.modal.Component);
  const socket = useSelector((state) => state.socket);
  useEffect(() => {
    dispatch(geChatListAction());
  }, []);

  if (user._id) {
    return (
      <div className="home-page">
        <Socket>
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
            <Route path="/chats" component={Chat} exact />
            <Redirect to={routes["posts-route"]} />
          </Switch>
          <Modal>{modalChild}</Modal>
        </Socket>
      </div>
    );
  }
  return <></>;
}

export default HomePage;
