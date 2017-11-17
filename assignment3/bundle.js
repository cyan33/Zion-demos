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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
// action type
const INCREASE_SCORE = '/INCREASE_SCORE';
/* harmony export (immutable) */ __webpack_exports__["y"] = INCREASE_SCORE;


// Canvas parameters
const CANVAS_HEIGHT = 600;
/* harmony export (immutable) */ __webpack_exports__["n"] = CANVAS_HEIGHT;

const CANVAS_WIDTH = 600;
/* harmony export (immutable) */ __webpack_exports__["o"] = CANVAS_WIDTH;


// Game parameters
const REMAINING_LIVES = 3;
/* harmony export (immutable) */ __webpack_exports__["D"] = REMAINING_LIVES;

const SHIP_SPRITE = './src/images/ship.png';
/* harmony export (immutable) */ __webpack_exports__["H"] = SHIP_SPRITE;
 // Ship sprite by Millionth Vector
const BULLET_SPRITE = './src/images/bullet.png';
/* harmony export (immutable) */ __webpack_exports__["l"] = BULLET_SPRITE;

const UNIVERSE_BG = './src/images/universe_bg.png';
/* harmony export (immutable) */ __webpack_exports__["K"] = UNIVERSE_BG;

const EXHAUST_SRC = './src/images/exhaust_animation.png';
/* harmony export (immutable) */ __webpack_exports__["t"] = EXHAUST_SRC;

const EFFECT_OFF_WIDTH = 25;
/* unused harmony export EFFECT_OFF_WIDTH */

const EFFECT_OFF_HEIGHT = 55;
/* unused harmony export EFFECT_OFF_HEIGHT */

const EFFECT_SIZE = 16;
/* harmony export (immutable) */ __webpack_exports__["r"] = EFFECT_SIZE;

const EFFECT_SPEED = 4;
/* harmony export (immutable) */ __webpack_exports__["s"] = EFFECT_SPEED;

const EFFECT_FRAMES = 3;
/* harmony export (immutable) */ __webpack_exports__["q"] = EFFECT_FRAMES;

const EXPLOSION_SRC = './src/images/ship_explosion.png';
/* harmony export (immutable) */ __webpack_exports__["x"] = EXPLOSION_SRC;

const EXPLOSION_EFFECT_SIZE = 130;
/* harmony export (immutable) */ __webpack_exports__["v"] = EXPLOSION_EFFECT_SIZE;

const EXPLOSION_EFFECT_FRAMES = 10;
/* harmony export (immutable) */ __webpack_exports__["u"] = EXPLOSION_EFFECT_FRAMES;

const EXPLOSION_OFFSET = {
    x: -25,
    y: -25
};
/* harmony export (immutable) */ __webpack_exports__["w"] = EXPLOSION_OFFSET;

const OFFSET = {
    x: 25,
    y: 55
};
/* harmony export (immutable) */ __webpack_exports__["C"] = OFFSET;

const BULLET_SRC = './src/images/bullet.png';
/* unused harmony export BULLET_SRC */

const MAX_BULLETS = 4;
/* unused harmony export MAX_BULLETS */


const VELOCITY = 3;
/* unused harmony export VELOCITY */

const ROTATION_STEP = 3;
/* harmony export (immutable) */ __webpack_exports__["F"] = ROTATION_STEP;

const MOVE_STEP = 3;
/* harmony export (immutable) */ __webpack_exports__["B"] = MOVE_STEP;


const SHIP_SIZE = {
    width: 64,
    height: 64
};
/* harmony export (immutable) */ __webpack_exports__["G"] = SHIP_SIZE;

const BULLET_SIZE = {
    width: 10,
    height: 10
};
/* harmony export (immutable) */ __webpack_exports__["k"] = BULLET_SIZE;

const SHIP_TIMEOUT = 7000;
/* harmony export (immutable) */ __webpack_exports__["I"] = SHIP_TIMEOUT;

const INITIAL_TIMEOUT = 2000;
/* harmony export (immutable) */ __webpack_exports__["z"] = INITIAL_TIMEOUT;

const BULLET_TIMEOUT = 5000;
/* harmony export (immutable) */ __webpack_exports__["m"] = BULLET_TIMEOUT;

const NUM_ASTEROIDS = 5;
/* unused harmony export NUM_ASTEROIDS */

const ASTEROID_SPEED = 5;
/* harmony export (immutable) */ __webpack_exports__["j"] = ASTEROID_SPEED;

const ASTEROID_LARGE = {
    width: 128,
    height: 128
};
/* harmony export (immutable) */ __webpack_exports__["e"] = ASTEROID_LARGE;

const ASTEROID_MEDIUM = {
    width: 85,
    height: 85
};
/* harmony export (immutable) */ __webpack_exports__["f"] = ASTEROID_MEDIUM;

const ASTEROID_SMALL = {
    width: 64,
    height: 64
};
/* harmony export (immutable) */ __webpack_exports__["h"] = ASTEROID_SMALL;

const ASTEROID_SIZES = [ASTEROID_LARGE, ASTEROID_MEDIUM, ASTEROID_LARGE];
/* harmony export (immutable) */ __webpack_exports__["g"] = ASTEROID_SIZES;

