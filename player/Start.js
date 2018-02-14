import Sprite from '../base/Sprite.js'
import DataStore from '../base/DataStroe.js'

export default class Start extends Sprite {
  constructor() {
    const img = Sprite.getImage('startButton')
    super({
      img,
      srcX: 0,
      srcY: 0,
      srcW: img.width,
      srcH: img.height,
      x: (DataStore.getInstance().canvas.width - img.width) / 2,
      y: (DataStore.getInstance().canvas.height - img.height) / 2.5,
      width: img.width,
      height: img.height
    })
  }
}