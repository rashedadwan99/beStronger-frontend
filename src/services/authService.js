import jwtDecode from "jwt-decode";
import { http } from "./httpService";
import config from "../config.json";
const apiEndpoint = config.apiUrl + "/auth";
export const userKey = "user";
export const login = (data) => {
  return http.post(apiEndpoint, data);
};
export const loginWithJwt = (data) => {
  return localStorage.setItem(userKey, JSON.stringify(data));
};
export const logout = () => {
  localStorage.removeItem(userKey);
};
export const getCurrentUser = () => {
  const data = JSON.parse(localStorage.getItem(userKey));
  if (data) return data.user;
  return null;
};

export const getJwt = () => {
  const data = JSON.parse(localStorage.getItem(userKey));
  if (data) return data.token;
  return null;
};
// http.setJwt(getJwt());