// Asteroid sprites by Peter Robinson
const ASTEROID_1 = './src/images/ast1.png';
/* harmony export (immutable) */ __webpack_exports__["a"] = ASTEROID_1;

const ASTEROID_2 = './src/images/ast2.png';
/* harmony export (immutable) */ __webpack_exports__["b"] = ASTEROID_2;

const ASTEROID_3 = './src/images/ast3.png';
/* harmony export (immutable) */ __webpack_exports__["c"] = ASTEROID_3;

const ASTEROID_4 = './src/images/ast4.png';
/* harmony export (immutable) */ __webpack_exports__["d"] = ASTEROID_4;

const ASTEROID_SOURCES = [ASTEROID_1, ASTEROID_2, ASTEROID_3, ASTEROID_4];
/* harmony export (immutable) */ __webpack_exports__["i"] = ASTEROID_SOURCES;

const CLOCKWISE = 'CLOCKWISE';
/* unused harmony export CLOCKWISE */

const COUNTERCLOCKWISE = 'COUNTERCLOCKWISE';
/* unused harmony export COUNTERCLOCKWISE */


// Keycodes
const LEFT = 37;
/* harmony export (immutable) */ __webpack_exports__["A"] = LEFT;

const UP = 38;
/* harmony export (immutable) */ __webpack_exports__["L"] = UP;

const RIGHT = 39;
/* harmony export (immutable) */ __webpack_exports__["E"] = RIGHT;

const DOWN = 40;
/* harmony export (immutable) */ __webpack_exports__["p"] = DOWN;

const SPACE = 32;
/* harmony export (immutable) */ __webpack_exports__["J"] = SPACE;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_Sprite__ = __webpack_require__(3);

class Bullet extends __WEBPACK_IMPORTED_MODULE_0__engine_Sprite__["a" /* default */] {
    constructor(src, { width, height }, { x, y }, theta) {
        super(src, { width, height }, { x, y });
        this.theta = theta;
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Bullet);

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export clearCanvas */
/* unused harmony export coordinateConversion */
/* unused harmony export getBoundaries */
/* unused harmony export generateRandomPosition */
/* harmony export (immutable) */ __webpack_exports__["a"] = createImageCache;
/* harmony export (immutable) */ __webpack_exports__["b"] = drawLoadedImage;
/* unused harmony export drawImageByUrl */
/* harmony export (immutable) */ __webpack_exports__["c"] = drawRotate;
/* harmony export (immutable) */ __webpack_exports__["d"] = insertText;
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
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(23);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(17);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_Game__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__engine_canvas__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__options__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Ship__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__engine_ParticleSystem_ParticleSystem__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__engine_Spritesheet__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Bullet__ = __webpack_require__(2);










class AsteroidGame extends __WEBPACK_IMPORTED_MODULE_0__engine_Game__["a" /* default */] {
  constructor() {
    super();
    this.canvas = document.querySelector('#asteroids');
    this.context = this.canvas.getContext('2d');

    this.gameover = false; // indicate game is over or not

    this.gameloop = this.gameloop.bind(this);

    this.remainingLives = __WEBPACK_IMPORTED_MODULE_4__options__["D" /* REMAINING_LIVES */];
    this.showRemainingLives = false;

    this.currScore = 0;

    this.shipPosition = {
      x: __WEBPACK_IMPORTED_MODULE_4__options__["o" /* CANVAS_WIDTH */] / 2 - __WEBPACK_IMPORTED_MODULE_4__options__["G" /* SHIP_SIZE */].width / 2,
      y: __WEBPACK_IMPORTED_MODULE_4__options__["n" /* CANVAS_HEIGHT */] / 2 - __WEBPACK_IMPORTED_MODULE_4__options__["G" /* SHIP_SIZE */].height / 2
    };

    this.ship = new __WEBPACK_IMPORTED_MODULE_5__Ship__["a" /* default */](__WEBPACK_IMPORTED_MODULE_4__options__["H" /* SHIP_SPRITE */], __WEBPACK_IMPORTED_MODULE_4__options__["G" /* SHIP_SIZE */], this.shipPosition, 5, 6);
    this.partSystem = new __WEBPACK_IMPORTED_MODULE_6__engine_ParticleSystem_ParticleSystem__["a" /* default */]();
    this.spriteSheet = new __WEBPACK_IMPORTED_MODULE_7__engine_Spritesheet__["a" /* default */](__WEBPACK_IMPORTED_MODULE_4__options__["t" /* EXHAUST_SRC */], __WEBPACK_IMPORTED_MODULE_4__options__["r" /* EFFECT_SIZE */], __WEBPACK_IMPORTED_MODULE_4__options__["r" /* EFFECT_SIZE */], __WEBPACK_IMPORTED_MODULE_4__options__["s" /* EFFECT_SPEED */], __WEBPACK_IMPORTED_MODULE_4__options__["q" /* EFFECT_FRAMES */], __WEBPACK_IMPORTED_MODULE_4__options__["C" /* OFFSET */]);
    this.shipExplosion = new __WEBPACK_IMPORTED_MODULE_7__engine_Spritesheet__["a" /* default */](__WEBPACK_IMPORTED_MODULE_4__options__["x" /* EXPLOSION_SRC */], __WEBPACK_IMPORTED_MODULE_4__options__["v" /* EXPLOSION_EFFECT_SIZE */], __WEBPACK_IMPORTED_MODULE_4__options__["v" /* EXPLOSION_EFFECT_SIZE */], __WEBPACK_IMPORTED_MODULE_4__options__["s" /* EFFECT_SPEED */], __WEBPACK_IMPORTED_MODULE_4__options__["u" /* EXPLOSION_EFFECT_FRAMES */], __WEBPACK_IMPORTED_MODULE_4__options__["w" /* EXPLOSION_OFFSET */]);
    this.bullets = [];
    this.keysPressed = {};
    this.shipDestroyed = false;
  }

