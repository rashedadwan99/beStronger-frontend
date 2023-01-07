import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/actions/modalActions";
import ModalCanvasHeader from "./ModalCanvasHeader";
import "./modal.css";
function Modal() {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleClickClose = () => {
    dispatch(closeModal());
  };
  return (
    modal.show && (
      <>
        <div className="modal-background" onClick={handleClickClose} />
        <div
          className={`modal-container${
            modal.className ? ` ${modal.className}` : ""
          }`}
        >
          <ModalCanvasHeader
            title={modal.title}
            handleClickClose={handleClickClose}
          />
          <div className="modal-body">{modal.Component}</div>
        </div>
      </>
    )
  );
}

export default Modal;
