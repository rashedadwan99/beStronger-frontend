import React, { useEffect } from "react";

import { IoMdNotifications } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  getNotificationsAction,
  reciveNotificiation,
  removeNotificiation,
  toggleShowNotificationsAction,
} from "../../redux/actions/notificationsActions";
import NotificationNum from "./NotificationNum";
import NotificationsContainer from "./NotificationsContainer";
import {
  decreaseFollowersList,
  increaseFollowersList,
} from "../../redux/actions/userActions";
import "./notifications.css";

function Notifications() {
  const socket = useSelector((state) => state.socket);
  const user = useSelector((state) => state.user.value);
  const notifications = useSelector((state) => state.notifications.value);
  const showNotifications = useSelector((state) => state.notifications.show);
  const dispatch = useDispatch();

  const handleHideNotifications = (showState) => {
    dispatch(toggleShowNotificationsAction(showState));
  };

  useEffect(() => {
    dispatch(getNotificationsAction());
  }, []);
  useEffect(() => {
    if (!socket) return;
    const updateUserFollowersList = (
      notification,

      decrease = false
    ) => {
      if (!decrease) {
        dispatch(increaseFollowersList(notification.sender._id));
      } else {
        dispatch(decreaseFollowersList(notification.sender._id));
      }
    };
    socket.on("notification recived", (notification) => {
      if (!notifications.includes(notification)) {
        dispatch(reciveNotificiation(notification));
        if (notification.targetId === user._id)
          updateUserFollowersList(notification, user._id);
      }
    });
    socket.on("remove notification", (notification) => {
      dispatch(removeNotificiation(notification._id));
      if (notification.targetId === user._id)
        updateUserFollowersList(notification, true);
    });
  }, [socket]);

  return (
    <>
      <div className="notifications-section">
        <span
          className="notification-bell-num"
          onClick={() => handleHideNotifications(!showNotifications)}
        >
          <IoMdNotifications
            style={{ color: showNotifications ? "var(--blue)" : "initial" }}
          />
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