  initImageCache() {
    this.imageCache = Object(__WEBPACK_IMPORTED_MODULE_1__engine_canvas__["a" /* createImageCache */])();

    const IMAGE_DICT = {
      'universe': __WEBPACK_IMPORTED_MODULE_4__options__["K" /* UNIVERSE_BG */],
      'ship': __WEBPACK_IMPORTED_MODULE_4__options__["H" /* SHIP_SPRITE */],
      'ast1': __WEBPACK_IMPORTED_MODULE_4__options__["a" /* ASTEROID_1 */],
      'ast2': __WEBPACK_IMPORTED_MODULE_4__options__["b" /* ASTEROID_2 */],
      'ast3': __WEBPACK_IMPORTED_MODULE_4__options__["c" /* ASTEROID_3 */],
      'ast4': __WEBPACK_IMPORTED_MODULE_4__options__["d" /* ASTEROID_4 */],
      'bullet': __WEBPACK_IMPORTED_MODULE_4__options__["l" /* BULLET_SPRITE */]
    };

    Object.keys(IMAGE_DICT).forEach(name => {
      this.imageCache.loadImage(name, IMAGE_DICT[name]);
    });

    this.imageCache.imagesOnLoad(() => this.timer = setInterval(this.gameloop, 30));
  }

  // Keeps track of pressed keys
  initKeysPressed() {
    this.keysPressed[__WEBPACK_IMPORTED_MODULE_4__options__["A" /* LEFT */]] = false;
    this.keysPressed[__WEBPACK_IMPORTED_MODULE_4__options__["L" /* UP */]] = false;
    this.keysPressed[__WEBPACK_IMPORTED_MODULE_4__options__["E" /* RIGHT */]] = false;
    this.keysPressed[__WEBPACK_IMPORTED_MODULE_4__options__["p" /* DOWN */]] = false;
  }

  // Specifies keyboard handlers
  addKeyboardHandlers() {
    document.addEventListener('keydown', e => this.keyDown(e));
    document.addEventListener('keyup', e => this.keyUp(e));
  }

  keyDown(e) {
    e.preventDefault(); // this prevents that the global scrolling of the screen
    if (e.keyCode in this.keysPressed) {
      this.keysPressed[e.keyCode] = true;
    } else if (e.keyCode === __WEBPACK_IMPORTED_MODULE_4__options__["J" /* SPACE */]) {
      if (!this.shipDestroyed) this.shootBullet();
    }
  }

  keyUp(e) {
    if (e.keyCode in this.keysPressed) {
      this.keysPressed[e.keyCode] = false;
    }
  }

  showAndRemoveBanner() {
    this.showRemainingLives = true;
    setTimeout(() => this.showRemainingLives = false, 3000);
  }

