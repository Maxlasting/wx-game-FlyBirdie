import DataStore from './DataStroe.js'

export default class Sprite {
  constructor(props = {}) {
    this.dataStore = DataStore.getInstance()
    this.ctx = this.dataStore.ctx
    
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
  }

  draw(props = {}) {
    const types = Object.assign({}, this, props)
    const {img, srcX, srcY, srcW, srcH, x, y, width, height} = types

    this.ctx.drawImage(
      img,
      srcX,
      srcY,
      srcW,
      srcH,
      x,
      y,
      width,
      height,
    )
  }
  
  static getImage(key) {
    return DataStore.getInstance().res.get(key)
  }
}
