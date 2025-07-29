import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
export const Footer = () => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <footer className={darkTheme ? "dark-theme" : "light-theme"}>Footer</footer>
  );
};
