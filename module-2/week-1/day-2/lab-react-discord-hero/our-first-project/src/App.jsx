import "./App.css";
import discordLogo from "./assets/discord-logo-white.png";
import burgerMenu from "./assets/menu-icon.png";
import peopleImg from "./assets/discord-background.png";
function App() {
  return (
    <>
      <nav>
        <img src={discordLogo} alt="logo" />
        <img src={burgerMenu} alt="burger" />
      </nav>
      <h1>
        IMAGINE A
        <br />
        PLACE...
      </h1>
      <p>
        helhdjaslkjadfslkj alkjfdla kalkdfja lkjfadfkljafaffda
        <br />
        hello this is a testhelhdjaslkjadfslkj alkjfdla kalkdfja lkjfadfklj
        helhdjaslkjadfslkj alkjfdla kalkdfja lkjfadfklj helhdjaslkjadfslkj
        alkjfdla kalkdfja lkjfadfklj
      </p>
      <section id="btn-container">
        <button>Download for Mac</button>
        <button id="discord-btn">Open Discord in your Browser</button>
      </section>
      <section>
        <img src={peopleImg} alt="people image" className="people-img" />
      </section>
    </>
  );
}

export default App;
