class Player {
  constructor(x, y) {
    this.isAlive = true;
    this.diamonds = 0;
    this.x = x;
    this.y = y;
  }

  move(direction, world) {
    let newX = this.x;
    let newY = this.y;

    if (direction === "right") {
      newX++;
    } else if (direction === "left") {
      newX--;
    } else if (direction === "up") {
      newY--;
    } else if (direction === "down") {
      newY++;
    }

    const nextTile = world.elements[newY][newX];

    if (nextTile === "W" || nextTile === "S") {
      return;
    }
    if(nextTile === "D"){
      this.diamonds++;
      console.log(this.diamonds);
    }
    world.elements[newY][newX] = "P";
    world.elements[this.y][this.x] = "E";
    this.x = newX;
    this.y = newY;
  }
}
