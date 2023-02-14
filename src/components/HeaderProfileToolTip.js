import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IoMdArrowDropdown } from "react-icons/io";
import ToolTip from "./common/Tooltip";
import OutsideAlerter from "./utils/clickOutSideAlert";
import ProfileImage from "./common/ProfileImage";
import ProfileToolTipList from "./ProfileToolTipList";
function HeaderProfileToolTip() {
  const user = useSelector((state) => state.user.value);
  const [showList, setShowList] = useState(false);

  return (
    <OutsideAlerter handleHiddingElement={setShowList}>
      <div style={{ position: "relative" }}>
        <ToolTip setshow={setShowList} show={showList}>
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
