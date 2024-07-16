import axiosClient from "../config/axiosClient";

const login = (email, password) => {
  return axiosClient.post("/auth/login", { email, password });
};

const register = (name, email, password, role, image) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("role", role);
  if (image) formData.append("image", image);

  return axiosClient.post("/auth/register", formData, );
};
const getInfoUser = () => {
  return axiosClient.get("/api/authen/me"); 
};

export { login,  register, getInfoUser};
