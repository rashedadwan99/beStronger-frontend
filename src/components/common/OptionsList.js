import React from "react";
import OptionListBody from "../optionListBody";
import "./optionslist.css";
function OptionsList({ options, data, indexOfActive }) {
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
            <OptionListBody
              indexOfActive={indexOfActive}
              option={option}
              handleClick={handleClick}
              index={index}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default OptionsList;
