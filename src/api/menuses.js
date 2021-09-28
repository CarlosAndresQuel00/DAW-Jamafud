import api from "./index";

const Menus = {
  receive: () => {
    return api.get("/menus");
  },
  create: (data) => {
    return api.post("/menus", data);
  },
};

export default Menus;
