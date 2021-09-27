import api from "./index";

const User = {
  registerForm: (userData) => {
    return api.post("/profile", {
      ...userData,
    });
  },
  login: (data) => {
    console.log("el error esta aqui");
    return api.post("/login", data);
  },
  logout: () => {
    return api.post("/logout");
  },
  sendPasswordResetEmail: (email) => {
    return api.post("/forgot-password", { email });
  },
  confirmPasswordReset: ({ email, password, password_confirmation, token }) => {
    return api.post("/reset-password", {
      email,
      password,
      password_confirmation,
      token,
    });
  },
  getAuthenticatedUser: () => {
    return api.get("/user");
  },
};

export default User;
