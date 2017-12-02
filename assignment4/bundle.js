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
/* unused harmony export removeMultiElementFromArray */
/* harmony export (immutable) */ __webpack_exports__["c"] = getRandomNumber;
/* harmony export (immutable) */ __webpack_exports__["b"] = getDistance;
/* harmony export (immutable) */ __webpack_exports__["a"] = calculateCenter;
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

function calculateCenter(x_coord, y_coord, width, height) {
    return { x: x_coord + .5 * width, y: y_coord + .5 * height };
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operations__ = __webpack_require__(0);


class Sprite {
    constructor(src, { width, height }, { x, y }) {
        // if(size.width === undefined || size.width === null || size.height === undefined || size.height === null) {
        //     throw 'size must be provided';
        // }
        this.src = src;
        this.size = { width, height };
        this.position = { x, y };
        this.updateCenter();
    }

    updateCenter() {
        this.center = Object(__WEBPACK_IMPORTED_MODULE_0__operations__["a" /* calculateCenter */])(this.position.x, this.position.y, this.size.width, this.size.height);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Sprite);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const COP_SRC = '';
/* harmony export (immutable) */ __webpack_exports__["e"] = COP_SRC;

const ROBBER_SRC = '';
/* harmony export (immutable) */ __webpack_exports__["p"] = ROBBER_SRC;

const START_X = 0;
/* unused harmony export START_X */

const START_Y = 0;
/* unused harmony export START_Y */

const MAX_PLAYERS = 4;
/* unused harmony export MAX_PLAYERS */

const VELOCITY = { x: 0, y: 0 };
/* harmony export (immutable) */ __webpack_exports__["y"] = VELOCITY;

const ACCELERATION = { x: 0, y: 0 };
/* harmony export (immutable) */ __webpack_exports__["a"] = ACCELERATION;

const MAX_FORCE = 0.1;
/* harmony export (immutable) */ __webpack_exports__["k"] = MAX_FORCE;

const MAX_SPEED = 2;
/* harmony export (immutable) */ __webpack_exports__["l"] = MAX_SPEED;

const MAX_ACCELERATION = 3;
/* harmony export (immutable) */ __webpack_exports__["j"] = MAX_ACCELERATION;

const ROD = 50;
/* harmony export (immutable) */ __webpack_exports__["q"] = ROD;

const ROS = 2;
/* harmony export (immutable) */ __webpack_exports__["r"] = ROS;

const TIME_TO_TARGET = 0.8;
/* harmony export (immutable) */ __webpack_exports__["v"] = TIME_TO_TARGET;

// canvas parameters
const CANVAS_HEIGHT = 600;
/* harmony export (immutable) */ __webpack_exports__["b"] = CANVAS_HEIGHT;

const CANVAS_WIDTH = 600;
/* harmony export (immutable) */ __webpack_exports__["c"] = CANVAS_WIDTH;


// keycodes
const LEFT = 37;
/* harmony export (immutable) */ __webpack_exports__["i"] = LEFT;

const UP = 38;
/* harmony export (immutable) */ __webpack_exports__["x"] = UP;

const RIGHT = 39;
/* harmony export (immutable) */ __webpack_exports__["n"] = RIGHT;

const DOWN = 40;
/* harmony export (immutable) */ __webpack_exports__["f"] = DOWN;


// tile numbers
const OPEN = 'OPEN';
/* harmony export (immutable) */ __webpack_exports__["m"] = OPEN;

const WALL = 'WALL';
/* harmony export (immutable) */ __webpack_exports__["z"] = WALL;

const COP = 'COP';
/* harmony export (immutable) */ __webpack_exports__["d"] = COP;

const ROBBER = 'ROBBER';
/* harmony export (immutable) */ __webpack_exports__["o"] = ROBBER;

const EXIT = 'EXIT';
/* unused harmony export EXIT */
 // drawn identical to OPEN

const TURN_NUMBER = 7;
/* harmony export (immutable) */ __webpack_exports__["w"] = TURN_NUMBER;


// grid layout
const GRID = [[WALL, WALL, WALL, WALL, OPEN, WALL, WALL, WALL, WALL], [WALL, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, WALL], [WALL, OPEN, WALL, WALL, OPEN, WALL, WALL, OPEN, WALL], [WALL, OPEN, WALL, OPEN, OPEN, OPEN, WALL, OPEN, WALL], [OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN], [WALL, OPEN, WALL, OPEN, OPEN, OPEN, WALL, OPEN, WALL], [WALL, OPEN, WALL, WALL, OPEN, WALL, WALL, OPEN, WALL], [WALL, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, WALL], [WALL, WALL, WALL, WALL, OPEN, WALL, WALL, WALL, WALL]];
/* harmony export (immutable) */ __webpack_exports__["g"] = GRID;


const SRC_WIDTH = CANVAS_WIDTH / GRID[0].length;
/* harmony export (immutable) */ __webpack_exports__["u"] = SRC_WIDTH;

const SRC_HEIGHT = CANVAS_HEIGHT / GRID.length;
/* harmony export (immutable) */ __webpack_exports__["t"] = SRC_HEIGHT;


// Grid info
const GRID_INFO = [{
    gridPosition: { r: 0, c: 4 },
    neighbors: [4]
}, {
    gridPosition: { r: 1, c: 1 },
    neighbors: [2, 8]
}, {
    gridPosition: { r: 1, c: 2 },
    neighbors: [1, 3]
}, {
    gridPosition: { r: 1, c: 3 },
    neighbors: [2, 4]
}, {
    gridPosition: { r: 1, c: 4 },
    neighbors: [0, 3, 5, 9]
}, {
    gridPosition: { r: 1, c: 5 },
    neighbors: [4, 6]
}, {
    gridPosition: { r: 1, c: 6 },
    neighbors: [5, 7]
}, {
    gridPosition: { r: 1, c: 7 },
    neighbors: [6, 10]
}, {
    gridPosition: { r: 2, c: 1 },
    neighbors: [1, 11]
}, {
    gridPosition: { r: 2, c: 4 },
    neighbors: [4, 13]
}, {
    gridPosition: { r: 2, c: 7 },
    neighbors: [7, 15]
}, {
    gridPosition: { r: 3, c: 1 },
    neighbors: [8, 17]
}, {
    gridPosition: { r: 3, c: 3 },
    neighbors: [13, 19]
}, {
    gridPosition: { r: 3, c: 4 },
    neighbors: [9, 20]
}, {
    gridPosition: { r: 3, c: 5 },
    neighbors: [13, 21]
}, {
    gridPosition: { r: 3, c: 7 },
    neighbors: [10, 23]
}, {
    gridPosition: { r: 4, c: 0 },
    neighbors: [17]
}, {
    gridPosition: { r: 4, c: 1 },
    neighbors: [11, 16, 18, 25]
}, {
    gridPosition: { r: 4, c: 2 },
    neighbors: [17, 19]
}, {
    gridPosition: { r: 4, c: 3 },
    neighbors: [12, 18, 26, 20]
}, {
    gridPosition: { r: 4, c: 4 },
    neighbors: [13, 19, 27, 21]
}, {
    gridPosition: { r: 4, c: 5 },
    neighbors: [14, 20, 28, 22]
}, {
    gridPosition: { r: 4, c: 6 },
    neighbors: [21, 23]
}, {
    gridPosition: { r: 4, c: 7 },
    neighbors: [15, 22, 29, 24]
}, {
    gridPosition: { r: 4, c: 8 },
    neighbors: [23]
}, {
    gridPosition: { r: 5, c: 1 },
    neighbors: [17, 30]
}, {
    gridPosition: { r: 5, c: 3 },
    neighbors: [19, 27]
}, {
    gridPosition: { r: 5, c: 4 },
    neighbors: [20, 26, 31, 28]
}, {
    gridPosition: { r: 5, c: 5 },
    neighbors: [21, 27]
}, {
    gridPosition: { r: 5, c: 7 },
    neighbors: [23, 32]
}, {
    gridPosition: { r: 6, c: 1 },
    neighbors: [25, 33]
}, {
    gridPosition: { r: 6, c: 4 },
    neighbors: [27, 36]
}, {
    gridPosition: { r: 6, c: 7 },
    neighbors: [29, 39]
}, {
    gridPosition: { r: 7, c: 1 },
    neighbors: [30]
}, {
    gridPosition: { r: 7, c: 2 },
    neighbors: [33, 35]
}, {
    gridPosition: { r: 7, c: 3 },
    neighbors: [34, 36]
}, {
    gridPosition: { r: 7, c: 4 },
    neighbors: [31, 35, 37, 40]
}, {
    gridPosition: { r: 7, c: 5 },
    neighbors: [36, 38]
}, {
    gridPosition: { r: 7, c: 6 },
    neighbors: [37, 39]
}, {
    gridPosition: { r: 7, c: 7 },
    neighbors: [21, 27]
}, {
    gridPosition: { r: 8, c: 4 },
    neighbors: [36]
}];
/* harmony export (immutable) */ __webpack_exports__["h"] = GRID_INFO;


const SPAWN_LOCATIONS = this.spawnLocations = [{ x: 1, y: 4 }, { x: 7, y: 4 }, { x: 4, y: 1 }, { x: 4, y: 7 }];
/* harmony export (immutable) */ __webpack_exports__["s"] = SPAWN_LOCATIONS;
 // [r,c]

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CRGame__ = __webpack_require__(4);


let game = new __WEBPACK_IMPORTED_MODULE_0__CRGame__["a" /* default */]();
game.init();

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_AI_AI__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine_canvas__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__engine_AI_AStar__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__engine_Game__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__engine_AI_DecisionTree_DecisionNode__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__engine_AI_GraphGenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__engine_Sprite__ = __webpack_require__(1);











class CRGame extends __WEBPACK_IMPORTED_MODULE_4__engine_Game__["a" /* default */] {
    constructor() {
        super();
        this.canvas = document.querySelector('#copsAndRobbers');
        this.context = this.canvas.getContext('2d');
        this.graph = new __WEBPACK_IMPORTED_MODULE_7__engine_AI_GraphGenerator__["a" /* default */]();
        this.players = [];
        this.spawnLocations = __WEBPACK_IMPORTED_MODULE_1__options__["s" /* SPAWN_LOCATIONS */]; // defined {x,y}
        this.decisionTree = null;
        this.gameover = false;
        this.gameloop = this.gameloop.bind(this);
        this.playerMoved = false;
        this.aStar = new __WEBPACK_IMPORTED_MODULE_3__engine_AI_AStar__["a" /* default */]();
        // Start player off looking right? Does it matter?
        this.grid = __WEBPACK_IMPORTED_MODULE_1__options__["g" /* GRID */];
        this.turns = 0;
    }

    initSelectionScreen() {
        document.querySelector('.selection-layer').style.display = 'block';
        document.querySelector(".selection-layer button[id='cop']").addEventListener('click', () => this.initLevel(__WEBPACK_IMPORTED_MODULE_1__options__["d" /* COP */]));
        document.querySelector(".selection-layer button[id='robber']").addEventListener('click', () => this.initLevel(__WEBPACK_IMPORTED_MODULE_1__options__["o" /* ROBBER */]));
    }

    initAI(numCops, numRobbers) {
        const params = {
            velocity: __WEBPACK_IMPORTED_MODULE_1__options__["y" /* VELOCITY */],
            acceleration: __WEBPACK_IMPORTED_MODULE_1__options__["a" /* ACCELERATION */],
            maxForce: __WEBPACK_IMPORTED_MODULE_1__options__["k" /* MAX_FORCE */],
            maxSpeed: __WEBPACK_IMPORTED_MODULE_1__options__["l" /* MAX_SPEED */],
            maxAcceleration: __WEBPACK_IMPORTED_MODULE_1__options__["j" /* MAX_ACCELERATION */],
            rod: __WEBPACK_IMPORTED_MODULE_1__options__["q" /* ROD */],
            ros: __WEBPACK_IMPORTED_MODULE_1__options__["r" /* ROS */],
            timeToTarget: __WEBPACK_IMPORTED_MODULE_1__options__["v" /* TIME_TO_TARGET */]
            // Spawn robbers
        };for (let i = 0; i < numRobbers; i++) {
            this.players.push({
                isAI: true,
                team: __WEBPACK_IMPORTED_MODULE_1__options__["o" /* ROBBER */],
                direction: null,
                data: new __WEBPACK_IMPORTED_MODULE_0__engine_AI_AI__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__options__["p" /* ROBBER_SRC */], { width: __WEBPACK_IMPORTED_MODULE_1__options__["u" /* SRC_WIDTH */], height: __WEBPACK_IMPORTED_MODULE_1__options__["t" /* SRC_HEIGHT */] }, this.spawnLocations[0], params),
                gridLocation: this.spawnLocations[0],
                index: Object(__WEBPACK_IMPORTED_MODULE_5__helper__["e" /* getGridIndex */])(this.spawnLocations[0])
            });
            this.grid[this.spawnLocations[0].x][this.spawnLocations[0].y] = __WEBPACK_IMPORTED_MODULE_1__options__["o" /* ROBBER */];
            this.spawnLocations.shift();
        }
        // Spawn cops
        for (let i = 0; i < numCops; i++) {
            this.players.push({
                isAI: true,
                team: __WEBPACK_IMPORTED_MODULE_1__options__["d" /* COP */],
                direction: null,
                data: new __WEBPACK_IMPORTED_MODULE_0__engine_AI_AI__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__options__["e" /* COP_SRC */], { width: __WEBPACK_IMPORTED_MODULE_1__options__["u" /* SRC_WIDTH */], height: __WEBPACK_IMPORTED_MODULE_1__options__["t" /* SRC_HEIGHT */] }, this.spawnLocations[0], params),
                gridLocation: this.spawnLocations[0],
                index: Object(__WEBPACK_IMPORTED_MODULE_5__helper__["e" /* getGridIndex */])(this.spawnLocations[0])
            });
            this.grid[this.spawnLocations[0].x][this.spawnLocations[0].y] = __WEBPACK_IMPORTED_MODULE_1__options__["d" /* COP */];
            this.spawnLocations.shift();
        }
    }

    initLevel(side) {
        document.querySelector('.selection-layer').style.display = 'none';
        let src;
        let numCops = 2;
        let numRobbers = 2;
        // Deterine type of player and assign appropriate Sprite
        if (side === __WEBPACK_IMPORTED_MODULE_1__options__["d" /* COP */]) {
            src = __WEBPACK_IMPORTED_MODULE_1__options__["e" /* COP_SRC */];
            numCops--;
        } else if (side === __WEBPACK_IMPORTED_MODULE_1__options__["o" /* ROBBER */]) {
            src = __WEBPACK_IMPORTED_MODULE_1__options__["p" /* ROBBER_SRC */];
            numRobbers--;
        }
        // Initialize player with selected properties
        this.players.push({
            isAI: false,
            team: side,
            direction: null,
            data: new __WEBPACK_IMPORTED_MODULE_8__engine_Sprite__["a" /* default */](src, { width: __WEBPACK_IMPORTED_MODULE_1__options__["u" /* SRC_WIDTH */], height: __WEBPACK_IMPORTED_MODULE_1__options__["t" /* SRC_HEIGHT */] }, this.spawnLocations[0]),
            gridLocation: this.spawnLocations[0],
            index: Object(__WEBPACK_IMPORTED_MODULE_5__helper__["e" /* getGridIndex */])(this.spawnLocations[0])
        });
        let location = this.spawnLocations.shift();
        this.initAI(numCops, numRobbers); // init AI players
        // Swap player position if they are a cop
        if (this.players[0].team === __WEBPACK_IMPORTED_MODULE_1__options__["d" /* COP */]) {
            let temp = this.players[2];
            this.players[2] = this.players[0];
            this.players[0] = temp;
            this.grid[location.x][location.y] = __WEBPACK_IMPORTED_MODULE_1__options__["d" /* COP */];
        } else {
            this.grid[location.x][location.y] = __WEBPACK_IMPORTED_MODULE_1__options__["o" /* ROBBER */];
        }
        this.turns = __WEBPACK_IMPORTED_MODULE_1__options__["w" /* TURN_NUMBER */] * this.players.length;
    }

    addKeyboardHandlers() {
        document.addEventListener('keydown', e => this.setMovingDirection(e));
    }

    setMovingDirection(e) {
        if (e.keyCode === 37) {
            this.players[0].direction = __WEBPACK_IMPORTED_MODULE_1__options__["i" /* LEFT */];
            this.playerMoved = true;
        } else if (e.keyCode === 38) {
            this.players[0].direction = __WEBPACK_IMPORTED_MODULE_1__options__["x" /* UP */];
            this.playerMoved = true;
        } else if (e.keyCode === 39) {
            this.players[0].direction = __WEBPACK_IMPORTED_MODULE_1__options__["n" /* RIGHT */];
            this.playerMoved = true;
        } else if (e.keyCode === 40) {
            this.players[0].direction = __WEBPACK_IMPORTED_MODULE_1__options__["f" /* DOWN */];
            this.playerMoved = true;
        }
    }

    update() {
        if (this.players.length === 0) return;
        // Save data about the player whose turn it is
        let currentTurn = this.players[0];
        // If it is an AI player, make a move
        if (currentTurn.isAI) {
            if (currentTurn.team === __WEBPACK_IMPORTED_MODULE_1__options__["d" /* COP */]) {
                currentTurn.data = Object(__WEBPACK_IMPORTED_MODULE_5__helper__["d" /* getCopMove */])(currentTurn, this.players, this.grid, this.aStar, this.graph.getGraph());
            } else {
                currentTurn.data = Object(__WEBPACK_IMPORTED_MODULE_5__helper__["f" /* getRobberMove */])(currentTurn, this.players, this.grid, this.aStar, this.graph.getGraph());
            }
            //Rotate the player array
            this.players.shift();
            this.players.push(currentTurn);
            this.turns--;
            // Update the grid with the latest move
            this.grid = Object(__WEBPACK_IMPORTED_MODULE_5__helper__["h" /* updateGrid */])(this.grid, currentTurn);
            // If it is a human player's turn, wait for them to press a key
        } else if (this.playerMoved) {
            let newData = Object(__WEBPACK_IMPORTED_MODULE_5__helper__["g" /* movePlayer */])(currentTurn, this.grid);
            // If the move is valid, update the data and rotate the array
            if (newData) {
                currentTurn.data = newData;
                this.players.shift();
                this.players.push(currentTurn);
                this.turns--;
                // Update the grid with the latest move
                this.grid = Object(__WEBPACK_IMPORTED_MODULE_5__helper__["h" /* updateGrid */])(this.grid, currentTurn);
            }
            this.playerMoved = false;
        }
        if (this.turns < 1) {
            Object(__WEBPACK_IMPORTED_MODULE_5__helper__["c" /* endGame */])();
        }
    }

    // rendering the game
    render() {
        const { width, height } = this.canvas;

        // render walls and background
        Object(__WEBPACK_IMPORTED_MODULE_5__helper__["a" /* drawGrid */])(this.context, this.grid);
        Object(__WEBPACK_IMPORTED_MODULE_5__helper__["b" /* drawWalls */])(this.context, width, height);
    }

    setupDecisions() {
        // TODO: Create decision nodes and construct tree
    }

    init() {
        this.addKeyboardHandlers();
        this.graph.generateGraphFromGridCells(__WEBPACK_IMPORTED_MODULE_1__options__["h" /* GRID_INFO */], __WEBPACK_IMPORTED_MODULE_1__options__["c" /* CANVAS_WIDTH */] / __WEBPACK_IMPORTED_MODULE_1__options__["g" /* GRID */][0].length, __WEBPACK_IMPORTED_MODULE_1__options__["b" /* CANVAS_HEIGHT */] / __WEBPACK_IMPORTED_MODULE_1__options__["g" /* GRID */].length);
        this.initSelectionScreen();
        this.timer = setInterval(this.gameloop, 30);
        window.drawGrid = __WEBPACK_IMPORTED_MODULE_5__helper__["a" /* drawGrid */].bind(this, this.context, this.grid);
    }

}

