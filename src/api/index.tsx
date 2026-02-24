import axios from 'axios';

export const http = axios.create({
  baseURL: `https://zenbit-nest-be.vercel.app`,
  headers: { 'Content-Type': 'application/json' },
});

export const httpPrivate = axios.create({
  baseURL: `https://zenbit-nest-be.vercel.app`,
  headers: { 'Content-Type': 'application/json' },
});

httpPrivate.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('zenbit-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
