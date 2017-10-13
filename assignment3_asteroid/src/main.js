import Game from './engine/Game'
import { increaseScore } from './actions'
import store from './state'
import { drawWalls, drawShip, drawUniverse } from './helper.js'
import { 
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  SHIP_SIZE,
  SHIP_SPRITE,
  CLOCKWISE,
  COUNTERCLOCKWISE,
  VELOCITY,
  ROTATION_STEP,
  MOVE_STEP
} from './options'
import Ship from './Ship'

class AsteroidGame extends Game {
  constructor() {
    super();
    this.canvas = document.querySelector('#asteroids');
    this.context = this.canvas.getContext('2d');

    this.firstTimeRender = true;

    this.gameloop = this.gameloop.bind(this);

    this.currScore = 0;

    this.shipPosition = {
      x: CANVAS_WIDTH / 2 - SHIP_SIZE.width / 2,
      y: CANVAS_HEIGHT / 2 - SHIP_SIZE.height / 2
    }

    this.canvas.height = CANVAS_HEIGHT;
    this.canvas.width = CANVAS_WIDTH;

    this.ship = new Ship(SHIP_SPRITE, SHIP_SIZE, this.shipPosition, 5, 6);
  }
  
  // Specifies keyboard handlers
  addKeyboardHandlers(){
    document.addEventListener('keydown', (e) => this.moveShip(e));
  }

  moveShip(e) {
    e.preventDefault();
    // Ship updates should all be done in the Ship class
    if(e.keyCode === 37) {
      // Increment ship's rotation counter clockwise
      this.ship.theta = this.ship.theta - ROTATION_STEP; 

      console.log(this.ship.theta);

    } else if(e.keyCode === 38) {
      // arrow up
      
      this.shipPosition.y = this.shipPosition.y < 0 ? 0 : this.shipPosition.y - MOVE_STEP
      
      this.ship.updatePosition(this.shipPosition);
      
    } else if(e.keyCode === 39) {
      // Increment ship's rotation clockwise
      this.ship.theta += ROTATION_STEP;
      console.log(this.ship.theta);
    } else if (e.keyCode === 40) {
      // arrow down
      this.shipPosition.y = this.shipPosition.y > this.canvas.height ? this.canvas.height : this.shipPosition.y + MOVE_STEP
      this.ship.updatePosition(this.shipPosition);
    }
    return false; // to prevent the default behavior of the browser
  }

  // the actuall state update is in "reducer"
  // the update is only responsible to dispatch actions
  update(){
  }

  // render the game according to 
  render() {
    const { width, height } = this.canvas;
    // Render walls, background
    drawWalls(this.context, width, height);
    drawUniverse(this.context, width, height);

    // Render ship
    drawShip(this.context, this.ship);
  }

  // Optional debugging
  debug() {
    window.store = store
    window.ctx = this.context
    window.ship = this.ship
  }

  // Initialize the score panel based on the current highest score or 0 otherwise
  initScorePanel() {
    const highestScore = localStorage.getItem('highestScore') || 0;
    document.querySelector('.score-panel .current .score').innerHTML = this.currScore;
    document.querySelector('.score-panel .highest .score').innerHTML = highestScore;
  }

  // Initializes base game components
  init() {
    this.timer = setInterval(() => {
      this.gameloop();
    }, 120);
    this.gameloop();
    this.debug();
    this.addKeyboardHandlers();
    this.initScorePanel();
  }
}

let asteroids = new AsteroidGame();
asteroids.init();
