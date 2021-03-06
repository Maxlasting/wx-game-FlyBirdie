import Sprite from '../base/Sprite.js'
import Director from '../Director.js'

export default class Land extends Sprite {
  constructor() {
    const img = Sprite.getImage('land')
    
    super({
      img,
      srcX: 0,
      srcY: 0,
      srcW: img.width,
      srcH: img.height,
      x: 0,
      y: window.innerHeight - img.height,
      width: img.width,
      height: img.height
    })
    
    this.landX = 0 
    this.speedX = Director.getInstance().speed
  }
  
  draw() {
    if (this.landX >= this.img.width) {
      this.landX = 0   
    }
    
    super.draw({
      x: -this.landX
    })
    
    super.draw({
      x: -this.landX + this.img.width
    })
    
    this.landX += this.speedX
  }
}
