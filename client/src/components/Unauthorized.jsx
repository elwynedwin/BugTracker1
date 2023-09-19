import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  // useNavigate (-1) directs user to the last previously loaded page
  const previousPage = () => navigate(-1);

  return (
    <>
      <section>
        <h1>Unauthorized</h1>
        <p>You dont have access to this page!</p>
        <div>
          <button onClick={previousPage}> Previous Page </button>
        </div>
      </section>
    </>
  );
};

export default Unauthorized;
