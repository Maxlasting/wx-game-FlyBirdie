import Resources from './Resources.js'

export default class ResourceLoader {
  constructor() {
    this.map = new Map(Resources)

    for (let [key, val] of this.map) {
      const image = new Image()
      image.src = val
      this.map.set(key, image)
    }
  }

  onLoad(cb) {
    let preset = 0

    for (let imgItem of this.map.values()) {
      imgItem.onload = () => {
        preset++
        if (preset >= this.map.size) {
          cb(this.map)
        }
      }
    }
  }

  static create() {
    return new ResourceLoader()
  }
}
