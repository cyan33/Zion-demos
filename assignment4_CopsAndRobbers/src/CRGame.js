import {
    CANVAS_HEIGHT,
    CANVAS_WEIGHT,
    UP, DOWN, LEFT, RIGHT
} from './options'

import { createImageCache } from './engine/canvas'
import Game from './engine/Game'

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

        // draw cops and robbers here
    }

    init() {
        this.initImageCache();
        this.addKeyboardHandlers();
    }

}

export default CRGame;