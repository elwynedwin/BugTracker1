import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Page Not Found!</h1>
      <div>NotFound</div>
      <div>
        <Link to="/"> Visit Homepage </Link>
      </div>
    </>
  );
};

export default NotFound;
