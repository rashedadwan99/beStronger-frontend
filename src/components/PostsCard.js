import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/actions/modalActions";
import { handleDeletePost } from "../redux/actions/postActions";
import PublisherInfo from "./common/PublisherInfo";
import LikeAndComment from "./LikeAndComment";
import PostForm from "./PostForm";
import PostOrCommentContent from "./PostOrCommentContent";

function PostsCard() {
  const posts = useSelector((state) => state.posts.value);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const deletePostHandler = (postId) => {
    dispatch(handleDeletePost(postId));
  };
  const postOptions = [
    {
      label: "delete",
      icon: <AiTwotoneDelete />,
      onClick: (post) => deletePostHandler(post._id),
    },
    {
      label: "edit",
      icon: <FaEdit />,
      onClick: (post) =>
        dispatch(
          openModal({
            title: "edit post",
            Component: <PostForm isEditForm={true} post={post} />,
          })
        ),
    },
  ];
  return posts.map((post) => {
    return (
      <article className="post-card" key={post._id}>
        <PublisherInfo
          data={post}
          publisher={post.publisher}
          options={postOptions}
          showDots={post.publisher._id === user._id}
        />
        <PostOrCommentContent data={post} />
        <LikeAndComment post={post} />
      </article>
    );
  });
}

export default PostsCard;
