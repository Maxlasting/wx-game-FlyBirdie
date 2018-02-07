export default class Director {
  constructor() {
    console.log('ok');
  }

  static getInstance() {
    if (!Director.instance) {
      Director.instance = new Director()
    }
    return Director.instance
  }
}
