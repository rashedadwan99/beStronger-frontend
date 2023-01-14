import React from "react";
import { useSelector } from "react-redux";
import OutsideAlerter from "./utils/clickOutSideAlert";
import NotificationMessage from "./NotifciationMessage";

function NotificationsContainer({ handleHideNotifications }) {
  const notifications = useSelector((state) => state.notifications.value);
  return (
    <OutsideAlerter handleHiddingElement={handleHideNotifications}>
      <div className="notifications-list">
        <div className="title">
          <h3>Notifications</h3>
        </div>
        <div className="list">
          {notifications.map((n) => {
            return (
              <NotificationMessage
                n={n}
                notifications={notifications}
                targetId={n.targetId}
                key={n._id}
                handleHideNotifications={handleHideNotifications}
              />
            );
          })}
        </div>
      </div>
    </OutsideAlerter>
  );
}

export default NotificationsContainer;
