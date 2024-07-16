import axiosClient from "../config/axiosClient";

const login = (email, password) => {
  return axiosClient.post("/auth/login", { email, password });
};

const register = (name, email, password, role) => {
  return axiosClient.post("/auth/register", { name, email, password, role });
};

const getInfoUser = () => {
  return axiosClient.get("/api/authen/me"); 
};

export { login,  register, getInfoUser};
