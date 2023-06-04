import React from "react";
import CommentCreation from "./CommentCreation";
import Comments from "./Comments";
import "./commentscontainer.css";
function CommentsContainer({ post }) {
  return (
    <div className="comments-container">
      <div className="scrollable-comments">
        <Comments post={post} />
      </div>
      <CommentCreation post={post} />
    </div>
  );
}

export default CommentsContainer;
