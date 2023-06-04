import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";

import {
  deleteNotificationByReciverUser,
  readNotificationAction,
  toggleShowNotificationsAction,
} from "../../redux/actions/notificationsActions";
import UserNameAndImage from "../common/UserNameAndImage";
import routes from "../../config/routes.json";
function NotifciationMessage({ notification, targetId }) {
  const [disableGoToTarget, setDisableGoToTarget] = useState(false);

  const posts = useSelector((state) => state.posts.value);
  const dispatch = useDispatch();
  const history = useHistory();
  const { sender } = notification;
  const singlePostRoute = `${routes["posts-route"]}/${targetId}`;
  const anotherProfileRoute = `${routes["profile-route"]}/${sender._id}`;
  const user = useSelector((state) => state.user.value);
  const goToTarget = () => {
    if (!user.followersList.includes(targetId)) {
      history.push(singlePostRoute);
    } else history.push(anotherProfileRoute);
    dispatch(toggleShowNotificationsAction(false));
  };

  const options = [
    {
      label: "delete",
      icon: <AiTwotoneDelete />,
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
      onClick={!disableGoToTarget ? clickNotificationHandler : () => {}}
    >
      <UserNameAndImage
        setDisableParentHandler={setDisableGoToTarget}
        disableParent={disableGoToTarget}
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
