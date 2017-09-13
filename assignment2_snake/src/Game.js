import { drawWalls, initSnake, drawSnake } from './helper'
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
        this.isAccelerating = false;
    }

    setMovingDirection() {
        this.movingDirection = d;
    }

    addKeyboardHandlers() {
        document.addEventListener('keydown', () => this.setMovingDirection())
    }

    update() {
        // make the snake move one more step every 1 second
        // according to the direction

        setTimeout(this.update.bind(this), MOVING_SPEED)
    }

    render() {
        const { width, height } = this.canvas;

        // background
        drawWalls(this.context, width, height);

        // the snake
        drawSnake(this.context, this.snakeSegments);

        // the food
    }

    debug() {
        window.snakeSegments = this.snakeSegments;
    }

    gameloop() {
        this.render();
        setTimeout(this.gameloop.bind(this), 30);
    }
    
    init() {
        this.gameloop();
        this.debug();
    }
}

export default Game;