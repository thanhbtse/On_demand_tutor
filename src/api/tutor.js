import axiosClient from "../config/axiosClient";

const getTutorDetail = (id) => {
  return axiosClient.get(`/tutors/${id}`);
};

const getTutor = () => {
  return axiosClient.get(`/tutors`);
};

export { getTutor, getTutorDetail };
