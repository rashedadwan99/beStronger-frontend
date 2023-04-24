import React from "react";
import { AiFillWarning } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/actions/modalActions";
import ButtonsGroup from "./button";
import "./dialogbox.css";
function DialogBox({ state, content, handleConfirmBtn }) {
  const dispatch = useDispatch();
  const handleCancelBtn = () => {
    dispatch(closeModal());
  };
  const isSendingPostRequest = useSelector(
    (state) => state.posts.isSendingRequest
  );
  const handleIcon = () => {
    if (state === "warning")
      return <AiFillWarning style={{ color: "var(--warining)" }} />;
    else if (state === "success");
    return <MdOutlineDone style={{ color: "var(--success)" }} />;
  };
  return (
    <div className="dialog-container">
      <div className="dialog-header">{handleIcon()}</div>
      <div className="dialog-body">
        <p>{content}</p>
      </div>
      <div className="dialog-footer">
        <ButtonsGroup
          label="cancel"
          onClick={handleCancelBtn}
          variant="danger"
        />
        <ButtonsGroup
          label="confirm"
          variant="success"
          onClick={handleConfirmBtn}
          isLoading={isSendingPostRequest}
          disabled={isSendingPostRequest}
        />
      </div>
    </div>
  );
}

export default DialogBox;
