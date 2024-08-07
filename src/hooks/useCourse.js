import { create } from "zustand";
import {  } from "../api/user";
import { message } from "antd";
import { createCourse, deleteCourse, getCourseList, updateCourse } from "../api/course";

const useCourse = create((set) => ({
    courseList: [],
    isloadingUserList: false,
    userTotalElements: "",
    fetchCourseList: async () => {
      try {
        set({ isloadingUserList: true });
        const response = await getCourseList();
        if (response && response.status === 200) {
          set({ courseList: response.data || [] });
          set({ userTotalElements: response?.data || "" });
        }
        set({ isloadingUserList: false });
      } catch (error) {
        set({ isloadingUserList: false });
        console.error("Error fetching data:", error);
      }
    },
    createNewCourse: async (values) => {
      try {
        const res = await createCourse(values);
        if (res && res.status === 200) {
          message.success("Course Created")
        }
      } catch (err) {
        console.log("Error creating", err);
      }
    },
    updateExistingCourse: async (id,values) => {
      try {
        const res = await updateCourse(id,values);
        if (res && res.status === 200) {
          message.success("Course Updated")
        }
      } catch (err) {
        console.log("Error creating", err);
      }
    },
    deleteExistingCourse: async (id) => {
      try {
        const res = await deleteCourse(id);
        if (res && res.status === 200) {
          message.success("Course Deleted")
        }
      } catch (err) {
        console.log("Error creating", err);
      }
    },
}));

export default useCourse;