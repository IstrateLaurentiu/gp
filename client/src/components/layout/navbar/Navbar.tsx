import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../../context/AppContext";
export const Navbar = () => {
  const { user, setUser } = useContext(AppContext);

  const authLinks = (
    <ul>
      <li>
        <Link to="/dashboard">
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <Link
          onClick={() => {
            localStorage.removeItem("token");
            setUser();
          }}
          to="/login"
        >
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">Greenpark task</Link>
      </h1>

      {<Fragment>{user ? authLinks : guestLinks}</Fragment>}
    </nav>
  );
};
