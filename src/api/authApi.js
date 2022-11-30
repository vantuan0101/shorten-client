import axiosClient from "./axiosClient";
const authApi = {
  login(params) {
    const url = "auth/login";
    return axiosClient.post(url, params);
  },
  socialLogin(socialName) {
    const url = `auth/${socialName}`;
    return axiosClient.get(url);
  },
  register(params) {
    const url = "auth/signup";
    return axiosClient.post(url, params);
  },
  logout(params) {
    const url = "auth/logout";
    return axiosClient.post(url, params);
  },
};
export default authApi;
