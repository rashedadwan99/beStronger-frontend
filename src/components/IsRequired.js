import React from "react";

function IsRequired({ isRequired }) {
  return (
    <>
      {isRequired && (
        <span
          style={{
            color: "red",
            fontSize: "15px",
            fontWeight: "bolder",
            paddingLeft: "2px",
          }}
        >
          *
        </span>
      )}
    </>
  );
}

export default IsRequired;
