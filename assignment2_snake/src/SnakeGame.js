import Game from './engine/Game'
import io from 'socket.io-client'
import KeyBus from './engine/KeyBus'
import { drawWalls, drawObstacles, initAudio, initObstacles, initSnake, drawSnake, moveSnake,
    initFood, drawFood, checkFood, removeSpoiledFood, createSpoiledFood, initSpoiledFood} from './helper'
import { 
    UP, DOWN, RIGHT, LEFT,
    MOVING_SPEED, 
    CANVAS_WIDTH, CANVAS_HEIGHT,
    SPOILED_FOOD_TIMEOUT,
    SINGLE, LOCAL_MULT, ONLINE_MULT
} from './options'
const NUM_OBSTACLES = 6;

class SnakeGame extends Game {
    constructor() {
        super();
        this.canvas = document.querySelector('#snake');
        this.context = this.canvas.getContext('2d');

        this.canvas.height = CANVAS_HEIGHT;
        this.canvas.width = CANVAS_WIDTH;

        this.gameType = null;

        this.snakes = [];
        this.snakeSegments = null;
        this.socket = null;
        this.obstacles = initObstacles(NUM_OBSTACLES);
        this.food = initFood(this.obstacles);
        this.spoiledFood = initFood(this.obstacles);
        this.audio = initAudio();
        this.currentSnake = 0;

        setTimeout(removeSpoiledFood.bind(this), SPOILED_FOOD_TIMEOUT, this.obstacles);
        
        this.movingDirection = null;
        this.currScore = 0;
    }

    initScorePanel() {
        const highestScore = localStorage.getItem('highestScore') || 0;
        if(this.currentSnake === 0) {
            document.querySelector('.score-panel .current1 .score').innerHTML = this.snakes[0].currScore;
        } else {
            document.querySelector('.score-panel .current2 .score').innerHTML = this.snakes[1].currScore;
        }
        document.querySelector('.score-panel .highest .score').innerHTML = highestScore;
    }

    setMovingDirection(e) {
        if (e.keyCode === 37 && this.snakes[0].movingDirection !== RIGHT) {
            this.snakes[0].movingDirection = LEFT;
        } else if (e.keyCode === 38 && this.snakes[0].movingDirection !== DOWN) {
            this.snakes[0].movingDirection = UP;
        } else if (e.keyCode === 39 && this.snakes[0].movingDirection !== LEFT) {
            this.snakes[0].movingDirection = RIGHT;
        } else if (e.keyCode === 40 && this.snakes[0].movingDirection !== UP) {
            this.snakes[0].movingDirection = DOWN;
        } else if(this.snakes.length == 2 && this.gameType !== ONLINE_MULT) { // allow 2 players locally if we're not online
            if (e.keyCode === 65 && this.snakes[1].movingDirection !== RIGHT) {
                this.snakes[1].movingDirection = LEFT;
            } else if (e.keyCode === 87 && this.snakes[1].movingDirection !== DOWN) {
                this.snakes[1].movingDirection = UP;
            } else if (e.keyCode === 68 && this.snakes[1].movingDirection !== LEFT) {
                this.snakes[1].movingDirection = RIGHT;
            } else if (e.keyCode === 83 && this.snakes[1].movingDirection !== UP) {
                this.snakes[1].movingDirection = DOWN;
            }
        }
    }

    addKeyboardHandlers() {
        document.addEventListener('keydown', (e) => this.setMovingDirection(e))
    }

    update() {
        // make the snake move one more step every 1 second
        // according to the direction
        for(let i = 0; i < this.snakes.length; i++) {
            // set properties to current snake
            this.snakeSegments = this.snakes[i].snakeSegments;
            this.movingDirection = this.snakes[i].movingDirection;
            this.currentSnake = i;
            this.currScore = this.snakes[i].currScore;
            // perform updates
            this.snakes[i].snakeSegments = moveSnake.call(this);
            this.food = checkFood.call(this, this.food, false);
            this.spoiledFood = checkFood.call(this, this.spoiledFood, true);
        }
    }

