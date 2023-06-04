import React from "react";
import Tooltip from "../common/Tooltip";
import { FaSearch } from "react-icons/fa";
import SearchSection from "../search/SearchSection";
import { useDispatch, useSelector } from "react-redux";
import { openOffCanvas } from "../../redux/actions/offCanvasActions";
import { toggleShowNotificationsAction } from "../../redux/actions/notificationsActions";

function HeaderLeftSection() {
  const showCanvas = useSelector((state) => state.canvas.show);
  const showNotifications = useSelector((state) => state.notifications.show);
  const dispatch = useDispatch();
  const handleShowing = () => {
    dispatch(openOffCanvas(<SearchSection />, "search for users"));
    if (showNotifications) dispatch(toggleShowNotificationsAction(false));
  };
  return (
    <div className="header-left-section">
      <Tooltip
        show={showCanvas}
        setshow={handleShowing}
        style={{ zIndex: "50001" }}
      >
        <FaSearch />
        <span>search</span>
      </Tooltip>
    </div>
  );
}

export default HeaderLeftSection;
