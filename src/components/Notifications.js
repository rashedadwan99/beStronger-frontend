import React from "react";

import { BsBellFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowNotificationsAction } from "../redux/actions/notificationsActions";
import NotificationNum from "./NotificationNum";

import NotificationsContainer from "./NotificationsContainer";
function Notifications() {
  const dispatch = useDispatch();
  const showNotifications = useSelector((state) => state.notifications.show);
  const handleHideNotifications = (showState) => {
    dispatch(toggleShowNotificationsAction(showState));
  };

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
