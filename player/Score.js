/**
 * 计分类
 */
import DataStore from '../base/DataStroe.js'

export default  class Score {
  constructor() {
    this.ctx = DataStore.getInstance().ctx
    this.score = 0
    this.addable = true
  }
  
  draw() {
    this.ctx.save()
    this.ctx.font = '25px Arial'
    this.ctx.fillStyle = '#000'
    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'
    this.ctx.fillText(
      this.score,
      DataStore.getInstance().canvas.width / 2,
      DataStore.getInstance().canvas.height / 17,
      1000
    )
    this.ctx.restore()
  }
}