import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentAction } from "../../redux/actions/commentsActions";

import Button from "../common/button";
import RenderInputField from "../common/Forms";

function CommentCreation({ post }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const socket = useSelector((state) => state.socket);
  const [comment, setComment] = useState("");
  const isSendingRequest = useSelector(
    (state) => state.comments.isSendingCommentRequest
  );
  const submitComment = async () => {
    if (!comment.length) {
      return;
    }

    dispatch(addCommentAction(post, comment, socket, user));
    if (!isSendingRequest) setComment("");
  };
  return (
    <div className="comment-creation">
      <RenderInputField
        type="text"
        name="comment"
        value={comment}
        data={comment}
        setData={setComment}
        placeholder="write a comment"
      />
      <Button
        label="comment"
        onClick={submitComment}
        disabled={isSendingRequest}
      />
    </div>
  );
}

export default CommentCreation;
