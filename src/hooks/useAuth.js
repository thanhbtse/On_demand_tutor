import Cookies from "js-cookie";
import { create } from "zustand";
import { login } from "../api/authen.js";

const useAuth = create((set) => ({
  infoUser: {},
  isAuthenticated: !!Cookies.get("token"),
  login: async (email, password) => {
    try {
      const res = await login(email, password);
      if (res && res.status === 200 && res.data.token) {
        Cookies.set("token", res.data.token, { expires: 7 });
        set({ isAuthenticated: true });
        set({ infoUser: res.data.user });
      }
    } catch (error) {
      console.log("error", error);
    }
  },

  logout: () => {
    Cookies.remove("token");
    sessionStorage.removeItem("keys");
    set({ isAuthenticated: false });
  },
}));

export default useAuth;
