import { create } from "zustand";
import { getUserList } from "../api/user";

const useUser = create((set) => ({
    userList: [],
    isloadingUserList: false,
    userTotalElements: "",
    fetchUserList: async () => {
      try {
        set({ isloadingUserList: true });
        const response = await getUserList();
        if (response && response.status === 200) {
          set({ userList: response.data.data || [] });
          set({ userTotalElements: response?.data?.data || "" });
        }
        set({ isloadingUserList: false });
      } catch (error) {
        set({ isloadingUserList: false });
        console.error("Error fetching data:", error);
      }
    },
}));

export default useUser;