import axiosClient from "../config/axiosClient";

const getUserList = () => {
    return axiosClient.get("/admin/users");
}

export {getUserList}
