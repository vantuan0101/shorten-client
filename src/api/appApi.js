import axiosClient from "./axiosClient";
import queryString from "query-string";
const appApi = {
  getAllLinkOfUsers(queryOptions) {
    const url = `link/users?${queryOptions}`;
    return axiosClient.get(url);
  },
  getAllLinkOfUserById(params, queryOptions) {
    const url = `link/user/${params}?${queryOptions}`;
    return axiosClient.get(url);
  },
};
export default appApi;
