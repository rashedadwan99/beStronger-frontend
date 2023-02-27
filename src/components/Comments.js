import React, { useEffect, useRef, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCommentHandler,
  getPostCommentsHandler,
} from "../redux/actions/postActions";
import UserNameAndImage from "./common/UserNameAndImage";
import PostOrCommentContent from "./PostOrCommentContent";

function Comments({ post }) {
  const ref = useRef();
  const user = useSelector((state) => state.user.value);
  const posts = useSelector((state) => state.posts.value);
  const socket = useSelector((state) => state.socket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostCommentsHandler(post));
  }, []);
  const indexOfPost = posts.indexOf(post);
  const commentOptions = [
    {
      label: "delete",
      icon: <AiTwotoneDelete />,
      onClick: (comment) => {
        dispatch(deleteCommentHandler(post, comment, user, socket));
      },
    },
  ];

  return (
    <div className="comments-list" ref={ref}>
      {posts[indexOfPost].comments &&
        posts[indexOfPost].comments.map((comment) => {
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
        })}
    </div>
  );
}

export default Comments;
