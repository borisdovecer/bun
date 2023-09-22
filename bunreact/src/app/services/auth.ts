import axios from "@app/config/axios.ts";

export const loginUser = async (username: string, password: string) => {
  const response = await axios.post("/api/auth/login", { username, password });
  return response.data;
};

export const registerUser = async (username: string, password: string) => {
  const response = await axios.post("/api/auth/register", { username, password });
  return response.data;
};
