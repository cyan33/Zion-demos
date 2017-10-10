import Game from './engine/Game'
import { increaseScore } from './actions'
import store from './state'
import { drawWalls, drawShip } from './helper.js'
import { CANVAS_HEIGHT, CANVAS_WIDTH, SHIP_SIZE, SHIP_SPRITE, CLOCKWISE, COUNTERCLOCKWISE } from './options'
import Ship from './Ship'

class AsteroidGame extends Game {
  constructor() {
    super();
    this.canvas = document.querySelector('#asteroids');
    this.context = this.canvas.getContext('2d');

    this.canvas.height = CANVAS_HEIGHT;
    this.canvas.width = CANVAS_WIDTH;
    let x = CANVAS_WIDTH / 2;
    let y = CANVAS_HEIGHT / 2;
    this.ship = new Ship(SHIP_SPRITE, SHIP_SIZE, { x, y }, 5, 6);
  }
  
  // Specifies keyboard handlers
  addKeyboardHandlers(){
    document.addEventListener('keydown', (e) => this.moveShip(e));
  }

  moveShip(e) {
    // Ship updates should all be done in the Ship class
    if(e.keyCode === 37) {
      // Increment ship's rotation counter clockwise
      this.ship.rotate(COUNTERCLOCKWISE);
    } else if(e.keyCode === 38) {
      // Update ship's position in the forward direction
      this.ship.move();
    } else if(e.keyCode === 39) {
      // Increment ship's rotation clockwise
      this.ship.rotate(CLOCKWISE);
    }
  }

  // the actuall state update is in "reducer"
  // the update is only responsible to dispatch actions
  update(){
    // console.log('prev:', store.getState().score) // 10
    // increaseScore()
    // console.log('after:', store.getState().score) // 20
  }

  // render the game according to 
  render() {
    const { width, height } = this.canvas;
    // Render walls
    drawWalls(this.context, width, height);

    // Render ship
    drawShip(this.context, this.ship);
  }

  // Optional debugging
  debug() {
    window.store = store
  }

  // Initialize the score panel based on the current highest score or 0 otherwise
  initScorePanel() {
    const highestScore = localStorage.getItem('highestScore') || 0;
    document.querySelector('.score-panel .current .score').innerHTML = this.currScore;
    document.querySelector('.score-panel .highest .score').innerHTML = highestScore;
  }

  // Initializes base game components
  init() {
    this.timer = setInterval(this.gameloop.bind(this), 30);
    this.debug();
    this.addKeyboardHandlers();
    this.initScorePanel();
    //this.gameloop(); // once for testing purposes
  }
}

let asteroids = new AsteroidGame();
asteroids.init();