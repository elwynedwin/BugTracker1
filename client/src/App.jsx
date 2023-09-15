import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Admin from "./components/Admin";
import Editor from "./components/Editor";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/Unauthorized";
import Home from "./components/Home";
import "./css/app.css";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

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
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>

        {/* catch all unrecognised routes */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
