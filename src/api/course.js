import axiosClient from "../config/axiosClient";

const getCourseList = () => {
    return axiosClient.get("/courses");
}
const createCourse = (values) => {
    return axiosClient.post("/courses", values);
}

const updateCourse = (id, values) => {
    return axiosClient.put(`/courses/${id}`, values);
}

const deleteCourse = (id) => {
    return axiosClient.delete(`/courses/${id}`);
}

export {getCourseList,createCourse,updateCourse,deleteCourse}
