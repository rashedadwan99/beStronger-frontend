import { http } from "./httpService";

import config from "../config.json";
const apiEndPoint = config.apiUrl + "/socialMedia";
export const getSocialMediaService = async () => {
  return http.get(apiEndPoint);
};
