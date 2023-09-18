// import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

// const RequireAuth = ({ allowedRoles }) => {
//   const { auth } = useAuth();
//   const location = useLocation();

//   const hasPermission = auth?.roles?.find((role) =>
//     allowedRoles?.includes(role)
//   );
//   const loggedIn = auth?.user;

//   if (hasPermission) {
//     return <Outlet />;
//   }

//   if (loggedIn) {
//     return <Navigate to="/unauthorized" state={{ from: location }} replace />;
//   }

//   if (!hasPermission && !loggedIn) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }
// };

// export default RequireAuth;

import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;