import {
    CANVAS_HEIGHT,
    CANVAS_WIDTH,
    UP, DOWN, LEFT, RIGHT
} from './options'
import { createImageCache } from './engine/canvas'
import Game from './engine/Game'
import { drawWalls, drawGrid, drawCops, drawRobbers } from './helper'

class CRGame {
    constructor() {
        super();
        this.canvas = document.querySelector('#copsAndRobbers');
        this.context = this.canvas.getContext('2d');
        this.gameover = false;
        this.gameloop = this.gameloop.bind(this);

        // Start player off looking right? Does it matter?
        this.direction = RIGHT;
    }

    initImageCache() {
        this.imageCache = createImageCache();

        const IMAGE_DICT = {
            // cops and robbers images here
        }

        Object.keys(IMAGE_DICT).forEach(name => {
            this.imageCache.loadImage(name, IMAGE_DICT[name]);
        })

        this.imageCache.imagesOnLoad(() => this.timer = setInterval(this.gameloop, 30));
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

        let images = {};

        this.imageCache.getImages().forEach(item => {
            images[item.name] = item.img;
        })

        // render walls and background
        drawWalls(this.context, width, height);
        drawGrid(this.context, width, height);

        // draw cops and robbers here
        // drawCops(this.context);
        // drawRobbers(this.context);
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
        this.initImageCache();
        this.addKeyboardHandlers();
    }

}

export default CRGame;