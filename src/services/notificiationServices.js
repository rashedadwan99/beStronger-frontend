import { http } from "./httpService";
import config from "../config.json";
import { getJwt } from "./authService";
const apiEndPoint = config.apiUrl + "/notifications";
export const getUserNotifications = () => {
  return http.get(apiEndPoint, { headers: { "x-auth-token": getJwt() } });
};
export const sendNotifications = (message, reciverId, targetId) => {
  return http.post(
    apiEndPoint,
    {
      reciverId,
      message,
      targetId,
    },
    { headers: { "x-auth-token": getJwt() } }
  );
};

export const deleteNotification = (senderId, targetId) => {
  return http.delete(apiEndPoint, {
    headers: { "x-auth-token": getJwt() },
    params: { senderId, targetId },
  });
};
