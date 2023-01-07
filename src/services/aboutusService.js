import http from "./httpService";
import config from "../config.json";
const apiEndPoint = config.apiUrl + "/aboutus";

export const getAboutUsInfo = () => {
  return http.get(apiEndPoint);
};
