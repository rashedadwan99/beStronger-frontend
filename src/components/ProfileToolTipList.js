import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleAppDependency } from "../redux/actions/appUseEffectDependencyAction";
import { resetAllNotifications } from "../redux/actions/notificationsActions";
import { resetAllPosts } from "../redux/actions/postActions";
import { resetAllProfileCardData } from "../redux/actions/ProfileCardActions";
import { disconnectSocket } from "../redux/actions/socketAction";
import { logout } from "../services/authService";
import OptionsList from "./common/OptionsList";

function RightHeaderList({ setShow }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const appDependency = useSelector((state) => state.appUseEffectDependency);
  const user = useSelector((state) => state.user.value);
  const socket = useSelector((state) => state.socket);
  const options = [
    {
      label: "profile",

      onClick: () => {
        history.push("/profile");
        setShow(false);
      },
    },
    {
      label: "logout",

      onClick: () => {
        socket.emit("leave room", user._id);
        logout();
        dispatch(toggleAppDependency(!appDependency));
      },
    },
  ];
  return <OptionsList options={options} />;
}

export default RightHeaderList;
