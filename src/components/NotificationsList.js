import React from "react";
import { useSelector } from "react-redux";
import NotificationMessage from "./NotifciationMessage";

function NotificationsList() {
  const notifications = useSelector((state) => state.notifications.value);

  return (
    <div className="list">
      {notifications.map((notification) => {
        return (
          <NotificationMessage
            notification={notification}
            targetId={notification.targetId}
            key={notification._id}
            tagetId={notification.targetId}
          />
        );
      })}
    </div>
  );
}

export default NotificationsList;
