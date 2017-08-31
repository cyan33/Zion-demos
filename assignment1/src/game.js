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
    generateRandomPosition,
    drawImageByUrl
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
        this.draggingOffsetTop = 0;
        this.draggingOffsetLeft = 0;

        this.dnd = dndWrapper(this.canvas, this.context);
    }

    addCanvasHandlers(canvas) {
        canvas.onmousemove = this.onCanvasMouseMove.bind(this);
        canvas.onmousedown = this.onCanvasMouseDown.bind(this);
        canvas.onmouseup = this.onCanvasMouseUp.bind(this);
        canvas.onmouseout = this.onCanvasMouseUp.bind(this);
    }

    onCanvasMouseDown(e) {
        this.dnd.isMouseDown = true;

        // get and set the current dragging index
        const { getDraggingItemIndex } = this.dnd;
        const { clientX, clientY } = e;

        this.draggingIndex = getDraggingItemIndex(this.emojis, clientX, clientY);
        if (this.draggingIndex >= 0) {
            this.draggingOffsetLeft = clientX - this.emojis[this.draggingIndex].position.x;
            this.draggingOffsetTop = clientY - this.emojis[this.draggingIndex].position.y; 
        }
        console.log('mousedown', this.draggingIndex);
    }

    onCanvasMouseMove(e) {
        const { isMouseDown } = this.dnd;
        const { clientX, clientY } = e;

        if (isMouseDown && this.draggingIndex >= 0) {
            this.emojis[this.draggingIndex].position = {
                x: clientX - this.draggingOffsetLeft,
                y: clientY - this.draggingOffsetTop
            }
            console.log('mousemove', this.draggingIndex);
        }
    }

    updateEmojis() {
        // this function serves as the `update` function

        // update the position of the dragging emoji
    }

    onCanvasMouseUp() {
        // console.log('mouseup');
        this.dnd.isMouseDown = false;
        this.draggingIndex = -1;
        // collision detection
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

    debug() {
        window.canvas = this.canvas;
        window.context = this.context;
        window.emojis = this.emojis;
        window.dnd = this.dnd;
    }

    render() {
        clearCanvas(this.canvas, this.context);

        const { width, height } = EMOJI_SIZE;
        for (let i = 0; i < this.emojis.length; i++) {
            let src = this.emojis[i].src;
            let { x, y } = this.emojis[i].position;

            drawImageByUrl.call(this.context, this.emojis[i].src, x, y, width, height);
        }

        setTimeout(this.render.bind(this), 30);
    }

    gameLoop() {
        this.render();
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
