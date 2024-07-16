import { create } from "zustand";
import { message } from "antd";
import {
  createTutor,
  deleteTutor,
  getTutorDetail,
  getTutorList,
  updateTutor,
  getTurtorbyuserId,
} from "../api/tutor";
import TurtorDetail from "../section/Turtor/turtorDetail";
import { getCourseByTutor } from "../api/course";

const useTutor = create((set) => ({
  tutorLists: [],
  isloadingUserList: false,
  userTotalElements: "",
  fetchTutorLists: async () => {
    try {
      set({ isloadingUserList: true });
      const response = await getTutorList();
      if (response && response.status === 200) {
        set({ tutorLists: response.data || [] });
        set({ userTotalElements: response?.data || "" });
      }
      set({ isloadingUserList: false });
    } catch (error) {
      set({ isloadingUserList: false });
      console.error("Error fetching data:", error);
    }
  },
  tutorDetail: {},
  isLoadingTutorDetail: false,
  fetchTutorDetail: async (id) => {
    try {
      set({ isLoadingTutorDetail: true });
      const response = await getTutorDetail(id);
      if (response && response.status === 200) {
        set({ tutorDetail: response.data || {} });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      set({ isLoadingTutorDetail: false });
    }
  },
  createNewTutor: async (values) => {
    try {
      const res = await createTutor(values);
      if (res && res.status === 200) {
        message.success("Tutor Created");
      }
    } catch (err) {
      console.log("Error creating", err);
    }
  },
  updateExistingTutor: async (id, values) => {
    try {
      const res = await updateTutor(id, values);
      if (res && res.status === 200) {
        message.success("Tutor Updated");
      }
    } catch (err) {
      console.log("Error creating", err);
    }
  },
  deleteExistingTutor: async (id) => {
    try {
      const res = await deleteTutor(id);
      if (res && res.status === 200) {
        message.success("Tutor Deleted");
      }
    } catch (err) {
      console.log("Error creating", err);
    }
  },
  TurtorDetail: {},
  fetchTurtorbyuserId: async (id) => {
    try {
      const response = await getTurtorbyuserId(id);
      if (response && response.status === 200) {
        set({ TurtorDetail: response.data || {} });
      }
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}));

export default useTutor;
