import { httpPrivate } from "./index";

export const getDeals = async () => {
  const response = await httpPrivate.get('/deals');
  return response.data;
};
