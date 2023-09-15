import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  console.log("auth:", auth);
  console.log("allowedRoles:", allowedRoles);

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!auth.roles || !allowedRoles) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  const hasPermission = auth.roles.some((role) => allowedRoles.includes(role));

  if (hasPermission) {
    return <Outlet />;
  } else {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
