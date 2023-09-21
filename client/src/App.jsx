import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";
import Admin from "./components/pages/Admin";
import Editor from "./components/pages/Editor";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/pages/Unauthorized";
import Home from "./components/pages/Home";
import LinkPage from "./components/pages/LinkPage";
import PersistentLogin from "./components/PersistentLogin";

import "bootstrap/dist/css/bootstrap.css";
import "./css/app.css";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/pages/Dashboard";

const ROLES = {
  Admin: 5389,
  Editor: 6754,
  User: 3982,
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* protected routes */}
        <Route element={<PersistentLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/" element={<Home />} />
            <Route path="linkpage" element={<LinkPage />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="admin" element={<Admin />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
            <Route path="editor" element={<Editor />} />
          </Route>
        </Route>

        {/* catch all unrecognised routes */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
