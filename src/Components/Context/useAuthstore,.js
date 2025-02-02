import { createContext } from "react";
import { create } from "zustand";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const base_usel = "https://travel-backend-n1uz.onrender.com";

export const useAuthstore = create((set) => ({
  isLoggingIn: false,
  isSigningUp: false,

  signup: async (newuser, navigate) => {
    set({ isSigningUp: true });
    console.log(34, newuser.userpass);

    const request = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newuser)
    };

    const response = await fetch(`${base_usel}/user/signupUser`, request);
    const data = await response.json();
    console.log(data);

    set({ isSigningUp: false });
    if (response.status === 200) {
      toast.success("signup successfull");
      navigate("/");
    } else if (response.status === 400) {
      toast.error("user already exist");
    } else {
      toast.error("signup failed");
    }
  },

  login: async (olduser, navigate) => {
    set({ isLoggingIn: true });
    console.log(34, olduser.userpass);

    const request = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(olduser)
    };

    const response = await fetch(`${base_usel}/user/loginUser`, request);
    const data = await response.json();
    set({ isLoggingIn: false });
    if (data.length === 0) {
      toast.error("login failed");
    } else {
      toast.success("logged in successfull");
      navigate("/");
    }
  }
}));
