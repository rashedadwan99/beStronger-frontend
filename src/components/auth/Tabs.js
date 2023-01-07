import React from "react";
import { NavLink } from "react-router-dom";
import "./tabs.css";
function Tabs({ tabs }) {
  const handleClassName = (tab) => {
    return window.location.pathname === tab.path ? "active-tab" : "default-tab";
  };
  return (
    <div className="tabs">
      <ul>
        {tabs.map((tab) => {
          return (
            <NavLink
              to={tab.path}
              key={tab.label}
              className={handleClassName(tab)}
            >
              <li>{tab.label}</li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}

export default Tabs;
