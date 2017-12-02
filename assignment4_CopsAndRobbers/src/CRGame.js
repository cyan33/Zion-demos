
import AI from './engine/AI/AI'
import {COP, ROBBER, COP_SRC, ROBBER_SRC, SRC_WIDTH, SRC_HEIGHT, VELOCITY, 
        ACCELERATION, MAX_FORCE, MAX_SPEED, MAX_ACCELERATION, ROD, ROS, TIME_TO_TARGET,
        UP, DOWN, LEFT, RIGHT, GRID, GRID_INFO, CANVAS_WIDTH, CANVAS_HEIGHT, SPAWN_LOCATIONS, TURN_NUMBER} from './options'
import { createImageCache } from './engine/canvas'
import AStar from './engine/AI/AStar'
import Game from './engine/Game'
import { drawWalls, drawGrid, movePlayer, updateGrid, endGame, getSpawnLocation, initSpawnLocations, convertGridToPixelCoords } from './helper'
import DecisionNode from './engine/AI/DecisionTree/DecisionNode'
import GraphGenerator from './engine/AI/GraphGenerator'
import Sprite from './engine/Sprite'

class CRGame extends Game {
    constructor() {
        super();
        this.canvas = document.querySelector('#copsAndRobbers');
        this.context = this.canvas.getContext('2d');
        this.graph = new GraphGenerator();
        this.players = [];
        this.spawnLocations = SPAWN_LOCATIONS; // defined {x,y}
        this.decisionTree = null;
        this.gameover = false;
        this.gameloop = this.gameloop.bind(this);
        this.playerMoved = false;
        this.aStar = new AStar();
        // Start player off looking right? Does it matter?
        this.grid = GRID;
        this.turns = 0;
        this.initSelectionScreen();
    }

    initSelectionScreen() {
        document.querySelector('.selection-layer').style.display = 'block';
        document.querySelector(".selection-layer button[id='cop']").addEventListener('click', () => this.initLevel(COP));
        document.querySelector(".selection-layer button[id='robber']").addEventListener('click', () => this.initLevel(ROBBER));
    }

    initAI(numCops, numRobbers) {
        const params = {
            velocity: VELOCITY,
            acceleration: ACCELERATION,
            maxForce: MAX_FORCE,
            maxSpeed: MAX_SPEED,
            maxAcceleration: MAX_ACCELERATION,
            rod: ROD,
            ros: ROS,
            timeToTarget: TIME_TO_TARGET
        }
        // Spawn robbers
        for(let i = 0; i < numRobbers; i++) {
            let spawn = getSpawnLocation(this.spawnLocations);
            this.spawnLocations.occupied = true;
            let position = convertGridToPixelCoords(this.spawnLocations[0]);
            this.players.push({
                isAI: true,
                team: ROBBER,
                direction: null,
                data: new AI(ROBBER_SRC, {width: SRC_WIDTH, height: SRC_HEIGHT}, this.spawnLocations[spawn], params),
                gridLocation: this.spawnLocations[0]
            });
            this.grid[this.spawnLocations[0].x][this.spawnLocations[0].y] = ROBBER;
            this.spawnLocations.shift();
        }
        // Spawn cops
        for(let i = 0; i < numCops; i++) {
            let spawn = getSpawnLocation(this.spawnLocations);
            this.spawnLocations.occupied = true;
            let position = convertGridToPixelCoords(this.spawnLocations[0]);
            this.players.push({
                isAI: true,
                team: COP,
                direction: null,
                data: new AI(COP_SRC, {width: SRC_WIDTH, height: SRC_HEIGHT}, this.spawnLocations[spawn], params),
                gridLocation: this.spawnLocations[0]
            });
            this.grid[this.spawnLocations[0].x][this.spawnLocations[0].y] = COP;
            this.spawnLocations.shift();
        }
    }

    initLevel(side) {
        document.querySelector('.selection-layer').style.display = 'none';
        let src;
        let numCops = 2;
        let numRobbers = 2;
        // Deterine type of player and assign appropriate Sprite
        if(side === COP) {
            src = COP_SRC;
            numCops--;
        } else if(side === ROBBER) {
            src = ROBBER_SRC;
            numRobbers--;
        }
        // Initialize player with selected properties
        let spawn = getSpawnLocation(this.spawnLocations);
        this.spawnLocations[spawn].occupied = true;
        let position = convertGridToPixelCoords(this.spawnLocations[0]);
        this.players.push({
                           isAI: false, 
                           team: side,
                           direction: null,
                           data: new Sprite(src, {width: SRC_WIDTH, height: SRC_HEIGHT}, this.spawnLocations[spawn]),
                           gridLocation: this.spawnLocations[0]
                          });
        var location = this.spawnLocations.shift();
        this.initAI(numCops, numRobbers); // init AI players
        // Swap player position if they are a cop
        if(this.players[0].team === COP) {
            let temp = this.players[2];
            this.players[2] = this.players[0];
            this.players[0] = temp;
            this.grid[location.x][location.y] = COP;
        } else {
            this.grid[location.x][location.y] = ROBBER;
        }
        this.turns = TURN_NUMBER * this.players.length;
        document.querySelector('.selection-layer').style.display = 'none';
        // this.initBoard();
    }

    addKeyboardHandlers() {
        document.addEventListener('keydown', (e) => this.setMovingDirection(e));
    }

    setMovingDirection(e) {
        if(e.keyCode === 37) {
            this.players[0].direction = LEFT;
            this.playerMoved = true;
        } else if(e.keyCode === 38) {
            this.players[0].direction = UP;
            this.playerMoved = true;
        } else if(e.keyCode === 39) {
            this.players[0].direction = RIGHT;
            this.playerMoved = true;
        } else if(e.keyCode === 40) {
            this.players[0].direction = DOWN;
            this.playerMoved = true;
        }
    }

    update() {
        if(this.players.length === 0) return;
        // Save data about the player whose turn it is
        var currentTurn = this.players[0];
        // If it is an AI player, make a move
        if(currentTurn.isAI){
            if (currentTurn.team === COP){
                //currentTurn.data = getCopMove(currentTurn.data);
            } else {
                //currentTurn.data = getRobberMove(currentTurn.data);
            }
            //Rotate the player array
            this.players.shift();
            this.players.push(currentTurn);
            this.turns--;
        // If it is a human player's turn, wait for them to press a key
        } else if (this.playerMoved) {
            var newData = movePlayer(currentTurn, this.grid);
            console.log(newData);
            // If the move is valid, update the data and rotate the array
            if (newData) {
                currentTurn.data = newData;
                this.players.shift();
                this.players.push(currentTurn);
                this.turns--;
            }
            this.playerMoved = false;
        }
        if(this.turns < 1){
            endGame();
        }
        // Update the grid with the latest move
        this.grid = updateGrid(this.grid, currentTurn);
    }

    // rendering the game
    render() {
        const { width, height } = this.canvas;

        // render walls and background
        drawGrid(this.context, this.grid);
        drawWalls(this.context, width, height);
    }

    setupDecisions() {
        // TODO: Create decision nodes and construct tree
    }

    init() {
        this.addKeyboardHandlers();
        this.graph.generateGraphFromGridCells(GRID_INFO, CANVAS_WIDTH / GRID[0].length, CANVAS_HEIGHT / GRID.length);
        this.timer = setInterval(this.gameloop, 30);
        window.drawGrid = drawGrid.bind(this, this.context, this.grid);
    }

}

export default CRGame;