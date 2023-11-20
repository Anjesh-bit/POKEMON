import axios from "axios";

const axiosBaseUri = (Url) => {
  const axiosInstance = axios.create({
    baseURL: Url,
  });
  return axiosInstance;
};

export default axiosBaseUri;
