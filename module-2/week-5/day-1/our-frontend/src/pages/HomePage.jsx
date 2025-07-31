import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const HomePage = () => {
  //how to grab data from the refrigerator
  const data = useContext(ThemeContext);
  console.log("data from context on home page", data);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
export default HomePage;
