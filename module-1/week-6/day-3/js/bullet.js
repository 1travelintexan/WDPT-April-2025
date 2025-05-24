class Bullet {
  constructor(gameScreen, left, top) {
    this.gameScreen = gameScreen;
    this.top = top;
    this.left = left + 50 - 15;
    this.width = 30;
    this.height = 60;
    //create an img element
    this.element = document.createElement("img");
    this.element.src = "../assets/bullet.png";
    this.element.style.height = this.height + "px";
    this.element.style.width = this.width + "px";
    this.element.style.top = this.top + "px";
    this.element.style.left = this.left + "px";
    this.element.style.position = "absolute";
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.top = this.top - 8;
    this.updatePostion();
  }
  updatePostion() {
    this.element.style.top = this.top + "px";
  }
  didCollide(obstacle) {
    const bulletRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      bulletRect.left < obstacleRect.right &&
      bulletRect.right > obstacleRect.left &&
      bulletRect.top < obstacleRect.bottom &&
      bulletRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
