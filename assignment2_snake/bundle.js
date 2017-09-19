/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Sprite {
    constructor(src, size, { x, y }) {
        this.src = src;
        this.size = size;
        this.position = { x, y };
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Sprite);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const SNAKE_INIT_LENGTH = 5;
/* harmony export (immutable) */ __webpack_exports__["o"] = SNAKE_INIT_LENGTH;


const RIGHT = 'RIGHT';
/* harmony export (immutable) */ __webpack_exports__["l"] = RIGHT;

const UP = 'UP';
/* harmony export (immutable) */ __webpack_exports__["q"] = UP;

const LEFT = 'LEFT';
/* harmony export (immutable) */ __webpack_exports__["g"] = LEFT;

const DOWN = 'DOWN';
/* harmony export (immutable) */ __webpack_exports__["e"] = DOWN;


const SEGMENT_WIDTH = 15;
/* harmony export (immutable) */ __webpack_exports__["n"] = SEGMENT_WIDTH;


const CANVAS_WIDTH = 600;
/* harmony export (immutable) */ __webpack_exports__["c"] = CANVAS_WIDTH;

const CANVAS_HEIGHT = 620;
/* harmony export (immutable) */ __webpack_exports__["b"] = CANVAS_HEIGHT;


const OBSTACLE_SIZE = 45;
/* harmony export (immutable) */ __webpack_exports__["k"] = OBSTACLE_SIZE;

const BOUNDARY_PROX = 0.7;
/* harmony export (immutable) */ __webpack_exports__["a"] = BOUNDARY_PROX;

const OBSTACLE_PROX = 2;
/* harmony export (immutable) */ __webpack_exports__["j"] = OBSTACLE_PROX;

const FOOD_FROM_OBSTACLE = 5;
/* harmony export (immutable) */ __webpack_exports__["f"] = FOOD_FROM_OBSTACLE;

const OBSTACLE_FROM_OBSTACLE = 20;
/* harmony export (immutable) */ __webpack_exports__["i"] = OBSTACLE_FROM_OBSTACLE;


const ROWS = CANVAS_WIDTH / SEGMENT_WIDTH;
/* harmony export (immutable) */ __webpack_exports__["m"] = ROWS;

const COLS = CANVAS_HEIGHT / SEGMENT_WIDTH;
/* harmony export (immutable) */ __webpack_exports__["d"] = COLS;


const MOVING_SPEED = 250;
/* harmony export (immutable) */ __webpack_exports__["h"] = MOVING_SPEED;
 // 1000ms interval for setTimeout
const ACCELERATING_SPEED = 400;
/* unused harmony export ACCELERATING_SPEED */


const SPOILED_FOOD_TIMEOUT = 7000;
/* harmony export (immutable) */ __webpack_exports__["p"] = SPOILED_FOOD_TIMEOUT;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export removeMultiElementFromArray */
/* harmony export (immutable) */ __webpack_exports__["b"] = getRandomNumber;
/* harmony export (immutable) */ __webpack_exports__["a"] = getDistance;
function removeMultiElementFromArray(arr, ...indexes) {
    indexes.sort((a, b) => b - a); // decendent

    for (let i = 0; i < indexes.length; i++) {
        arr.splice(indexes[i], 1);
    }

    return arr;
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getDistance(x1, y1, x2, y2) {
    return Math.abs(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(4);


let game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */]();
game.init();

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(1);



const NUM_OBSTACLES = 6;
class Game {
    constructor() {
        this.canvas = document.querySelector('#snake');
        this.context = this.canvas.getContext('2d');

        this.canvas.height = __WEBPACK_IMPORTED_MODULE_1__options__["b" /* CANVAS_HEIGHT */];
        this.canvas.width = __WEBPACK_IMPORTED_MODULE_1__options__["c" /* CANVAS_WIDTH */];

        this.snakeSegments = Object(__WEBPACK_IMPORTED_MODULE_0__helper__["h" /* initSnake */])();
        this.obstacles = Object(__WEBPACK_IMPORTED_MODULE_0__helper__["g" /* initObstacles */])(NUM_OBSTACLES);
        this.food = Object(__WEBPACK_IMPORTED_MODULE_0__helper__["f" /* initFood */])(this.obstacles);
        this.spoiledFood = Object(__WEBPACK_IMPORTED_MODULE_0__helper__["f" /* initFood */])(this.obstacles);

        setTimeout(__WEBPACK_IMPORTED_MODULE_0__helper__["j" /* removeSpoiledFood */].bind(this), __WEBPACK_IMPORTED_MODULE_1__options__["p" /* SPOILED_FOOD_TIMEOUT */], this.obstacles);

        this.movingDirection = __WEBPACK_IMPORTED_MODULE_1__options__["l" /* RIGHT */];
        this.currScore = 0;
        // this.isAccelerating = false;
    }

    initScorePanel() {
        const highestScore = localStorage.getItem('highestScore') || 0;
        document.querySelector('.score-panel .current .score').innerHTML = this.currScore;
        document.querySelector('.score-panel .highest .score').innerHTML = highestScore;
    }

    setMovingDirection(e) {
        if (e.keyCode === 37 && this.movingDirection !== __WEBPACK_IMPORTED_MODULE_1__options__["l" /* RIGHT */]) {
            this.movingDirection = __WEBPACK_IMPORTED_MODULE_1__options__["g" /* LEFT */];
        } else if (e.keyCode === 38 && this.movingDirection !== __WEBPACK_IMPORTED_MODULE_1__options__["e" /* DOWN */]) {
            this.movingDirection = __WEBPACK_IMPORTED_MODULE_1__options__["q" /* UP */];
        } else if (e.keyCode === 39 && this.movingDirection !== __WEBPACK_IMPORTED_MODULE_1__options__["g" /* LEFT */]) {
            this.movingDirection = __WEBPACK_IMPORTED_MODULE_1__options__["l" /* RIGHT */];
        } else if (e.keyCode === 40 && this.movingDirection !== __WEBPACK_IMPORTED_MODULE_1__options__["q" /* UP */]) {
            this.movingDirection = __WEBPACK_IMPORTED_MODULE_1__options__["e" /* DOWN */];
        }
    }

    addKeyboardHandlers() {
        document.addEventListener('keydown', e => this.setMovingDirection(e));
    }

    update() {
        // make the snake move one more step every 1 second
        // according to the direction
        this.snakeSegments = __WEBPACK_IMPORTED_MODULE_0__helper__["i" /* moveSnake */].call(this);
        this.food = __WEBPACK_IMPORTED_MODULE_0__helper__["a" /* checkFood */].call(this, this.food, false);
        this.spoiledFood = __WEBPACK_IMPORTED_MODULE_0__helper__["a" /* checkFood */].call(this, this.spoiledFood, true);
    }

    render() {
        const { width, height } = this.canvas;
        // background
        Object(__WEBPACK_IMPORTED_MODULE_0__helper__["e" /* drawWalls */])(this.context, width, height);

        // obstacles
        Object(__WEBPACK_IMPORTED_MODULE_0__helper__["c" /* drawObstacles */])(this.context, this.obstacles);

        // the snake
        Object(__WEBPACK_IMPORTED_MODULE_0__helper__["d" /* drawSnake */])(this.context, this.snakeSegments);

        // the food
        Object(__WEBPACK_IMPORTED_MODULE_0__helper__["b" /* drawFood */])(this.context, this.food, this.spoiledFood);
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
        this.timer = setInterval(this.gameloop.bind(this), __WEBPACK_IMPORTED_MODULE_1__options__["h" /* MOVING_SPEED */]);
        this.debug();
        this.addKeyboardHandlers();
        this.initScorePanel();
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Game);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = drawWalls;
/* harmony export (immutable) */ __webpack_exports__["h"] = initSnake;
/* harmony export (immutable) */ __webpack_exports__["d"] = drawSnake;
/* harmony export (immutable) */ __webpack_exports__["i"] = moveSnake;
/* harmony export (immutable) */ __webpack_exports__["a"] = checkFood;
/* harmony export (immutable) */ __webpack_exports__["f"] = initFood;
/* harmony export (immutable) */ __webpack_exports__["b"] = drawFood;
/* harmony export (immutable) */ __webpack_exports__["j"] = removeSpoiledFood;
/* unused harmony export createSpoiledFood */
/* harmony export (immutable) */ __webpack_exports__["g"] = initObstacles;
/* harmony export (immutable) */ __webpack_exports__["c"] = drawObstacles;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Segment__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Food__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_operations__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_Obstacle__ = __webpack_require__(8);






function drawWalls(context, width, height) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = 'black';
    context.strokeRect(0, 0, width, height);
}

function initSnake() {
    // 600 x 600 => 40 x 40

    let snakeSegments = [];
    for (let i = __WEBPACK_IMPORTED_MODULE_1__options__["o" /* SNAKE_INIT_LENGTH */] - 1; i >= 0; i--) {
        // the position is the relative index, not the exact pixel
        snakeSegments.push(new __WEBPACK_IMPORTED_MODULE_0__Segment__["a" /* default */]({}, { x: i, y: 0 }));
    }
    return snakeSegments;
}

function drawSingleSegment(context, { x, y }) {
    context.fillStyle = 'green';
    context.fillRect(x * __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */], y * __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */], __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */], __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */]);
    context.strokeStyle = 'white';
    context.strokeRect(x * __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */], y * __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */], __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */], __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */]);
}

