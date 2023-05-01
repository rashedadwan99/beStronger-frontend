import { http } from "./httpService";
import config from "../config.json";
import { getJwt } from "./authService";
const apiEndpoint = config.apiUrl + "/message";
export const getMessages = (chatId) => {
  return http.get(apiEndpoint + `/${chatId}/getMessages`, {
    headers: { "x-auth-token": getJwt() },
  });
};

export const sendMessage = (chatId, content) => {
  return http.post(
    apiEndpoint,
    { chatId, content },
    {
      headers: { "x-auth-token": getJwt() },
    }
  );
};
