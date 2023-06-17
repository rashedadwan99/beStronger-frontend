import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleAppDependency } from "../../redux/actions/appUseEffectDependencyAction";
import { resetAllNotifications } from "../../redux/actions/notificationsActions";
import { resetAllPosts } from "../../redux/actions/postActions";
import { resetAllProfileCardData } from "../../redux/actions/ProfileCardActions";
import { logout } from "../../services/authService";
import OptionsList from ".././common/OptionsList";
import { openModal } from "../../redux/actions/modalActions";
import ChangePassword from ".././ChangePassword";
import { IoMdSettings } from "react-icons/io";
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { profileRoute } from "../../config/routes";

function RightHeaderList({ setShow }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const appDependency = useSelector((state) => state.appUseEffectDependency);
  const user = useSelector((state) => state.user.value);
  const socket = useSelector((state) => state.socket);

  const handleShowChangePasswordModal = () => {
    setShow(false);

    dispatch(
      openModal({
        title: "Change Password",
        Component: <ChangePassword />,
      })
    );
  };

  const handleLogout = () => {
    socket.emit("leave room", user._id);
    logout();
    dispatch(toggleAppDependency(!appDependency));
    dispatch(resetAllNotifications());
    dispatch(resetAllPosts());
    dispatch(resetAllProfileCardData());
  };
  const options = [
    {
      label: "profile",
      icon: <FaUserAlt />,
      onClick: () => {
        history.push(profileRoute);
        setShow(false);
      },
    },
    {
      label: "change password",
      icon: <IoMdSettings />,
      onClick: () => handleShowChangePasswordModal(),
    },
    {
      label: "logout",
      icon: <FaSignOutAlt />,
      onClick: () => handleLogout(),
    },
  ];
  return <OptionsList options={options} />;
}

export default RightHeaderList;
