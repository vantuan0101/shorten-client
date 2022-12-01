import axios from "axios";

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}`;
// axios.defaults.baseURL = "https://shorten-web.up.railway.app/api/v1";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.timeout = 60000;

const axiosClient = axios.create();
axiosClient.defaults.withCredentials = true; //enable to request with cookies
// Add a request interceptor
axiosClient.interceptors.request.use(
  async (config) => {
    // Do something before request is sent

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log(response);
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
