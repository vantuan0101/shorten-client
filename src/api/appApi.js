import axiosClient from "./axiosClient";
const appApi = {
  getAllLinkOfUsers(queryOptions) {
    const url = `link/users?${queryOptions}`;
    return axiosClient.get(url);
  },
  getAllLinkOfUserById(params, queryOptions) {
    const url = `link/user/${params}?${queryOptions}`;
    return axiosClient.get(url);
  },
  checkDisableUser() {
    const url = `link/check`;
    return axiosClient.get(url);
  },
  disableUser(params) {
    const url = `users/disable-user`;
    return axiosClient.post(url, params);
  },
};
export default appApi;
