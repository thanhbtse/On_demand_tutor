import axiosClient from "../config/axiosClient";

const updateProfile = (id, data) => {
    return axiosClient.put(`/user/profile/${id}`,data);
};

const changePassword = (id, value) => {
    return axiosClient.put(`/user/password/${id}`,value);
};
export  { updateProfile, changePassword };