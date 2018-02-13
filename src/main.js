import DataStore from './base/DataStroe.js'
import Director from './Director.js'
import ResourceLoader from './base/ResourceLoader.js'
import Background from './runtime/Background.js'
import Land from './runtime/Land.js'
import Birds from './player/Birds.js'

export default class Main {
  constructor() {
    this.canvas = document.getElementById('canvas')
    this.ctx = this.canvas.getContext('2d')

    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    
    this.dataStore = DataStore.getInstance()
    this.director = Director.getInstance()

    const loader = ResourceLoader.create()

    loader.onLoad((res) => this.onFirstResourceLoaded(res))
  }

  onFirstResourceLoaded(res) {
    this.dataStore.ctx = this.ctx
    this.dataStore.res = res
    this.init()
  }
  
  init() {
    this.director.isGameOver = false
    
    this.dataStore
      .put('background', Background)
      .put('land', Land)
      .put('pencils', [])
      .put('birds', Birds)
    
    this.registerEvent()
    
    this.director.createPencil()
    this.director.run()
  }
  
  registerEvent() {
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault()
      if (this.director.isGameOver) {
        this.init()
      } else {
        this.director.birdsEvent()
      }
    })
  }
}

















