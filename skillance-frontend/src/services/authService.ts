// src/services/authService.ts
import { API, SIGNIN, SIGNUP } from "./apis";

// Sign Up API
export const signUp = async (formData: {
  username: string;
  email: string;
  password: string;
  role: string;
}) => {
  const response = await API.post(SIGNUP,formData);
  return response.data;
};

// Sign In API
export const signIn = async (formData: {
  email: string;
  password: string;
}) => {
  const response = await API.post(SIGNIN,formData);
  return response.data;
};

//logout

export const signOut = ()=>{
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}
