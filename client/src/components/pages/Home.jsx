import React from "react";
import { useNavigate, Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

const Home = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/linkpage");
  };

  return (
    <>
      <section>
        <div>Home Access</div>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/editor">Editor</Link>
        <Link to="/linkpage">Linkpage</Link>
        <Link to="/dashboard">Dashboard</Link>
        <div>
          <button onClick={signOut}>Sign Out</button>
        </div>
      </section>
    </>
  );
};

export default Home;
