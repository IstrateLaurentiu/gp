import axios from "axios";

const httpInstance = axios.create({});

httpInstance.interceptors.request.use(function (config) {
  if (localStorage.token) {
    const headers = config.headers!;
    headers.Authorization = localStorage.getItem("token")!;
  }

  return config;
});

export const http = httpInstance;
