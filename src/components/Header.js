import React from "react";
import HeaderRightSection from "./HeaderRightSection";
import HeaderLeftSection from "./HeaderLeftSection";
import "./header.css";
import {
  getNotificationsAction,
  reciveNotificiation,
  removeNotificiationFromAnotherUser,
} from "../redux/actions/notificationsActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
function Header() {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications.value);
  const socket = useSelector((state) => state.socket);

  useEffect(() => {
    dispatch(getNotificationsAction());
  }, []);
  useEffect(() => {
    socket.on("notification recived", (notification) => {
      if (!notifications.includes(notification))
        dispatch(reciveNotificiation(notification));
    });
    socket.on("remove notification", (notificationId) => {
      dispatch(removeNotificiationFromAnotherUser(notificationId));
    });
  }, []);
  return (
    <div className="header">
      <HeaderLeftSection />
      <div className="header-middle-section">
        <h3>beStronger</h3>
      </div>
      <HeaderRightSection />
    </div>
  );
}

export default Header;
