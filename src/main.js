import Director from './Director.js'
import ResourceLoader from './base/ResourceLoader.js'
import Background from './runtime/Background.js'

export default class Main {
  constructor() {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')

    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight

    const loader = ResourceLoader.create()

    loader.onLoad((map) => this.onFirstResourceLoaded(map))
  }

  onFirstResourceLoaded(map) {
    let background = new Background(this.ctx, map.get('background'))
    background.draw()
  }
}
