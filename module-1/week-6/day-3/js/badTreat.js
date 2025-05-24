class BadTreat {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    //syntax for random number between two numbers
    this.left = Math.floor(Math.random() * (450 - 0 + 1) + 0);
    this.top = -100;
    this.width = 60;
    this.height = 60;
    this.imagesArray = [
      "../assets/chocolate.png",
      "../assets/grapes.png",
      "../assets/chocolate.png",
      "../assets/grapes.png",
    ];
    this.randomImageIndex = Math.floor(Math.random() * this.imagesArray.length);
    //create an img element
    this.element = document.createElement("img");
    this.element.src = this.imagesArray[this.randomImageIndex];
    this.element.style.height = this.height + "px";
    this.element.style.width = this.width + "px";
    this.element.style.top = this.top + "px";
    this.element.style.left = this.left + "px";
    this.element.style.position = "absolute";
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.top = this.top + 5;
    this.updatePostion();
  }
  updatePostion() {
    this.element.style.top = this.top + "px";
  }
}
