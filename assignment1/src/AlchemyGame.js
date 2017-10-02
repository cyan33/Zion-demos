import Game from './utils/Game'
import Element from './Element'
import dndWrapper from './utils/dnd'
import AudioManager from './utils/AudioManager'

import {
    EMOJI_AMOUNT,
    EMOJI_URL_SOURCE,
    EMOJI_NAME,
    EMOJI_COMBINATION,
    EMOJI_SIZE,
    GAME_AUDIO,
    CORRECT,
    INCORRECT
} from './options'
import {
    clearCanvas,
    generateRandomPosition,
    drawImageByUrl,
    insertText
} from './utils/canvas'
import { getCombinationIndex } from './helper'
import { removeMultiElementFromArray } from './utils/operations'

class AlchemyGame extends Game {
    constructor() {
        super();
        this.canvas = document.getElementById('alchemy_table');
        this.canvas.width = parseInt(window.innerWidth) - 150;
        this.canvas.height = parseInt(window.innerHeight);
        this.context = this.canvas.getContext('2d');
        this.sidebar = ['fearful', 'relaxed', 'cop'];
        this.audio = new AudioManager();
        
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

    showUnlockedCount() {
        insertText(this.context, {
            text: `You have unlocked ${this.sidebar.length - 3}/${EMOJI_AMOUNT - 3} hidden ${this.sidebar.length - 3 > 1 ? 'elements' : 'element'}`,
            font: '30px Georgia',
            position: {
                x: 50,
                y: this.canvas.height - 40
            },
            color: '#ada386'
        })
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

        if (combIndex < 0) {
            this.audio.getAudioByName(INCORRECT).play();
            return;
        }

        this.emojis = removeMultiElementFromArray(this.emojis, this.draggingIndex, collapsedIndex);
        
        const x = e.clientX - EMOJI_SIZE.width / 2;
        const y = e.clientY - EMOJI_SIZE.height / 2;

        let emoji_name = EMOJI_NAME[combIndex];
        
        this.emojis.push(new Element(emoji_name, { x, y }));

        this.audio.getAudioByName(CORRECT).play();

        // if it unlocks a new element
        if (this.sidebar.indexOf(emoji_name) === -1) {
            this.sidebar.push(emoji_name);
            this.insertEmojiToSidebar(emoji_name);
        } 

        this.draggingIndex = -1;
    }

    addSidebarEmojiClickHandler(e) {
        // get the index of the clicked emoji
        let target = e.target;
        let name = e.target.parentNode.className.split(' ')[1];

        const { x, y } = generateRandomPosition(this.canvas, true, EMOJI_SIZE);
        
        this.emojis.push(new Element(name, { x, y }));

        // TODO: when inserting, the new element's position should not overlaps that of others
        
        const { width, height } = EMOJI_SIZE;

        this.context.drawImage(target, x, y, width, height);
    }

    insertEmojiToSidebar(name) {
        let index = EMOJI_NAME.indexOf(name);
        let div = document.createElement('div');
        div.className = `sidebar-emoji ${EMOJI_NAME[index]}`;
        let img = document.createElement('img');
        img.src = EMOJI_URL_SOURCE[index];
        div.append(img);

        div.addEventListener('click', (e) => this.addSidebarEmojiClickHandler(e));

        document.querySelector('.sidebar').append(div);
    }

    initSidebar() {
        for(let i = 0; i < this.sidebar.length; i++){
            this.insertEmojiToSidebar(this.sidebar[i]);
        }
    }

    initAudio() {
        this.audio.loadAudio(GAME_AUDIO);
    }
    
    addClearAllHandler() {
        document.querySelector('.clear-all').addEventListener('click', () => {
            if (window.confirm('Are you sure you want to remove ALL the elements on the canvas??')) {
                this.emojis = [];
            }
        });
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

        this.showUnlockedCount();

        setTimeout(this.render.bind(this), 30);
    }

    gameLoop() {
        // why we don't have update()?
        // because we have already done those parts in the canvas handlers
        // in the future we may abstract those logic into a single function

        this.render();
    }

    init() {
        this.initSidebar();
        this.initAudio();

        this.addClearAllHandler();
        this.addCanvasHandlers(this.canvas);

        // only activate this function when you are in developing mode
        this.gameLoop();
        this.debug();
    }
}

export default AlchemyGame;
