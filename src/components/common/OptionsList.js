import React from "react";
import "./optionslist.css";
function OptionsList({ options, data }) {
  const handleClick = (option) => {
    if (data) {
      option.onClick(data);
      return;
    }
    return option.onClick();
  };
  return (
    <div className="options-list">
      <ul>
        {options.map((option, index) => {
          return (
            <li key={index} onClick={() => handleClick(option)}>
              <span className="icon">{option.icon}</span>
              <span>{option.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OptionsList;
