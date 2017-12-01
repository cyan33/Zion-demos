import AI from './engine/AI/AI'
import Game from './engine/Game'
import DecisionNode from './engine/AI/DecisionTree/DecisionNode'
import Sprite from './engine/Sprite'
import {COP, ROBBER, COP_SRC, ROBBER_SRC, SRC_WIDTH, SRC_HEIGHT, VELOCITY, 
        ACCELERATION, MAX_FORCE, MAX_SPEED, MAX_ACCELERATION, ROD, ROS, TIME_TO_TARGET} from './options'
import {getSpawnLocation, initSpawnLocations} from './helper'

class CRGame extends Game {
    constructor() {
        super();
        this.canvas = document.querySelector('#copsAndRobbers');
        this.context = this.canvas.getContext('2d');
        this.graph = null;
        this.players = [];
        this.spawnLocations = []; // defined {x,y}
        this.decisionTree = null;
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
        // Spawn cops
        for(let i = 0; i < numCops; i++) {
            let spawn = getSpawnLocation(this.spawnLocations);
            this.spawnLocations.occupied = true;
            this.players.push({
                isAI: true,
                team: COP,
                data: new AI(COP_SRC, {width: SRC_WIDTH, height: SRC_HEIGHT}, this.spawnLocations[spawn], params)
            });
        }
        // Spawn robbers
        for(let i = 0; i < numRobbers; i++) {
            let spawn = getSpawnLocation(this.spawnLocations);
            this.spawnLocations.occupied = true;
            this.players.push({
                isAI: true,
                team: ROBBER,
                data: new AI(ROBBER_SRC, {width: SRC_WIDTH, height: SRC_HEIGHT}, this.spawnLocations[spawn], params)
            });
        }
    }

    initLevel(side) {
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
        // Initialize spawn locations
        this.spawnLocations = initSpawnLocations();
        // Initialize player with selected properties
        let spawn = getSpawnLocation(this.spawnLocations);
        this.spawnLocations[spawn].occupied = true;
        this.players.push({
                           isAI: false, 
                           team: side, 
                           data: new Sprite(src, {width: SRC_WIDTH, height: SRC_HEIGHT}, this.spawnLocations[spawn])
                          });
        this.initAI(numCops, numRobbers); // init AI players
        // this.initBoard();
        // this.timer = setInterval(this.gameloop, 30);
    }

    init() {
        // TODO
        this.initSelectionScreen();
    }

    setupDecisions() {
        // TODO: Create decision nodes and construct tree
    }

    initBoard() {

    }
}

export default CRGame;