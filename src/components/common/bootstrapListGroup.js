import React from "react";
import { ListGroup } from "react-bootstrap";
function BootstrapListGroup({ tabs, onClick, activeTab }) {
  return (
    <ListGroup horizontal>
      {tabs.map((tab, index) => (
        <ListGroup.Item
          key={index}
          active={activeTab.index === index}
          onClick={() => onClick(index, tab)}
        >
          {tab.label}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default BootstrapListGroup;
