import "./App.css";
import { Navbar } from "./components/Navbar";
import ragnarPic from "./ragnar.PNG";
function App() {
  // this is known as JS land...
  const petName = "Ragnar";
  console.log("hello");
  return (
    <div className="App">
      <Navbar />
      <h1>Our First Day with {petName} </h1>
      <img src={ragnarPic} alt={petName} style={{ height: "200px" }} />
    </div>
  );
}

export default App;
