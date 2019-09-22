import Paddle from "/src/paddle";
import InputHandler from "/src/input";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
new InputHandler();

paddle.draw(ctx);

let lastTime = 0;

function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;

  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(ctx);

  window.requestAnimationFrame(gameLoop);
}
gameLoop();
