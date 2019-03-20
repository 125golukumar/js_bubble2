import Paddle from "/src/paddle";
import InputHandler from "/src/input";
import Vector from "/src/Vector";
import Bubble from "/src/bubble";
import Particle from "/src/Particle";

const GAME_WIDTH = 1200;
const GAME_HEIGHT = 620;

var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");
var character = new Image();
character.src = "/src/images/char1.png";
var p = "asdf";
var vector = new Vector(0.75, 0.5);
var bubbles = [
  new Bubble(new Particle(vector, vector.fromPolar(0, 0.003)), 3),
  new Bubble(new Particle(vector, vector.fromPolar(-Math.PI, 0.003)), 1),
  new Bubble(new Particle(vector, vector.fromPolar(-Math.PI, 0.003)), 2)
];

var rope = new Vector(0, 0),
  rope_enabled = false;

var paddle = new Paddle(GAME_HEIGHT, GAME_WIDTH);
new InputHandler(paddle, ctx, rope_enabled);

var lastTime = 0;

function gameLoop(timestamp) {
  var dt = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, 1200, 620);
  paddle.draw(ctx, character);
  paddle.update(dt);

  requestAnimationFrame(gameLoop);
}
function ctx_ret() {
  return ctx;
}
gameLoop();
