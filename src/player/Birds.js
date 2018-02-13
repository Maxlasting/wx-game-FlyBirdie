import Sprite from '../base/Sprite.js'

export default class Birds extends Sprite {
  constructor() {
    const img = Sprite.getImage('birds')
    
    super({
      img,
      srcX: 0,
      srcY: 0,
      srcW: img.width,
      srcH: img.height,
      x: 0,
      y: 0,
      width: img.width,
      height: img.height
    })
    
    this.clippingX = [
      9,
      9 + 34 + 18,
      9 + 34 + 18 + 34 + 18
    ]
    this.clippingY = [10, 10, 10]
    this.clippingWidth = [34, 34, 34]
    this.clippingHeight = [24, 24, 24]
    
    this.birdX = window.innerWidth / 4
    this.birdY = window.innerHeight / 2
    this.birdsX = [this.birdX, this.birdX, this.birdX]
    this.birdsY = [this.birdY, this.birdY, this.birdY]
    
    this.birdWidth = 34
    this.birdHeight = 24
    this.birdsWidth = [this.birdWidth, this.birdWidth, this.birdWidth]
    this.birdsHeight = [this.birdHeight, this.birdHeight, this.birdHeight]
    
    this.index = 0
    this.count = 0
    this.time = 0  
  }
  
  draw() {
    const speed = 0.1

    this.count = this.count < 2 ? this.count + speed : 0
    this.index = Math.floor(this.count)
    
    const g = 0.98 / 3
    const offsetUp = 10
    const offsetY = (g * this.time * (this.time - offsetUp)) / 2
    
    for (let i=0; i<=2; i++) {
      this.birdY += offsetY
    }
    
    this.time++
    
    super.draw({
      img: this.img,
      srcX: this.clippingX[this.index],
      srcY: this.clippingY[this.index],
      srcW: this.birdWidth,
      srcH: this.birdHeight,
      x: this.birdX,
      y: this.birdY,
      width: this.birdWidth,
      height: this.birdHeight
    })
  }
}
























