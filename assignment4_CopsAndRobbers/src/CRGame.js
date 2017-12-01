import {
    CANVAS_HEIGHT,
    CANVAS_WIDTH,
    UP, DOWN, LEFT, RIGHT, GRID
} from './options'
import { createImageCache } from './engine/canvas'
import Game from './engine/Game'
import { drawWalls, drawGrid } from './helper'

class CRGame extends Game {
    constructor() {
        super();
        this.canvas = document.querySelector('#copsAndRobbers');
        this.context = this.canvas.getContext('2d');
        this.gameover = false;
        this.gameloop = this.gameloop.bind(this);

        // Start player off looking right? Does it matter?
        this.direction = RIGHT;
        this.grid = GRID;
    }

    addKeyboardHandlers() {
        document.addEventListener('keydown', (e) => this.setMovingDirection(e));
    }

    setMovingDirection(e) {
        if (e.keyCode === 37) {
            this.direction = LEFT;
        } else if (e.keyCode === 38) {
            this.direction = UP;
        } else if (e.keyCode === 39) {
            this.direction = RIGHT;
        } else if (e.keyCode === 40) {
            this.direction = DOWN;
        }
    }

    update() {
        // TODO
    }

    // rendering the game
    render() {
        const { width, height } = this.canvas;

        // render walls and background
        drawGrid(this.context, this.grid);
        drawWalls(this.context, width, height);
    }

    initCops() {
        // TODO
    }

    initRobbers() {
        // TODO
    }

    // is there a better way for initializing solid walls?
    initWalls() {
        // TODO
    }

    init() {
        this.addKeyboardHandlers();
        this.timer = setInterval(this.gameloop, 30);
        window.drawGrid = drawGrid.bind(this, this.context, this.grid);
    }

}

export default CRGame;