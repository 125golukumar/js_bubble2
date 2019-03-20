export default class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  fromPolar(angle, length) {
    return new Vector(length * Math.cos(angle), -length * Math.sin(angle));
  }
}
