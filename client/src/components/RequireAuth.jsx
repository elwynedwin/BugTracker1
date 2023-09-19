import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  if (auth?.roles?.find((role) => allowedRoles?.includes(role)))
    return <Outlet />;
  if (auth?.user && !auth?.roles?.find((role) => allowedRoles?.includes(role)))
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  if (!auth?.user && !auth?.roles?.find((role) => allowedRoles?.includes(role)))
    return <Navigate to="/login" state={{ from: location }} replace />;

  // return (
  //     auth?.roles?.find(role => allowedRoles?.includes(role))
  //         ? <Outlet />
  //         : auth?.user
  //             ? <Navigate to="/unauthorized" state={{ from: location }} replace />
  //             : <Navigate to="/login" state={{ from: location }} replace />
  // );
};

export default RequireAuth;
