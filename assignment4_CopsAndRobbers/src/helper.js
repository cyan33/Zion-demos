import {getRandomNumber} from './engine/operations'
import {MAX_PLAYERS, CANVAS_WIDTH, CANVAS_HEIGHT, GRID, OPEN, WALL, COP, ROBBER,
        EXIT, UP, DOWN, LEFT, RIGHT} from './options'

/**
 * Purely for testing purposes. This will be updated
 * with the real spawn locations once the map is created.
 */
export function initSpawnLocations() {
    let locations = [];
    while(locations.length != MAX_PLAYERS) {
        // get a random x, y location
        let spawnX = getRandomNumber(CANVAS_WIDTH);
        let spawnY = getRandomNumber(CANVAS_HEIGHT);
        let valid = true;
        for(let i = 0; i < locations.length; i++) {
            let spawn = locations[i];
            if(spawn.x === spawnX && spawn.y === spawnY) valid = false
        }
        // Only add the new spawn if we are valid
        if(valid) {
            locations.push({x: spawnX, y: spawnY, occupied: false});
        }
    }

    return locations;
}

export function getSpawnLocation(spawnLocations) {
    let index = 0;
    let found = false;
    while(!found) {
        index = getRandomNumber(spawnLocations.length);
        if(!spawnLocations[index].occupied) found = true;
    }
    return index;
}

export function drawWalls(context, width, height) {
    context.strokeStyle = 'black';
    context.strokeRect(0, 0, width, height);
}

// Goes through from top left across and fills in each tile with the appropriate color for now
export function drawGrid(context, state) {
    const tileHeight = CANVAS_HEIGHT / state.length;
    const tileWidth = CANVAS_WIDTH / state[0].length;

    for (let row = 0; row < state.length; row++) {
        for (let col = 0; col < state[0].length; col++) {
            if (GRID[row][col] === OPEN || GRID[row][col] === EXIT) {
                context.fillStyle = 'white';
            } else if (GRID[row][col] === WALL) {
                context.fillStyle = 'gray';
            } else if (GRID[row][col] === COP) {
                context.fillStyle = 'blue';
            } else if (GRID[row][col] === ROBBER) {
                context.fillStyle = 'red';
            }
            context.fillRect(col * tileWidth,  row * tileHeight, tileWidth, tileHeight);
        }
    }
}

// Returns the player's updated movement
export function moveAI(players) {
    let player = players[0];
    // move player only if they can move in the chosen direction
}
