import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
export const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img alt="logo" src={logo} id="logo" />
      </Link>
      <h1>Pets are Life..</h1>
      <NavLink to="/all-pets" className="navlink">
        All Pets
      </NavLink>
      <NavLink to="/add-pet" className="navlink">
        Add Pet
      </NavLink>
      <NavLink to="/about" className="navlink">
        About Us
      </NavLink>
    </nav>
  );
};
