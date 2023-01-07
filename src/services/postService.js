import http from "./httpService";
import config from "../config.json";
import { getJwt } from "./authService";
const apiEndPoint = config.apiUrl + "/posts";
export const getPosts = () => {
  return http.get(apiEndPoint, {
    headers: { "x-auth-token": getJwt() },
  });
};
export const getOnePost = (postId) => {
  return http.get(apiEndPoint + `/${postId}/onePost`, {
    headers: { "x-auth-token": getJwt() },
  });
};
export const getUserPosts = (userId) => {
  return http.get(apiEndPoint + `/${userId}/userPosts`, {
    headers: { "x-auth-token": getJwt() },
  });
};
export const createPost = (post) => {
  return http.post(apiEndPoint, post, {
    headers: { "x-auth-token": getJwt() },
  });
};
export const deletePost = (postId) => {
  return http.delete(apiEndPoint + `/${postId}/deletePost`, {
    headers: { "x-auth-token": getJwt() },
  });
};
export const editPost = (postId, { content, picture }) => {
  return http.put(
    apiEndPoint + `/${postId}/updatePostContent`,
    {
      content,
      picture,
    },
    { headers: { "x-auth-token": getJwt() } }
  );
};
export const onClickLike = (postId) => {
  return http.put(
    apiEndPoint + `/${postId}/like`,
    {},
    { headers: { "x-auth-token": getJwt() } }
  );
};

export const onClickDisLike = (postId) => {
  return http.put(
    apiEndPoint + `/${postId}/disLike`,
    {},
    { headers: { "x-auth-token": getJwt() } }
  );
};

export const getPostFans = (postId) => {
  return http.get(apiEndPoint + `/${postId}/postFans`, {
    headers: { "x-auth-token": getJwt() },
  });
};

export const getPostComments = (postId) => {
  return http.get(apiEndPoint + `/${postId}/getComments`, {
    headers: { "x-auth-token": getJwt() },
  });
};
export const addComment = (postId, content) => {
  return http.put(
    apiEndPoint + `/${postId}/addComment`,
    {
      content,
    },
    { headers: { "x-auth-token": getJwt() } }
  );
};
export const deleteComment = (postId, commentId) => {
  return http.put(
    apiEndPoint + `/${postId}/${commentId}/deleteComment`,
    {},
    { headers: { "x-auth-token": getJwt() } }
  );
};
export const getPostsWithHashtag = (tagId) => {
  return http.get(apiEndPoint + `/${tagId}/hashtags`, {
    headers: { "x-auth-token": getJwt() },
  });
};
