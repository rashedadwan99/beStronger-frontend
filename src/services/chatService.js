import { http } from "./httpService";
import config from "../config.json";
import { getJwt } from "./authService";
const apiEndpoint = config.apiUrl + "/chat";

export const getAllChats = () => {
  return http.get(apiEndpoint, { headers: { "x-auth-token": getJwt() } });
};

export const createChat = (users, isGroupChat) => {
  return http.post(
    apiEndpoint,
    { users, isGroupChat },
    { headers: { "x-auth-token": getJwt() } }
  );
};
