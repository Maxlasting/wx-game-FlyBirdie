export default class Sprite {
  constructor(props = {}) {
    this.ctx = null
    this.img = null
    this.srcX = 0
    this.srcY = 0
    this.srcW = 0
    this.srcH = 0
    this.x = 0
    this.y = 0
    this.width = 0
    this.height = 0

    Object.assign(this, props)
    console.log(this);
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.srcX,
      this.srcY,
      this.srcW,
      this.srcH,
      this.x,
      this.y,
      this.width,
      this.height,
    )
  }
}
