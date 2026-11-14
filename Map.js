

class Mapp {

    constructor(width, height) {
        this.elements = [
            ['S', 'S', 'E', 'E', 'E', 'E', 'E', 'E'],
            ['S', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
            ['S', 'E', 'P', 'E', 'E', 'E', 'E', 'E'],
            ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
            ['E', 'E', 'E', 'S', 'S', 'E', 'E', 'E'],
            ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'E'],
            ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
            ['E', 'E', 'E', 'E', 'D', 'E', 'E', 'E'],
            ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
            ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
            ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
            ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
            ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
        ];

        this.spriteMap = {
            wall: { x: 3, y:6},
            player: {x: 0, y: 0},
            diamond: {x: 2, y: 7},
            stone: {x: 0, y: 7}
        }

        this.tileSize = 32;
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");
        this.image = document.createElement("img");
        this.image.src = "img/sprites.png"

    };

    draw() {
        this.elements.forEach((row, y) => {
            row.forEach((tile, x) => {
                this.ctx.fillStyle = "Black"
                this.ctx.fillRect(
                    x * this.tileSize,
                    y * this.tileSize,
                    this.tileSize,
                    this.tileSize
                );
                
                if (tile === "W") {
                    this.drawSprite(this.spriteMap.wall, x, y)
                } else if (tile === "E") {
                    this.ctx.fillStyle = "Red";
                } else if (tile === "P") {
                    //this.ctx.fillStyle = "Black";
                    this.drawSprite(this.spriteMap.player,x,y)
                }else if(tile === "D"){
                    this.drawSprite(this.spriteMap.diamond, x,y);
                }else if(tile === "S"){
                    this.drawSprite(this.spriteMap.stone, x,y)
                }


            });
        });
    }

    drawSprite(sprite,  x, y) {
        this.ctx.drawImage(this.image, sprite.x * this.tileSize, sprite.y * this.tileSize, 32, 32, x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);

    }
};

const mapp = new Mapp(600, 600);
console.log(mapp.elements);
mapp.draw();
mapp.image.onload = () => {
    mapp.draw();
}