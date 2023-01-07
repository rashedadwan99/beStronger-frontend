import React from "react";
import { GrClose } from "react-icons/gr";
import "./modalcanvasheader.css";
function ModalCanvasHeader({ title, handleClickClose }) {
  return (
    <div className="modal-canvas-header">
      <h4>{title}</h4>
      <GrClose onClick={handleClickClose} />
    </div>
  );
}

export default ModalCanvasHeader;
