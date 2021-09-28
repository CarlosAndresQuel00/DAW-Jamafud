const publicRoutes = {
  LOGIN: "/singIn",
  REGISTER: "/singUp",
  FOODECUADOR: "/foodEcuador",
};

const privateRoutes = {
  PROFILE: "/profile",
  HOME: "/",
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;
