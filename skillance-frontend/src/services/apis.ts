import axios from "axios";

export const API = axios.create({
    baseURL: "http://localhost:8090/api", // Spring Boot backend
  });

export const SIGNIN = "/auth/signin";
export const SIGNUP = "/auth/signup";

export const GIGS = "/gigs";