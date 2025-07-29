import axios from "axios";
import { createContext, useState } from "react";

//first create the context
const ThemeContext = createContext();

//second create the "wrapper"
const ThemeContextWrapper = ({ children }) => {
  //state to store what the theme is
  const [darkTheme, setDarkTheme] = useState(true);

  //function to switch dark to light mode
  function handleSwitchDarkMode() {
    //set the state to be the opposite of its previous value
    setDarkTheme(!darkTheme);
  }
  function createPet(aPet) {
    axios.post("http://localhost:4000/pets", aPet);
  }
  return (
    <ThemeContext.Provider
      value={{ darkTheme, bestDog: "Ragnar", handleSwitchDarkMode, createPet }}
    >
      {children} {/* <App/> */}
    </ThemeContext.Provider>
  );
};

//make sure to export your context and the wrapper
export { ThemeContext, ThemeContextWrapper };
