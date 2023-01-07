import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostsAction,
  getProfilePosts,
  NO_POSTS,
} from "../../redux/actions/postActions";
import { useHistory, useRouteMatch } from "react-router-dom";
import PostsCard from "../PostsCard";
import NoPosts from "../NoPosts";

import "./posts.css";

function Posts() {
  const { location } = useHistory();
  const { params } = useRouteMatch();

  const user = useSelector((state) => state.user.value);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const noPosts = useSelector((state) => state.posts.noPosts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!params.userId && location.pathname !== "/posts")
      getPostsHandler(false, true, user._id);
    if (location.pathname === "/posts") getPostsHandler(true, false);
    if (location.pathname !== "/posts" && params.userId)
      getPostsHandler(false, true, params.userId);
  }, [params.userId, location.pathname]);

  async function getPostsHandler(publicPosts, profilePosts, userId) {
    if (profilePosts) {
      dispatch(getProfilePosts(userId));
    }
    if (publicPosts) {
      dispatch(getPostsAction());
    }
  }

  return (
    <div className="posts-container">
      {!isLoading ? <PostsCard /> : <p>loading...</p>}
      {noPosts && <NoPosts />}
    </div>
  );
}

export default Posts;
