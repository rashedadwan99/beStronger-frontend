import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import OptionsList from "./common/OptionsList";
import OutsideAlerter from "./utils/clickOutSideAlert";
import Tooltip from "./common/Tooltip";
function ThreeDotsOption({ onMouseEnter, onMouseLeave, options, data }) {
  const [showOptionsList, setShowOptionsList] = useState(false);

  return (
    <div className="three-dots-options">
      <OutsideAlerter handleHiddingElement={() => setShowOptionsList(false)}>
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
  );
}

export default ThreeDotsOption;
