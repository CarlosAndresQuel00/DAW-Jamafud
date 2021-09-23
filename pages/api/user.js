import api from "./index";

const User = {
  register: (userData) => {
    console.log("el error esta en el registro");
    console.log("desde user.register", userData);
    //convierto a form data la informacion
    let formData = new FormData();
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("password_confirmation", userData.password_confirmation);
    formData.append("birthday", userData.birthday);
    formData.append("image", userData.image[0]);
    console.log("desde formdata", formData);
    return api.post("/profile", formData);
  },
  login: (data) => {
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
