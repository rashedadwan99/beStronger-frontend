import axios from "axios";
import { Toast } from "../components/common/Toast";
import { getJwt } from "./authService";
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    Toast("error", "An unexpected error occurrred.");
  }
  return Promise.reject(error);
});

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export const getTokenHeaders = () => {
  const token = getJwt();
  if (token) {
    const headers = {
      "x-auth-token": token,
    };
    return headers;
  }
  return;
};
