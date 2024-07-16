import { create } from "zustand";
import {
  updateProfile,
  changePassword,
  createUser,
  deleteUser,
  getUserList,
  updateUser,
  getUserById,
  getTurtorList,
} from "../api/user";
import { notification } from "antd";
const useUser = create((set) => ({
  fetchUpdateUser: async (id, data) => {
    try {
      const res = await updateProfile(id, data);
      console.log("check data", data);
    } catch (err) {
      console.log("Error fetching userInfo", err);
    }
  },

  fectchChangePassword: async (id, value) => {
    try {
      const res = await changePassword(id, value);
      console.log("check res", res);
      if (res && res.status === 200) {
        notification.success({
          message: "Success",
          description: "Password updated successfully",
          duration: 1,
        });
      }
      return res;
    } catch (erro) {
      console.log("error", erro);
      notification.error({
        message: "Update Failed",
        description: "Failed to update password",
        duration: 1,
      });
      throw erro;
    }
  },

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
        message.success("User Created");
      }
    } catch (err) {
      console.log("Error creating", err);
    }
  },
  updateExistingUser: async (id, values) => {
    try {
      const res = await updateUser(id, values);
      if (res && res.status === 200) {
        message.success("User Updated");
      }
    } catch (err) {
      console.log("Error creating", err);
    }
  },
  deleteExistingUser: async (id) => {
    try {
      const res = await deleteUser(id);
      if (res && res.status === 200) {
        message.success("User Updated");
      }
    } catch (err) {
      console.log("Error creating", err);
    }
  },
  userDetails: {},
  fetchUserById: async (id) => {
    try {
      const response = await getUserById(id);
      if (response && response.status === 200) {
        set({ userDetails: response.data || {} });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  tutorLists: [],
  isloadingTutorList: false,
  fetchTutorLists: async () => {
    try {
      set({ isloadingTutorList: true });
      const response = await getTurtorList();
      if (response && response.status === 200) {
        set({ tutorLists: response.data || [] });
        set({ isloadingTutorList: false });
      }
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));

export default useUser;
