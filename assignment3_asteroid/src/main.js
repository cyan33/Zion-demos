import Game from './engine/Game'
import { increaseScore } from './actions'
import store from './state'
import { drawWalls, drawShip, drawUniverse, drawAsteroids, calculateMovement, checkBounds } from './helper.js'
import { 
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  SHIP_SIZE,
  SHIP_SPRITE,
  CLOCKWISE,
  COUNTERCLOCKWISE,
  VELOCITY,
  ROTATION_STEP,
  MOVE_STEP,
  NUM_ASTEROIDS, ASTEROID_LARGE, ASTEROID_MEDIUM, ASTEROID_SMALL, ASTEROID_1, ASTEROID_2, ASTEROID_3, ASTEROID_4,
  ASTEROID_SPEED
} from './options'
import Ship from './Ship'
import ParticleSystem from './engine/ParticleSystem/ParticleSystem'

class AsteroidGame extends Game {
  constructor() {
    super();
    this.canvas = document.querySelector('#asteroids');
    this.context = this.canvas.getContext('2d');

    this.gameover = false;  // indicate game is over or not

    this.gameloop = this.gameloop.bind(this);

    this.currScore = 0;

    this.shipPosition = {
      x: CANVAS_WIDTH / 2 - SHIP_SIZE.width / 2,
      y: CANVAS_HEIGHT / 2 - SHIP_SIZE.height / 2
    }

    this.ship = new Ship(SHIP_SPRITE, SHIP_SIZE, this.shipPosition, 5, 6);
    this.partSystem = new ParticleSystem();
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

    } else if(e.keyCode === 38) {
      // arrow up
      this.shipPosition = calculateMovement(this.ship, MOVE_STEP, true);
      this.shipPosition = checkBounds(this.shipPosition, CANVAS_WIDTH, CANVAS_HEIGHT, SHIP_SIZE);
      this.ship.updatePosition(this.shipPosition);
      
    } else if(e.keyCode === 39) {
      // Increment ship's rotation clockwise
      this.ship.theta += ROTATION_STEP;

    } else if (e.keyCode === 40) {
      // arrow down
      this.shipPosition = calculateMovement(this.ship, MOVE_STEP, false);
      this.shipPosition = checkBounds(this.shipPosition, CANVAS_WIDTH, CANVAS_HEIGHT, SHIP_SIZE);
      this.ship.updatePosition(this.shipPosition);
    }
    return false; // to prevent the default behavior of the browser
  }

  updateScore() {
    setInterval(() => {
      if (!this.gameover) {
        this.currScore++;
        this.initScorePanel();
      }
    }, 1000);
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

    // Render asteroids
    drawAsteroids(this.context, this.partSystem.particles);

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

  // Initialize asteroids
  initAsteroids() {
    // Some example values for testing
    let options = {
      src: ASTEROID_1,
      size: ASTEROID_LARGE,
      maxHorizontal: CANVAS_WIDTH,
      maxVertical: CANVAS_HEIGHT,
      speed: ASTEROID_SPEED,
      numParticles: 1
    }
    this.partSystem.createRandomizedParticles(options);
    
    options.src = ASTEROID_2;
    options.size = ASTEROID_SMALL;
    this.partSystem.createRandomizedParticles(options);
    
    options.src = ASTEROID_3;
    options.size = ASTEROID_MEDIUM;
    this.partSystem.createRandomizedParticles(options);

    options.src = ASTEROID_4;
    options.size = ASTEROID_LARGE;
    this.partSystem.createRandomizedParticles(options);
  }

  // Initializes base game components
  init() {
    this.timer = setInterval(() => {
      this.gameloop();
    }, 120);
    this.debug();
    this.addKeyboardHandlers();
    this.initScorePanel();
    this.initAsteroids();
    this.updateScore();
  }
}

let asteroids = new AsteroidGame();
asteroids.init();
