import http from "./httpService";
import config from "../config.json";
const apiEndPoint = config.apiUrl + "/hashtags";
export const getHashtags = () => {
  return http.get(apiEndPoint);
};
export const getSpecificHashtag = (hashtagId) => {
  return http.get(apiEndPoint + `/${hashtagId}/specificHashtag`);
};
export const getTopHashtags = () => {
  return http.get(apiEndPoint + "/topHashtags");
};
