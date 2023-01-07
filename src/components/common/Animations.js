import React from "react";
import "./animations.css";
function Animations({ shapes }) {
  return (
    <ul className="animations">
      {shapes.map((shape, index) => {
        return (
          <li className={`icon-${index + 1}`} key={index}>
            {shape.icon}
          </li>
        );
      })}
    </ul>
  );
}

export default Animations;