function drawSnake(context, snakeSegments) {
    context.save();
    snakeSegments.forEach(s => {
        const { x, y } = s.position;
        drawSingleSegment(context, { x, y });
    });
    context.restore();
}

function isCollidesWall(head) {
    // head.x, head.y
    return head.x >= __WEBPACK_IMPORTED_MODULE_1__options__["m" /* ROWS */] || head.x < 0 || head.y >= __WEBPACK_IMPORTED_MODULE_1__options__["d" /* COLS */] || head.y < 0;
}

function isCollidesFood(head, food, spoiledFood = null) {
    if (head.x === food.x && head.y === food.y) {
        return 1;
    } else if (spoiledFood && head.x === spoiledFood.position.x && head.y === spoiledFood.position.y) {
        return -1;
    } else {
        return 0;
    }
}

function isCollidesItself(head, snakeSegments) {
    for (let i = 0; i < snakeSegments.length; i++) {
        if (head.x == snakeSegments[i].position.x && head.y == snakeSegments[i].position.y) {
            return true;
        }
    }
    return false;
}

function isCollidesObstacle(head, obstacles) {
    // do collision check for each obstacle
    let centerX = head.x + .5 * head.size;
    let centerY = head.y + .5 * head.size;
    let closest = getClosestObstacle({ x: centerX, y: centerY }, obstacles);
    if (closest.getCollision(centerX, centerY, __WEBPACK_IMPORTED_MODULE_1__options__["k" /* OBSTACLE_SIZE */] / __WEBPACK_IMPORTED_MODULE_1__options__["j" /* OBSTACLE_PROX */], __WEBPACK_IMPORTED_MODULE_1__options__["a" /* BOUNDARY_PROX */])) return true;
    return false;
}

