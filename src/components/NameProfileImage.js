import React from "react";
import ProfileImage from "./common/ProfileImage";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/actions/modalActions";
import { useHistory } from "react-router-dom";
import { toggleShowNotificationsAction } from "../redux/actions/notificationsActions";
import TimeComponent from "./TimeComponent";
import { profileRoute } from "../config/routes";
function NameProfileImage({
  publisher,
  onMouseEnter,
  onMouseLeave,
  message,
  data,
}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.value);
  const showModal = useSelector((state) => state.modal.show);
  const showNotifications = useSelector((state) => state.notifications.show);
  const goToProfile = () => {
    const anotherProfileRoute = `${profileRoute}/${publisher._id}`;
    const myProfileRoute = profileRoute;
    if (showModal) dispatch(closeModal());
    if (showNotifications) dispatch(toggleShowNotificationsAction(false));

    if (user._id !== publisher._id) history.push(anotherProfileRoute);
    else history.push(myProfileRoute);
  };
  return (
    <div className="name-profile-image">
      <ProfileImage>
        <img
          src={publisher.picture}
          alt={`${publisher.name}'s profile image`}
        />
      </ProfileImage>
      <div className="name-time-message">
        <div>
          <span
            onClick={goToProfile}
            className="name"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {publisher.name.length >= 25
              ? publisher.name.slice(0, 27) + "..."
              : publisher.name}
          </span>
          <span style={{ fontWeight: "initial" }}>{message}</span>
        </div>
        <TimeComponent date={data.createdAt} />
      </div>
    </div>
  );
}

export default NameProfileImage;
