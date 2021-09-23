import api from "./index";

const Ingredient = {
  receive: () => {
    return api.get("/ingredient_types");
  },
  create: (data) => {
    return api.post("/ingredients", data, {
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYzMTU4OTg0NCwiZXhwIjoxNjMxNTkzNDQ0LCJuYmYiOjE2MzE1ODk4NDQsImp0aSI6IktKRWlKM3pFaW0yWUxKUjkiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.BW5Bwy_2O2U4wwNr7oASEwItoDob_CL5dOabN9j8SrA",
      },
    });
  },
};

export default Ingredient;
