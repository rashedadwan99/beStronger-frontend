import React from "react";
import { useSelector } from "react-redux";
import NotificationMessage from "./NotifciationMessage";

function NotificationsList() {
  const notifications = useSelector((state) => state.notifications.value);

  return (
    <>
      {notifications.length ? (
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
      ) : (
        <div className="no-notifications">
          <h6>no notifcations</h6>
        </div>
      )}
    </>
  );
}

export default NotificationsList;
