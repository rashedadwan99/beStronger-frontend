import React from "react";

function OptionListBody({ handleClick, option, index, indexOfActive }) {
  return (
    <li
      onClick={() => handleClick(option)}
      className={index === indexOfActive ? "active" : ""}
    >
      {option.icon && <span className="icon">{option.icon}</span>}
      <span>{option.label}</span>
    </li>
  );
}

export default OptionListBody;
