import api from "./index";

const Dish = {
  receive: () => {
    return api.get("/dishes");
  },
  create: (data) => {
    return api.post("/dishes", data);
  },
};

export default Dish;
