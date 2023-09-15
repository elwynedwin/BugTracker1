import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div>Home Access</div>
      <Link to="/">Home</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/editor">Editor</Link>
    </>
  );
};

export default Home;
