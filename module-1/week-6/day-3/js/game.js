class Game {
  constructor() {
    this.startScreen = document.querySelector("#start-screen");
    this.gameScreen = document.querySelector("#game-screen");
    this.endScreen = document.querySelector("#gameover-screen");
    this.gameContainer = document.querySelector("#game-container");
    this.scoreboard = document.querySelector("#score");
    this.livesContainer = document.querySelector("#lives");
    this.player = new Player(this.gameScreen);
    this.height = 600;
    this.width = 500;
    this.treats = [new Treat(this.gameScreen)];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.frames = 0;
  }
  start() {
    this.gameScreen.style.height = this.height + "px";
    this.gameScreen.style.width = this.width + "px";
    this.startScreen.style.display = "none";
    this.gameContainer.style.display = "flex";
    this.gameScreen.style.display = "block";
    this.gameScreen.style.position = "relative";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, Math.round(1000 / 60));
  }
  gameLoop() {
    //add one the frames
    this.frames++;
    this.update();

    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }
  update() {
    console.log("im in the update");
    this.player.move();

    //every 30 frames, add a new treat
    if (this.frames % 30 === 0) {
      this.treats.push(new Treat(this.gameScreen));
    }
    //moving the treats array
    for (let i = 0; i < this.treats.length; i++) {
      const currentTreat = this.treats[i];
      currentTreat.move();

      //check if the treat hits the player
      if (this.player.didCollide(currentTreat)) {
        this.score++;
        this.scoreboard.innerText = this.score;
        console.log("nom nom nom");
        //remove from array
        this.treats.splice(i, 1);
        //remove from the DOM
        currentTreat.element.remove();
        i--;
      }

      //if the treat goes off the page, remove it from the array and the DOM
      if (currentTreat.top > 600) {
        //remove from array
        this.treats.splice(i, 1);
        //remove from the DOM
        currentTreat.element.remove();

        i--;
      }
    }
  }
}