  moveShip() {
    if (!this.shipDestroyed) {
      // rotate left
      if (this.keysPressed[__WEBPACK_IMPORTED_MODULE_4__options__["A" /* LEFT */]]) {
        this.ship.theta = this.ship.theta - __WEBPACK_IMPORTED_MODULE_4__options__["F" /* ROTATION_STEP */];
      }
      // rotate right
      if (this.keysPressed[__WEBPACK_IMPORTED_MODULE_4__options__["E" /* RIGHT */]]) {
        this.ship.theta += __WEBPACK_IMPORTED_MODULE_4__options__["F" /* ROTATION_STEP */];
      }
      // move up
      if (this.keysPressed[__WEBPACK_IMPORTED_MODULE_4__options__["L" /* UP */]]) {
        this.shipPosition = Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["a" /* calculateMovement */])(this.ship, this.shipPosition, __WEBPACK_IMPORTED_MODULE_4__options__["B" /* MOVE_STEP */], true);
        this.shipPosition = Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["b" /* checkBounds */])(this.shipPosition, __WEBPACK_IMPORTED_MODULE_4__options__["o" /* CANVAS_WIDTH */], __WEBPACK_IMPORTED_MODULE_4__options__["n" /* CANVAS_HEIGHT */], __WEBPACK_IMPORTED_MODULE_4__options__["G" /* SHIP_SIZE */]);
      }
      // move down
      if (this.keysPressed[__WEBPACK_IMPORTED_MODULE_4__options__["p" /* DOWN */]]) {
        this.shipPosition = Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["a" /* calculateMovement */])(this.ship, this.shipPosition, __WEBPACK_IMPORTED_MODULE_4__options__["B" /* MOVE_STEP */], false);
        this.shipPosition = Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["b" /* checkBounds */])(this.shipPosition, __WEBPACK_IMPORTED_MODULE_4__options__["o" /* CANVAS_WIDTH */], __WEBPACK_IMPORTED_MODULE_4__options__["n" /* CANVAS_HEIGHT */], __WEBPACK_IMPORTED_MODULE_4__options__["G" /* SHIP_SIZE */]);
      }

      // Only check collision if ship is not invincible
      if (!this.ship.invincible) {
        this.checkAsteroidsCollisions();
      }
      this.ship.updatePosition(this.shipPosition);
      if (this.bullets.length !== 0) this.checkBulletCollisions();
    }
  }

  shootBullet() {
    this.bullets[this.bullets.length] = Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["d" /* createBullet */])(__WEBPACK_IMPORTED_MODULE_4__options__["l" /* BULLET_SPRITE */], __WEBPACK_IMPORTED_MODULE_4__options__["k" /* BULLET_SIZE */], this.ship);
    setTimeout(__WEBPACK_IMPORTED_MODULE_3__helper_js__["k" /* removeBullet */].bind(this), __WEBPACK_IMPORTED_MODULE_4__options__["m" /* BULLET_TIMEOUT */]);
  }

  updateScore() {
    this.currScore++;
    if (!this.gameover) {
      this.initScorePanel();
    }
  }

  updateAsteroidPositions() {
    for (let i = 0; i < this.partSystem.particles.length; i++) {
      let asteroid = this.partSystem.particles[i];
      let asteroidPos = Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["a" /* calculateMovement */])(asteroid, asteroid.position, __WEBPACK_IMPORTED_MODULE_4__options__["B" /* MOVE_STEP */], true);
      asteroidPos = Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["b" /* checkBounds */])(asteroidPos, __WEBPACK_IMPORTED_MODULE_4__options__["o" /* CANVAS_WIDTH */], __WEBPACK_IMPORTED_MODULE_4__options__["n" /* CANVAS_HEIGHT */], __WEBPACK_IMPORTED_MODULE_4__options__["G" /* SHIP_SIZE */], asteroid.size);
      asteroid.updatePosition(asteroidPos);
      asteroid[i] = asteroid;
    }
  }

  updateBulletPositions() {
    for (let i = 0; i < this.bullets.length; i++) {
      let bullet = this.bullets[i];
      let bulletPos = Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["a" /* calculateMovement */])(bullet, bullet.position, __WEBPACK_IMPORTED_MODULE_4__options__["B" /* MOVE_STEP */], true);
      bulletPos = Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["b" /* checkBounds */])(bulletPos, __WEBPACK_IMPORTED_MODULE_4__options__["o" /* CANVAS_WIDTH */], __WEBPACK_IMPORTED_MODULE_4__options__["n" /* CANVAS_HEIGHT */], __WEBPACK_IMPORTED_MODULE_4__options__["G" /* SHIP_SIZE */], bullet.size);
      bullet.position = bulletPos;
      this.bullets[i] = bullet;
    }
  }

  checkAsteroidsCollisions() {
    let result = Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["c" /* checkCollision */])(this.partSystem.particles, this.ship, 30, 30);
    if (result.hit) {
      this.shipDestroyed = true;
      this.ship.setInvincibility(true);
      this.lastHit = result.hit;

      this.remainingLives -= 1;

      if (this.remainingLives) {
        this.showAndRemoveBanner();
      }
      setTimeout(() => this.ship.setInvincibility(false), __WEBPACK_IMPORTED_MODULE_4__options__["I" /* SHIP_TIMEOUT */]);
    }
  }

  checkBulletCollisions() {
    for (let i = 0; i < this.bullets.length; i++) {
      let bullet = this.bullets[i];
      let result = Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["c" /* checkCollision */])(this.partSystem.particles, bullet, 30, 10);
      if (result.hit) {
        // Destroy bullet and respawn asteroid at random location with size one level down
        this.bullets.splice(i, 1);
        let asteroid = this.partSystem.particles[result.asteroid];
        switch (asteroid.size.width) {
          case __WEBPACK_IMPORTED_MODULE_4__options__["e" /* ASTEROID_LARGE */].width:
            asteroid.size = __WEBPACK_IMPORTED_MODULE_4__options__["f" /* ASTEROID_MEDIUM */];
            this.partSystem.particles[result.asteroid] = asteroid;
            break;
          case __WEBPACK_IMPORTED_MODULE_4__options__["f" /* ASTEROID_MEDIUM */].width:
            asteroid.size = __WEBPACK_IMPORTED_MODULE_4__options__["h" /* ASTEROID_SMALL */];
            this.partSystem.particles[result.asteroid] = asteroid;
            break;
          default:
            // Remove from array and spawn new asteroid at a random location
            this.partSystem.particles.splice(result.asteroid, 1);
            let next = Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["j" /* getRandomAsteroid */])();
            let options = {
              src: next.src,
              size: next.size,
              maxHorizontal: __WEBPACK_IMPORTED_MODULE_4__options__["o" /* CANVAS_WIDTH */],
              maxVertical: __WEBPACK_IMPORTED_MODULE_4__options__["n" /* CANVAS_HEIGHT */],
              speed: __WEBPACK_IMPORTED_MODULE_4__options__["j" /* ASTEROID_SPEED */],
              numParticles: 1,
              divisionType: 2
            };
            this.partSystem.generateRandomParticle(options);
            // update score
            this.updateScore();
        }
      }
    }
  }

  // the actuall state update is in "reducer"
  // the update is only responsible to dispatch actions
  update() {
    // Always update asteroid and bullet positions
    this.updateAsteroidPositions();
    this.updateBulletPositions();

    // Do ship updates if not destroyed
    if (this.ship.invincible && !this.shipDestroyed || !this.shipDestroyed && !this.ship.invincible) {
      this.moveShip();
      this.spriteSheet.update();
    } else {
      if (this.shipExplosion.currentFrame === __WEBPACK_IMPORTED_MODULE_4__options__["u" /* EXPLOSION_EFFECT_FRAMES */] - 1) {
        // Reset to first frame and respawn ship
        this.shipExplosion.currentFrame = 0;

        // if no retries allowed, end the game and show gameover layer
        if (!this.remainingLives) {
          this.gameover = true;
          clearTimeout(this.timer);
        }

        this.shipDestroyed = false;
      } else {
        // Update explosion animation
        this.shipExplosion.update();
      }
    }
  }

  // render the game
  render() {
    const { width, height } = this.canvas;

    // here we can get all access of the loaded images:
    let images = {};

    this.imageCache.getImages().forEach(item => {
      images[item.name] = item.img;
    });

    const {
      universe,
      ship,
      ast1,
      ast2,
      ast3,
      ast4,
      bullet
    } = images;

    // Render walls, background
    Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["i" /* drawWalls */])(this.context, width, height);
    Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["h" /* drawUniverse */])(this.context, universe, width, height);

    // Render asteroids
    Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["e" /* drawAsteroids */])(this.context, this.partSystem.particles, { ast1, ast2, ast3, ast4 });

    Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["f" /* drawBullets */])(this.context, this.bullets, bullet);

    // Render ship
    let shipStatus = {
      shipDestroyed: this.shipDestroyed,
      spriteSheet: this.shipExplosion
    };
    Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["g" /* drawShip */])(this.context, ship, this.ship, this.spriteSheet, shipStatus);

    if (this.showRemainingLives && !this.gameover) {
      Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["m" /* showRemainingLivesBanner */])(this.canvas, this.context, this.remainingLives);
    }
    if (this.gameover) {
      Object(__WEBPACK_IMPORTED_MODULE_3__helper_js__["l" /* showGameOverLayer */])(this.canvas, this.context);
    }
  }

  // Optional debugging
  debug() {
    window.store = __WEBPACK_IMPORTED_MODULE_2__state__["a" /* default */];
    window.ctx = this.context;
    window.ship = this.ship;
  }

  // Initialize the score panel based on the current highest score or 0 otherwise
  initScorePanel() {
    const highestScore = localStorage.getItem('highestScore') || 0;
    document.querySelector('.score-panel .current .score').innerHTML = this.currScore;
    document.querySelector('.score-panel .highest .score').innerHTML = highestScore;
  }

  // Initialize asteroids
  initAsteroids() {
    let options = {
      src: __WEBPACK_IMPORTED_MODULE_4__options__["a" /* ASTEROID_1 */],
      size: __WEBPACK_IMPORTED_MODULE_4__options__["e" /* ASTEROID_LARGE */],
      maxHorizontal: __WEBPACK_IMPORTED_MODULE_4__options__["o" /* CANVAS_WIDTH */],
      maxVertical: __WEBPACK_IMPORTED_MODULE_4__options__["n" /* CANVAS_HEIGHT */],
      speed: __WEBPACK_IMPORTED_MODULE_4__options__["j" /* ASTEROID_SPEED */],
      numParticles: 1,
      divisionType: 2
    };
    this.partSystem.createRandomizedParticles(options);

    options.src = __WEBPACK_IMPORTED_MODULE_4__options__["b" /* ASTEROID_2 */];
    options.size = __WEBPACK_IMPORTED_MODULE_4__options__["h" /* ASTEROID_SMALL */];
    this.partSystem.createRandomizedParticles(options);

    options.src = __WEBPACK_IMPORTED_MODULE_4__options__["c" /* ASTEROID_3 */];
    options.size = __WEBPACK_IMPORTED_MODULE_4__options__["f" /* ASTEROID_MEDIUM */];
    this.partSystem.createRandomizedParticles(options);

    options.src = __WEBPACK_IMPORTED_MODULE_4__options__["d" /* ASTEROID_4 */];
    options.size = __WEBPACK_IMPORTED_MODULE_4__options__["e" /* ASTEROID_LARGE */];
    this.partSystem.createRandomizedParticles(options);
  }

  // Initializes base game components
  init() {
    this.initImageCache();
    this.debug();
    this.addKeyboardHandlers();
    this.initScorePanel();
    this.initAsteroids();
    this.initKeysPressed();
    // Grant initial invincibility
    this.ship.setInvincibility(true);
    setTimeout(() => this.ship.setInvincibility(false), __WEBPACK_IMPORTED_MODULE_4__options__["z" /* INITIAL_TIMEOUT */]);
  }
}

