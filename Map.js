class Mapp {
  constructor() {
    /*
    this.elements = [
      ["S", "S", "E", "E", "E", "E", "E", "E"],
      ["S", "E", "E", "E", "E", "E", "E", "E"],
      ["S", "E", "P", "E", "E", "E", "E", "E"],
      ["E", "E", "E", "G", "E", "E", "G", "E"],
      ["E", "E", "E", "S", "S", "E", "E", "E"],
      ["E", "E", "E", "E", "E", "E", "E", "E"],
      ["W", "W", "W", "W", "W", "W", "W", "E"],
      ["E", "E", "E", "E", "E", "E", "E", "E"],
      ["E", "E", "E", "G", "D", "E", "E", "E"],
      ["E", "E", "E", "E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E", "E", "E", "E"],
    ];
    */

    this.spriteMap = {
      wall: { x: 3, y: 6 },
      player: { x: 0, y: 0 },
      diamond: { x: 2, y: 7 },
      stone: { x: 0, y: 7 },
      ground: { x: 1, y: 7 },
    };
    this.rows = 15;
    this.cols = 20;
    this.fillGround();
    this.addBorder();
    this.player = new Player(1, 1);
    this.elements[this.player.y][this.player.x] = "P";
    this.tileSize = 32;
    this.spriteSize = 32;
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.cols * this.tileSize;
    this.canvas.height = this.rows * this.tileSize;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.image = document.createElement("img");
    this.image.src = "img/sprites.png";
  }

  fillGround() {
    this.elements = [];
    for (let y = 0; y < this.rows; y++) {
      let row = [];
      for (let x = 0; x < this.cols; x++) {
        row.push("G");
      }
      this.elements.push(row);
    }
  }

  addBorder() {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (y === 0 || y === this.rows - 1 || x === 0 || x === this.cols - 1) {
          this.elements[y][x] = "W";
        }
      }
    }
  }

  draw() {
    this.elements.forEach((row, y) => {
      row.forEach((tile, x) => {
        this.ctx.fillStyle = "Black";
        this.ctx.fillRect(
          x * this.tileSize,
          y * this.tileSize,
          this.tileSize,
          this.tileSize,
        );

        if (tile === "W") {
          this.drawSprite(this.spriteMap.wall, x, y);
        } else if (tile === "E") {
          this.ctx.fillStyle = "Red";
        } else if (tile === "P") {
          //this.ctx.fillStyle = "Black";
          this.drawSprite(this.spriteMap.player, x, y);
        } else if (tile === "D") {
          this.drawSprite(this.spriteMap.diamond, x, y);
        } else if (tile === "G") {
          this.drawSprite(this.spriteMap.ground, x, y);
        } else if (tile === "S") {
          this.drawSprite(this.spriteMap.stone, x, y);
        }
      });
    });
  }

  drawSprite(sprite, x, y) {
    this.ctx.drawImage(
      this.image,
      sprite.x * this.spriteSize,
      sprite.y * this.spriteSize,
      this.spriteSize,
      this.spriteSize,
      x * this.tileSize,
      y * this.tileSize,
      this.tileSize,
      this.tileSize,
    );
  }
}

const mapp = new Mapp();
//mapp.fillGround();
console.log(mapp.elements);
mapp.draw();
mapp.image.onload = () => {
  mapp.draw();
};
