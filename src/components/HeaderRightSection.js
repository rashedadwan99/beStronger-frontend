import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IoMdArrowDropdown } from "react-icons/io";
import ToolTip from "./common/Tooltip";
import RightHeaderList from "./RightHeaderList";
import OutsideAlerter from "./utils/clickOutSideAlert";
import ProfileImage from "./common/ProfileImage";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Notifications from "./Notifications";

function HeaderRightSection() {
  const user = useSelector((state) => state.user.value);
  const [showList, setShowList] = useState(false);

  return (
    <div className="header-right-section">
      <div className="home-icon">
        <NavLink to="/posts">
          <AiFillHome />
        </NavLink>
      </div>
      <Notifications />
      <OutsideAlerter handleHiddingElement={setShowList}>
        <div style={{ position: "relative" }}>
          <ToolTip setshow={setShowList} show={showList}>
            <ProfileImage>
              <img src={user.picture} alt={`${user.name}'s pricture`} />
            </ProfileImage>
            <IoMdArrowDropdown className="arrow-drop-down-icon" />
          </ToolTip>
          {showList && <RightHeaderList setShow={setShowList} />}
        </div>
      </OutsideAlerter>
    </div>
  );
}

export default HeaderRightSection;
