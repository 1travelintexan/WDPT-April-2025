import "./App.css";
import logo from "./assets/logo.png";
import burger from "./assets/hamburger.png";
function App() {
  return (
    <div>
      <nav>
        <img src={logo} alt="logo" />
        <img src={burger} alt="hamburger menu" />
      </nav>
      <h1>Hello World</h1>
      <p>alkjfdlakjflkaj aljdlakj akjdflkja;l alkjdfal;kj; lj</p>
      <section id="buttons-container">
        <button>push me</button>
        <button id="bottom-btn">Dont push me</button>
      </section>
    </div>
  );
}

export default App;
