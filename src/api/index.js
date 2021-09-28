import axios from "axios";

const api = axios.create({
  // http://nameless-fortress-85159.herokuapp.com/api
  // eslint-disable-next-line no-undef
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
});

export default api;
