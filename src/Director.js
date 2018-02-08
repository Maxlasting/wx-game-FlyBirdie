import DataStore from './base/DataStroe.js'

export default class Director {
  constructor() {
    this.dataStore = DataStore.getInstance()
  }
  
  run() {
    this.dataStore.get('background').draw()
    this.dataStore.get('land').draw()
    
    requestAnimationFrame(() => this.run())
  }
  
  static getInstance() {
    if (!Director.instance) {
      Director.instance = new Director()
    }
    return Director.instance
  }
}
