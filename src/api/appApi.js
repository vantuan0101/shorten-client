import axiosClient from "./axiosClient";
const appApi = {
  getAllLinkOfUsers() {
    const url = "link/users";
    return axiosClient.get(url);
  },
  getAllLinkOfUserById(params) {
    const url = `link/user/${params}`;
    return axiosClient.get(url);
  },
};
export default appApi;
