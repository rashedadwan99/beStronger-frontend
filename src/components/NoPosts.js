import React from "react";
import noPosts from "./images/noPosts.svg";
function NoPosts() {
  return (
    <div className="no-posts">
      <img src={noPosts} alt="no-posts" />
    </div>
  );
}

export default NoPosts;
