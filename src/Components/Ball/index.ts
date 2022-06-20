class Ball {
  radius: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
  constructor(
    stageWidth: number,
    stageHeight: number,
    radius: number,
    speed: number
  ) {
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;

    this.x = 100;
    this.y = 100;
  }

  draw(ctx: CanvasRenderingContext2D, stageWidth: number, stageHeight: number) {
    this.x += this.vx;
    this.y += this.vy;

    this.bounceWindow(stageWidth, stageHeight);

    ctx.fillStyle = "#fdd700";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  bounceWindow(stageWidth: number, stageHeight: number) {
    const minX = this.radius;
    const maxX = stageWidth - this.radius;
    const minY = this.radius;
    const maxY = stageHeight - this.radius;

    if (this.x <= minX || this.x >= maxX) {
      this.vx *= -1;
      this.x += this.vx;
    } else if (this.y <= minY || this.y >= maxY) {
      this.vy *= -1;
      this.y += this.vy;
    }
  }
}

export default Ball;
