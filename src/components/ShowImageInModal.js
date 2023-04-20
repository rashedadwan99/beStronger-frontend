import React from "react";
import "./showimageinmodal.css";

function ShowImageInModal({ src, alt }) {
  return (
    <div className="modal-image-container">
      <img src={src} alt={alt} />
    </div>
  );
}

export default ShowImageInModal;
