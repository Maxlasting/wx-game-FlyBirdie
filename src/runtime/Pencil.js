/**
 * 铅笔基类
 */
import Sprite from '../base/Sprite.js'
import Director from '../Director.js'

export default class Pencil extends Sprite {
  constructor (img, top) {
    super({
      img,
      srcX: 0,
      srcY: 0,
      srcW: img.width,
      srcH: img.height,
      x: window.innerWidth,
      y: 0,
      width: img.width,
      height: img.height
    })
    this.top = top
  }
  
  draw() {
    this.x -= Director.getInstance().speed
    super.draw({
      img: this.img,
      srcX: 0,
      srcY: 0,
      srcW: this.width,
      srcH: this.height,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    })
  }
}