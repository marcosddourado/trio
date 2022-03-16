import axios from 'axios';

export const getAxiosInstance = (baseURL: string) => {
  const axiosInstance = axios.create({
    baseURL,
    timeout: 300000, // 5 minutes
    maxRedirects: 5,
  });

  return axiosInstance;
};
