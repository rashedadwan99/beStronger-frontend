import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addCommentAction } from "../redux/actions/postActions";
import { addComment } from "../services/postService";
import Button from "./common/button";
import RenderInputField from "./common/Forms";

function CommentCreation({ post }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const isSendingRequest = useSelector((state) => state.posts.isSendingRequest);
  const submitComment = async () => {
    if (!comment.length) {
      return;
    }
    dispatch(addCommentAction(post, comment));
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
