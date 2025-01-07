import axiosClient, { type ResponseData } from "@/api/axios-client.js";

export type UserProfile = {
  id: number;
  name: string;
  email: string;
  address: string;
  age: number;
  status: boolean;
  token: string;
  data: object;
};

export type accountInput = {
  username: string;
  password: string;
};

export const userApi = {
  getProfile: (): Promise<UserProfile> => axiosClient.get("/auth/profile"),
  login: (accountInput: accountInput): Promise<ResponseData<UserProfile>> =>
    axiosClient.post("/auth/login", accountInput),
};
