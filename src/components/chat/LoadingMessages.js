import React from "react";
import { Spinner } from "react-bootstrap";

function LoadingMessages() {
  return (
    <div className="loading-messages-container">
      <Spinner />
    </div>
  );
}

export default LoadingMessages;
