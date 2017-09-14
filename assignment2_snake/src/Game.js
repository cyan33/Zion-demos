import { drawWalls, initSnake, drawSnake, moveSnake } from './helper'
import { 
    UP, DOWN, RIGHT, LEFT,
    MOVING_SPEED
} from './options'

class Game {
    constructor() {
        this.canvas = document.querySelector('#snake');
        this.context = this.canvas.getContext('2d');

        // this.canvas.height = parseInt(window.innerHeight) - 20;
        // this.canvas.width = this.canvas.height;

        this.snakeSegments = initSnake();
        this.movingDirection = RIGHT;
        this.currScore = 0;
        // this.isAccelerating = false;
        
    }

    initScorePanel() {
        const highestScore = localStorage.getItem('highestScore') || 0;
        document.querySelector('.score-panel .current .score').innerHTML = this.currScore;
        document.querySelector('.score-panel .highest .score').innerHTML = highestScore;
    }

    setMovingDirection(e) {
        if (e.keyCode === 37 && this.movingDirection !== RIGHT) {
            this.movingDirection = LEFT;
        } else if (e.keyCode === 38 && this.movingDirection !== DOWN) {
            this.movingDirection = UP;
        } else if (e.keyCode === 39 && this.movingDirection !== LEFT) {
            this.movingDirection = RIGHT;
        } else if (e.keyCode === 40 && this.movingDirection !== UP) {
            this.movingDirection = DOWN;
        }
    }

    addKeyboardHandlers() {
        document.addEventListener('keydown', (e) => this.setMovingDirection(e))
    }

    update() {
        // make the snake move one more step every 1 second
        // according to the direction
        this.snakeSegments = moveSnake.call(this, this.snakeSegments, this.movingDirection);
    }

    render() {
        const { width, height } = this.canvas;
        // background
        drawWalls(this.context, width, height);

        // the snake
        drawSnake(this.context, this.snakeSegments);

        // the food
        // current score
        
    }

    gameloop() {
        this.update();
        this.render();
    }

    debug() {
        window.snakeSegments = this.snakeSegments;
        window.update = this.update.bind(this);
        window.render = this.render.bind(this);
        window.gameloop = this.gameloop.bind(this);
    }
    
    init() {
        this.timer = setInterval(this.gameloop.bind(this), MOVING_SPEED);
        this.debug();
        this.addKeyboardHandlers();
        this.initScorePanel();
    }
}

export default Game;