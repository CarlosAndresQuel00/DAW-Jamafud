import axios from "axios";

const api = axios.create({
  // eslint-disable-next-line no-undef
  //https://nameless-fortress-85159.herokuapp.com/api
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

export default api;
