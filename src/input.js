export default class InputHandler {
  constructor(paddle, ctx, rope_enabled) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 32: //SPACE
          paddle.drawRope(ctx, rope_enabled);
          break;
        case 37: //LEFT
          paddle.moveLeft();
          break;
        case 39: //RIGHT
          paddle.moveRight();
          break;
      }

      //alert(event.keyCode);
    });
    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 32: //SPACE
          break;
        case 37: //LEFT
          if (paddle.speed < 0) paddle.stop();
          break;
        case 39: //RIGHT
          if (paddle.speed > 0) paddle.stop();
          break;
      }

      //alert(event.keyCode);
    });
  }
}