let asteroids = new AsteroidGame();
asteroids.init();

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducer__ = __webpack_require__(31);



const initState = {
  score: 10
};

let store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* createStore */])(__WEBPACK_IMPORTED_MODULE_1__reducer__["a" /* default */], initState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
/* unused harmony reexport combineReducers */
/* unused harmony reexport bindActionCreators */
/* unused harmony reexport applyMiddleware */
/* unused harmony reexport compose */







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  Object(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(20);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(18);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(8);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(22);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(27);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), __webpack_require__(26)(module)))

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(10);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (process.env.NODE_ENV !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(11);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = root;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__options__ = __webpack_require__(1);


function root(state = {}, action) {
  let {
    score
  } = state;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__options__["y" /* INCREASE_SCORE */]:
      return Object.assign({}, state, { score: score + action.payload });
    default:
      return state;
  }
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["i"] = drawWalls;
/* harmony export (immutable) */ __webpack_exports__["g"] = drawShip;
/* harmony export (immutable) */ __webpack_exports__["h"] = drawUniverse;
/* harmony export (immutable) */ __webpack_exports__["a"] = calculateMovement;
/* harmony export (immutable) */ __webpack_exports__["d"] = createBullet;
/* harmony export (immutable) */ __webpack_exports__["k"] = removeBullet;
/* unused harmony export getSpawnLocation */
/* harmony export (immutable) */ __webpack_exports__["c"] = checkCollision;
/* harmony export (immutable) */ __webpack_exports__["b"] = checkBounds;
/* harmony export (immutable) */ __webpack_exports__["j"] = getRandomAsteroid;
/* harmony export (immutable) */ __webpack_exports__["e"] = drawAsteroids;
/* harmony export (immutable) */ __webpack_exports__["f"] = drawBullets;
/* harmony export (immutable) */ __webpack_exports__["m"] = showRemainingLivesBanner;
/* harmony export (immutable) */ __webpack_exports__["l"] = showGameOverLayer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_canvas__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__engine_operations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Bullet__ = __webpack_require__(2);





const sin = Math.sin;
const cos = Math.cos;
const PI = Math.PI;
const RESPAWN_OFFSET = 30;

function drawWalls(context, width, height) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = 'black';
    context.strokeRect(0, 0, width, height);
}

