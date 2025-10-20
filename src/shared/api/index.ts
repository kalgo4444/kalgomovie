import axios from 'axios';

export const MOVIE_KEY = process.env.NEXT_PUBLIC_MOVIE_KEY;
export const BASE_URL = 'https://api.themoviedb.org/3';

export const API = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use((config) => {
  const token = MOVIE_KEY || process.env.NEXT_PUBLIC_MOVIE_KEY;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
