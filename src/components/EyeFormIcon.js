import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function EyeFormIcon({ eyeIcon, showPassword, handleClickIcon }) {
  return (
    <>
      {eyeIcon &&
        (showPassword ? (
          <AiFillEye onClick={handleClickIcon} className="eye-icon" />
        ) : (
          <AiFillEyeInvisible onClick={handleClickIcon} className="eye-icon" />
        ))}
    </>
  );
}

export default EyeFormIcon;
