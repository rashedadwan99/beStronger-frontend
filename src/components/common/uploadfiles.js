import React from "react";
import Upload from "../icons/upload";
import "./uploadfiles.css";
function Uploadfiles({ ...rest }) {
  return (
    // <div className="center">
    <div className="dropzone">
      <Upload />
      <input type="file" className="upload-input" {...rest} accept="image" />
    </div>
  );
}

export default Uploadfiles;