function drawShip(context, shipImg, shipInstance, effect, shipStatus) {
    // drawShip according to its angle
    const { x, y } = shipInstance.position;
    const { width, height } = shipInstance.size;

    // Reduce opacity if ship is invincible
    if (shipInstance.invincible && !shipStatus.shipDestroyed) context.globalAlpha = 0.5;

    if (shipStatus.shipDestroyed) {
        drawExplosion(context, shipImg, x, y, ship.theta, shipStatus.spriteSheet);
    } else {
        Object(__WEBPACK_IMPORTED_MODULE_0__engine_canvas__["c" /* drawRotate */])(context, shipImg, x, y, ship.theta, effect);
    }
    // Reset global opacity
    context.globalAlpha = 1.0;
}

function drawExplosion(context, img, x, y, degrees, effect) {
    context.save();
    context.translate(x + img.width / 2, y + img.height / 2);
    context.rotate(degrees * Math.PI / 180);
    let row = Math.floor(effect.currentFrame / effect.numFrames);
    let col = Math.floor(effect.currentFrame % effect.numFrames);
    context.drawImage(effect.img, col * effect.frameWidth, row * effect.frameHeight, effect.frameWidth, effect.frameHeight, -img.width / 2 + effect.offset.x, -img.height / 2 + effect.offset.y, effect.frameWidth, effect.frameHeight);
    context.restore();
}

function drawUniverse(context, universe, width, height) {
    context.drawImage(universe, 0, 0, width, height);
}

function calculateMovement(ship, location, moveAmount, isForward) {
    const { theta } = ship;
    const { x, y } = location;
    //Convert theta to radians
    let thetaRad = theta * PI / 180;

    //Calculate changes to x and y
    let deltaX = moveAmount * sin(thetaRad);
    let deltaY = moveAmount * cos(thetaRad);

    //Calculate new position values
    var newX = x;
    var newY = y;
    if (isForward) {
        newX += deltaX;
        newY -= deltaY;
    } else {
        newX -= deltaX;
        newY += deltaY;
    }
    return { x: newX, y: newY };
}
function createBullet(sprite, size, ship) {
    const { theta } = ship;
    let location = calculateMovement(ship, ship.center, 60, true);

    return new __WEBPACK_IMPORTED_MODULE_3__Bullet__["a" /* default */](sprite, size, location, theta);
}

function removeBullet() {
    this.bullets.shift();
}
function getSpawnLocation(ship, asteroids, width, height, hit) {
    let safeSpawn = false;
    let nextX;
    let nextY;
    while (!safeSpawn || nextX >= width || nextY >= height || nextX <= 20 || nextY <= 20) {
        nextX = Object(__WEBPACK_IMPORTED_MODULE_2__engine_operations__["c" /* getRandomNumber */])(width);
        nextY = Object(__WEBPACK_IMPORTED_MODULE_2__engine_operations__["c" /* getRandomNumber */])(height);
        for (let i = 0; i < asteroids.length; i++) {
            if (hit === i) continue;
            // Get distance to asteroid
            let asteroid = asteroids[i];
            let dist = Object(__WEBPACK_IMPORTED_MODULE_2__engine_operations__["b" /* getDistance */])(nextX, nextY, asteroid.position.x, asteroid.position.y);
            if (dist >= asteroid.size.width + ship.size.width + RESPAWN_OFFSET || dist >= asteroid.size.height + ship.size.height + RESPAWN_OFFSET) {
                safeSpawn = true;
            } else {
                safeSpawn = false;
            }
        }
    }
    return { x: nextX, y: nextY };
}

