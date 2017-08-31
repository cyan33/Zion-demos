import {
    EMOJI_AMOUNT,
    EMOJI_URL_SOURCE
} from './options'

class Game {
    constructor() {
        // this.canvas = document.getElementById('alchemy_table');
        // this.context = canvas.getContext('2d');
    }

    insertEmojisToSidebar() {
        for (let i = 0; i < EMOJI_AMOUNT; i++) {
            let div = document.createElement('div');
            div.className = 'sidebar-emoji';
            let img = document.createElement('img');
            img.src = EMOJI_URL_SOURCE[i];
            div.append(img);

            document.querySelector('.sidebar').append(div);
        }
    }
    
    init() {
        this.insertEmojisToSidebar();
    }
}

export default Game;
