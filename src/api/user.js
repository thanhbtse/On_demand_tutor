import axiosClient from "../config/axiosClient";

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

export {getUserList,createUser,updateUser,deleteUser}
