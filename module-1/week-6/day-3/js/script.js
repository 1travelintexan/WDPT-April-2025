//variables here
const playGameButton = document.querySelector("#start-game");
const startScreen = document.querySelector("#start-screen");
const gameScreen = document.querySelector("#game-screen");
const gameContainer = document.querySelector("#game-container");
let ourGame;
//event listeners here
playGameButton.addEventListener("click", () => {
  startGame();
});
window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    ourGame.player.directionX = 3;
  }
  if (event.code === "ArrowLeft") {
    ourGame.player.directionX = -3;
  }
});
window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowRight") {
    ourGame.player.directionX = 0;
  }
  if (event.code === "ArrowLeft") {
    ourGame.player.directionX = 0;
  }
});

//my functions
function startGame() {
  console.log("starting the game");
  //create a new instance of the Game class and then call the .start method
  ourGame = new Game();
  ourGame.start();
}
