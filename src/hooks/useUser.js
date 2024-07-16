import { create } from "zustand";
import { updateProfile, changePassword } from "../api/user";
import { notification } from "antd";
const useUser = create((set) => ({
  infoUser: {},
  fetchUpdateUser: async (id, data) => {
    try {
      const res = await updateProfile(id, data);
      console.log("check res", res);
      if (res && res.status === 200) {
        set({ infoUser: res?.data || {} });
      }
      console.log("check data", infoUser);
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
}));

export default useUser;
