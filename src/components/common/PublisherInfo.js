import React, { useState } from "react";
import Tooltip from "./Tooltip";
import { BsThreeDots } from "react-icons/bs";
import OptionsList from "./OptionsList";
import OutsideAlerter from "../utils/clickOutSideAlert";
import ProfileImage from "./ProfileImage";
function PublisherInfo({ data, publisher, options, showDots }) {
  const [showOptionsList, setShowOptionsList] = useState(false);
  return (
    <div className="publiser-info">
      <div className="name-profile-image">
        <ProfileImage>
          <img
            src={publisher.picture}
            alt={`${publisher.name}'s profile image`}
          />
        </ProfileImage>
        <span>
          {publisher.name.length >= 25
            ? publisher.name.slice(0, 27) + "..."
            : publisher.name}
        </span>
      </div>
      <div className="three-dots-options">
        <OutsideAlerter handleHiddingElement={() => setShowOptionsList(false)}>
          <Tooltip show={showOptionsList} setshow={setShowOptionsList}>
            <BsThreeDots />
          </Tooltip>
        </OutsideAlerter>

        {showDots && showOptionsList && (
          <OptionsList options={options} data={data} />
        )}
      </div>
    </div>
  );
}

export default PublisherInfo;
