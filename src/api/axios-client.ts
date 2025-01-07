import axios from "axios";
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";

export type ResponseData<T> = {
  status: string;
  message: string;
  data: T;
  total: number | null;
};

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

// Interceptor để thêm Bearer Token vào mỗi yêu cầu
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Lấy token từ localStorage (hoặc bất kỳ nơi nào bạn lưu trữ token)
    const token = localStorage.getItem("Token");

    // Nếu có token, thêm vào header Authorization
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response.data ?? response,
  async (error) => {
    if (error.response?.status === 401) {
      // Thực hiện logic làm mới token hoặc điều hướng
      console.error("Token hết hạn hoặc không hợp lệ.");
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
