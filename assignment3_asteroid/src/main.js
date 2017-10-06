import Game from './engine/Game'
import { increaseScore } from './actions'
import store from './state'

class Asteroid extends Game {
  // Specifies keyboard handlers
  addKeyboardHandlers(){

  }

  // the actuall state update is in "reducer"
  // the update is only responsible to dispatch actions
  update(){
    console.log('prev:', store.getState().score) // 10
    increaseScore()
    console.log('after:', store.getState().score) // 20
  }

  // render the game according to 
  render() {
    
  }

  // Optional debugging
  debug() {
    window.store = store
  }

  // Initializes base game components
  init() {
    this.gameloop()
    this.debug()
  }
}

let asteroid = new Asteroid()
asteroid.init()
