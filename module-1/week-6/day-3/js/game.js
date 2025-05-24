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
    this.badTreats = [new BadTreat(this.gameScreen)];
    this.bullets = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.frames = 0;
    this.boomSound = new Audio("../assets/boom.wav");
    this.boomSound.volume = 0.1;
  }
  start() {
    this.gameScreen.style.height = this.height + "px";
    this.gameScreen.style.width = this.width + "px";
    this.startScreen.style.display = "none";
    this.gameContainer.style.display = "flex";
    this.gameScreen.style.display = "block";
    this.gameScreen.style.position = "relative";
    this.drawHearts();
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
      this.gameOver();
    }
  }
  update() {
    console.log("im in the update");
    this.player.move();

    //every 30 frames, add a new treat
    if (this.frames % 30 === 0) {
      this.treats.push(new Treat(this.gameScreen));
    }
    //every 60 frames, add a new BAD treat
    if (this.frames % 60 === 0) {
      this.badTreats.push(new BadTreat(this.gameScreen));
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

    //moving the bad treats
    for (let i = 0; i < this.badTreats.length; i++) {
      const currentBadTreat = this.badTreats[i];
      currentBadTreat.move();
      //check if collision with bad treat
      if (this.player.didCollide(currentBadTreat)) {
        this.badTreats.splice(i, 1);
        currentBadTreat.element.remove();
        this.lives--;
        this.drawHearts();
        i--;
        if (this.lives === 0) {
          this.gameIsOver = true;
        }
      }
      //if the treat goes off the page, remove it from the array and the DOM
      if (currentBadTreat.top > 600) {
        //remove from array
        this.badTreats.splice(i, 1);
        //remove from the DOM
        currentBadTreat.element.remove();
        i--;
      }

      //loop over the bullets
      for (let j = 0; j < this.bullets.length; j++) {
        const currentBullet = this.bullets[j];
        currentBullet.move();
        if (currentBullet.didCollide(currentBadTreat)) {
          //if the bullet hits a bad treat then remove it
          this.badTreats.splice(i, 1);
          currentBadTreat.element.remove();
          i--;
          //to remove the bullet from the array and the  DOM
          this.bullets.splice(j, 1);
          currentBullet.element.remove();
          j--;
        }
      }
    }
  }
  gameOver() {
    console.log("game over", this.endScreen);
    this.gameContainer.style.display = "none";
    this.endScreen.style.display = "block";
  }
  drawHearts() {
    this.livesContainer.innerHTML = "";
    for (let i = 0; i < this.lives; i++) {
      const oneHeart = document.createElement("img");
      oneHeart.src = "../assets/heart.jpg";
      oneHeart.classList.add("heart");
      this.livesContainer.appendChild(oneHeart);
    }
  }
}
