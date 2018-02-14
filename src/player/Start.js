import Sprite from '../base/Sprite.js'

export default class Start extends Sprite {
  constructor() {
    const img = Sprite.getImage('startButton')
    super({
      img,
      srcX: 0,
      srcY: 0,
      srcW: img.width,
      srcH: img.height,
      x: (window.innerWidth - img.width) / 2,
      y: (window.innerHeight - img.height) / 2.5,
      width: img.width,
      height: img.height
    })
  }
}