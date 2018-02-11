import DataStore from './base/DataStroe.js'
import UpPencil from './runtime/UpPencil.js'
import DownPencil from './runtime/DownPencil.js'

export default class Director {
  constructor() {
    this.dataStore = DataStore.getInstance()
    this.speed = 2
  }
  
  createPencil() {
    const minTop = window.innerHeight / 8
    const maxTop = window.innerHeight / 2
    const top = Math.random() * (maxTop - minTop) + minTop
    this.dataStore.get('pencils').push(new UpPencil(top))
    this.dataStore.get('pencils').push(new DownPencil(top))
  }
  
  run() {
    if (this.isGameOver) {
      cancelAnimationFrame(this.dataStore.get('timer'))
      this.dataStore.destroy()
      return
    }
    
    this.dataStore.get('background').draw()
    
    const pencils = this.dataStore.get('pencils')
    
    if (pencils[0].x + pencils[0].width <= 0 && pencils.length === 4) {
      pencils.shift()
      pencils.shift()
    }
    
    if (pencils[0].x <= (window.innerWidth - pencils[0].width) / 2 && pencils.length === 2) {
      this.createPencil()
    }
    
    this.dataStore.get('pencils').forEach((item, index) => {
      item.draw()
    })
    
    this.dataStore.get('land').draw()
    
    const t = requestAnimationFrame(() => this.run())
    this.dataStore.put('timer', t)
  }
  
  static getInstance() {
    if (!Director.instance) {
      Director.instance = new Director()
    }
    return Director.instance
  }
}
