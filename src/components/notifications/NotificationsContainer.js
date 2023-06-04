import React from "react";
import { useDispatch } from "react-redux";
import { toggleShowNotificationsAction } from "../../redux/actions/notificationsActions";
import NotificationsList from "./NotificationsList";

function NotificationsContainer() {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="canvas-background"
        onClick={() => dispatch(toggleShowNotificationsAction(false))}
      />
      <div className="notifications-list">
        <div className="title">
          <span>Notifications</span>
        </div>
        <NotificationsList />
      </div>
    </>
  );
}

export default NotificationsContainer;
