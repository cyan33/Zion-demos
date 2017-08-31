import Element from './Element'
import dndWrapper from './utils/dnd'

import {
    EMOJI_AMOUNT,
    EMOJI_URL_SOURCE,
    EMOJI_NAME,
    EMOJI_COMBINATION,
    EMOJI_SIZE,
} from './options'
import {
    clearCanvas,
    generateRandomPosition,
    drawImageByUrl
} from './utils/canvas'
import { removeMultiElementFromArray, getCombinationIndex } from './helper'

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
    }

    onCanvasMouseMove(e) {
        const { isMouseDown } = this.dnd;
        const { clientX, clientY } = e;

        if (isMouseDown && this.draggingIndex >= 0) {
            // update position
            this.emojis[this.draggingIndex].position = {
                x: clientX - this.draggingOffsetLeft,
                y: clientY - this.draggingOffsetTop
            }
        }
    }

    onCanvasMouseUp(e) {
        this.dnd.isMouseDown = false;
        // collision detection
        const { isCollapsed } = this.dnd;
        let collapsedIndex = isCollapsed(this.emojis, this.draggingIndex);

        if (this.draggingIndex < 0 || collapsedIndex < 0) return;

        let a = this.emojis[this.draggingIndex].index;
        let b = this.emojis[collapsedIndex].index;

        let combIndex = getCombinationIndex(a, b);

        if (combIndex < 0)  return;

        this.emojis = removeMultiElementFromArray(this.emojis, this.draggingIndex, collapsedIndex);
        
        const x = e.clientX - EMOJI_SIZE.width / 2;
        const y = e.clientY - EMOJI_SIZE.height / 2;

        this.emojis.push(new Element(EMOJI_NAME[combIndex], { x, y }));

        this.draggingIndex = -1;
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
        document.querySelector('.clear-all').addEventListener('click', () => this.emojis = []);
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
        // why we don't have update()?
        // because we have already done those parts in the canvas handlers
        // in the future we may abstract those logic into a single function

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
