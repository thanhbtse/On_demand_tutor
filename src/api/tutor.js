import axiosClient from "../config/axiosClient";

const getTutorDetail = (id) => {
    return axiosClient.get(`/tutor/${id}`);
}
export { getTutorDetail };