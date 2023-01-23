import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { openModal } from "../redux/actions/modalActions";
import { disLikeAction, likeAction } from "../redux/actions/postActions";
import CommentsContainer from "./CommentsContainer";
import PostFans from "./PostFans";
function LikeAndComment({ post }) {
  const user = useSelector((state) => state.user.value);
  const socket = useSelector((state) => state.socket);
  const isSendingRequest = useSelector((state) => state.posts.isSendingRequest);
  const posts = useSelector((state) => state.posts.value);
  const indexOfPost = posts.indexOf(post);
  const postStatistics = [
    {
      label: "like",
      icon: <AiOutlineLike />,
      number: post.numOfLikes,
    },
    {
      label: "comment",
      icon: <FaRegComment />,
      number: post.numOfComments,
    },
  ];

  const dispatch = useDispatch();
  const handleClickComment = () => {
    dispatch(
      openModal({
        title: `${post.publisher.name}'s post`,
        Component: <CommentsContainer post={post} />,
        className: "comments-modal",
      })
    );
  };
  const handleClickLike = async () => {
    if (isSendingRequest) return;

    if (!posts[indexOfPost].likes.includes(user._id)) {
      dispatch(likeAction(post, socket, user));
    } else {
      dispatch(disLikeAction(post, socket, user));
    }
  };

  const handleShowPostFans = async (post) => {
    if (!post.numOfLikes) return;
    dispatch(
      openModal({
        title: `${post.publisher.name}'s post fans`,
        Component: <PostFans postId={post._id} />,
      })
    );
  };
  return (
    <div className="like-and-comment">
      {postStatistics.map((postStatistic, index) => {
        return (
          <div
            className={`post-statistic ${
              posts[indexOfPost].likes.includes(user._id) && "is-liked"
            }`}
            key={index}
          >
            <p
              onClick={() =>
                postStatistic.label === "like"
                  ? handleClickLike()
                  : handleClickComment()
              }
              className={postStatistic.label}
            >
              {postStatistic.icon}
            </p>
            <p
              onClick={
                postStatistic.label === "like"
                  ? () => handleShowPostFans(post)
                  : () => handleClickComment()
              }
              className={
                postStatistic.label === "like" && post.numOfLikes
                  ? "num-of-likes"
                  : ""
              }
            >
              {postStatistic.label === "like" && postStatistic.number}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default LikeAndComment;
