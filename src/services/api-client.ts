import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8001/api",
});

export function setAuthHeader(token: string | null) {
  if (token)
    axiosInstance.defaults.headers.common["Authorization"] = "Bearer " + token;
}

export default axiosInstance;