/* harmony default export */ __webpack_exports__["a"] = (CRGame);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sprite__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vector__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Path__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operations__ = __webpack_require__(0);




/** target proximity to halt path following */
const TARGET_PROX = 5;
const vector = Object(__WEBPACK_IMPORTED_MODULE_1__Vector__["a" /* default */])();
const offset = 10;

// *Note: all vector related methods will need to be updated
class AI extends __WEBPACK_IMPORTED_MODULE_0__Sprite__["a" /* default */] {
    constructor(src, size, pos, params) {
        super(src, size, pos);
        this.initPosition = pos; // initial position
        this.velocity = params.velocity; // velocity
        this.acceleration = params.acceleration; // acceleration
        this.maxForce = params.maxForce; // max steering force
        this.maxSpeed = params.maxSpeed; // max speed
        this.initMaxSpeed = params.maxSpeed; // initial max speed
        this.currentNode = 0; // current node
        this.maxAcceleration = params.maxAcceleration; // max acceleration
        this.rod = params.rod; // radius of deceleration at which to slow down (50)
        this.ros = params.ros; // radius of satisfaction in which to arrive at target (3)
        this.timeToTarget = params.timeToTarget; // Holds the time over which to achieve target speed (0.8)
        this.followingTarget = false; // are we currently following something?
    }

