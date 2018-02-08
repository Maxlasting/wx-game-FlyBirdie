import DataStore from './base/DataStroe.js'
import Director from './Director.js'
import ResourceLoader from './base/ResourceLoader.js'
import Background from './runtime/Background.js'
import Land from './runtime/Land.js'

export default class Main {
  constructor() {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')

    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    
    this.dataStore = DataStore.getInstance()

    const loader = ResourceLoader.create()

    loader.onLoad((res) => this.onFirstResourceLoaded(res))
  }

  onFirstResourceLoaded(res) {
    this.dataStore.ctx = this.ctx
    this.dataStore.res = res
    this.init()
  }
  
  init() {
    this.dataStore
      .put('background', Background)
      .put('land', Land)
    
    Director.getInstance().run()
  }
}
