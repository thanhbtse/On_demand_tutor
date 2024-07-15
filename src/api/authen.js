import axiosClient from "@/config/axiosClient";

const login = (email, password) => {
  return axiosClient.post("/auth/login", { email, password });
};

const register = (email, password, name) => {
  return axiosClient.post("/auth/register", { name, email, password, role });
};



export { login,  register};
