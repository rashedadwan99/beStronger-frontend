import React, { useEffect, useState } from "react";

import { BsBellFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  getNotificationsAction,
  reciveNotificiation,
  removeNotificiation,
  toggleShowNotificationsAction,
} from "../redux/actions/notificationsActions";
import NotificationNum from "./NotificationNum";
import NotificationsContainer from "./NotificationsContainer";
import {
  decreaseFollowersList,
  increaseFollowersList,
} from "../redux/actions/userActions";
import "./notifications.css";

function Notifications() {
  const socket = useSelector((state) => state.socket);
  const user = useSelector((state) => state.user.value);
  const [socketConnected, setSocketConnected] = useState(false);
  const notifications = useSelector((state) => state.notifications.value);
  const showNotifications = useSelector((state) => state.notifications.show);
  const dispatch = useDispatch();

  const handleHideNotifications = (showState) => {
    dispatch(toggleShowNotificationsAction(showState));
  };
  useEffect(() => {
    dispatch(getNotificationsAction());
    socket.emit("setup", user._id);

    socket.on("connected", () => {
      setSocketConnected(socket.connected);
    });
    socket.on("disconnect", () => {
      setSocketConnected(socket.connected);
    });
  }, []);

  useEffect(() => {
    if (!socket) return;

    const updateUserFollowersList = (
      notification,
      userId,
      decrease = false
    ) => {
      if (notification.targetId === userId) {
        if (!decrease) {
          dispatch(increaseFollowersList(notification.sender._id));
        } else {
          dispatch(decreaseFollowersList(notification.sender._id));
        }
      }
    };
    socket.on("notification recived", (notification) => {
      if (!notifications.includes(notification)) {
        dispatch(reciveNotificiation(notification));
        updateUserFollowersList(notification, user._id);
      }
    });
    socket.on("remove notification", (notification) => {
      dispatch(removeNotificiation(notification._id));
      updateUserFollowersList(notification, user._id, true);
    });
  }, [socket]);

  return (
    <>
      <div className="notifications-section">
        <span
          className="notification-bell-num"
          onClick={() => handleHideNotifications(!showNotifications)}
        >
          <BsBellFill />
          <NotificationNum />
        </span>
      </div>
      {showNotifications && (
        <NotificationsContainer
          handleHideNotifications={handleHideNotifications}
        />
      )}
    </>
  );
}

export default Notifications;
