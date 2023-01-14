import React from "react";
import { useHistory } from "react-router-dom";

function NotifciationMessage({ n, handleHideNotifications }) {
  const history = useHistory();
  const goToSenderProfile = () => {
    history.push(`profile/${n.sender._id}`);
    handleHideNotifications(false);
  };
  return (
    <div className="notification-message">
      <img src={n.sender.picture} alt="" />
      <span className="sender-name" onClick={goToSenderProfile}>
        {n.sender.name}
      </span>
      <span>{n.message}</span>
    </div>
  );
}

export default NotifciationMessage;
