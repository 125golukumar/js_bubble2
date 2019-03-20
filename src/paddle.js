export default class Paddle {
  constructor(gameHeight, gameWidth) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.width = 80;
    this.height = 100;
    this.maxSpeed = 5;
    this.speed = 0;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight - this.height
    };
  }
  draw(ctx, character) {
    ctx.drawImage(
      character,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update(dt) {
    if (!dt) return;
    if (this.position.x < -25) this.position.x = -25;
    if (this.position.x + this.width > this.gameWidth + 25)
      this.position.x = this.gameWidth - this.width + 25;
    this.position.x += this.speed;
  }
  moveLeft() {
    this.speed = -this.maxSpeed;
    alert("hello");
  }
  moveRight() {
    this.speed = this.maxSpeed;
  }
  stop() {
    this.speed = 0;
  }

  drawRope(ctx, rope_enabled) {
    if (!rope_enabled) return;
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(rope.x * W, H - GROUND_H);
    for (var t = 0; t < rope.y; t += 0.005) {
      ctx.lineTo(
        rope.x * W + 3 * Math.sin(150 * t),
        H - GROUND_H - t * (H - GROUND_H)
      );
    }
    ctx.stroke();
  }
}
