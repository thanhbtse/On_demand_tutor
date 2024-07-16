import { create } from "zustand";
import { getTutor, getTutorDetail } from "../api/tutor";

const useTutor = create((set) => ({
  tutorList: [],
  isLoadingTutorList: false,
  fetchTutorList: async () => {
    try {
      set({ isLoadingTutorList: true });
      const response = await getTutor();
      if (response && response.status === 200) {
        set({ tutorList: response.data || [] });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      set({ isLoadingTutorList: false });
    }
  },
  tutorDetail: {},
  isLoadingTutorDetail: false,
  fetchTutorDetail: async (id) => {
    try {
      set({ isLoadingTutorDetail: true });
      const response = await getTutorDetail(id);
      console.log("API Response:", response); // Log dữ liệu từ API
      if (response && response.status === 200) {
        set({ tutorDetail: response.data || {} });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      set({ isLoadingTutorDetail: false });
    }
  },
}));

export default useTutor;