function checkCollision(asteroids, obj, objOffset, boundsOffset) {
    for (let i = 0; i < asteroids.length; i++) {
        // Check collision for each asteroid to ship
        let hit = asteroids[i].getCollision(obj, objOffset, boundsOffset);
        if (hit) {
            return { hit: true, asteroid: i };
        }
    }
    return false;
}

function checkBounds(position, width, height, offset) {
    const { x, y } = position;
    var newX = x;
    var newY = y;
    if (x > width) {
        newX = 0 - offset.width;
    } else if (x + offset.width < 0) {
        newX = width;
    }

    if (y > height) {
        newY = 0 - offset.height;
    } else if (y + offset.height < 0) {
        newY = height;
    }
    return { x: newX, y: newY };
}

function getRandomAsteroid() {
    let image = __WEBPACK_IMPORTED_MODULE_1__options__["i" /* ASTEROID_SOURCES */][Object(__WEBPACK_IMPORTED_MODULE_2__engine_operations__["c" /* getRandomNumber */])(__WEBPACK_IMPORTED_MODULE_1__options__["i" /* ASTEROID_SOURCES */].length)];
    let dimensions = __WEBPACK_IMPORTED_MODULE_1__options__["g" /* ASTEROID_SIZES */][Object(__WEBPACK_IMPORTED_MODULE_2__engine_operations__["c" /* getRandomNumber */])(__WEBPACK_IMPORTED_MODULE_1__options__["g" /* ASTEROID_SIZES */].length)];
    return { src: image, size: dimensions };
}

function drawAsteroids(context, asteroids, astImages) {
    context.save();
    for (let i = 0; i < asteroids.length; i++) {
        let asteroid = asteroids[i];
        __WEBPACK_IMPORTED_MODULE_0__engine_canvas__["b" /* drawLoadedImage */].call(context, astImages[`ast${i + 1}`], asteroid.position.x, asteroid.position.y, asteroid.size.width, asteroid.size.height);
    }
    context.restore();
}
function drawBullets(context, bullets, src) {
    context.save();
    for (let i = 0; i < bullets.length; i++) {
        let bullet = bullets[i];
        __WEBPACK_IMPORTED_MODULE_0__engine_canvas__["b" /* drawLoadedImage */].call(context, src, bullet.position.x, bullet.position.y, bullet.size.width, bullet.size.height);
    }
    context.restore();
}

function showRemainingLivesBanner(canvas, context, remainLives) {
    const liveText = `Remaining lives: ${remainLives}`;
    Object(__WEBPACK_IMPORTED_MODULE_0__engine_canvas__["d" /* insertText */])(context, {
        text: liveText,
        font: '25px serif',
        position: { x: canvas.width / 2 - 100, y: canvas.height / 2 },
        color: 'white'
    });
}

