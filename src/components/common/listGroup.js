import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./listgroup.css";
function ListGroup({ listItems, showElement, setShowElement }) {
  const renderListItem = (item, index) => {
    const handleShowElement = () => {
      showElement && setShowElement();
      return;
    };

    if (item.path) {
      return (
        <li key={item.path}>
          <NavLink to={item.path} key={item.label} onClick={handleShowElement}>
            {item.label}
          </NavLink>
        </li>
      );
    }
    return (
      <li
        key={item.label}
        onClick={() => {
          item.onClick();
          handleShowElement();
        }}
      >
        <span>{item.label}</span>
      </li>
    );
  };
  return (
    <ul className="list-items">
      {listItems.map((item, index) => {
        return renderListItem(item, index);
      })}
    </ul>
  );
}

export default ListGroup;
