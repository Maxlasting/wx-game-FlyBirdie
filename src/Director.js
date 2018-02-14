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
  
  birdsEvent() {
    // for (let i=0; i<3; i++) {
    //   this.dataStore.get('birds').y[i] = this.dataStore.get('birds').birdsY[i]
    // }
    this.dataStore.get('birds').y = this.dataStore.get('birds').birdY
    this.dataStore.get('birds').time = 0
  }
  
  check() {
    const birds = this.dataStore.get('birds')
    const land = this.dataStore.get('land')
    
    if (birds.birdY + birds.birdHeight >= land.y) {
      this.isGameOver = true
      console.log('游戏结束')
    }
    
    const pencils = this.dataStore.get('pencils')
    
    const birdRect = {
      left: birds.birdX,
      top: birds.birdY,
      right: birds.birdX + birds.birdWidth,
      bottom: birds.birdY + birds.birdHeight
    }
    
    for (let i=0; i<pencils.length; i++) {
      const pencilRect = {
        left: pencils[i].x,
        top: pencils[i].y,
        right: pencils[i].x + pencils[i].width,
        bottom: pencils[i].y + pencils[i].height
      }
      
      if (Director.checkHit(birdRect, pencilRect)) {
        this.isGameOver = true
        console.log('游戏结束')
        return
      }
    }
    
    const Score = this.dataStore.get('score')
    
    if (birds.birdX > pencils[0].x + pencils[0].width && Score.addable) {
      Score.score ++
      Score.addable = false
    }
  }
  
  run() {
    this.check()
    
    if (this.isGameOver) {
      this.dataStore.get('startButton').draw()
      cancelAnimationFrame(this.dataStore.get('timer'))
      this.dataStore.destroy()
      return
    }
    
    this.dataStore.get('background').draw()
    
    const pencils = this.dataStore.get('pencils')
    
    if (pencils[0].x + pencils[0].width <= 0 && pencils.length === 4) {
      pencils.shift()
      pencils.shift()
      this.dataStore.get('score').addable = true
    }
    
    if (pencils[0].x <= (window.innerWidth - pencils[0].width) / 2 && pencils.length === 2) {
      this.createPencil()
    }
    
    this.dataStore.get('pencils').forEach((item, index) => {
      item.draw()
    })
    
    this.dataStore.get('land').draw()
    this.dataStore.get('score').draw()
    this.dataStore.get('birds').draw()
    
    const t = requestAnimationFrame(() => this.run())
    this.dataStore.put('timer', t)
  }
  
  static getInstance() {
    if (!Director.instance) {
      Director.instance = new Director()
    }
    return Director.instance
  }
  
  static checkHit(birds, pencil) {
    return birds.right > pencil.left && birds.left < pencil.right && birds.top < pencil.bottom && birds.bottom > pencil.top
  }
}
