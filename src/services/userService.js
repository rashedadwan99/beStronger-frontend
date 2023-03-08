import { http } from "./httpService";
import config from "../config.json";
import { getJwt, userKey } from "./authService";

const apiEndpoint = config.apiUrl + "/users";

export const register = async (user) => {
  return http.post(apiEndpoint, user);
};

export const sendFollowRequest = (reciverUserId) => {
  return http.put(
    apiEndpoint + `/${reciverUserId}/follow`,
    {},
    { headers: { "x-auth-token": getJwt() } }
  );
};
export const sendUnFollowRequest = (reciverUserId) => {
  return http.put(
    apiEndpoint + `/${reciverUserId}/unfollow`,
    {},
    { headers: { "x-auth-token": getJwt() } }
  );
};

export const getFollowingList = (userId) => {
  return http.get(apiEndpoint + `/${userId}/followingList`, {
    headers: { "x-auth-token": getJwt() },
  });
};
export const getFollowersList = (userId) => {
  return http.get(apiEndpoint + `/${userId}/followersList`, {
    headers: { "x-auth-token": getJwt() },
  });
};

export const blockUser = (userId) => {
  return http.put(apiEndpoint + `/${userId}/block`, {
    headers: { "x-auth-token": getJwt() },
  });
};
export const unBlockUser = (userId) => {
  return http.put(apiEndpoint + `/${userId}/unBlock`, {
    headers: { "x-auth-token": getJwt() },
  });
};

export const getBlockList = async (userId) => {
  return http.get(apiEndpoint + `/${userId}/blockList`, {
    headers: { "x-auth-token": getJwt() },
  });
};
export const getUser = (userId) => {
  return http.get(apiEndpoint + `/${userId}/getUser`, {
    headers: { "x-auth-token": getJwt() },
  });
};

export const searchUsers = (searchQuery) => {
  return http.get(apiEndpoint + `?searchQuery=${searchQuery}`, {
    headers: { "x-auth-token": getJwt() },
  });
};

export const getPublicUsers = () => {
  return http.get(apiEndpoint + "/publicUsers", {
    headers: { "x-auth-token": getJwt() },
  });
};

export const editUserInfo = (name, picture) => {
  return http.put(
    apiEndpoint + "/editUserInfo",
    {},
    {
      headers: { "x-auth-token": getJwt() },
      params: {
        name,
        picture,
      },
    }
  );
};

export const updateUserInLocalStorage = (data) => {
  const userInfo = JSON.parse(localStorage.getItem(userKey));
  let updatedUser = JSON.stringify({
    user: data,
    token: userInfo.token,
  });
  updatedUser = localStorage.setItem(userKey, updatedUser);
};

export const changePassword = (data) => {
  return http.put(
    apiEndpoint + "/changepassword",

    data,

    {
      headers: { "x-auth-token": getJwt() },
    }
  );
};
