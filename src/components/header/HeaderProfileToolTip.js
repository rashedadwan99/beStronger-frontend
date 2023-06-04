import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowDropdown } from "react-icons/io";
import ToolTip from ".././common/Tooltip";
import OutsideAlerter from ".././utils/clickOutSideAlert";
import ProfileImage from ".././common/ProfileImage";
import ProfileToolTipList from "../profile/ProfileToolTipList";
import { toggleShowNotificationsAction } from "../../redux/actions/notificationsActions";

function HeaderProfileToolTip() {
  const user = useSelector((state) => state.user.value);
  const showNotifications = useSelector((state) => state.notifications.show);
  const dispatch = useDispatch();
  const [showList, setShowList] = useState(false);
  const handleShowing = () => {
    setShowList(!showList);
    if (showNotifications) dispatch(toggleShowNotificationsAction(false));
  };
  return (
    <OutsideAlerter handleHiddingElement={setShowList}>
      <div style={{ position: "relative" }}>
        <ToolTip
          setshow={handleShowing}
          show={showList}
          style={{ zIndex: "50001" }}
        >
          <ProfileImage>
            <img src={user.picture} alt={`${user.name}'s pricture`} />
          </ProfileImage>
          <IoMdArrowDropdown className="arrow-drop-down-icon" />
        </ToolTip>
        {showList && <ProfileToolTipList setShow={setShowList} />}
      </div>
    </OutsideAlerter>
  );
}

export default HeaderProfileToolTip;
