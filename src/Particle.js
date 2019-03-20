export default class Particle {
  constructor(location, velocity) {
    this.location = location;
    this.velocity = velocity;
  }

  integrate(dt) {
    var GRAVITATIONAL_ACCELERATION = 1 / 2000;
    this.velocity.y += GRAVITATIONAL_ACCELERATION * dt;

    this.location.x += this.velocity.x * dt;
    this.location.y += this.velocity.y * dt;
  }
}
