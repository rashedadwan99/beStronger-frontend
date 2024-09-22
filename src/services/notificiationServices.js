import { http } from "./httpService";
import config from "../config.json";
import { getJwt } from "./authService";
const apiEndPoint = config.apiUrl + "/notifications";
export const getUserNotifications = () => {
  return http.get(apiEndPoint, { headers: { "x-auth-token": getJwt() } });
};
export const sendNotifications = (
  message,
  reciverId,
  targetId,
  postId,
  commentId,
  followId
) => {
  return http.post(
    apiEndPoint,
    {
      reciverId,
      message,
      targetId,
      postId,
      commentId,
      followId,
    },
    { headers: { "x-auth-token": getJwt() } }
  );
};

export const deleteNotification = (targetId, commentId, followerId, postId) => {
  return http.delete(apiEndPoint + "/mobile/deleteFromSender", {
    headers: { "x-auth-token": getJwt() },
    params: { targetId, commentId, followerId, postId },
  });
};

export const readNotification = (notificationId) => {
  return http.put(
    apiEndPoint + `/${notificationId}/readNotification`,
    {},
    {
      headers: { "x-auth-token": getJwt() },
    }
  );
};
