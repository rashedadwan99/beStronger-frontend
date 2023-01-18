import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import {
  getPostsAction,
  getProfilePosts,
  getOnlyOnePost,
} from "../../redux/actions/postActions";
import PostsCard from "../PostsCard";
import NoPosts from "../NoPosts";
import PostSkeleton from "../skeleton/PostSkeleton";

import "./posts.css";

function Posts() {
  const { location } = useHistory();
  const { params, path } = useRouteMatch();

  const user = useSelector((state) => state.user.value);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const noPosts = useSelector((state) => state.posts.noPosts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !params.userId &&
      location.pathname !== "/posts" &&
      path !== "/posts/:postId"
    )
      dispatch(getProfilePosts(user._id));
    if (location.pathname === "/posts") dispatch(getPostsAction());
    if (location.pathname !== "/posts" && params.userId)
      dispatch(getProfilePosts(params.userId));
    if (path === "/posts/:postId" && params.postId) {
      dispatch(getOnlyOnePost(params.postId));
    }
  }, [params.userId, location.pathname]);

  return (
    <div className="posts-container" id="posts-container">
      {!isLoading ? <PostsCard /> : <PostSkeleton />}
      {noPosts && <NoPosts />}
    </div>
  );
}

export default Posts;
