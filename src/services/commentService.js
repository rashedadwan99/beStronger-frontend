import { http } from "./httpService";
import config from "../config.json";
import { getJwt } from "./authService";
const apiEndpoint = config.apiUrl + "/comment";
export const getComments = (postId) => {
  return http.get(apiEndpoint + `/${postId}/getComments`, {
    headers: { "x-auth-token": getJwt() },
  });
};

export const addComment = (postId, content) => {
  return http.post(
    apiEndpoint + `/${postId}/addComment`,
    { content },
    {
      headers: { "x-auth-token": getJwt() },
    }
  );
};
export const deleteComment = (commentId) => {
  return http.delete(apiEndpoint + `/${commentId}/deleteComment`, {
    headers: { "x-auth-token": getJwt() },
  });
};
