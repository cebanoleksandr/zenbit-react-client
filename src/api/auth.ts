import type { AuthCredentials } from "../utils/interfaces";
import { http } from "./index";

export const login = async ({ email, password }: AuthCredentials) => {
  const response = await http.post('/auth/login', { email, password });
  console.log('Login response: ', response);
  return response.data;
}

export const register = async ({ email, password }: AuthCredentials) => {
  const response = await http.post('/auth/register', { email, password });
  console.log('Register response: ', response);
  return response.data;
}
