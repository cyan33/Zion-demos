import Element from './Element'
import dndWrapper from './utils/dnd'

import {
    EMOJI_AMOUNT,
    EMOJI_URL_SOURCE,
    EMOJI_NAME,
    EMOJI_COMBINATION,
    EMOJI_SIZE
} from './options'
import {
    clearCanvas,
    generateRandomPosition
} from './utils/canvas'

class Game {
    constructor() {
        this.canvas = document.getElementById('alchemy_table');
        this.canvas.width = parseInt(window.innerWidth) - 150;
        this.canvas.height = parseInt(window.innerHeight);
        this.context = this.canvas.getContext('2d');
        
        // current emojis on the canvas
        this.emojis = [];
        // the index of the draggin emoji you are dragging, note that this
        // is NOT the common-sense index in EMOJI_NAME
        // and this should be only used in Game
        this.draggingIndex = -1;

        this.dnd = dndWrapper(this.canvas, this.context);
    }

    addCanvasHandlers(canvas) {
        canvas.onmousemove = this.onCanvasMouseMove.bind(this);
        canvas.onmousedown = this.onCanvasMouseDown.bind(this);
        canvas.onmouseup = this.onCanvasMouseUp.bind(this);
        canvas.onmouseout = this.onCanvasMouseUp.bind(this);
    }

    onCanvasMouseDown() {
        console.log('mousedown');
    }

    onCanvasMouseMove() {
        console.log('mousemove');
    }

    onCanvasMouseUp() {
        console.log('mouseup');
    }

    addSidebarEmojiClickHandler(e) {
        // get the index of the clicked emoji
        let target = e.target;
        let name = e.target.parentNode.className.split(' ')[1];

        const { x, y } = generateRandomPosition(this.canvas, true);
        
        this.emojis.push(new Element(name, { x, y }));

        // TODO: when inserting, the new element's position should not overlaps that of others
        
        const { width, height } = EMOJI_SIZE;

        this.context.drawImage(target, x, y, width, height);
    }

    insertEmojisToSidebar() {
        for (let i = 0; i < EMOJI_AMOUNT; i++) {
            let div = document.createElement('div');
            div.className = `sidebar-emoji ${EMOJI_NAME[i]}`;
            let img = document.createElement('img');
            img.src = EMOJI_URL_SOURCE[i];
            div.append(img);

            div.addEventListener('click', (e) => this.addSidebarEmojiClickHandler(e));

            document.querySelector('.sidebar').append(div);
        }
    }
    
    addClearAllHandler() {
        document.querySelector('.clear-all').addEventListener('click', clearCanvas.bind(null, this.canvas, this.context));
    }

    combineElements(element1, element2){
        return EMOJI_COMBINATION[element1][element2];
    }

    debug() {
        window.canvas = this.canvas;
        window.context = this.context;
        window.emojis = this.emojis;
    }

    render() {
        setTimeout(this.render, 30);
    }

    gameLoop() {
        // this.render();
    }

    init() {
        this.insertEmojisToSidebar();
        this.addClearAllHandler();
        this.addCanvasHandlers(this.canvas);

        // only activate this function when you are in developing mode
        this.gameLoop();
        this.debug();
    }
}

export default Game;
