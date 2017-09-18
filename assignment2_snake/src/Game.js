import { drawWalls, initSnake, drawSnake, moveSnake, initFood, drawFood, checkFood, initBadFood} from './helper'
import { 
    UP, DOWN, RIGHT, LEFT,
    MOVING_SPEED, BAD_FOOD_TIMEOUT
} from './options'
var badFood;
class Game {
    constructor() {
        this.canvas = document.querySelector('#snake');
        this.context = this.canvas.getContext('2d');

        // this.canvas.height = parseInt(window.innerHeight) - 20;
        // this.canvas.width = this.canvas.height;

        this.snakeSegments = initSnake();
        this.food = initFood();
        badFood = initFood();
        setTimeout(removeSpoiledFood, 3000);
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
        this.food = checkFood.call(this, this.snakeSegments, this.food);
    }

    render() {
        const { width, height } = this.canvas;
        // background
        drawWalls(this.context, width, height);

        // the snake
        drawSnake(this.context, this.snakeSegments);

        // the food
        drawFood(this.context, this.food, badFood);
        
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

function removeSpoiledFood(){
    console.log("TEST");
    badFood = null;
}
export default Game;