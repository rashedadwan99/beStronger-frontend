import React from "react";
import PropTypes from "prop-types";
import "./tooltip.css";
function Tooltip({ children, setshow, show, style }) {
  const handleSetShowList = () => {
    setshow(!show);
  };
  return (
    <div
      className="tooltip-container"
      onClick={handleSetShowList}
      style={style ? style : {}}
    >
      <div className={`tooltip-list ${show ? "active" : ""}`}>{children}</div>
    </div>
  );
}

export default Tooltip;
Tooltip.prototype = {
  setShow: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
