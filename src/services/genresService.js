import http from "./httpService";
import config from "../config.json";
const apiEndPoint = "http://localhost:3900" + "/api/genres";
export const getGenres = async () => {
  const { data: posts } = await http.get(apiEndPoint);
  return posts;
};