    /**
     * Updates AI parameters.
     */
    update() {
        throw new Error('update() must be implemented');
    }
    /**
     * Displays the AI to the screen.
     */
    display() {
        throw new Error('display() must be implemented');
    }

    /**
     * Performs necessary parameter updates for this AI
     */
    run() {
        throw new Error('run() must be implemented');
    }

    /**
     * Orients the player in the direction of the target
     * @param des desired velocity vector to orient
     * @return the steering vector to orient the player
     */
    getOrientation(des) {
        return vector.sub(des, this.velocity);
    }

    /**
     * Applies a force in the direction of the given vector
     * @param f the force to apply
     */
    applyForce(f) {
        this.acceleration = vector.add(this.acceleration, f);
    }

    /**
     * Seek algorithm for moving character to a target location
     * Algorithm adapted from Daniel Shiffman's "The Nature of Code"
     * @param t the target to seek
     */
    seek(t) {
        // Get the desired velocity vector
        let des = vector.sub(t, this.position);
        // Scale to max speed
        des = vector.normalize(des);
        des = vector.mult(des, this.maxSpeed);
        // Get the steering vector
        let steer = this.getOrientation(des);
        vector.limit(steer, this.maxForce);
        // Apply steering force
        this.applyForce(steer);
    }

    /**
     * Arrive algorithm for directing character away from a target
     * Algorithm modified and adapted from Daniel Shiffman's "The Nature of Code"
     * @param t the target from which to flee
     */
    flee(t) {
        // Get the desired velocity vector away from the target
        let des = vector.sub(this.position, t);
        // Scale to max speed
        des = vector.normalize(des);
        des = vector.mult(des, this.maxSpeed);
        // Get the steering vector
        let steer = this.getOrientation(des);
        steer = vector.limit(steer, this.maxForce);
        // Apply steering force
        this.applyForce(steer);
    }

    /**
     * Arrive algorithm. Adapted from "Artificial Intelligence for Games"
     * @param t the target at which to arrive
     */
    arrive(t) {
        // Get direction target
        let dir = vector.sub(t, this.position);
        let targetSpeed = 0;
        // Get distance to target
        let dist = vector.mag(dir);
        // If at target, do nothing
        if (dist < this.ros) {
            // Stop within ros
            let stop = { x: -this.velocity.x / 2, y: -this.velocity.y / 2 };
            this.applyForce(stop); // want to cancel
            return;
        }
        // If we're outside deceleration radius, go maxSpeed
        if (dist > this.rod) {
            targetSpeed = this.maxSpeed;
        } else {
            // Otherwise, calculate scaled speed
            targetSpeed = this.maxSpeed * dist / this.rod;
        }
        // Get target velocity (combines speed and direction)
        dir = vector.normalize(dir);
        dir = vector.mult(dir, targetSpeed);
        let steer = this.getOrientation(dir);
        // Need to slow down (added)
        steer = vector.limit(steer, this.timeToTarget);
        //Check if acceleration is too fast
        if (vector.mag(steer) > this.maxAcceleration) {
            steer = vector.normalize(steer);
            steer = vector.mult(steer, this.maxAcceleration);
        }
        // Limit force
        steer = vector.limit(steer, this.maxForce);
        // Apply steering force
        this.applyForce(steer);
    }

