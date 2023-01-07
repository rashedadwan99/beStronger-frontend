import React from "react";
import PropTypes from "prop-types";
import "./tooltip.css";
function Tooltip({ children, setshow, show }) {
  return (
    <div className="tooltip-container" onClick={() => setshow(!show)}>
      <div className={`tooltip-list ${show ? "active" : ""}`}>{children}</div>
    </div>
  );
}

export default Tooltip;
Tooltip.prototype = {
  setShow: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
