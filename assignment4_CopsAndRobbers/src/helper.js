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
export function drawGrid(context, grid) {
    const tileHeight = CANVAS_HEIGHT / grid.length;
    const tileWidth = CANVAS_WIDTH / grid[0].length;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === OPEN || grid[row][col] === EXIT) {
                context.fillStyle = 'white';
            } else if (grid[row][col] === WALL) {
                context.fillStyle = 'gray';
            } else if (grid[row][col] === COP) {
                context.fillStyle = 'blue';
            } else if (grid[row][col] === ROBBER) {
                context.fillStyle = 'red';
            }
            context.fillRect(col * tileWidth,  row * tileHeight, tileWidth, tileHeight);
        }
    }
}

export function movePlayer(player, grid) {
    let nx = player.gridLocation.x;
    let ny = player.gridLocation.y;
    // Get new position based on position and direction
    if (player.direction === LEFT) ny -= 1;
    else if (player.direction === RIGHT) ny += 1;
    else if (player.direction === UP) nx -= 1;
    else if (player.direction === DOWN) nx += 1;
    // If the new position is open, move the player
    if (grid[nx][ny] === OPEN) {
        player.gridLocation.x = nx;
        player.gridLocation.y = ny;
        return player;
    // If the movement causes a cop and robber to collide, end the game
    } else if (grid[nx][ny] != WALL && grid[nx][ny] != player.team) {
        document.querySelector('.restart-layer .winner').textContent = 'The Cops caught the Robbers!';
        document.querySelector('.restart-layer').style.display = 'block';
        document.querySelector(".restart-layer button").addEventListener("click", reload);
    }
    // If the new position is a wall, or causes collision between two cops or two robbers, return null
    return null;
}

function reload() {
    location.reload();
}

export function endGame() {
    document.querySelector('.restart-layer .winner').textContent = 'The Robbers escaped!';
    document.querySelector('.restart-layer').style.display = 'block';
    document.querySelector(".restart-layer button").addEventListener("click", reload);
}

export function updateGrid(grid, player) {
    if(player.direction) {
        var oldLocation = getOldLocation(player);
        grid[oldLocation.x][oldLocation.y] = OPEN;
        grid[player.gridLocation.x][player.gridLocation.y] = player.team;
    }
    return grid;
}

function getOldLocation(player) {
    let ox = player.gridLocation.x;
    let oy = player.gridLocation.y;
    if (player.direction === LEFT) oy += 1;
    else if (player.direction === RIGHT) oy -= 1;
    else if (player.direction === UP) ox += 1;
    else if (player.direction === DOWN) ox -= 1;
    return {x:ox, y:oy};
}
// Returns the player's updated movement
export function moveAI(players) {
    let player = players[0];
    // move player only if they can move in the chosen direction
}
