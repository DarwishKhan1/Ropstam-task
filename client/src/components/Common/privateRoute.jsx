import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const theme = sessionStorage.getItem("ropstam");
  return theme ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;