    /**
     * Generates the lowest cost path to the next target to follow
     * @param t the target in which to find the path
     * @param g graph of the room (GraphGenerator class)
     * @param aStar provides A* pathfinding (AStar class)
     * @return the lowest cost path to the given target
     */
    findNextTarget(t, g, aStar) {
        // Find nearest target and character positions on the graph
        let target = this.findNearest(t, g); // class vertex
        let player = this.findNearest(this.position, g); // class vertex
        // Get the path from the player's position to the target
        let result = aStar.AStarPathfind(g.getGraph(), player, target); // vertex array
        // Make the path for the player to follow
        let p = null; // class Path
        // Add the new path if we aren't already close enough to the target
        if (result !== null) {
            p = new __WEBPACK_IMPORTED_MODULE_2__Path__["a" /* default */]();
            for (let i = 0; i < result.length; i++) {
                p.add(result[i].getLoc());
            }
        }
        // Reset currentNode to start of the path
        this.resetPathNode();
        // Return the new path to follow
        return p;
    }

    /**
     * Path following algorithm
     * @param p the path to follow
     * @param t the target to approach
     */
    follow(p, t) {
        let target = null;
        // Check if we are not within proximity to the target
        if (this.followingTarget && !this.withinTargetProximity(t) && p != null) {
            // Find the node to seek
            if (p.getPath().length > 0) {
                // Set the target to the next available node in the path
                target = p.getPath()[this.currentNode];
                // Check if we are within offset pixels of the target
                if (vector.dist(this.position, target) <= offset) {
                    // Update to the next node to arrive at
                    this.currentNode++;
                    // Check if we are on the last node
                    if (this.currentNode == p.getPath().length) {
                        // Set the last node in the path as the one to arrive at
                        this.currentNode = p.getPath().length - 1;
                    }
                }

                // Check if we're on the last node and the distance to the actual target is less than the distance
                // to that node
                if (this.currentNode == p.getPath().length - 1) {
                    // on the last node
                    if (vector.dist(this.position, t) < vector.dist(this.position, target) || this.position != t) {
                        this.seek(t);
                    } else {
                        this.arrive(target);
                    }
                } else if (this.currentNode != p.getPath().length - 1) {
                    this.seek(target);
                }
            } else {
                // No reasonable path and we are close enough, so just arrive at the target
                this.seek(t);
            }
        } else {
            this.followingTarget = false;
        }
    }

    /**
     * Quantizes the target position by finding the nearest node on the world graph
     * @param t the target to quantize
     * @param g graph of room
     * @return the closest vertex to the target
     */
    findNearest(t, g) {
        // Loop through each point in the graph and find the nearest node
        let size = g.getGraph().length;
        let dist_smallest = Number.MAX_SAFE_INTEGER; // change to greatest number value
        let closest = null;
        for (let i = 0; i < size; i++) {
            // Get distance from target to current node
            let dist = Math.abs(vector.dist(t, g.getGraph()[i].getLoc()));
            // Check if new smallest distance to target
            if (dist <= dist_smallest) {
                dist_smallest = dist;
                closest = g.getGraph()[i];
            }
        }
        //System.out.println("closest vertex is " + closest.getValue());
        // Return the closest vertex
        return closest;
    }

    /**
     * Resets the current node to the beginning of a new path
     */
    resetPathNode() {
        this.currentNode = 0;
    }

    /** 
     * Returns a String representation of the given path.
     * Primarily used for testing.
     * @param path the path to generate (list of vertices)
     * @return a String representation for this path
     */
    pathToString(path) {
        let disp = "";
        for (let i = 0; i < path.length; i++) {
            disp += path[i].getValue() + " ";
        }
        return disp;
    }

    /**
     * Checks the distance to the room boundaries from AI's
     * current location. Returns whether the AI is within the
     * appropriate range for steering away from these boundaries.
     * @param boundaries the boundaries to check (list of points)
     * @return whether the AI is within a certain distance to these boundaries
     */
    checkRoomBoundaries(boundaries) {
        // Check for certain distance from screen edges
        // ** Note:
        //		height = dist(pos, width)
        //		width  = dist(pos, height)
        // Want the offset to be somewhere within the character's radius + some offset
        for (let i = 0; i < boundaries.length; i++) {
            if (vector.dist(this.position, boundaries[i]) <= 35) return true;
        }
        return false;
    }

    /**
     * Sets a new random target on the room graph and directs the AI
     * to follow it until it is within a set offset from the target.
     * @param g the graph to follow (class GraphGenerator)
     * @param aStar provides A* pathfinding
     */
    followNewTarget(g, aStar) {
        // Get a random point on the graph and pathfind
        let target_index = Object(__WEBPACK_IMPORTED_MODULE_3__operations__["c" /* getRandomNumber */])(g.getGraph().length);
        let target = g.getGraph()[target_index].getLoc();
        let path = this.findNextTarget(target, g, aStar); // Path

        // Follow this path until we are within a set distance from our target
        while (vector.dist(this.position, target) > TARGET_PROX) {
            this.follow(path, target);
            // perform AI updates
            this.run();
        }
    }

    /**
     * Pathfinds to the point closest to the target and follows it.
     * @param g Graph representing room
     * @param aStar A* algorithm provider
     */
    retreatToNearestPath(g, aStar) {
        // Get nearest point on the path to follow
        let nearest = this.findNearest(this.position, g).getNeighbors()[0].getNeighbor().getLoc(); // experimenting with getting a neighbor
        // Pathfind to this point
        let path = this.findNextTarget(nearest, g, aStar);

        // Follow this path until we are within a set distance from our target
        while (vector.dist(this.position, nearest) > TARGET_PROX) {
            this.follow(path, nearest);
            // perform AI updates
            this.run();
        }
    }

    /**
     * Determines if a character is within the current target's allowable proximity.
     * @param t the target to check
     * @return if the player is within the allowable target proximity
     */
    withinTargetProximity(t) {
        return vector.dist(this.position, t) <= TARGET_PROX;
    }

    /**
     * Returns if a character is currently following a target
     * @return if a character is currently following a target
     */
    isFollowingTarget() {
        return this.followingTarget;
    }