function getClosestObstacle(head, obstacles) {
    let smallest_dist = Number.MAX_VALUE;
    let closest_obs = null;
    for (let i = 0; i < obstacles.length; i++) {
        let obs = obstacles[i];
        let distance = Object(__WEBPACK_IMPORTED_MODULE_3__utils_operations__["a" /* getDistance */])(head.x, head.y, obs.center.x, obs.center.y);
        if (distance < smallest_dist) {
            smallest_dist = distance;
            closest_obs = obs;
        }
    }
    return closest_obs;
}

function updateLocalStorage(score) {
    let highestScore = localStorage.getItem('highestScore') || 0;
    if (score > highestScore) {
        localStorage.setItem('highestScore', score);
    }
}

function showRestartLayer() {
    document.querySelector('.restart-layer').style.display = 'block';
    document.querySelector("button").addEventListener("click", reload);
}

function reload() {
    location.reload();
}

function nearObstacles(obj, obstacles, offset) {
    // want to check for all obstacles
    let near = false;
    for (let i = 0; i < obstacles.length; i++) {
        let check = obstacles[i];
        // ensure we're not within distance range of check size
        if (check.nearObstacle(obj.position.x, obj.position.y, offset)) near = true;
    }
    return near;
}

function moveSnake() {
    const {
        snakeSegments,
        movingDirection,
        food,
        spoiledFood,
        obstacles
    } = this;

    // construct a new head segment according to the moving direction
    let nx = snakeSegments[0].position.x;
    let ny = snakeSegments[0].position.y;

    if (movingDirection === __WEBPACK_IMPORTED_MODULE_1__options__["g" /* LEFT */]) nx -= 1;else if (movingDirection === __WEBPACK_IMPORTED_MODULE_1__options__["l" /* RIGHT */]) nx += 1;else if (movingDirection === __WEBPACK_IMPORTED_MODULE_1__options__["q" /* UP */]) ny -= 1;else if (movingDirection === __WEBPACK_IMPORTED_MODULE_1__options__["e" /* DOWN */]) ny += 1;

    // check collision with itself, crosses the wall, or hits an obstacle
    if (isCollidesWall({ x: nx, y: ny }) || isCollidesItself({ x: nx, y: ny }, snakeSegments) || isCollidesObstacle({ x: nx, y: ny, size: 1 }, obstacles)) {
        updateLocalStorage(this.currScore);

        clearInterval(this.timer);
        showRestartLayer();
    }
    let head = new __WEBPACK_IMPORTED_MODULE_0__Segment__["a" /* default */]({}, { x: nx, y: ny });
    // check if it eats food
    var collision = isCollidesFood({ x: nx, y: ny }, food.position, spoiledFood);
    if (collision == 1) {
        // score++ and call this.initScorePanel()
        this.currScore++;
        this.initScorePanel();
    } else if (collision == -1) {
        this.currScore--;
        this.initScorePanel();
        snakeSegments.pop();
        snakeSegments.pop();
    } else {
        snakeSegments.pop();
    }

    snakeSegments.unshift(head);
    return snakeSegments;
}

