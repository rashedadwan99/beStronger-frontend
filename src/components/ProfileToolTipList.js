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
import routes from "../config/routes.json";
import { openModal } from "../redux/actions/modalActions";
import ChangePassword from "./ChangePassword";
import { IoMdSettings } from "react-icons/io";
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";

function RightHeaderList({ setShow }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const appDependency = useSelector((state) => state.appUseEffectDependency);
  const user = useSelector((state) => state.user.value);
  const socket = useSelector((state) => state.socket);
  const options = [
    {
      label: "profile",
      icon: <FaUserAlt />,
      onClick: () => {
        const myProfileRoute = routes["profile-route"];

        history.push(myProfileRoute);
        setShow(false);
      },
    },
    {
      label: "change password",
      icon: <IoMdSettings />,
      onClick: () => {
        setShow(false);

        dispatch(
          openModal({
            title: "Change Password",
            Component: <ChangePassword />,
          })
        );
      },
    },
    {
      label: "logout",
      icon: <FaSignOutAlt />,
      onClick: () => {
        socket.emit("leave room", user._id);
        logout();
        dispatch(toggleAppDependency(!appDependency));
        dispatch(disconnectSocket(socket));
        dispatch(resetAllNotifications());
        dispatch(resetAllPosts());
        dispatch(resetAllProfileCardData());
      },
    },
  ];
  return <OptionsList options={options} />;
}

export default RightHeaderList;
