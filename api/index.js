import axios from "axios";

const api = axios.create({
  // http://localhost:8000/api
  // eslint-disable-next-line no-undef
  baseURL: "http://nameless-fortress-85159.herokuapp.com/api",
  withCredentials: true,
});

export default api;
