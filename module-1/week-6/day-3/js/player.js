class Player {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = 50;
    this.top = 480;
    this.width = 100;
    this.height = 100;
    this.directionX = 0;

    //create an img element
    this.element = document.createElement("img");
    this.element.src = "../assets/ragnar.PNG";
    this.element.style.height = this.height + "px";
    this.element.style.width = this.width + "px";
    this.element.style.top = this.top + "px";
    this.element.style.left = this.left + "px";
    this.element.style.position = "absolute";
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.left = this.left + this.directionX;
    if (this.left < 0) {
      this.left = 0;
    }
    if (this.left > 400) {
      this.left = 400;
    }
    this.updatePostion();
  }
  updatePostion() {
    this.element.style.left = this.left + "px";
  }
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
