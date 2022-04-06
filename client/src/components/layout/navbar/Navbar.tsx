import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../../context/AppContext";
import {
  StyledFlexContainer,
  StyledNav,
} from "./NavbarStyles";

export const Navbar = () => {
  const { user, setUser } = useContext(AppContext);

  const authLinks = (
    <StyledFlexContainer>

      <Link
        onClick={() => {
          localStorage.removeItem("token");
          setUser();
        }}
        to="/login"
      >
        <span className="hide-sm">Logout</span>
      </Link>
    </StyledFlexContainer>
  );

  const guestLinks = (
    <StyledFlexContainer>
      <Link to="/register">Register</Link>

      <Link to="/login">Login</Link>
    </StyledFlexContainer>
  );
  return (
    <StyledNav>
      <StyledFlexContainer>
        <Link to="/dashboard">Greenspark task</Link>
      </StyledFlexContainer>

      {<Fragment>{user ? authLinks : guestLinks}</Fragment>}
    </StyledNav>
  );
};
