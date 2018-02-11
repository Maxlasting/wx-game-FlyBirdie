import Pencil from './Pencil.js'
import Sprite from '../base/Sprite.js'

export default class DownPencil extends Pencil {
  constructor(top) {
    const img = Sprite.getImage('pencilDown') 
    super(img, top)
  }
  
  draw() {
    const gap = window.innerHeight / 5
    this.y = this.top + gap
    super.draw()
  }
}