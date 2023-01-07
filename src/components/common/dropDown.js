import React from "react";

function DropDown({ options }) {
  return (
    <div className="dropdown">
      {options.map((option) => (
        <div
          onClick={() => option.onClick(data)}
          className="dropdown-item"
          key={option.label}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
}

export default DropDown;