    render() {
        const { width, height } = this.canvas;
        // background
        drawWalls(this.context, width, height);

        // obstacles
        drawObstacles(this.context, this.obstacles);

        // the snake
        for(let i = 0; i < this.snakes.length; i++) {
            drawSnake(this.context, this.snakes[i].snakeSegments);
        }

        // the food
        drawFood(this.context, this.food, this.spoiledFood);
    }

    initNetworkHandlers() {
        this.socket = io();

        socket.on('hostCreateNewGame', this.hostCreateNewGame); // host function to create new game
        socket.on('playerJoinedRoom', this.playerJoinedRoom); // handles when a player joins the game room
        socket.on('newGameCreated', this.onNewGameCreated); // handles when a new game is created
        socket.on('beginNewGame', this.newGame()); // begin a new game
        // Note: this session ID stored at this.socket.sessionid
        const kb = new KeyBus(document);
        kb.down(13, () => {
            // On every update, send message to player containing the following:
            // 1. position of opposing player
            // 2. position of food/spoiled food
            // **Note: Might want to bind as an object
            //const val = Math.random().toFixed(2);
            let val = {snakes:this.snakes};
            socket.emit('player-press-enter', val);
        });
        socket.on('player-press-enter', ran => {
            console.log('current snake data: ', ran);
        });
    }

    hostCreateNewGame() {
        // Create a new game instance
        let newGameId = (Math.random() * 10000) | 0;
        // Return room Id and socket Id to the client
        this.socket.emit('newGameCreated', {gameId:newGameId, mySocketId: this.socket.id});
        this.socket.join(newGameId.toString());
    }

    debug() {
        window.snakeSegments = this.snakeSegments;
        window.update = this.update.bind(this);
        window.render = this.render.bind(this);
        window.gameloop = this.gameloop.bind(this);
    }

    showGameTypes() {
        document.querySelector('.gameType-layer').style.display = 'block';
        document.querySelector(".gameType-layer button[id='single-player']").addEventListener("click", () => this.initSinglePlayer());
        document.querySelector(".gameType-layer button[id='local-multiplayer']").addEventListener("click", () => this.initMultiplayer());
        document.querySelector(".gameType-layer button[id='online-multiplayer']").addEventListener("click", () => {
            document.querySelector('.gameType-layer').style.display = 'none';
            this.showOnlineGameOptions(); 
        });
    }

    initSinglePlayer() {
        this.snakes.push({snakeSegments:initSnake(0), movingDirection: RIGHT, currScore: 0}); // only load one snake
        document.querySelector('.score-panel .current2').style.display = 'none';
        this.initScorePanel();
        this.gameType = SINGLE;
        this.configureParams();
        document.querySelector('.gameType-layer').style.display = 'none';
    }
    
    initMultiplayer() {
        this.snakes.push({snakeSegments:initSnake(0), movingDirection: RIGHT, currScore: 0});
        this.snakes.push({snakeSegments:initSnake(30), movingDirection: RIGHT, currScore: 0});
        this.initScorePanel();
        this.currentSnake = 1;
        this.initScorePanel();
        this.gameType = LOCAL_MULT;
        this.configureParams();
        document.querySelector('.gameType-layer').style.display = 'none';
    }

    showOnlineGameOptions() {
        console.log('online multiplayer selected');
        document.querySelector('.onlineGame-layer').style.display = 'block';
        document.querySelector(".onlineGame-layer button[id='host-game']").addEventListener("click", () => {
            document.querySelector('.onlineGame-layer').style.display = 'none';
            this.initMultiplayer()});
        document.querySelector(".onlineGame-layer button[id='join-game']").addEventListener("click", () => {
            document.querySelector('.onlineGame-layer').style.display = 'none';
            this.initMultiplayer()});
    }

    initOnlineMultiplayer() {
        // TODO
        this.initNetworkHandlers();
    }

    configureParams() {
        this.timer = setInterval(this.gameloop.bind(this), MOVING_SPEED);
        this.debug();
        this.addKeyboardHandlers();
    }
    
    init() {
        this.showGameTypes();
        //this.initOnlineMultiplayer();
    }
}

export default SnakeGame;
