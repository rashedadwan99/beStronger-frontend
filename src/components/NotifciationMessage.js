import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteNotificationByReciverUser,
  readNotificationAction,
  toggleShowNotificationsAction,
} from "../redux/actions/notificationsActions";
import PublisherInfo from "./common/PublisherInfo";
import routes from "../config/routes.json";
function NotifciationMessage({ notification, targetId }) {
  const [disbleGoToTarget, setDisableGoToTarget] = useState(false);

  const posts = useSelector((state) => state.posts.value);
  const dispatch = useDispatch();
  const history = useHistory();
  const { sender } = notification;
  const singlePostRoute = `${routes["posts-route"]}/${targetId}`;
  const anotherProfileRoute = `${routes["profile-route"]}/${sender._id}`;
  const goToTarget = () => {
    const isPostTarget = posts.find((p) => p._id === targetId);
    if (isPostTarget) {
      history.push(singlePostRoute);
    } else history.push(anotherProfileRoute);
    dispatch(toggleShowNotificationsAction(false));
  };

  const options = [
    {
      label: "delete",
      icon: "",
      onClick: (n) => {
        dispatch(deleteNotificationByReciverUser(n.targetId, n.sender._id));
      },
    },
  ];
  const clickNotificationHandler = () => {
    goToTarget();
    if (!notification.isRead)
      dispatch(readNotificationAction(notification._id));
  };

  return (
    <div
      className={`notification-message-container ${
        !notification.isRead && "unread-notification"
      }`}
      onClick={!disbleGoToTarget ? clickNotificationHandler : () => {}}
    >
      <PublisherInfo
        setDisableParentHandler={setDisableGoToTarget}
        disableParent={disbleGoToTarget}
        data={notification}
        publisher={sender}
        options={options}
        showDots={true}
        message={notification.message}
      />
    </div>
  );
}

export default NotifciationMessage;
