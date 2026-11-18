class InputHandler {
  constructor() {
    this.direction = null;
    document.addEventListener("keydown", (event) => this.handleKey(event));
  }

  handleKey(event) {
    if (event.key === "ArrowRight") {
      this.direction = "right";
    } else if (event.key === "ArrowLeft") {
      this.direction = "left";
    } else if (event.key === "ArrowUp") {
      this.direction = "up";
    } else if (event.key === "ArrowDown") {
      this.direction = "down";
    } else {
      return;
    }
  }

  getDirection() {
    const currentDirection = this.direction;
    this.direction = null;
    return currentDirection;
  }
}
