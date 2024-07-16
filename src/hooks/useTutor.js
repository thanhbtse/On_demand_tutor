import { create } from "zustand";
import { message } from "antd";
import { createTutor, deleteTutor, getTutorList, updateTutor } from "../api/tutor";

const useTutor = create((set) => ({
    tutorList: [],
    isloadingUserList: false,
    userTotalElements: "",
    fetchTutorList: async () => {
      try {
        set({ isloadingUserList: true });
        const response = await getTutorList();
        if (response && response.status === 200) {
          set({ tutorList: response.data || [] });
          set({ userTotalElements: response?.data || "" });
        }
        set({ isloadingUserList: false });
      } catch (error) {
        set({ isloadingUserList: false });
        console.error("Error fetching data:", error);
      }
    },
    createNewTutor: async (values) => {
      try {
        const res = await createTutor(values);
        if (res && res.status === 200) {
          message.success("Tutor Created")
        }
      } catch (err) {
        console.log("Error creating", err);
      }
    },
    updateExistingTutor: async (id,values) => {
      try {
        const res = await updateTutor(id,values);
        if (res && res.status === 200) {
          message.success("Tutor Updated")
        }
      } catch (err) {
        console.log("Error creating", err);
      }
    },
    deleteExistingTutor: async (id) => {
      try {
        const res = await deleteTutor(id);
        if (res && res.status === 200) {
          message.success("Tutor Deleted")
        }
      } catch (err) {
        console.log("Error creating", err);
      }
    },
}));

export default useTutor;