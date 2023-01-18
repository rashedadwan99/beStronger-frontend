import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteNotificationByReciverUser,
  toggleShowNotificationsAction,
} from "../redux/actions/notificationsActions";
import PublisherInfo from "./common/PublisherInfo";

function NotifciationMessage({ notification, targetId }) {
  const [disbleGoToTarget, setDisableGoToTarget] = useState(false);

  const posts = useSelector((state) => state.posts.value);
  const dispatch = useDispatch();
  const history = useHistory();
  const { sender } = notification;

  const goToTarget = () => {
    const isPostTarget = posts.find((p) => p._id === targetId);
    if (isPostTarget) {
      history.push(`/posts/${targetId}`);
    } else history.push(`/profile/${sender._id}`);
    dispatch(toggleShowNotificationsAction(false));
  };
  const isSendingDeleteRequest = useSelector(
    (state) => state.notifications.isSendingDeleteRequest
  );
  const options = [
    {
      label: "delete",
      icon: "",
      onClick: (n) => {
        dispatch(deleteNotificationByReciverUser(n.targetId, n.sender._id));
      },
    },
  ];

  return (
    <div
      className="notification-message-container"
      onClick={!disbleGoToTarget ? goToTarget : () => {}}
      style={isSendingDeleteRequest ? { opacity: 0.8 } : {}}
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
