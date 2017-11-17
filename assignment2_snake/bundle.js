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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeMultiElementFromArray = removeMultiElementFromArray;
exports.getRandomNumber = getRandomNumber;
exports.getDistance = getDistance;
exports.calculateCenter = calculateCenter;
function removeMultiElementFromArray(arr) {
    for (var _len = arguments.length, indexes = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        indexes[_key - 1] = arguments[_key];
    }

    indexes.sort(function (a, b) {
        return b - a;
    }); // decendent

    for (var i = 0; i < indexes.length; i++) {
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

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SNAKE_INIT_LENGTH = exports.SNAKE_INIT_LENGTH = 5;

var RIGHT = exports.RIGHT = 'RIGHT';
var UP = exports.UP = 'UP';
var LEFT = exports.LEFT = 'LEFT';
var DOWN = exports.DOWN = 'DOWN';

var SEGMENT_WIDTH = exports.SEGMENT_WIDTH = 15;

var CANVAS_WIDTH = exports.CANVAS_WIDTH = 600;
var CANVAS_HEIGHT = exports.CANVAS_HEIGHT = 620;

var OBSTACLE_SIZE = exports.OBSTACLE_SIZE = 45;
var BOUNDARY_PROX = exports.BOUNDARY_PROX = -0.9;
var OBSTACLE_PROX = exports.OBSTACLE_PROX = 1;
var FOOD_FROM_OBSTACLE = exports.FOOD_FROM_OBSTACLE = 5;
var OBSTACLE_FROM_OBSTACLE = exports.OBSTACLE_FROM_OBSTACLE = 5;

var ROWS = exports.ROWS = CANVAS_WIDTH / SEGMENT_WIDTH;
var COLS = exports.COLS = CANVAS_HEIGHT / SEGMENT_WIDTH;

var MOVING_SPEED = exports.MOVING_SPEED = 250; // 1000ms interval for setTimeout
var ACCELERATING_SPEED = exports.ACCELERATING_SPEED = 400;

var COLLISION_AUDIO = exports.COLLISION_AUDIO = 'collision.mp3';
var POWERUP_AUDIO = exports.POWERUP_AUDIO = 'powerup.mp3';
var POWERDOWN_AUDIO = exports.POWERDOWN_AUDIO = 'powerdown.mp3';
var AUDIO = exports.AUDIO = [COLLISION_AUDIO, POWERUP_AUDIO, POWERDOWN_AUDIO];

var SPOILED_FOOD_TIMEOUT = exports.SPOILED_FOOD_TIMEOUT = 7000;

var SINGLE = exports.SINGLE = 'SINGLE';
var LOCAL_MULT = exports.LOCAL_MULT = 'LOCAL_MULT';

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _SnakeGame = __webpack_require__(25);

var _SnakeGame2 = _interopRequireDefault(_SnakeGame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _SnakeGame2.default();
game.init();

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Game2 = __webpack_require__(26);

var _Game3 = _interopRequireDefault(_Game2);

var _helper = __webpack_require__(50);

var _options = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NUM_OBSTACLES = 6;

var SnakeGame = function (_Game) {
    _inherits(SnakeGame, _Game);

    function SnakeGame() {
        _classCallCheck(this, SnakeGame);

        var _this = _possibleConstructorReturn(this, (SnakeGame.__proto__ || Object.getPrototypeOf(SnakeGame)).call(this));

        _this.canvas = document.querySelector('#snake');
        _this.context = _this.canvas.getContext('2d');

        _this.canvas.height = _options.CANVAS_HEIGHT;
        _this.canvas.width = _options.CANVAS_WIDTH;

        _this.gameType = null;

        _this.snakes = [];
        _this.snakeSegments = null;
        _this.obstacles = (0, _helper.initObstacles)(NUM_OBSTACLES);
        _this.food = (0, _helper.initFood)(_this.obstacles);
        _this.spoiledFood = (0, _helper.initFood)(_this.obstacles);
        _this.audio = (0, _helper.initAudio)();
        _this.currentSnake = 0;

        setTimeout(_helper.removeSpoiledFood.bind(_this), _options.SPOILED_FOOD_TIMEOUT, _this.obstacles);

        _this.movingDirection = null;
        _this.currScore = 0;
        return _this;
    }

    _createClass(SnakeGame, [{
        key: 'initScorePanel',
        value: function initScorePanel() {
            var highestScore = localStorage.getItem('highestScore') || 0;
            if (this.currentSnake === 0) {
                document.querySelector('.score-panel .current1 .score').innerHTML = this.snakes[0].currScore;
            } else {
                document.querySelector('.score-panel .current2 .score').innerHTML = this.snakes[1].currScore;
            }
            document.querySelector('.score-panel .highest .score').innerHTML = highestScore;
        }
    }, {
        key: 'setMovingDirection',
        value: function setMovingDirection(e) {
            if (e.keyCode === 37 && this.snakes[0].movingDirection !== _options.RIGHT) {
                this.snakes[0].movingDirection = _options.LEFT;
            } else if (e.keyCode === 38 && this.snakes[0].movingDirection !== _options.DOWN) {
                this.snakes[0].movingDirection = _options.UP;
            } else if (e.keyCode === 39 && this.snakes[0].movingDirection !== _options.LEFT) {
                this.snakes[0].movingDirection = _options.RIGHT;
            } else if (e.keyCode === 40 && this.snakes[0].movingDirection !== _options.UP) {
                this.snakes[0].movingDirection = _options.DOWN;
            } else if (this.snakes.length == 2) {
                if (e.keyCode === 65 && this.snakes[1].movingDirection !== _options.RIGHT) {
                    this.snakes[1].movingDirection = _options.LEFT;
                } else if (e.keyCode === 87 && this.snakes[1].movingDirection !== _options.DOWN) {
                    this.snakes[1].movingDirection = _options.UP;
                } else if (e.keyCode === 68 && this.snakes[1].movingDirection !== _options.LEFT) {
                    this.snakes[1].movingDirection = _options.RIGHT;
                } else if (e.keyCode === 83 && this.snakes[1].movingDirection !== _options.UP) {
                    this.snakes[1].movingDirection = _options.DOWN;
                }
            }
        }
    }, {
        key: 'addKeyboardHandlers',
        value: function addKeyboardHandlers() {
            var _this2 = this;

            document.addEventListener('keydown', function (e) {
                return _this2.setMovingDirection(e);
            });
        }
    }, {
        key: 'update',
        value: function update() {
            // make the snake move one more step every 1 second
            // according to the direction
            for (var i = 0; i < this.snakes.length; i++) {
                // set properties to current snake
                this.snakeSegments = this.snakes[i].snakeSegments;
                this.movingDirection = this.snakes[i].movingDirection;
                this.currentSnake = i;
                this.currScore = this.snakes[i].currScore;
                // perform updates
                this.snakes[i].snakeSegments = _helper.moveSnake.call(this);
                this.food = _helper.checkFood.call(this, this.food, false);
                this.spoiledFood = _helper.checkFood.call(this, this.spoiledFood, true);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _canvas = this.canvas,
                width = _canvas.width,
                height = _canvas.height;
            // background

            (0, _helper.drawWalls)(this.context, width, height);

            // obstacles
            (0, _helper.drawObstacles)(this.context, this.obstacles);

            // the snake
            for (var i = 0; i < this.snakes.length; i++) {
                (0, _helper.drawSnake)(this.context, this.snakes[i].snakeSegments);
            }

            // the food
            (0, _helper.drawFood)(this.context, this.food, this.spoiledFood);
        }
    }, {
        key: 'debug',
        value: function debug() {
            window.snakeSegments = this.snakeSegments;
            window.update = this.update.bind(this);
            window.render = this.render.bind(this);
            window.gameloop = this.gameloop.bind(this);
        }
    }, {
        key: 'showGameTypes',
        value: function showGameTypes() {
            var _this3 = this;

            document.querySelector('.gameType-layer').style.display = 'block';
            document.querySelector(".gameType-layer button[id='single-player']").addEventListener("click", function () {
                return _this3.initSinglePlayer();
            });
            document.querySelector(".gameType-layer button[id='local-multiplayer']").addEventListener("click", function () {
                return _this3.initMultiplayer();
            });
        }
    }, {
        key: 'initSinglePlayer',
        value: function initSinglePlayer() {
            this.snakes.push({ snakeSegments: (0, _helper.initSnake)(0), movingDirection: _options.RIGHT, currScore: 0 }); // only load one snake
            document.querySelector('.score-panel .current2').style.display = 'none';
            this.initScorePanel();
            this.gameType = _options.SINGLE;
            this.configureParams();
            document.querySelector('.gameType-layer').style.display = 'none';
        }
    }, {
        key: 'initMultiplayer',
        value: function initMultiplayer() {
            this.snakes.push({ snakeSegments: (0, _helper.initSnake)(0), movingDirection: _options.RIGHT, currScore: 0 });
            this.snakes.push({ snakeSegments: (0, _helper.initSnake)(30), movingDirection: _options.RIGHT, currScore: 0 });
            this.initScorePanel();
            this.currentSnake = 1;
            this.initScorePanel();
            this.gameType = _options.LOCAL_MULT;
            this.configureParams();
            document.querySelector('.gameType-layer').style.display = 'none';
        }
    }, {
        key: 'configureParams',
        value: function configureParams() {
            this.timer = setInterval(this.gameloop.bind(this), _options.MOVING_SPEED);
            this.debug();
            this.addKeyboardHandlers();
        }
    }, {
        key: 'init',
        value: function init() {
            this.showGameTypes();
        }
    }]);

    return SnakeGame;
}(_Game3.default);

exports.default = SnakeGame;

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);
    }

    _createClass(Game, [{
        key: 'addKeyboardHandlers',


        // Specifies keyboard handlers
        value: function addKeyboardHandlers() {
            throw new Error('Keyboard handlers must be implemented');
        }

        // Sets the update loop

    }, {
        key: 'update',
        value: function update() {
            throw new Error('Update must be implemented');
        }

        // Sets the render loop

    }, {
        key: 'render',
        value: function render() {
            throw new Error('Render must be implemented');
        }

        // The game loop managed by the engine

    }, {
        key: 'gameloop',
        value: function gameloop() {
            // to use gameloop, you must do the binding in the constructor in the subclass
            // aka, this.gameloop = this.gameloop.bind(this), to get access to update and render
            this.update();
            this.render();
        }

        // Optional debugging

    }, {
        key: 'debug',
        value: function debug() {
            console.log('No debugging parameters are currently set.');
        }

        // Initializes base game components

    }, {
        key: 'init',
        value: function init() {
            throw new Error('Init must be implemented');
        }
    }]);

    return Game;
}();

exports.default = Game;

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.drawWalls = drawWalls;
exports.initAudio = initAudio;
exports.initSnake = initSnake;
exports.drawSnake = drawSnake;
exports.moveSnake = moveSnake;
exports.checkFood = checkFood;
exports.initFood = initFood;
exports.drawFood = drawFood;
exports.removeSpoiledFood = removeSpoiledFood;
exports.createSpoiledFood = createSpoiledFood;
exports.initObstacles = initObstacles;
exports.drawObstacles = drawObstacles;

var _Segment = __webpack_require__(51);

var _Segment2 = _interopRequireDefault(_Segment);

var _options = __webpack_require__(23);

var _Food = __webpack_require__(52);

var _Food2 = _interopRequireDefault(_Food);

var _operations = __webpack_require__(10);

var _Obstacle = __webpack_require__(53);

var _Obstacle2 = _interopRequireDefault(_Obstacle);

var _AudioManager = __webpack_require__(54);

var _AudioManager2 = _interopRequireDefault(_AudioManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function drawWalls(context, width, height) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = 'black';
    context.strokeRect(0, 0, width, height);
}

function initAudio() {
    var audio = new _AudioManager2.default();
    audio.loadAudio(_options.AUDIO);
    return audio;
}

function initSnake(startY) {
    // 600 x 600 => 40 x 40

    var snakeSegments = [];
    for (var i = _options.SNAKE_INIT_LENGTH - 1; i >= 0; i--) {
        // the position is the relative index, not the exact pixel
        snakeSegments.push(new _Segment2.default({ width: 1, height: 1 }, { x: i, y: startY }));
    }
    return snakeSegments;
}

function drawSingleSegment(context, _ref) {
    var x = _ref.x,
        y = _ref.y;

    context.fillStyle = 'green';
    context.fillRect(x * _options.SEGMENT_WIDTH, y * _options.SEGMENT_WIDTH, _options.SEGMENT_WIDTH, _options.SEGMENT_WIDTH);
    context.strokeStyle = 'white';
    context.strokeRect(x * _options.SEGMENT_WIDTH, y * _options.SEGMENT_WIDTH, _options.SEGMENT_WIDTH, _options.SEGMENT_WIDTH);
}

function drawSnake(context, snakeSegments) {
    context.save();
    snakeSegments.forEach(function (s) {
        var _s$position = s.position,
            x = _s$position.x,
            y = _s$position.y;

        drawSingleSegment(context, { x: x, y: y });
    });
    context.restore();
}

function isCollidesWall(head) {
    // head.x, head.y
    return head.x >= _options.ROWS || head.x < 0 || head.y >= _options.COLS || head.y < 0;
}

function isCollidesFood(head, food) {
    var spoiledFood = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (head.x === food.x && head.y === food.y) {
        return 1;
    } else if (spoiledFood && head.x === spoiledFood.position.x && head.y === spoiledFood.position.y) {
        return -1;
    } else {
        return 0;
    }
}

function isCollidesItself(head, snakeSegments) {
    for (var i = 0; i < snakeSegments.length; i++) {
        if (head.x == snakeSegments[i].position.x && head.y == snakeSegments[i].position.y) {
            return true;
        }
    }
    return false;
}

function isCollidesOpponent(head, otherSegments, gameType) {
    // Only perform if its a multiplayer variant
    if (gameType !== _options.SINGLE) {
        // Check collisions for the head to each opponent's segments
        for (var i = 0; i < otherSegments.length; i++) {
            if (head.x === otherSegments[i].position.x && head.y === otherSegments[i].position.y) {
                return true;
            }
        }
    }
    return false;
}

function isCollidesObstacle(head, obstacles) {
    // do collision check for each obstacle
    var centerX = head.x + .5 * head.size.width;
    var centerY = head.y + .5 * head.size.height;
    var pos = { x: centerX, y: centerY };
    var closest = getClosestObstacle(pos, obstacles);
    var obj = new _Segment2.default(head.size, pos);
    if (closest.getCollision(obj, _options.OBSTACLE_PROX, _options.BOUNDARY_PROX)) return true;
    return false;
}

function getClosestObstacle(head, obstacles) {
    var smallest_dist = Number.MAX_VALUE;
    var closest_obs = null;
    for (var i = 0; i < obstacles.length; i++) {
        var obs = obstacles[i];
        var distance = (0, _operations.getDistance)(head.x, head.y, obs.center.x, obs.center.y);
        if (distance < smallest_dist) {
            smallest_dist = distance;
            closest_obs = obs;
        }
    }
    return closest_obs;
}

function updateLocalStorage(score) {
    var highestScore = localStorage.getItem('highestScore') || 0;
    if (score > highestScore) {
        localStorage.setItem('highestScore', score);
    }
}

function showRestartLayer(gameType, snakes) {
    if (gameType !== _options.SINGLE) {
        var winner = 'Winner: ';
        if (snakes[0].currScore > snakes[1].currScore) {
            winner += 'Player 1';
        } else if (snakes[1].currScore > snakes[0].currScore) {
            winner += 'Player 2';
        } else {
            winner = 'Draw';
        }
        document.querySelector('.restart-layer .winner').textContent = winner;
    }
    document.querySelector('.restart-layer').style.display = 'block';
    document.querySelector(".restart-layer button").addEventListener("click", reload);
}

function reload() {
    location.reload();
}

function nearObstacles(obj, obstacles, offset) {
    // want to check for all obstacles
    var near = false;
    for (var i = 0; i < obstacles.length; i++) {
        var check = obstacles[i];
        // ensure we're not within distance range of check size
        if (check.nearObstacle(obj.center.x, obj.center.y, offset)) near = true;
    }
    return near;
}

function moveSnake() {
    var snakeSegments = this.snakeSegments,
        movingDirection = this.movingDirection,
        food = this.food,
        spoiledFood = this.spoiledFood,
        obstacles = this.obstacles,
        audio = this.audio,
        snakes = this.snakes,
        currentSnake = this.currentSnake,
        gameType = this.gameType;
    // construct a new head segment according to the moving direction

    var head = snakeSegments[0];
    var nx = head.position.x;
    var ny = head.position.y;
    if (movingDirection === _options.LEFT) nx -= 1;else if (movingDirection === _options.RIGHT) nx += 1;else if (movingDirection === _options.UP) ny -= 1;else if (movingDirection === _options.DOWN) ny += 1;
    // check collision with itself, crosses the wall, hits the other player, or hits an obstacle
    var other = void 0;
    if (gameType === _options.SINGLE) {
        other = 0;
    } else {
        currentSnake === 0 ? other = 1 : other = 0;
    }
    if (isCollidesWall({ x: nx, y: ny }) || isCollidesItself({ x: nx, y: ny }, snakeSegments) || isCollidesObstacle({ x: nx, y: ny, size: head.size }, obstacles) || isCollidesOpponent({ x: nx, y: ny }, snakes[other].snakeSegments, gameType)) {
        updateLocalStorage(this.currScore);

        audio.getAudioByName(_options.COLLISION_AUDIO).play();
        clearInterval(this.timer);
        showRestartLayer(gameType, snakes);
    }
    head = new _Segment2.default({ width: 1, height: 1 }, { x: nx, y: ny });
    // check if it eats food
    var collision = isCollidesFood({ x: nx, y: ny }, food.position, spoiledFood);
    if (collision == 1) {
        // score++ and call this.initScorePanel()
        audio.getAudioByName(_options.POWERUP_AUDIO).play();
        this.currScore++;
        this.snakes[currentSnake].currScore = this.currScore;
        this.initScorePanel();
    } else if (collision == -1) {
        audio.getAudioByName(_options.POWERDOWN_AUDIO).play();
        this.currScore--;
        this.snakes[currentSnake].currScore = this.currScore;
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
    var snakeSegments = this.snakeSegments,
        obstacles = this.obstacles;

    var pos = snakeSegments[0].position;

    var newFood = food;
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
    var food = null;
    do {
        var xPos = (0, _operations.getRandomNumber)(_options.COLS);
        var yPos = (0, _operations.getRandomNumber)(_options.ROWS);
        food = new _Food2.default(1, { x: xPos, y: yPos });
    } while (nearObstacles(food, obstacles, _options.FOOD_FROM_OBSTACLE) || food.position.x >= _options.COLS - 2 || food.position.y >= _options.ROWS - 2);
    return food;
}

function drawFood(context, food, spoiledFood) {
    context.save();
    context.fillStyle = '#de9f5f';
    context.fillRect(food.position.x * _options.SEGMENT_WIDTH, food.position.y * _options.SEGMENT_WIDTH, _options.SEGMENT_WIDTH, _options.SEGMENT_WIDTH);
    if (spoiledFood != null) {
        context.fillStyle = '#FF0000';
        context.fillRect(spoiledFood.position.x * _options.SEGMENT_WIDTH, spoiledFood.position.y * _options.SEGMENT_WIDTH, _options.SEGMENT_WIDTH, _options.SEGMENT_WIDTH);
    }
    context.restore();
}

function removeSpoiledFood() {
    this.spoiledFood = null;
    setTimeout(createSpoiledFood.bind(this), _options.SPOILED_FOOD_TIMEOUT);
}

function createSpoiledFood() {
    this.spoiledFood = initFood(this.obstacles);
    setTimeout(removeSpoiledFood.bind(this), _options.SPOILED_FOOD_TIMEOUT);
}

function initObstacles(num_obs) {
    var obstacles = new Array();

    for (var i = 0; i < num_obs; i++) {
        var x = 0;
        var y = 0;
        var obs = null;
        do {
            x = (0, _operations.getRandomNumber)(_options.COLS);
            y = (0, _operations.getRandomNumber)(_options.ROWS);
            obs = new _Obstacle2.default('', { width: _options.OBSTACLE_SIZE / _options.SEGMENT_WIDTH, height: _options.OBSTACLE_SIZE / _options.SEGMENT_WIDTH }, { x: x, y: y }, 2);
        } while (nearObstacles(obs, obstacles, _options.OBSTACLE_FROM_OBSTACLE) || x > _options.COLS - _options.SEGMENT_WIDTH || y > _options.ROWS - _options.SEGMENT_WIDTH || x <= _options.OBSTACLE_SIZE / _options.SEGMENT_WIDTH && y <= _options.OBSTACLE_SIZE / _options.SEGMENT_WIDTH);
        obstacles.push(obs);
    }

    return obstacles;
}

function drawObstacles(context, obstacles) {
    for (var i = 0; i < obstacles.length; i++) {
        var obstacle = obstacles[i];
        context.save();
        context.fillStyle = 'black';
        context.fillRect(obstacle.position.x * _options.SEGMENT_WIDTH - _options.SEGMENT_WIDTH, obstacle.position.y * _options.SEGMENT_WIDTH - _options.SEGMENT_WIDTH, _options.OBSTACLE_SIZE + _options.SEGMENT_WIDTH, _options.OBSTACLE_SIZE + _options.SEGMENT_WIDTH);
        context.restore();
    }
}

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Sprite2 = __webpack_require__(9);

var _Sprite3 = _interopRequireDefault(_Sprite2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Segment = function (_Sprite) {
    _inherits(Segment, _Sprite);

    function Segment(size, _ref) {
        var x = _ref.x,
            y = _ref.y;

        _classCallCheck(this, Segment);

        return _possibleConstructorReturn(this, (Segment.__proto__ || Object.getPrototypeOf(Segment)).call(this, '', size, { x: x, y: y }));
    }

    return Segment;
}(_Sprite3.default);

exports.default = Segment;

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Sprite2 = __webpack_require__(9);

var _Sprite3 = _interopRequireDefault(_Sprite2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Food = function (_Sprite) {
    _inherits(Food, _Sprite);

    function Food(size, _ref) {
        var x = _ref.x,
            y = _ref.y;

        _classCallCheck(this, Food);

        return _possibleConstructorReturn(this, (Food.__proto__ || Object.getPrototypeOf(Food)).call(this, '', size, { x: x, y: y }));
    }

    return Food;
}(_Sprite3.default);

exports.default = Food;

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Sprite2 = __webpack_require__(9);

var _Sprite3 = _interopRequireDefault(_Sprite2);

var _operations = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NUM_SECTIONS = [9, 16, 25]; // small, medium, and large boundary divisions

var Obstacle = function (_Sprite) {
    _inherits(Obstacle, _Sprite);

    function Obstacle(src, size, _ref, divisionType) {
        var x = _ref.x,
            y = _ref.y;

        _classCallCheck(this, Obstacle);

        var _this = _possibleConstructorReturn(this, (Obstacle.__proto__ || Object.getPrototypeOf(Obstacle)).call(this, src, size, { x: x, y: y }));

        if (divisionType < 0 || divisionType > 2) {
            throw Error("Invalid division type");
        }
        _this.divisionType = divisionType;
        _this.calculateBoundaries();
        return _this;
    }

    // subdivides this obstacle into boundaries for collision detection


    _createClass(Obstacle, [{
        key: 'calculateBoundaries',
        value: function calculateBoundaries() {
            this.boundaries = new Array();
            this.sections_rc = Math.sqrt(NUM_SECTIONS[this.divisionType]);
            var width = this.size.width / this.sections_rc;
            var height = this.size.height / this.sections_rc;
            var x = this.position.x,
                y = this.position.y;
            // Define boundaries based on number of sections
            for (var i = 0; i < this.sections_rc; i++) {
                for (var j = 0; j < this.sections_rc; j++) {
                    this.boundaries.push((0, _operations.calculateCenter)(x, y, width, height));
                    x += width;
                }
                x = this.position.x;
                y += height;
            }
        }

        // Gets the collision for this obstacle and the given object

    }, {
        key: 'getCollision',
        value: function getCollision(obj, objOffset, boundsOffset) {
            // check if we're near this obstacle
            // Let prox be the distance between the centers of the object and obstacle at neutral positions
            var prox = (0, _operations.getDistance)(obj.size.width / 2, obj.size.height / 2, this.size.width / 2, this.size.height / 2);
            if (this.nearObstacle(obj.center.x, obj.center.y, prox + objOffset)) {
                for (var i = 0; i < this.boundaries.length; i++) {
                    var boundary = this.boundaries[i];
                    var bound_prox = void 0;
                    // Determine side of approach
                    if (obj.center.x <= boundary.x) {
                        // approaching from left
                        if (obj.center.y < boundary.y) {
                            // approaching from top-left
                            bound_prox = (0, _operations.getDistance)(boundary.x - this.size.width / this.sections_rc - obj.size.width / 2, boundary.y - this.size.height / this.sections_rc - obj.size.height / 2, boundary.x, boundary.y);
                        } else if (obj.center.y > boundary.y) {
                            // approaching from bottom-left
                            bound_prox = (0, _operations.getDistance)(boundary.x - this.size.width / this.sections_rc - obj.size.width / 2, boundary.y + this.size.height / this.sections_rc + obj.size.height / 2, boundary.x, boundary.y);
                        } else {
                            // directly left
                            bound_prox = (0, _operations.getDistance)(boundary.x - this.size.width / this.sections_rc - obj.size.width / 2, boundary.y, boundary.x, boundary.y);
                        }
                    } else if (obj.center.x > boundary.x) {
                        // approaching from right
                        if (obj.center.y < boundary.y) {
                            // approaching from bottom-right
                            bound_prox = bound_prox = (0, _operations.getDistance)(boundary.x + this.size.width / this.sections_rc + obj.size.width / 2, boundary.y - this.size.height / this.sections_rc - obj.size.height / 2, boundary.x, boundary.y);
                        } else if (obj.center.y > boundary.y) {
                            // approaching from top-right
                            bound_prox = bound_prox = (0, _operations.getDistance)(boundary.x + this.size.width / this.sections_rc + obj.size.width / 2, boundary.y + this.size.height / this.sections_rc + obj.size.height / 2, boundary.x, boundary.y);
                        } else {
                            // directly right
                            bound_prox = (0, _operations.getDistance)(boundary.x - this.size.width / this.sections_rc - obj.size.width / 2, boundary.y, boundary.x, boundary.y);
                        }
                    } else {
                        // same x
                        if (obj.center.y < boundary.y) {
                            // below boundary
                            bound_prox = (0, _operations.getDistance)(boundary.x, boundary.y - this.size.height / this.sections_rc - obj.size.height / 2, boundary.x, boundary.y);
                        } else {
                            // above boundary
                            bound_prox = (0, _operations.getDistance)(boundary.x, boundary.y + this.size.height / this.sections_rc + obj.size.height / 2, boundary.x, boundary.y);
                        }
                    }
                    if (this.nearBoundary(obj.center.x, obj.center.y, boundary.x, boundary.y, bound_prox + boundsOffset)) {
                        return true;
                    }
                }
            }
            return false;
        }
    }, {
        key: 'nearObstacle',
        value: function nearObstacle(objX, objY, prox) {
            var distance = (0, _operations.getDistance)(objX, objY, this.center.x, this.center.y);
            return distance <= prox ? true : false;
        }

        // Checks if an object is near this boundary

    }, {
        key: 'nearBoundary',
        value: function nearBoundary(objX, objY, boundX, boundY, prox) {
            var distance = (0, _operations.getDistance)(objX, objY, boundX, boundY);
            return distance <= prox;
        }
    }, {
        key: 'updatePosition',
        value: function updatePosition(_ref2) {
            var x = _ref2.x,
                y = _ref2.y;

            this.position = { x: x, y: y };
            this.updateCenter();
            this.calculateBoundaries();
        }
    }, {
        key: 'drawBoundariesDebug',
        value: function drawBoundariesDebug(context) {
            for (var i = 0; i < this.boundaries.length; i++) {
                var boundary = this.boundaries[i];
                context.fillStyle = 'red';
                context.fillRect(boundary.x, boundary.y, 5, 5);
            }
        }
    }, {
        key: 'getDetails',
        value: function getDetails() {
            var details = 'src: ' + this.src + ',\n            size: ' + this.size.width + ' x ' + this.size.height + ',\n            position: (' + this.position.x + ',' + this.position.y + '),\n            divisionType: ' + this.divisionType + '\n            boundaries:';
            for (var i = 0; i < this.boundaries.length; i++) {
                var bound = this.boundaries[i];
                details += '\nboundary ' + i + ': (' + bound.x + ',' + bound.y + ')';
            }
            return details;
        }
    }]);

    return Obstacle;
}(_Sprite3.default);

exports.default = Obstacle;

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AudioManager = function () {
    function AudioManager() {
        _classCallCheck(this, AudioManager);

        this.audio = new Array();
    }

    _createClass(AudioManager, [{
        key: 'addAudio',
        value: function addAudio(sound) {
            this.audio.push(new Audio('src/audio/' + sound));
        }
    }, {
        key: 'loadAudio',
        value: function loadAudio(audio) {
            for (var i = 0; i < audio.length; i++) {
                this.addAudio(audio[i]);
            }
        }
    }, {
        key: 'getAudioByName',
        value: function getAudioByName(name) {
            var path = window.location.pathname;
            var dir = path.substring(0, path.lastIndexOf('/'));
            var file = 'file://' + dir + '/src/audio/' + name;
            return this.audio.find(function (element) {
                return element.src === file;
            });
        }
    }]);

    return AudioManager;
}();

exports.default = AudioManager;

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _operations = __webpack_require__(10);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sprite = function () {
    function Sprite(src, _ref, _ref2) {
        var width = _ref.width,
            height = _ref.height;
        var x = _ref2.x,
            y = _ref2.y;

        _classCallCheck(this, Sprite);

        // if(size.width === undefined || size.width === null || size.height === undefined || size.height === null) {
        //     throw 'size must be provided';
        // }
        this.src = src;
        this.size = { width: width, height: height };
        this.position = { x: x, y: y };
        this.updateCenter();
    }

    _createClass(Sprite, [{
        key: 'updateCenter',
        value: function updateCenter() {
            this.center = (0, _operations.calculateCenter)(this.position.x, this.position.y, this.size.width, this.size.height);
        }
    }]);

    return Sprite;
}();

exports.default = Sprite;

/***/ })

/******/ });