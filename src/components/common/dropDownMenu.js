import React, { useCallback } from "react";
import OutsideAlerter from "../utils/clickOutSideAlert";
import "./dropdownmenu.css";
const DropDownMenu = ({
  options,
  showIcon,
  data,
  showDropDown,
  setShowDropDown,
  IconName,
  classNameIconName,
}) => {
  const toggleShowWithCallBack = useCallback(() => {
    setShowDropDown(!showDropDown);
  }, [showDropDown]);
  return (
    <OutsideAlerter handleHiddingElement={setShowDropDown}>
      <div className="dropdown-container">
        {showIcon && (
          <span id={classNameIconName}>
            <IconName
              onClick={toggleShowWithCallBack}
              className={`${showDropDown ? classNameIconName : ""}`}
            />
          </span>
        )}
        {showDropDown && (
          <ul className="dropdown">
            {options.map((option) => (
              <li
                onClick={() => {
                  option.onClick(data && data);
                  setShowDropDown(false);
                }}
                className="dropdown-item"
                key={option.label}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </OutsideAlerter>
  );
};

export default DropDownMenu;
