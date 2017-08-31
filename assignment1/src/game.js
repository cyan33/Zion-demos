import {
    EMOJI_AMOUNT,
    EMOJI_URL_SOURCE,
    EMOJI_NAME
} from './options'

import {
    clearCanvas,
    generateRandomPosition
} from './utils/canvas'

class Game {
    constructor() {
        this.canvas = document.getElementById('alchemy_table');
        this.context = this.canvas.getContext('2d');
        this.sidebar = ['fearful', 'heartpulse'];
    }

    addSidebarEmojiClickHandler(e) {
        // get the index of the clicked emoji
        let target = e.target;

        const { x, y } = generateRandomPosition(this.canvas, true);
        
        this.context.drawImage(target, x, y, 64, 64);
    }

    insertEmojisToSidebar() {
        for (let i = 0; i < this.sidebar.length; i++) {
            let index = EMOJI_NAME.indexOf(this.sidebar[i]);
            let div = document.createElement('div');
            div.className = `sidebar-emoji ${EMOJI_NAME[index]}`;
            let img = document.createElement('img');
            img.src = EMOJI_URL_SOURCE[index];
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
    }

    init() {
        this.insertEmojisToSidebar();
        this.addClearAllHandler();

        // only activate this function when you are in developing mode
        this.debug();
    }
}

export default Game;
