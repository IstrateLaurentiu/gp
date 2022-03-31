import axios from "axios";

const httpInstance = axios.create({ baseURL: "http://localhost:3003" });

httpInstance.interceptors.request.use(function (config) {
  if (localStorage.token) {
    const headers = config.headers!;
    headers.Authorization = localStorage.getItem("token")!;
  }

  return config;
});

export const http = httpInstance;
