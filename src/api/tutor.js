import axiosClient from "../config/axiosClient";

const getTutorDetail = (id) => {
    return axiosClient.get(`/tutors/${id}`);
}

const getTutorList = () => {
    return axiosClient.get("/tutors");
}
const createTutor = (values) => {
    return axiosClient.post("/tutors", values);
}

const updateTutor = (id, values) => {
    return axiosClient.put(`/tutors/${id}`, values);
}

const deleteTutor = (id) => {
    return axiosClient.delete(`/tutors/${id}`);
}

const getTurtorbyuserId = (id) => {
    return axiosClient.get(`/tutors/turtor-detail/${id}`);
}


export {getTutorList,createTutor,updateTutor,deleteTutor, getTutorDetail, getTurtorbyuserId}
