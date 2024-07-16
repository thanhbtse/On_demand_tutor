import axios from "axios";
import Cookies from "js-cookie";

const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api",
});

axiosClient.interceptors.request.use(async (config) => {
  const access_token = await Cookies.get("token");
  console.log("check token", access_token);
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
    console.log("check header", config.headers);
  }
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  } else {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

export default axiosClient;
