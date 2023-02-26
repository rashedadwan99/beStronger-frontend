import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/actions/modalActions";
import { toggleShowNotificationsAction } from "../../redux/actions/notificationsActions";
import Tooltip from "./Tooltip";
import { BsThreeDots } from "react-icons/bs";
import OptionsList from "./OptionsList";
import OutsideAlerter from "../utils/clickOutSideAlert";
import ProfileImage from "./ProfileImage";
import "./publisher-info.css";
import routes from "../../config/routes.json";
function PublisherInfo({
  data,
  publisher,
  options,
  showDots,
  message,
  setDisableParentHandler,
}) {
  const user = useSelector((state) => state.user.value);
  const showModal = useSelector((state) => state.modal.show);
  const showNotifications = useSelector((state) => state.notifications.show);
  const dispatch = useDispatch();
  const [showOptionsList, setShowOptionsList] = useState(false);
  const history = useHistory();
  const goToProfile = () => {
    const anotherProfileRoute = `${routes["profile-route"]}/${publisher._id}`;
    const myProfileRoute = routes["profile-route"];
    if (showModal) dispatch(closeModal());
    if (showNotifications) dispatch(toggleShowNotificationsAction(false));
    if (user._id !== publisher._id) history.push(anotherProfileRoute);
    else history.push(myProfileRoute);
  };

  const onMouseEnter = () => {
    setDisableParentHandler && setDisableParentHandler(true);
  };
  const onMouseLeave = () => {
    setDisableParentHandler && setDisableParentHandler(false);
  };
  return (
    <div className="publiser-info">
      <div className="name-profile-image">
        <ProfileImage>
          <img
            src={publisher.picture}
            alt={`${publisher.name}'s profile image`}
          />
        </ProfileImage>
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
      {showDots && (
        <div className="three-dots-options">
          <OutsideAlerter
            handleHiddingElement={() => setShowOptionsList(false)}
          >
            <Tooltip show={showOptionsList} setshow={setShowOptionsList}>
              <BsThreeDots
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            </Tooltip>
          </OutsideAlerter>

          <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {showOptionsList && <OptionsList options={options} data={data} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default PublisherInfo;
