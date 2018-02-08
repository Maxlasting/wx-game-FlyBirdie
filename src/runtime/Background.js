import Sprite from '../base/Sprite.js'

export default class Background extends Sprite {
  constructor() {
    const img = Sprite.getImage('background')
    super({
      img,
      srcX: 0,
      srcY: 0,
      srcW: img.width,
      srcH: img.height,
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
}
