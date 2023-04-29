import React, { useEffect, useRef, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCommentAction,
  getCommentsAction,
  resetCommentsAction,
} from "../redux/actions/commentsActions";
import { deleteCommentHandler } from "../redux/actions/postActions";

import UserNameAndImage from "./common/UserNameAndImage";
import PostOrCommentContent from "./PostOrCommentContent";
import UserListSkeleton from "./skeleton/UserListSkeleton";

function Comments({ post }) {
  const comments = useSelector((state) => state.comments.value);
  const user = useSelector((state) => state.user.value);

  const socket = useSelector((state) => state.socket);
  const isLoadingComments = useSelector(
    (state) => state.comments.isLoadingComments
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentsAction(post._id));
    return () => dispatch(resetCommentsAction());
  }, []);

  const commentOptions = [
    {
      label: "delete",
      icon: <AiTwotoneDelete />,
      onClick: (comment) => {
        dispatch(deleteCommentAction(post, comment._id, socket, user));
      },
    },
  ];

  return (
    <div className="comments-list">
      {!isLoadingComments ? (
        comments.map((comment) => {
          return (
            <div className="comment-card" key={comment._id}>
              <UserNameAndImage
                data={comment}
                publisher={comment.commenter}
                options={commentOptions}
                showDots={
                  post.publisher._id === user._id ||
                  comment.commenter._id === user._id
                }
              />
              <PostOrCommentContent data={comment} />
            </div>
          );
        })
      ) : (
        <UserListSkeleton number={1} />
      )}
    </div>
  );
}

export default Comments;
