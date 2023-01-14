import React from "react";
import { useSelector } from "react-redux";

function NotificationNum() {
  const notifications = useSelector((state) => state.notifications.value);

  return notifications.length ? (
    <span
      className="notifications-number"
      style={notifications.length > 10 ? { padding: "2px 2px" } : {}}
    >
      {notifications.length}
    </span>
  ) : (
    <></>
  );
}

export default NotificationNum;
