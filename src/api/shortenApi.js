import axiosClient from "./axiosClient";
const shortenApi = {
  getAll(params) {
    const url = "shorten-link";
    return axiosClient.get(url, params);
  },
  getShortenById(id) {
    const url = `shorten-link/${id}`;
    return axiosClient.get(url);
  },
  updateShortenById(id, params) {
    const url = `shorten-link/${id}`;
    return axiosClient.patch(url, params);
  },
  deletedShortenById(id) {
    const url = `shorten-link/${id}`;
    return axiosClient.delete(url);
  },

  addShorten(params) {
    const url = "shorten-link";
    return axiosClient.post(url, params);
  },
};
export default shortenApi;
