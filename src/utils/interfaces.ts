export interface AuthCredentials {
  email: string;
  password: string;
}

export interface IDeal {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  ticket: number;
  yield: number;
  daysLeft: number;
  soldPercentage: number;
}
