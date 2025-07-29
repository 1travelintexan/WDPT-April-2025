import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
export const Navbar = () => {
  //this is grabbing data or a function from the context
  const { darkTheme, handleSwitchDarkMode } = useContext(ThemeContext);
  console.log("theme", darkTheme);
  return (
    <nav className={darkTheme ? "dark-theme" : "light-theme"}>
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
      <button onClick={handleSwitchDarkMode}>{darkTheme ? "🌞" : "🌚"}</button>
    </nav>
  );
};
