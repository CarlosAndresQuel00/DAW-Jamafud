import api from "./index";

const Ingredient = {
  receive: () => {
    return api.get("/ingredient_types");
  },
  create: (data) => {
    return api.post("/ingredients", data);
  },
};

export default Ingredient;
