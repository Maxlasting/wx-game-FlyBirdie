import Pencil from './Pencil.js'
import Sprite from '../base/Sprite.js'
import DataStore from '../base/DataStroe.js'

export default class DownPencil extends Pencil {
  constructor(top) {
    const img = Sprite.getImage('pencilDown') 
    super(img, top)
  }
  
  draw() {
    const gap = DataStore.getInstance().canvas.height / 5
    this.y = this.top + gap
    super.draw()
  }
}