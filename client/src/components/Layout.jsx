import { Outlet } from "react-router-dom";

//Layout component uses Outlet which indicates where a child route element should be rendered.
// It is used within the parent route element.
const Layout = () => {
  return (
    <main className="App">
      <Outlet />
    </main>
  );
};

export default Layout;