function checkFood(food, isSpoiled) {
    if (food == null) {
        return null;
    }
    const { snakeSegments, obstacles } = this;
    let pos = snakeSegments[0].position;

    let newFood = food;
    // check if it eats food
    if (isCollidesFood(pos, food.position) != 0) {
        if (isSpoiled) {
            return null;
        }
        newFood = initFood(obstacles);
    }
    return newFood;
}

function initFood(obstacles) {
    let food = null;
    do {
        let xPos = Object(__WEBPACK_IMPORTED_MODULE_3__utils_operations__["b" /* getRandomNumber */])(__WEBPACK_IMPORTED_MODULE_1__options__["d" /* COLS */]);
        let yPos = Object(__WEBPACK_IMPORTED_MODULE_3__utils_operations__["b" /* getRandomNumber */])(__WEBPACK_IMPORTED_MODULE_1__options__["m" /* ROWS */]);
        food = new __WEBPACK_IMPORTED_MODULE_2__Food__["a" /* default */]({}, { x: xPos, y: yPos });
    } while (nearObstacles(food, obstacles, __WEBPACK_IMPORTED_MODULE_1__options__["f" /* FOOD_FROM_OBSTACLE */]) || food.x >= __WEBPACK_IMPORTED_MODULE_1__options__["d" /* COLS */] - 2 || food.y >= __WEBPACK_IMPORTED_MODULE_1__options__["m" /* ROWS */] - 2);
    return food;
}

function drawFood(context, food, spoiledFood) {
    context.save();
    context.fillStyle = '#de9f5f';
    context.fillRect(food.position.x * __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */], food.position.y * __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */], __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */], __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */]);
    if (spoiledFood != null) {
        context.fillStyle = '#FF0000';
        context.fillRect(spoiledFood.position.x * __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */], spoiledFood.position.y * __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */], __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */], __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */]);
    }
    context.restore();
}

function removeSpoiledFood() {
    this.spoiledFood = null;
    setTimeout(createSpoiledFood.bind(this), __WEBPACK_IMPORTED_MODULE_1__options__["p" /* SPOILED_FOOD_TIMEOUT */]);
}

function createSpoiledFood() {
    this.spoiledFood = initFood(this.obstacles);
    setTimeout(removeSpoiledFood.bind(this), __WEBPACK_IMPORTED_MODULE_1__options__["p" /* SPOILED_FOOD_TIMEOUT */]);
}

