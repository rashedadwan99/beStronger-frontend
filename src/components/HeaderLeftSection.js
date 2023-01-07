import React from "react";
import Tooltip from "./common/Tooltip";
import { FaSearch } from "react-icons/fa";
import SearchSection from "./SearchSection";
import { useDispatch, useSelector } from "react-redux";
import { openOffCanvas } from "../redux/actions/offCanvasActions";

function HeaderLeftSection() {
  const showCanvas = useSelector((state) => state.canvas.state);
  const dispatch = useDispatch();

  return (
    <div className="header-left-section">
      <Tooltip
        show={showCanvas}
        setshow={() =>
          dispatch(openOffCanvas(<SearchSection />, "search for users"))
        }
      >
        <FaSearch />
        <span>search</span>
      </Tooltip>
    </div>
  );
}

export default HeaderLeftSection;
