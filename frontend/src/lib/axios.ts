import axios from "axios";
import { getToken } from "@/utils/token";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true // Bật dòng này lên khi tích hợp HttpOnly Cookie
});

api.interceptors.request.use(
  (config) => {
    // Nếu dùng JWT qua Header thay vì HttpOnly Cookie:
    const token = getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Nơi đây sẽ xử lý Refresh Token khi nhận mã 401 Unauthorized
    if (error.response?.status === 401) {
      // TODO: Logic refresh token tự động
      console.error("401 Unauthorized - Need to refresh token or redirect to login");
    }
    return Promise.reject(error);
  }
);

export default api;
