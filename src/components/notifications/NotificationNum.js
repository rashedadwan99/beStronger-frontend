import React from "react";
import { useSelector } from "react-redux";

function NotificationNum() {
  const notifications = useSelector((state) => state.notifications.value);
  const unreadNotifications = notifications.filter((n) => !n.isRead);
  return unreadNotifications.length ? (
    <span
      className="notifications-number"
      style={unreadNotifications.length > 10 ? { padding: "2px 2px" } : {}}
    >
      {unreadNotifications.length}
    </span>
  ) : (
    <></>
  );
}

export default NotificationNum;
