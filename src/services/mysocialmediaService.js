import http from "./httpService";
import config from "../config.json";
const apiEndPoint = config.apiUrl + "/socialMedia";
export const getAllMySocialMedia = () => {
  return http.get(apiEndPoint);
};
export const getMySocialMediaByName = (name) => {
  return http.get(apiEndPoint + `/${name}`);
};
