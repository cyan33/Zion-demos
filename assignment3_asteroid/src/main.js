import Game from './engine/Game'
import { increaseScore } from './actions'
import store from './state'
import { drawWalls, drawShip, drawAsteroids } from './helper.js'
import { CANVAS_HEIGHT, CANVAS_WIDTH, SHIP_SIZE, SHIP_SPRITE, CLOCKWISE, COUNTERCLOCKWISE, VELOCITY, ROTATION_SPEED,
         NUM_ASTEROIDS, ASTEROID_LARGE, ASTEROID_MEDIUM, ASTEROID_SMALL, ASTEROID_1, ASTEROID_2, ASTEROID_3, ASTEROID_4,
         ASTEROID_SPEED } from './options'
import Ship from './Ship'
import ParticleSystem from './engine/ParticleSystem/ParticleSystem'

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
    this.partSystem = new ParticleSystem();
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
    console.log('prev:', store.getState().score) // 10
    increaseScore()
    console.log('after:', store.getState().score) // 20
  }

  // render the game according to 
  render() {
    const { width, height } = this.canvas;
    // Render walls
    drawWalls(this.context, width, height);

    // Render ship
    drawShip(this.context, this.ship);

    // Render asteroids
    drawAsteroids(this.context, this.partSystem.particles);
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

  // Initialize asteroids
  initAsteroids() {
    this.partSystem.createRandomizedParticles(ASTEROID_1, ASTEROID_LARGE, CANVAS_HEIGHT, CANVAS_WIDTH, ASTEROID_SPEED, NUM_ASTEROIDS);
  }

  // Initializes base game components
  init() {
    this.timer = requestAnimationFrame(this.gameloop.bind(this));
    this.debug();
    this.addKeyboardHandlers();
    this.initScorePanel();
    this.initAsteroids();
  }
}

let asteroids = new AsteroidGame();
asteroids.init();