function showGameOverLayer(canvas, context) {
    // todo: add restart layer, just as assignment 2.
    const text = `Game over, refresh the page to restart.`;
    Object(__WEBPACK_IMPORTED_MODULE_0__engine_canvas__["d" /* insertText */])(context, {
        text,
        font: '25px serif',
        position: { x: canvas.width / 2 - 170, y: canvas.height / 2 },
        color: 'white'
    });
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_Sprite__ = __webpack_require__(3);


class Ship extends __WEBPACK_IMPORTED_MODULE_0__engine_Sprite__["a" /* default */] {
    constructor(src, { width, height }, { x, y }, velocity, rotation) {
        super(src, { width, height }, { x, y });
        this.velocity = velocity;
        this.rotation = rotation;
        this.heading = 0;
        this.theta = 90;
        this.invincible = false;
    }

    updatePosition({ x, y }) {
        this.position = { x, y };
        this.updateCenter();
    }

    setInvincibility(invincible) {
        this.invincible = invincible;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Ship);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Particle__ = __webpack_require__(35);


/**
 * Class for handling particle systems. For now, simply allows management
 * of particles related to size, position, and movement. This will later
 * be extended to include varying distribution patterns (e.g. cone, cylinder, etc.)
 */
class ParticleSystem {
    constructor() {
        this.particles = [];
    }

    createUniformParticles(src, size, { x, y }, speed, numParts, divisionType) {
        for (let i = 0; i < numParts; i++) {
            this.particles.push(new __WEBPACK_IMPORTED_MODULE_1__Particle__["a" /* default */](src, size, { x, y }, speed, divisionType));
        }
    }

    createRandomizedParticles(options) {
        for (let i = 0; i < options.numParticles; i++) {
            this.generateRandomParticle(options);
        }
    }

    generateRandomParticle(options) {
        let x = Object(__WEBPACK_IMPORTED_MODULE_0__operations__["c" /* getRandomNumber */])(options.maxHorizontal);
        let y = Object(__WEBPACK_IMPORTED_MODULE_0__operations__["c" /* getRandomNumber */])(options.maxVertical);
        let speed = Object(__WEBPACK_IMPORTED_MODULE_0__operations__["c" /* getRandomNumber */])(options.speed);
        this.particles.push(new __WEBPACK_IMPORTED_MODULE_1__Particle__["a" /* default */](options.src, options.size, { x, y }, speed, options.divisionType));
    }
}

/* harmony default export */ __webpack_exports__["a"] = (ParticleSystem);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Obstacle__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operations__ = __webpack_require__(0);


const MAX_CIRCLE = 360;

class Particle extends __WEBPACK_IMPORTED_MODULE_0__Obstacle__["a" /* default */] {
    constructor(src, size, { x, y }, speed, divisionType) {
        super(src, size, { x, y }, divisionType);
        this.setSpeed(speed);
        this.theta = Object(__WEBPACK_IMPORTED_MODULE_1__operations__["c" /* getRandomNumber */])(MAX_CIRCLE);
    }

    setSpeed(speed) {
        this.speed = speed;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Particle);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sprite__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Bullet__ = __webpack_require__(2);


const NUM_SECTIONS = [9, 16, 25]; // small, medium, and large boundary divisions


class Obstacle extends __WEBPACK_IMPORTED_MODULE_0__Sprite__["a" /* default */] {
    constructor(src, size, { x, y }, divisionType) {
        super(src, size, { x, y });
        if (divisionType < 0 || divisionType > 2) {
            throw Error("Invalid division type");
        }
        this.divisionType = divisionType;
        this.calculateBoundaries();
    }

    // subdivides this obstacle into boundaries for collision detection
    calculateBoundaries() {
        this.boundaries = new Array();
        let sections_rc = Math.sqrt(NUM_SECTIONS[this.divisionType]);
        let width = this.size.width / sections_rc;
        let height = this.size.height / sections_rc;
        let x = this.position.x,
            y = this.position.y;
        // Define boundaries based on number of sections
        for (let i = 0; i < sections_rc; i++) {
            for (let j = 0; j < sections_rc; j++) {
                this.boundaries.push(Object(__WEBPACK_IMPORTED_MODULE_1__operations__["a" /* calculateCenter */])(x, y, width, height));
                x += width;
            }
            x = this.position.x;
            y += height;
        }
    }

    // Gets the collision for this obstacle and the given object
    getCollision(obj, objOffset, boundsOffset) {
        // check if we're near this obstacle
        // Let prox be the distance between the centers of the object and obstacle at neutral positions
        let prox = Object(__WEBPACK_IMPORTED_MODULE_1__operations__["b" /* getDistance */])(obj.size.width / 3, obj.size.height / 3, this.size.width / 2, this.size.height / 2);
        if (this.nearObstacle(obj.center.x, obj.center.y, prox + objOffset)) {
            for (let i = 0; i < this.boundaries.length; i++) {
                let boundary = this.boundaries[i];
                if (this.nearBoundary(obj.center.x, obj.center.y, boundary.x, boundary.y, prox + boundsOffset)) {
                    return true;
                }
            }
        }
        return false;
    }

    nearObstacle(objX, objY, prox) {
        let distance = Object(__WEBPACK_IMPORTED_MODULE_1__operations__["b" /* getDistance */])(objX, objY, this.center.x, this.center.y);
        return distance <= prox ? true : false;
    }

    // Checks if an object is near this boundary
    nearBoundary(objX, objY, boundX, boundY, prox) {
        let distance = Object(__WEBPACK_IMPORTED_MODULE_1__operations__["b" /* getDistance */])(objX, objY, boundX, boundY);
        return distance <= prox;
    }

    updatePosition({ x, y }) {
        this.position = { x, y };
        this.updateCenter();
        this.calculateBoundaries();
    }

    drawBoundariesDebug(context) {
        for (let i = 0; i < this.boundaries.length; i++) {
            let boundary = this.boundaries[i];
            context.fillStyle = 'red';
            context.fillRect(boundary.x, boundary.y, 5, 5);
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Obstacle);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Spritesheet {
    constructor(url, frameWidth, frameHeight, frameSpeed, endFrame, { x, y }) {
        this.url = url;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.frameSpeed = frameSpeed;
        this.endFrame = endFrame;
        this.offset = { x, y };
        this.init();
    }

    init() {
        this.img = new Image();
        this.numFrames;
        this.currentFrame = 0;
        this.counter = 0;
        this.img.onload = () => {
            this.numFrames = Math.floor(this.img.width / this.frameWidth);
        };
        this.img.src = this.url;
    }

    update() {
        if (this.counter === this.frameSpeed - 1) {
            this.currentFrame = (this.currentFrame + 1) % this.endFrame;
        }
        this.counter = (this.counter + 1) % this.frameSpeed;
    }

    getDetails() {
        return `url: ${this.url}\nframeWidth: ${this.frameWidth}\nframeHeight: ${this.frameHeight}\nframeSpeed: ${this.frameSpeed}\nendFrame: ${this.endFrame}\noffset_x: ${this.offset.x}\noffset_y: ${this.offset.y}`;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Spritesheet);

/***/ })
/******/ ]);