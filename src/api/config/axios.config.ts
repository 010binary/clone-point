import axios from "axios";
//   import { sonner } from "@/components/ui/sonner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const axiosInstance = axios.create({
  baseURL: "https://gateway.ezoneapps.com:30002/ezone-api-finman",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = "b8071494-9b66-41aa-a38a-0c2956d70a39";

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Return the response if it's successful
    return response;
  },
  (error) => {
    // Check if the error is due to unauthorized access (status code 401)
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access here, such as redirecting to login page or showing a message

      toast.error("Unauthorized request");
      // console.log("Unauthorized request:", error.response.data);

      // window.location.reload();
    }
    // Return the error to be handled by the calling function
    return Promise.reject(error);
  }
);

export default axiosInstance;
