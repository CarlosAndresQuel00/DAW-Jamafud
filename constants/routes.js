const publicRoutes = {
  LOGIN: "/Login",
  REGISTER: "/SingUp",
  FOODECUADOR: "/foodEcuador"
};

const privateRoutes = {
  PROFILE: "/Profile",
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes,
};
export default Routes;
