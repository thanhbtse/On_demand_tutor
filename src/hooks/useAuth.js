import Cookies from "js-cookie";
import { create } from "zustand";
import { getInfoUser } from "../api/authen.js";
const useAuth = create((set) => ({
  infoUser: {},
  fetchUserInfo: async () => {
    try {
      const res = await getInfoUser();
      console.log("check res", res);
      if (res && res.status === 200) {
        set({ infoUser: res?.data || {} });
      }
      console.log("check data", infoUser)
    } catch (err) {
      console.log("Error fetching userInfo", err);
    }
  },
  isAuthenticated: !!Cookies.get("token"),
  login: () => {
    set({ isAuthenticated: true });
  },
  logout: () => {
    Cookies.remove("token");
    sessionStorage.removeItem("keys");
    set({ isAuthenticated: false });
  },
}));

export default useAuth;
