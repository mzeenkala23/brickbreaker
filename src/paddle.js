export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 20;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    };
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(dt) {
    if (!dt) return;
  }
}
