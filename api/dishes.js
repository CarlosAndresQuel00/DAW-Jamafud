import api from "./index";

const Dish = {
  receive: () => {
    return api.get("/dishes");
  },
  create: (data) => {
    return api.post("/dishes", data, {
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYzMTUwNTU2MCwiZXhwIjoxNjMxNTA5MTYwLCJuYmYiOjE2MzE1MDU1NjAsImp0aSI6Imp6U2VVaHFXUEdhS0pxV1UiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.OTP7Lm0AOJZhrXvtJAEt5FLeo7Ei3juTbeaIjxPzDk0",
      },
    });
  },
};

export default Dish;
