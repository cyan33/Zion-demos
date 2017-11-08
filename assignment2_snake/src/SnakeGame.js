import Game from './engine/Game'
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

        this.snakeSegments = initSnake(0);
        this.obstacles = initObstacles(NUM_OBSTACLES);
        this.food = initFood(this.obstacles);
        this.spoiledFood = initFood(this.obstacles);
        this.audio = initAudio();
        this.snakeSegments2 = null;
        setTimeout(removeSpoiledFood.bind(this), SPOILED_FOOD_TIMEOUT, this.obstacles);
        
        this.movingDirection = RIGHT;
        this.movingDirection2 = RIGHT;
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
        }else if (e.keyCode === 65 && this.movingDirection2 !== RIGHT && this.snakeSegments2 != null) {
            this.movingDirection2 = LEFT;
        } else if (e.keyCode === 87 && this.movingDirection2 !== DOWN && this.snakeSegments2 != null) {
            this.movingDirection2 = UP;
        } else if (e.keyCode === 68 && this.movingDirection2 !== LEFT && this.snakeSegments2 != null) {
            this.movingDirection2 = RIGHT;
        } else if (e.keyCode === 83 && this.movingDirection2 !== UP && this.snakeSegments2 != null) {
            this.movingDirection2 = DOWN;
        } else if (e.keyCode === 77 && this.snakeSegments2 == null) {
            this.snakeSegments2 = initSnake(20);
        }
    }

    addKeyboardHandlers() {
        document.addEventListener('keydown', (e) => this.setMovingDirection(e))
    }

    update() {
        // make the snake move one more step every 1 second
        // according to the direction
        this.snakeSegments = moveSnake.call(this, this.snakeSegments, this.movingDirection);
        if (this.snakeSegments2 != null) {
            this.snakeSegments2 = moveSnake.call(this, this.snakeSegments2, this.movingDirection2);
        }

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

        if (this.snakeSegments2 != null) {
            drawSnake(this.context, this.snakeSegments2);
        }

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
