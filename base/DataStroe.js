export default class DataStore {
  constructor() {
    this.map = new Map()
  }
  
  put(key, val) {
    if (typeof val === 'function') {
      val = new val()
    }
    this.map.set(key, val)
    return this
  }
  
  get(key) {
    return this.map.get(key)
  }
  
  destroy() {
    for (let value of this.map.values()) {
      value = null
    }
  }
  
  static getInstance() {
    if (!DataStore.instance) {
      DataStore.instance = new DataStore()
    }
    return DataStore.instance
  }
}
