import http from "./httpService";
import config from "../config.json";
const apiEndpoint = config.apiUrl + "/products";
export const getAllProducts = () => {
  return http.get(apiEndpoint);
};
