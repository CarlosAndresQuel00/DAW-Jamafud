const publicRoutes = {
  LOGIN: "/singIn",
  REGISTER: "/singUp",
  FOODECUADOR: "/foodEcuador",
};

const privateRoutes = {
  PROFILE: "/Profile",
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;
