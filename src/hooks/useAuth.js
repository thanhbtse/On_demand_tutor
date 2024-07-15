import Cookies from "js-cookie";
import { create } from "zustand";

const useAuth = create((set) => ({
  infoUser: {},

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