function initObstacles(num_obs) {
    let obstacles = new Array();

    for (let i = 0; i < num_obs; i++) {
        let x = 0;
        let y = 0;
        let obs = null;
        do {
            x = Object(__WEBPACK_IMPORTED_MODULE_3__utils_operations__["b" /* getRandomNumber */])(__WEBPACK_IMPORTED_MODULE_1__options__["d" /* COLS */]);
            y = Object(__WEBPACK_IMPORTED_MODULE_3__utils_operations__["b" /* getRandomNumber */])(__WEBPACK_IMPORTED_MODULE_1__options__["m" /* ROWS */]);
            obs = new __WEBPACK_IMPORTED_MODULE_4__utils_Obstacle__["a" /* default */]('', __WEBPACK_IMPORTED_MODULE_1__options__["k" /* OBSTACLE_SIZE */] / __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */], { x, y });
        } while (nearObstacles(obs, obstacles, Object(__WEBPACK_IMPORTED_MODULE_3__utils_operations__["b" /* getRandomNumber */])(__WEBPACK_IMPORTED_MODULE_1__options__["i" /* OBSTACLE_FROM_OBSTACLE */])) || x > __WEBPACK_IMPORTED_MODULE_1__options__["d" /* COLS */] - __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */] || y > __WEBPACK_IMPORTED_MODULE_1__options__["m" /* ROWS */] - __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */] || x <= __WEBPACK_IMPORTED_MODULE_1__options__["k" /* OBSTACLE_SIZE */] / __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */] && y <= __WEBPACK_IMPORTED_MODULE_1__options__["k" /* OBSTACLE_SIZE */] / __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */]);
        obstacles.push(obs);
    }

    return obstacles;
}

function drawObstacles(context, obstacles) {
    for (let i = 0; i < obstacles.length; i++) {
        let obstacle = obstacles[i];
        context.save();
        context.fillStyle = 'black';
        context.fillRect(obstacle.position.x * __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */], obstacle.position.y * __WEBPACK_IMPORTED_MODULE_1__options__["n" /* SEGMENT_WIDTH */], __WEBPACK_IMPORTED_MODULE_1__options__["k" /* OBSTACLE_SIZE */], __WEBPACK_IMPORTED_MODULE_1__options__["k" /* OBSTACLE_SIZE */]);
        context.restore();
    }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_Sprite__ = __webpack_require__(0);


class Segment extends __WEBPACK_IMPORTED_MODULE_0__utils_Sprite__["a" /* default */] {
    constructor(size, { x, y }) {
        super('', size, { x, y });
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Segment);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_Sprite__ = __webpack_require__(0);


class Food extends __WEBPACK_IMPORTED_MODULE_0__utils_Sprite__["a" /* default */] {
    constructor(size, { x, y }) {
        super('', size, { x, y });
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Food);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sprite__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operations__ = __webpack_require__(2);


const NUM_SECTIONS = 9;

class Obstacle extends __WEBPACK_IMPORTED_MODULE_0__Sprite__["a" /* default */] {
    constructor(src, size, { x, y }) {
        super(src, size, { x, y });
        this.center = this.calculateCenter(this.position.x, this.position.y, this.size);
        this.calculateBoundaries();
    }

    // calculates the center for this boundary
    calculateCenter(x_coord, y_coord, width) {
        return { x: x_coord + .5 * width, y: y_coord + .5 * width };
    }

    // subdivides this obstacle into boundaries for collision detection
    calculateBoundaries() {
        this.boundaries = new Array();
        let sections_rc = Math.sqrt(NUM_SECTIONS);
        let width = this.size / sections_rc;
        let x = this.position.x,
            y = this.position.y;
        // Define boundaries based on number of sections
        for (let i = 0; i < sections_rc; i++) {
            for (let j = 0; j < sections_rc; j++) {
                this.boundaries.push(this.calculateCenter(x, y, width));
                x += width;
            }
            x = this.position.x;
            y += width;
        }
    }

    // Gets the collision for this obstacle and the given object
    getCollision(objX, objY, prox, boundary_prox) {
        // check if we're near this obstacle
        if (this.nearObstacle(objX, objY, prox)) {
            for (let i = 0; i < this.boundaries.length; i++) {
                let boundary = this.boundaries[i];
                if (this.nearBoundary(objX, objY, boundary.x, boundary.y, boundary_prox)) return true;
            }
        }
        return false;
    }

    nearObstacle(objX, objY, prox) {
        let distance = Object(__WEBPACK_IMPORTED_MODULE_1__operations__["a" /* getDistance */])(objX, objY, this.center.x, this.center.y);
        return distance <= prox ? true : false;
    }

    // Checks if an object is near this boundary
    nearBoundary(objX, objY, boundX, boundY, prox) {
        let distance = Object(__WEBPACK_IMPORTED_MODULE_1__operations__["a" /* getDistance */])(objX, objY, boundX, boundY);
        return distance <= prox;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Obstacle);

/***/ })
/******/ ]);