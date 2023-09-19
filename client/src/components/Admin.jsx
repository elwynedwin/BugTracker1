import React from "react";
import { Link } from "react-router-dom";
import Users from "./Users";

const Admin = () => {
  return (
    <>
      <section>
        <div>Admin Access</div>
        <br />
        <Users />
        <br />
        <div>
          <Link to="/">Home</Link>
        </div>
      </section>
    </>
  );
};

export default Admin;
