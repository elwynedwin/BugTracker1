import { useState, useEffect, useRef } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

const Users = () => {
  const effectRan = useRef(false);

  const [users, setUsers] = useState();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const signal = controller.signal;

    if (effectRan.current === false) {
      const getUsers = async () => {
        try {
          const response = await axiosPrivate.get("/users", {
            signal: signal,
          });
          console.log(response.data);
          isMounted && setUsers(response.data);
        } catch (error) {
          console.error(error);
          navigate("/login", { state: { from: location }, replace: true });
        }
      };
      getUsers();
    }

    //Something wrong here
    return () => {
      isMounted = false;
      if (isMounted === true) {
        controller.abort();
      }
      effectRan.current = true;
    };
  }, []);

  return (
    <>
      <section>
        <h2>Users List</h2>
        {users?.length ? (
          <ul>
            {users.map((user, i) => (
              <li key={i}>{user?.username}</li>
            ))}
          </ul>
        ) : (
          <p> No users to display!</p>
        )}
      </section>
    </>
  );
};

export default Users;
