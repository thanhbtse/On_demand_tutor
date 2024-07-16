import axiosClient from "../config/axiosClient";

const updateProfile = (id, data) => {
    return axiosClient.put(`/user/profile/${id}`,data);
};

const changePassword = (id, value) => {
    return axiosClient.put(`/user/password/${id}`,value);
};

const getUserList = () => {
    return axiosClient.get("/admin/users");
}
const createUser = (values) => {
    return axiosClient.post("/admin/users", values);
}

const updateUser = (id, values) => {
    return axiosClient.put(`/admin/users/${id}`, values);
}

const deleteUser = (id) => {
    return axiosClient.delete(`/admin/users/${id}`);
}

export {getUserList,createUser,updateUser,deleteUser, updateProfile, changePassword}