    /**
     * Sets the state of following the current target
     * @param following the state of following the current target
     */
    setFollowingTarget(following) {
        this.followingTarget = following;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (AI);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Vector;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operations__ = __webpack_require__(0);


function Vector() {
    let add = (v1, v2) => {
        return { x: v1.x + v2.x, y: v1.y + v2.y };
    };

    let sub = (v1, v2) => {
        return { x: v1.x - v2.x, y: v1.y - v2.y };
    };

    let mult = (v, factor) => {
        return { x: v.x * factor, y: v.y * factor };
    };

    let limit = (v, factor) => {
        return { x: v.x / factor, y: v.y / factor };
    };

    let normalize = v => {
        let mag = Vector.mag(v);
        return { x: v.x / mag, y: v.y / mag };
    };

    let mag = v => {
        return Math.sqrt(v.x * v.x + v.y * v.y);
    };

    let dist = (v1, v2) => {
        return Object(__WEBPACK_IMPORTED_MODULE_0__operations__["b" /* getDistance */])(v1.x, v1.y, v2.x, v2.y);
    };

    return { add, sub, mult, limit, normalize, mag, dist };
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Path {
	constructor() {
		this.radius = 10; // path to follow
		this.points = []; // radius from which a player can stray from the path (list of Vectors)
	}

	/**
  * Returns this path
     * @return this path
  */
	getPath() {
		return this.points;
	}

	/**
  * Add a point to the path
     * @param p the point (vector) to add
  */
	add(p) {
		this.points.push(p);
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Path);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export clearCanvas */
/* unused harmony export coordinateConversion */
/* unused harmony export getBoundaries */
/* unused harmony export generateRandomPosition */
/* unused harmony export createImageCache */
/* unused harmony export drawLoadedImage */
/* unused harmony export drawImageByUrl */
/* unused harmony export drawRotate */
/* unused harmony export insertText */
function clearCanvas(canvas, context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function coordinateConversion(canvas, x, y) {
    let box = canvas.getBoundingRect();
    return {
        x: Math.round(x - box.left),
        y: Math.round(y - box.right)
    };
}

function getBoundaries(pos, size) {
    const { x, y } = pos;
    const { width, height } = size;

    return {
        top: y,
        left: x,
        bottom: y + height,
        right: x + width
    };
}

// TODO: should dnd the emoji from the sidebar into the canvas
function generateRandomPosition(canvas, middle = false, size) {
    let x, y;
    const getRandomNumBetween = (min, max) => Math.random() * (max - min) + min;
    const { width, height } = size;

    if (middle) {
        x = Math.round(getRandomNumBetween(canvas.width * 0.2, canvas.width * 0.8 - width));
        y = Math.round(getRandomNumBetween(canvas.height * 0.2, canvas.height * 0.8 - height));
    } else {
        x = Math.round(getRandomNumBetween(0, canvas.width - width));
        y = Math.round(getRandomNumBetween(0, canvas.height - height));
    }
    return { x, y };
}

function createImageCache() {
    let images = [];
    let imgPromises = [];

    function loadImage(name, src) {
        imgPromises.push(new Promise((resolve, reject) => {
            let img = new Image();
            img.src = src;

            try {
                img.onload = () => {
                    resolve({
                        name,
                        img
                    });
                };
            } catch (err) {
                reject(err);
            }
        }));
    }

    function imagesOnLoad(callback) {
        Promise.all(imgPromises).then(imgArrays => {
            images = imgArrays;
        }).then(callback);
    }

    function getImages() {
        return images;
    }

    return {
        images,
        loadImage,
        getImages,
        imagesOnLoad
    };
}

function drawLoadedImage(img, x, y, width, height) {
    this.drawImage(img, x, y, width, height);
}

// todo: replace this function with drawLoadedImage
function drawImageByUrl(url, x, y, width, height) {
    // this refers to the canvas CONTEXT
    let img = new Image();
    img.onload = () => {
        this.drawImage(img, x, y, width, height);
    };
    img.src = url;
}

function drawRotate(context, img, x, y, degrees, effect) {
    context.save();
    context.translate(x + img.width / 2, y + img.height / 2);
    context.rotate(degrees * Math.PI / 180);
    context.drawImage(img, 0, 0, img.width, img.height, -img.width / 2, -img.height / 2, img.width, img.height);
    if (effect !== undefined) {
        let row = Math.floor(effect.currentFrame / effect.numFrames);
        let col = Math.floor(effect.currentFrame % effect.numFrames);
        context.drawImage(effect.img, col * effect.frameWidth, row * effect.frameHeight, effect.frameWidth, effect.frameHeight, -img.width / 2 + effect.offset.x, -img.height / 2 + effect.offset.y, effect.frameWidth, effect.frameHeight);
    }
    context.restore();
}

function insertText(context, options = {}) {
    const { text, font, position: { x, y }, color } = options;

    context.fillStyle = color;
    context.font = font;

    context.fillText(text, x, y);
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VertexRecord__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operations__ = __webpack_require__(0);



/** the type of heuristic to use */
const HEUR_TYPE = 0;

class AStar {
	constructor() {
		this.total_open = 0;
		this.total_closed = 0;
	}

	/**
  * Finds the shortest path from an initial position to a target using A* search.
  * If no valid path is found, returns null. Defaults to manhattan heuristic, but can also
  * be switched to Euclidean if desired
  * @param graph the room graph by which to path find (Vertex list)
  * @param start the starting vertex (Vertex)
  * @param end the vertex at which to end (Vertex)
  * @returns the smallest valid path to the end target, null otherwise
  */
	AStarPathfind(graph, start, end) {
		// Establish open and closed lists (may want to change to priority queue implementation
		let open = []; // VertexRecord list
		let closed = []; // VertexRecord list
		let next = new __WEBPACK_IMPORTED_MODULE_0__VertexRecord__["a" /* default */](start); // VertexRecord
		next.setEstCost(this.useHeuristic(start, end));
		open.push(next); // Get the initial vertex
		let current = null; // VertexRecord

		while (open.length > 0) {
			// Get the smallest edge record in the open list
			current = this.getSmallest(open);
			// Break if we are at the goal node
			if (current.getNode().equals(end)) break;
			// Get connections for this node
			let neighbors = current.getNode().getNeighbors();
			// Loop through node's neighbors
			for (let i = 0; i < neighbors.length; i++) {
				let n = neighbors[i];
				let endNode = n.getNeighbor(); // Vertex
				let endCost = current.getCost() + n.getWeight();
				let endHeuristic = 0.0;

				// Check if on the closed list
				let endRecord = this.listContains(closed, endNode); // VertexRecord
				if (endRecord != null) {
					// Continue if record_cost <= endCost
					if (endRecord.getCost() <= endCost) continue;
					// Otherwise remove from close list
					closed.splice(closed.indexOf(endRecord), 1); // remove at index
					// Use this node's old cost value to calculate heuristic
					// endNodeHeuristic = endNodeRecord.cost - endNodeRecord.costSoFar?
					endHeuristic = endRecord.getConn().getWeight() - endRecord.getCost();
				}

				// Check if on the open list
				endRecord = this.listContains(open, endNode);
				if (endRecord != null) {
					if (endRecord.getCost() <= endCost) continue;
					// Use this node's old cost value to calculate heuristic
					// endNodeHeuristic = endNodeRecord.cost - endNodeRecord.costSoFar? (Problems)?
					endHeuristic = endRecord.getConn().getWeight() - endRecord.getCost();
				} else {
					// Else we have an unvisited node, so make a new record
					endRecord = new __WEBPACK_IMPORTED_MODULE_0__VertexRecord__["a" /* default */](endNode);
					endHeuristic = this.useHeuristic(endNode, end);
				}

				// Update connection and cost
				endRecord.setCost(endCost);
				endRecord.setConn(n);
				// Update parent of this node in the graph
				let index = graph.indexOf(endNode);
				endNode = graph[index];
				endNode.setParent(endRecord.getConn().getOrigin());
				graph.splice(index, 1, endNode);
				// Update estimated total
				endRecord.setEstCost(endCost + endHeuristic);

				// Then add to the open list
				if (open.indexOf(endRecord) === -1) open.push(endRecord);
			}

			// Finished this node, so remove from open
			open.splice(open.indexOf(current), 1);
			// And add it to closed
			closed.push(current);
		}

		// Out of nodes so check for goal
		if (!current.getNode().equals(end)) return null;

		// Otherwise compile path connections
		let path = []; // Vertex list
		let prev = current.getNode(); // Vertex
		while (!prev.equals(start)) {
			// Add the node to the path
			path.push(prev);
			// Update to the next connection
			prev = graph[graph.indexOf(prev)].getParent();
		}

		// Update total closed and open nodes
		this.total_open += open.length;
		this.total_closed += closed.length;

		// Return reversed path
		path = path.reverse();
		return path;
	}

	/**
  * Returns the VertexRecord with the smallest total estimated cost so far
  * @param open the open list used in A* pathfinding (VertexRecord list)
  * @return the VertexRecord with the smallest estimated total cost
  */
	getSmallest(open) {
		// If only one element, return it
		if (open.length == 1) return open[0];

		// Smallest edge
		let smallest = open[0]; // VertexRecord

		// Search through the graph for the smallest estimated cost
		for (let i = 0; i < open.length; i++) {
			if (open[i].getEstCost() < smallest.getEstCost()) {
				smallest = open[i];
			}
		}
		// Return smallest edge
		return smallest;
	}

	/**
  * Returns a vertex in the given list of records corresponding to the vertex 
     * to search, null otherwise.
  * @param list the list for the element to search (VertexRecord list)
  * @param v the vertex to search (Vertex)
  * @return the vertex to search in the specified list, null otherwise
  */
	listContains(list, v) {
		for (let i = 0; i < list.length; i++) {
			// Check if node exists on list
			if (list[i].getNode().equals(v)) return list[i];
		}
		return null;
	}

	/**
  * Determines the heuristic to use in calculating estimated cost
  * @param from starting vertex (Vertex)
     * @param end ending vertex (Vertex)
     * @return heuristic-specific distance calculation
  */
	useHeuristic(from, end) {
		switch (HEUR_TYPE) {
			case 0:
				return this.manhattanHeuristic(from, end);
			default:
				return this.euclidean(from, end);
		}
	}

	/**
  * Manhattan distance heuristic used in calculating A* pathfinding.
  * Good for avoiding performance issues for indoor environments.
  * @param from node from which to calculate distance to goal (Vertex)
  * @param end goal node to which to calculate the distance (Vertex)
  * @return estimated cost from start to goal node
  */
	manhattanHeuristic(from, end) {
		// Returns sum of respective difference in x and y components
		// return Math.Abs(a.X - b.X) + Math.Abs(a.Y - b.Y);
		return Math.abs(from.getLoc().x - end.getLoc().x) + Math.abs(from.getLoc().y - end.getLoc().y);
	}

	/**
  * Euclidean heuristic for A* pathfinding. This is guaranteed to be either accurate or underestimating.
  * @param from node from which to calculate distance to goal (Vertex)
  * @param end goal node to which to calculate the distance (Vertex)
  * @return estimated cost from start to goal node
  */
	euclidean(from, end) {
		return Object(__WEBPACK_IMPORTED_MODULE_1__operations__["b" /* getDistance */])(from.getLoc().x, from.getLoc().y, end.getLoc().x, end.getLoc().y);
	}

	/**
  * Gets the average memory stats for this run
     * Used for testing purposes.
  * @param n the number of nodes in the graph
  */
	displayMemoryAvgs(n) {
		let avgOpen = this.total_open / n;
		let avgMemory = (this.total_open + this.total_closed) / n;
		return { avgOpen, avgMemory };
	}

	resetStats() {
		this.total_open = 0;
		this.total_closed = 0;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (AStar);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class VertexRecord {
  constructor(v) {
    this.setNode(v); // type Vertex
    this.setCost(0);
    this.setEstCost(0);
  }

  /**
   * Returns this record's Vertex
   * @return this record's vertex
   */
  getNode() {
    return this.node;
  }

  /**
   * Return's this record's edge
   * @return this record's edge
   */
  getConn() {
    return this.conn;
  }

  /**
   * Return's this record's cost so far
   * @return this record's cost so far
   */
  getCost() {
    return this.cost;
  }

  /**
   * Sets this record's node
   * @param node the node to set
   */
  setNode(node) {
    this.node = node; // node for this record
  }

  /**
   * Sets this record's connection
   * @param conn the Edge to set
   */
  setConn(conn) {
    this.conn = conn; // connection to least cost node
  }

  /**
   * Sets this record's cost
   * @param cost the cost to set
   */
  setCost(cost) {
    this.cost = cost; // cost so far
  }

  /**
   * Sets this record's parent
   * @param v the parent vertex to set
   */
  setParent(v) {
    this.node.setParent(v);
  }

  /**
   * Returns the estimated cost
   * @return the estimated cost
   */
  getEstCost() {
    return this.estCost;
  }

  /**
   * Sets the estimated cost
   * @param estCost the estimated cost to set
   */
  setEstCost(estCost) {
    this.estCost = estCost; // estimated total cost
  }
}

/* harmony default export */ __webpack_exports__["a"] = (VertexRecord);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Game {

    // Specifies keyboard handlers
    addKeyboardHandlers() {
        throw new Error('Keyboard handlers must be implemented');
    }

    // Sets the update loop
    update() {
        throw new Error('Update must be implemented');
    }

    // Sets the render loop
    render() {
        throw new Error('Render must be implemented');
    }

    // The game loop managed by the engine
    gameloop() {
        // to use gameloop, you must do the binding in the constructor in the subclass
        // aka, this.gameloop = this.gameloop.bind(this), to get access to update and render
        this.update();
        this.render();
    }

    // Optional debugging
    debug() {
        console.log('No debugging parameters are currently set.');
    }

    // Initializes base game components
    init() {
        throw new Error('Init must be implemented');
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Game);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export convertGridToPixelCoords */
/* harmony export (immutable) */ __webpack_exports__["b"] = drawWalls;
/* harmony export (immutable) */ __webpack_exports__["a"] = drawGrid;
/* harmony export (immutable) */ __webpack_exports__["g"] = movePlayer;
/* harmony export (immutable) */ __webpack_exports__["d"] = getCopMove;
/* harmony export (immutable) */ __webpack_exports__["f"] = getRobberMove;
/* harmony export (immutable) */ __webpack_exports__["c"] = endGame;
/* harmony export (immutable) */ __webpack_exports__["h"] = updateGrid;
/* harmony export (immutable) */ __webpack_exports__["e"] = getGridIndex;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_operations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(2);



function convertGridToPixelCoords(cell) {
    let xCorner = __WEBPACK_IMPORTED_MODULE_1__options__["c" /* CANVAS_WIDTH */] / __WEBPACK_IMPORTED_MODULE_1__options__["g" /* GRID */][0].length * cell.x;
    let yCorner = __WEBPACK_IMPORTED_MODULE_1__options__["b" /* CANVAS_HEIGHT */] / __WEBPACK_IMPORTED_MODULE_1__options__["g" /* GRID */].length * cell.y;
    return { x: xCorner, y: yCorner };
}

function drawWalls(context, width, height) {
    context.strokeStyle = 'black';
    context.strokeRect(0, 0, width, height);
}

// Goes through from top left across and fills in each tile with the appropriate color for now
function drawGrid(context, grid) {
    const tileHeight = __WEBPACK_IMPORTED_MODULE_1__options__["b" /* CANVAS_HEIGHT */] / grid.length;
    const tileWidth = __WEBPACK_IMPORTED_MODULE_1__options__["c" /* CANVAS_WIDTH */] / grid[0].length;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === __WEBPACK_IMPORTED_MODULE_1__options__["m" /* OPEN */]) {
                context.fillStyle = 'white';
            } else if (grid[row][col] === __WEBPACK_IMPORTED_MODULE_1__options__["z" /* WALL */]) {
                context.fillStyle = 'gray';
            } else if (grid[row][col] === __WEBPACK_IMPORTED_MODULE_1__options__["d" /* COP */]) {
                context.fillStyle = 'blue';
            } else if (grid[row][col] === __WEBPACK_IMPORTED_MODULE_1__options__["o" /* ROBBER */]) {
                context.fillStyle = 'red';
            }
            context.fillRect(col * tileWidth, row * tileHeight, tileWidth, tileHeight);
        }
    }
}

function movePlayer(player, grid) {
    let nx = player.gridLocation.x;
    let ny = player.gridLocation.y;
    // Get new position based on position and direction
    if (player.direction === __WEBPACK_IMPORTED_MODULE_1__options__["i" /* LEFT */]) ny -= 1;else if (player.direction === __WEBPACK_IMPORTED_MODULE_1__options__["n" /* RIGHT */]) ny += 1;else if (player.direction === __WEBPACK_IMPORTED_MODULE_1__options__["x" /* UP */]) nx -= 1;else if (player.direction === __WEBPACK_IMPORTED_MODULE_1__options__["f" /* DOWN */]) nx += 1;
    if (nx > grid.length || nx < 0 || ny > grid.length[0] || ny < 0) return null;
    // If the new position is open, move the player
    if (grid[nx][ny] === __WEBPACK_IMPORTED_MODULE_1__options__["m" /* OPEN */]) {
        player.gridLocation.x = nx;
        player.gridLocation.y = ny;
        return player;
        // If the movement causes a cop and robber to collide, end the game
    } else if (grid[nx][ny] != __WEBPACK_IMPORTED_MODULE_1__options__["z" /* WALL */] && grid[nx][ny] != player.team) {
        document.querySelector('.restart-layer .winner').textContent = 'The Cops caught the Robbers!';
        document.querySelector('.restart-layer').style.display = 'block';
        document.querySelector(".restart-layer button").addEventListener("click", reload);
    }
    // If the new position is a wall, or causes collision between two cops or two robbers, return null
    return null;
}

// Cop AI
function getCopMove(ai, players, grid, aStar, graph) {
    // Get the nearest robber
    let nx = ai.gridLocation.x;
    let ny = ai.gridLocation.y;
    let nearest = getNearestOpponentPlayer({ x: nx, y: ny, team: ai.team }, players);
    // Path find to robber
    let path = aStar.AStarPathfind(graph, graph[ai.index], graph[nearest.index]);
    // If path isn't null, update location to first result
    if (path !== null && path.length > 0) {
        let newX = __WEBPACK_IMPORTED_MODULE_1__options__["h" /* GRID_INFO */][path[0].getValue()].gridPosition.r;
        let newY = __WEBPACK_IMPORTED_MODULE_1__options__["h" /* GRID_INFO */][path[0].getValue()].gridPosition.c;
        // Set the direction we just moved
        if (newX == nx + 1) {
            ai.direction = __WEBPACK_IMPORTED_MODULE_1__options__["f" /* DOWN */];
        } else if (newX == nx - 1) {
            ai.direction = __WEBPACK_IMPORTED_MODULE_1__options__["x" /* UP */];
        } else if (newY == ny + 1) {
            ai.direction = __WEBPACK_IMPORTED_MODULE_1__options__["n" /* RIGHT */];
        } else if (newY == ny - 1) {
            ai.direction = __WEBPACK_IMPORTED_MODULE_1__options__["i" /* LEFT */];
        } else {
            ai.direction = null;
        }
        nx = newX;
        ny = newY;
        // Check if the path is open
        if (grid[nx][ny] === __WEBPACK_IMPORTED_MODULE_1__options__["m" /* OPEN */]) {
            // Update location and grid index
            ai.gridLocation.x = nx;
            ai.gridLocation.y = ny;
            ai.index = getGridIndex({ x: ai.gridLocation.x, y: ai.gridLocation.y });
            return ai;
            // If the movement causes a cop and robber to collide, end the game
        } else if (grid[nx][ny] != __WEBPACK_IMPORTED_MODULE_1__options__["z" /* WALL */] && grid[nx][ny] != ai.team) {
            document.querySelector('.restart-layer .winner').textContent = 'The Cops caught the Robbers!';
            document.querySelector('.restart-layer').style.display = 'block';
            document.querySelector(".restart-layer button").addEventListener("click", reload);
        }
    }
    // If the new position is a wall, causes collision between two cops or two robbers, or returns no valid path, return null
    return null;
}

function getRobberMove(ai, players, grid, aStar, graph) {
    // Get the nearest Cop
    let nx = ai.gridLocation.x;
    let ny = ai.gridLocation.y;
    let nearest = getNearestOpponentPlayer({ x: nx, y: ny, team: ai.team }, players);
    // Get one space away from Cop in an available direction and path find
    let next = getFleeSpace(nearest, { x: nx, y: ny }, grid);
    let target = getGridIndex(next);
    let path = aStar.AStarPathfind(graph, graph[ai.index], graph[target]);
    // If path isn't null, update location to first result
    if (path !== null) {
        let newX = __WEBPACK_IMPORTED_MODULE_1__options__["h" /* GRID_INFO */][path[0].getValue()].gridPosition.r;
        let newY = __WEBPACK_IMPORTED_MODULE_1__options__["h" /* GRID_INFO */][path[0].getValue()].gridPosition.c;
        // Set the direction we just moved
        if (newX == nx + 1) {
            ai.direction = __WEBPACK_IMPORTED_MODULE_1__options__["f" /* DOWN */];
        } else if (newX == nx - 1) {
            ai.direction = __WEBPACK_IMPORTED_MODULE_1__options__["x" /* UP */];
        } else if (newY == ny + 1) {
            ai.direction = __WEBPACK_IMPORTED_MODULE_1__options__["n" /* RIGHT */];
        } else if (newY == ny - 1) {
            ai.direction = __WEBPACK_IMPORTED_MODULE_1__options__["i" /* LEFT */];
        } else {
            ai.direction = null;
        }
        nx = newX;
        ny = newY;
        // Check if the path is open
        if (grid[nx][ny] === __WEBPACK_IMPORTED_MODULE_1__options__["m" /* OPEN */]) {
            // Update location and grid index
            ai.gridLocation.x = nx;
            ai.gridLocation.y = ny;
            ai.index = getGridIndex({ x: ai.gridLocation.x, y: ai.gridLocation.y });
            return ai;
            // If the movement causes a cop and robber to collide, end the game
        } else if (grid[nx][ny] != __WEBPACK_IMPORTED_MODULE_1__options__["z" /* WALL */] && grid[nx][ny] != ai.team) {
            document.querySelector('.restart-layer .winner').textContent = 'The Cops caught the Robbers!';
            document.querySelector('.restart-layer').style.display = 'block';
            document.querySelector(".restart-layer button").addEventListener("click", reload);
        }
    }
    // If the new position is a wall, causes collision between two cops or two robbers, or returns no valid path, return null
    return null;
}

function getNearestOpponentPlayer(ai, players) {
    let smallestDist = Number.MAX_SAFE_INTEGER;
    let nearest = null;
    for (let i = 0; i < players.length; i++) {
        if (players[i].gridLocation.x === ai.x && players[i].gridLocation.y === ai.y || players[i].team == ai.team) continue;
        let dist = Object(__WEBPACK_IMPORTED_MODULE_0__engine_operations__["b" /* getDistance */])(ai.x, ai.y, players[i].gridLocation.x, players[i].gridLocation.y);
        if (dist < smallestDist) {
            smallestDist = dist;
            nearest = players[i];
        }
    }
    return nearest;
}

function reload() {
    location.reload();
}

function endGame() {
    document.querySelector('.restart-layer .winner').textContent = 'The Robbers escaped!';
    document.querySelector('.restart-layer').style.display = 'block';
    document.querySelector(".restart-layer button").addEventListener("click", reload);
}

function updateGrid(grid, player) {
    if (player.direction) {
        let oldLocation = getOldLocation(player);
        grid[oldLocation.x][oldLocation.y] = __WEBPACK_IMPORTED_MODULE_1__options__["m" /* OPEN */];
        grid[player.gridLocation.x][player.gridLocation.y] = player.team;
    }
    return grid;
}

function getOldLocation(player) {
    let ox = player.gridLocation.x;
    let oy = player.gridLocation.y;
    if (player.direction === __WEBPACK_IMPORTED_MODULE_1__options__["i" /* LEFT */]) oy += 1;else if (player.direction === __WEBPACK_IMPORTED_MODULE_1__options__["n" /* RIGHT */]) oy -= 1;else if (player.direction === __WEBPACK_IMPORTED_MODULE_1__options__["x" /* UP */]) ox += 1;else if (player.direction === __WEBPACK_IMPORTED_MODULE_1__options__["f" /* DOWN */]) ox -= 1;
    return { x: ox, y: oy };
}

function getGridIndex(location) {
    // Determine the correpsonding grid index in the GRID_INFO array
    for (let i = 0; i < __WEBPACK_IMPORTED_MODULE_1__options__["h" /* GRID_INFO */].length; i++) {
        let grid = __WEBPACK_IMPORTED_MODULE_1__options__["h" /* GRID_INFO */][i].gridPosition;
        if (location.x === grid.r && location.y === grid.c) return i;
    }
}

function getFleeSpace(cop, location, grid) {
    // Move away from the cop's current direction, if possible
    if (cop.direction == __WEBPACK_IMPORTED_MODULE_1__options__["n" /* RIGHT */]) {
        if (grid[location.x][location.y - 1] == __WEBPACK_IMPORTED_MODULE_1__options__["m" /* OPEN */]) {
            // try left
            return { x: location.x, y: location.y - 1 };
        } else if (grid[location.x - 1][location.y] == __WEBPACK_IMPORTED_MODULE_1__options__["m" /* OPEN */]) {
            // try up
            return { x: location.x - 1, y: location.y };
        } else if (grid[location.x + 1][location.y] == __WEBPACK_IMPORTED_MODULE_1__options__["m" /* OPEN */]) {
            // try down
            return { x: location.x + 1, y: location.y };
        }
        // invalid, so move right
        return { x: location.x, y: location.y + 1 };
    } else if (cop.direction == __WEBPACK_IMPORTED_MODULE_1__options__["i" /* LEFT */]) {
        if (grid[location.x][location.y + 1] == __WEBPACK_IMPORTED_MODULE_1__options__["m" /* OPEN */]) {
            // try right
            return { x: location.x, y: location.y + 1 };
        } else if (grid[location.x - 1][location.y] == __WEBPACK_IMPORTED_MODULE_1__options__["m" /* OPEN */]) {
            // try up
            return { x: location.x - 1, y: location.y };
        } else if (grid[location.x + 1][location.y] == __WEBPACK_IMPORTED_MODULE_1__options__["m" /* OPEN */]) {
            // try down
            return { x: location.x + 1, y: location.y };
        }
        // invalid, so move left
        return { x: location.x, y: location.y - 1 };
    } else if (cop.direction == __WEBPACK_IMPORTED_MODULE_1__options__["x" /* UP */]) {
        if (grid[location.x + 1][location.y] == __WEBPACK_IMPORTED_MODULE_1__options__["m" /* OPEN */]) {
            // try down
            return { x: location.x + 1, y: location.y };
        } else if (grid[location.x][location.y - 1] == __WEBPACK_IMPORTED_MODULE_1__options__["m" /* OPEN */]) {
            // try left
            return { x: location.x, y: location.y - 1 };
        } else if (grid[location.x][location.y + 1] == __WEBPACK_IMPORTED_MODULE_1__options__["m" /* OPEN */]) {
            // try right
            return { x: location.x, y: location.y + 1 };
        }
        // invalid, so move up
        return { x: location.x - 1, y: location.y };
    }
    // else, moving down
    if (grid[location.x][location.y - 1] == __WEBPACK_IMPORTED_MODULE_1__options__["m" /* OPEN */]) {
        // try left
        return { x: location.x, y: location.y - 1 };
    } else if (grid[location.x][location.y + 1] == __WEBPACK_IMPORTED_MODULE_1__options__["m" /* OPEN */]) {
        // try right
        return { x: location.x, y: location.y + 1 };
    } else if (grid[location.x - 1][location.y] == __WEBPACK_IMPORTED_MODULE_1__options__["m" /* OPEN */]) {
        // try up
        return { x: location.x - 1, y: location.y };
    }
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CHECK_METHOD = 'check-method';
const ACTION_METHOD = 'action-method';

/**
 * Decision node used in traversing a Decision Tree. This tree is strictly binary for the purposes
 * of simple decision making, but can be expanded to include multi-node branching decisions. Each node
 * stores some test function that parses whether its true or false node should be returned.
 */
class DecisionNode {
	/**
  * Constructor. Each decision node maintains a testMethod for determining the next
  * node to visit. This method may either represent a decision to make or an action
  * to execute.
     * @param testMethod the test method for deciding which node to visit
  */
	constructor(testMethod) {
		this.trueNode = null; // true node action
		this.falseNode = null; // false node action
		this.testMethod = testMethod; // {type: type of node, action: function to execute}
	}

	/**
  * Sets the true node for this decision node.
  * @param trueNode the true node to set
  */
	setTrueNode(trueNode) {
		this.trueNode = trueNode;
	}

	/**
  * Sets the false node for this decision node.
  * @param falseNode the false node to set
  */
	setFalseNode(falseNode) {
		this.falseNode = falseNode;
	}

	/**
  * Sets the testValue for this decision node
  * @param testValue the test value to set
  */
	setTestMethod(testMethod) {
		this.testMethod = testMethod; // test method for deciding the next node to visit
	}

	/**
  * Decides which node to execute based upon the results of the test function.
  */
	makeDecision() {
		// Check for a decision action
		if (this.testMethod.type == CHECK_METHOD) {
			if (this.testMethod.action) {
				// Call true child
				this.trueNode.makeDecision();
			} else {
				// Call false child
				this.falseNode.makeDecision();
			}
		} else if (this.testMethod.type == ACTION_METHOD) {
			// execute the action
			this.testMethod.action;
		}
	}

	toString() {
		// Loop through each node and print out its children recursively
		let disp = 'NodeAttribute with children:\n';
		// Check for null children, which will be actions
		if (this.trueNode == null && this.falseNode == null) {
			return disp + " leftChild: null\nrightChild: null\n";
		} else if (this.falseNode == null) {
			return disp + " leftChild: " + this.trueNode.toString() + "\nrightChild: null\n";
		} else if (this.trueNode == null) {
			return disp + " leftChild: null" + "\nrightChild: " + this.falseNode.toString() + "\n";
		}
		// Otherwise, get the children
		return disp + " leftChild: " + this.trueNode.toString() + "\nrightChild: " + this.falseNode.toString() + "\n";
	}

}

/* unused harmony default export */ var _unused_webpack_default_export = (DecisionNode);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vertex__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operations__ = __webpack_require__(0);



class GraphGenerator {
	constructor() {
		this.points = []; // List of Vertices representing the room path
	}

	/** 
  * Generates a graph of vertices based on the given grid structure.
  * @param grid the grid from which to generate the room graph
  * @param cellWidth the width of a grid cell
  * @param cellHeight the height of a grid cell
  */
	generateGraphFromGridCells(grid, cellWidth, cellHeight) {
		// Examine each cell and create initial verticies
		for (let i = 0; i < grid.length; i++) {
			let vertex = new __WEBPACK_IMPORTED_MODULE_0__Vertex__["a" /* default */](i);
			let x = cellWidth * grid[i].gridPosition.c;
			let y = cellHeight * grid[i].gridPosition.r;
			let center = Object(__WEBPACK_IMPORTED_MODULE_1__operations__["a" /* calculateCenter */])(x, y, cellWidth, cellHeight);
			vertex.setLoc({ x: center.x, y: center.y });
			this.points.push(vertex);
		}
		// Add neighbors for each vertex
		for (let i = 0; i < grid.length; i++) {
			let vertex = this.points[i];
			let neighbors = grid[i].neighbors;
			for (let j = 0; j < neighbors.length; j++) {
				let neighbor = this.points[neighbors[j]];
				let distance = Object(__WEBPACK_IMPORTED_MODULE_1__operations__["b" /* getDistance */])(vertex.getLoc().x, vertex.getLoc().y, neighbor.getLoc().x, neighbor.getLoc().y);
				// Add this neighbor to the current vertex
				vertex.addNeighbor(neighbor, distance);
			}
			// Update the vertex in the graph
			this.points[i] = vertex;
		}
	}

	/**
  * Returns the Vertex array representing the graph of nodes for this graph
  * @return the vertex array representing this graph
  */
	getGraph() {
		return this.points;
	}

}

/* harmony default export */ __webpack_exports__["a"] = (GraphGenerator);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Edge__ = __webpack_require__(16);


class Vertex {
    constructor(val) {
        this.value = val; // vertex value
        this.neighbors = []; // vertex neighbors of type Edge
        this.parent = null; // parent vertex in shortest path
        this.loc = null; // world location
        this.filled = false; // was the node filled in during pathfinding?
    }

    /**
     * Adds a neighbor to this Vertex's edge list
     * @param v the vertex to add
     * @param dist the edge weight between these vertices
     */
    addNeighbor(v, dist) {
        if (!this.checkInNeighbors(v)) {
            this.neighbors.push(new __WEBPACK_IMPORTED_MODULE_0__Edge__["a" /* default */](this, v, dist));
        }
        return false;
    }

    /**
     * Checks if the vertex to add is already a neighbor
     * @param v the vertex to check 
     * @return if the vertex to add is already a neighbor
     */
    checkInNeighbors(v) {
        // Don't add yourself (edge case)
        if (v.getValue() == this.value) {
            return true;
        }
        for (let i = 0; i < this.neighbors.length; i++) {
            // Test if the vertex to add is already at this position
            if (this.neighbors[i].getNeighbor().equals(v)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Tests if this Vertex and the given object are equal.
     * @param o the object to test
     * @return if this vertex and the object are equal
     */
    equals(o) {
        if (o instanceof Vertex) {
            if (o.getValue() == this.value) {
                return true;
            }
        }
        return false;
    }

    /**
     * Gets the value for this vertex
     * @return this vertex's value
     */
    getValue() {
        return this.value;
    }

    /**
     * Gets this vertex's neighbors
     * @return this vertex's neighbors
     */
    getNeighbors() {
        return this.neighbors;
    }

    /**
     * Sets this vertex's parent
     * @param v the parent vertex to set
     */
    setParent(v) {
        this.parent = v;
    }

    /**
     * Gets the parent for this vertex
     * @return this vertex's parent
     */
    getParent() {
        return this.parent;
    }

    /**
     * String representation for this vertex
     * @return string representation for this vertex
     */
    toString() {
        let disp = "Vertex " + this.value + " - Neighbors: [";
        for (let i = 0; i < this.neighbors.length; i++) {
            let e = this.neighbors[i];
            disp += "Vertex: " + e.getNeighbor().getValue() + ", Weight = " + e.getWeight() + "; ";
        }
        disp += "]";
        return disp;
    }

    /**
     * Gets this vertex's location
     * @return this vertex's location (PVector)
     */
    getLoc() {
        return this.loc;
    }

    /**
     * Sets this vertex's location
     * @param loc the location to set (PVector)
     */
    setLoc(loc) {
        this.loc = loc;
    }

    /**
     * Returns if this vertex is filled
     * @return if this vertex is filled
     */
    isFilled() {
        return this.filled;
    }

    /**
     * Sets the filled status for this vertex
     * @param filled the filled status to set 
     */
    setFilled(filled) {
        this.filled = filled;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Vertex);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Edge {
  constructor(o, n, w) {
    this.origin = o; // "from" vertex
    this.neighbor = n; // "to" vertex
    this.weight = w; // edge weight
  }

  /**
   * Returns this edge's neighbor
   * @return this edge's neighbor
   */
  getNeighbor() {
    return this.neighbor;
  }

  /**
   * Returns this edge's weight
   * @return this edge's weight
   */
  getWeight() {
    return this.weight;
  }

  /**
   * Returns this edge's origin
   * @return this edge's origin
   */
  getOrigin() {
    return this.origin;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Edge);

/***/ })
/******/ ]);