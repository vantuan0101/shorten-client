import axiosClient from "./axiosClient";
const userApi = {
  getAll() {
    const url = "users";
    return axiosClient.get(url);
  },
  getUserById(id) {
    const url = `users/${id}`;
    return axiosClient.get(url);
  },
  updateUserById(id, params) {
    const url = `users/${id}`;
    return axiosClient.patch(url, params);
  },
  deletedUserById(id) {
    const url = `users/${id}`;
    return axiosClient.delete(url);
  },

  addUser(params) {
    const url = "users";
    return axiosClient.post(url, params);
  },
};
export default userApi;
