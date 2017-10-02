import Game from './utils/Game'
import { drawWalls, drawObstacles, initAudio, initObstacles, initSnake, drawSnake, moveSnake,
    initFood, drawFood, checkFood, removeSpoiledFood, createSpoiledFood, initSpoiledFood} from './helper'
import { 
    UP, DOWN, RIGHT, LEFT,
    MOVING_SPEED, 
    CANVAS_WIDTH, CANVAS_HEIGHT,
    SPOILED_FOOD_TIMEOUT
} from './options'

const NUM_OBSTACLES = 6;
class SnakeGame extends Game {
    constructor() {
        super();
        this.canvas = document.querySelector('#snake');
        this.context = this.canvas.getContext('2d');

        this.canvas.height = CANVAS_HEIGHT;
        this.canvas.width = CANVAS_WIDTH;

        this.snakeSegments = initSnake();
        this.obstacles = initObstacles(NUM_OBSTACLES);
        this.food = initFood(this.obstacles);
        this.spoiledFood = initFood(this.obstacles);
        this.audio = initAudio();

        setTimeout(removeSpoiledFood.bind(this), SPOILED_FOOD_TIMEOUT, this.obstacles);
        
        this.movingDirection = RIGHT;
        this.currScore = 0;
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
        this.snakeSegments = moveSnake.call(this);
        this.food = checkFood.call(this, this.food, false);
        this.spoiledFood = checkFood.call(this, this.spoiledFood, true);
    }

    render() {
        const { width, height } = this.canvas;
        // background
        drawWalls(this.context, width, height);

        // obstacles
        drawObstacles(this.context, this.obstacles);

        // the snake
        drawSnake(this.context, this.snakeSegments);

        // the food
        drawFood(this.context, this.food, this.spoiledFood);
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

export default SnakeGame;
