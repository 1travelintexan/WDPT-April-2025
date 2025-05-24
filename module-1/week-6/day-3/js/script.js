//variables here
const playGameButton = document.querySelector("#start-game");
const restartGameButton = document.querySelector("#restart-button");
let ourGame;
//event listeners here
playGameButton.addEventListener("click", () => {
  startGame();
});
restartGameButton.addEventListener("click", () => {
  //easy way to reload
  window.location.reload();
});
window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    ourGame.player.directionX = 3;
  }
  if (event.code === "ArrowLeft") {
    ourGame.player.directionX = -3;
  }
  if (event.code === "Space") {
    ourGame.bullets.push(
      new Bullet(ourGame.gameScreen, ourGame.player.left, ourGame.player.top)
    );
    ourGame.boomSound.play();
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
