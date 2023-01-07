import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/profiles";

export const getMyProfileInfo = () => {
  return http.get(apiEndpoint + "/myprofile");
};

export const getAnotherProfileInfo = (userId) => {
  return http.get(apiEndpoint + `/${userId}/anotherProfile`);
};

export const changeProfileImage = (profileImage) => {
  const formData = new FormData();
  formData.append("profileImage", profileImage);
  return http.put(apiEndpoint + `/changeProfileImage`, formData, {
    headers: {
      "Content-Type": "",
    },
  });
};
export const editProfileInfo = (profileId, data) => {
  return http.put(apiEndpoint + `/${profileId}/editInfo`, data);
};
export const changeNameBio = (profileId, data) => {
  return http.put(apiEndpoint + `/${profileId}/editInfo`, data);
};
export const sendFollow = (reciverProfileId) => {
  return http.put(apiEndpoint + `/${reciverProfileId}/follow`);
};
export const sendUnfollow = (reciverProfileId) => {
  return http.put(apiEndpoint + `/${reciverProfileId}/unfollow`);
};
export const getFollowsUsers = (profileId) => {
  return http.get(apiEndpoint + `/${profileId}/followersList`);
};

export const getFollowingUsers = (profileId) => {
  return http.get(apiEndpoint + `${profileId}/followingList`);
};
export const getCurrentUserName = () => {
  return http.get(apiEndpoint + `/currentNameOfUser`);
};
export const getPublicProfiles = () => {
  return http.get(apiEndpoint + "/publicProfiles");
};
export const search = (searchQuery) => {
  return http.post(apiEndpoint + "/search", { searchQuery });
};

export const handleBlockUser = (profileId) => {
  return http.put(apiEndpoint + `/${profileId}/block`);
};

export const handleUnblockUser = (profileId) => {
  return http.put(apiEndpoint + `/${profileId}/unBlock`);
};

export const getFollowersList = (profileId) => {
  return http.get(apiEndpoint + `/${profileId}/followersList`);
};

export const getFollowingList = (profileId) => {
  return http.get(apiEndpoint + `/${profileId}/followingList`);
};

export const getBlockList = (profileId) => {
  return http.get(apiEndpoint + `/${profileId}/blockList`);
};
