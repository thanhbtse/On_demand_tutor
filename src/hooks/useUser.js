import { create } from "zustand";
import { createUser, deleteUser, getUserList, updateUser } from "../api/user";
import { message } from "antd";

const useUser = create((set) => ({
    userList: [],
    isloadingUserList: false,
    userTotalElements: "",
    fetchUserList: async () => {
      try {
        set({ isloadingUserList: true });
        const response = await getUserList();
        if (response && response.status === 200) {
          set({ userList: response.data || [] });
          set({ userTotalElements: response?.data || "" });
        }
        set({ isloadingUserList: false });
      } catch (error) {
        set({ isloadingUserList: false });
        console.error("Error fetching data:", error);
      }
    },
    createNewUser: async (values) => {
      try {
        const res = await createUser(values);
        if (res && res.status === 200) {
          message.success("User Created")
        }
      } catch (err) {
        console.log("Error creating", err);
      }
    },
    updateExistingUser: async (id,values) => {
      try {
        const res = await updateUser(id,values);
        if (res && res.status === 200) {
          message.success("User Updated")
        }
      } catch (err) {
        console.log("Error creating", err);
      }
    },
    deleteExistingUser: async (id) => {
      try {
        const res = await deleteUser(id);
        if (res && res.status === 200) {
          message.success("User Updated")
        }
      } catch (err) {
        console.log("Error creating", err);
      }
    },
}));

export default useUser;