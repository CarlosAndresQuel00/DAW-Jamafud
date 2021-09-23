import axios from "axios";

const api = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: "https://nameless-fortress-85159.herokuapp.com/api",
  withCredentials: false,
});

export default api;
