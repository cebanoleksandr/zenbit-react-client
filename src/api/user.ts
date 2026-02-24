import { httpPrivate } from "./index";

export const getUserInfo = async () => {
  const response = await httpPrivate.get('/auth/profile');
  return response.data;
};
