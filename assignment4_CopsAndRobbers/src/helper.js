import {getRandomNumber, getDistance} from './engine/operations'
import {CANVAS_WIDTH, CANVAS_HEIGHT, GRID, OPEN, WALL, COP, ROBBER, UP, DOWN, LEFT, RIGHT, GRID_INFO} from './options'

export function convertGridToPixelCoords(cell) {
    let xCorner = CANVAS_WIDTH / GRID[0].length * cell.x;
    let yCorner = CANVAS_HEIGHT / GRID.length * cell.y;
    return {x: xCorner, y: yCorner};
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
            if (grid[row][col] === OPEN) {
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
    if(nx > grid.length || nx < 0 || ny > grid.length[0] || ny < 0) return null;
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

// Cop AI
export function getCopMove(ai, players, grid, aStar, graph) {
    // Get the nearest robber
    let nx = ai.gridLocation.x;
    let ny = ai.gridLocation.y;
    let nearest = getNearestOpponentPlayer({x: nx, y: ny, team: ai.team}, players);
    // Path find to robber
    let path = aStar.AStarPathfind(graph, graph[ai.index], graph[nearest.index]);
    // If path isn't null, update location to first result
    if(path !== null  && path.length > 0) {
        let newX = GRID_INFO[path[0].getValue()].gridPosition.r;
        let newY = GRID_INFO[path[0].getValue()].gridPosition.c;
        // Set the direction we just moved
        if(newX == nx + 1) {
            ai.direction = DOWN;
        } else if(newX == nx - 1) {
            ai.direction = UP;
        } else if(newY == ny + 1) {
            ai.direction = RIGHT;
        } else if(newY == ny - 1) {
            ai.direction = LEFT;
        } else {
            ai.direction = null;
        }
        nx = newX;
        ny = newY;
        // Check if the path is open
        if(grid[nx][ny] === OPEN) {
            // Update location and grid index
            ai.gridLocation.x = nx;
            ai.gridLocation.y = ny;
            ai.index = getGridIndex({x: ai.gridLocation.x, y: ai.gridLocation.y});
            return ai;
        // If the movement causes a cop and robber to collide, end the game
        } else if (grid[nx][ny] != WALL && grid[nx][ny] != ai.team) {
            document.querySelector('.restart-layer .winner').textContent = 'The Cops caught the Robbers!';
            document.querySelector('.restart-layer').style.display = 'block';
            document.querySelector(".restart-layer button").addEventListener("click", reload);
        }
    }
    // If the new position is a wall, causes collision between two cops or two robbers, or returns no valid path, return null
    return null;
}

export function getRobberMove(ai, players, grid, aStar, graph) {
    // Get the nearest Cop
    let nx = ai.gridLocation.x;
    let ny = ai.gridLocation.y;
    let nearest = getNearestOpponentPlayer({x: nx, y: ny, team: ai.team}, players);
    // Get one space away from Cop in an available direction and path find
    let next = getFleeSpace(nearest, {x: nx, y: ny}, grid);
    let target = getGridIndex(next);
    let path = aStar.AStarPathfind(graph, graph[ai.index], graph[target]);
    // If path isn't null, update location to first result
    if(path !== null) {
        let newX = GRID_INFO[path[0].getValue()].gridPosition.r;
        let newY = GRID_INFO[path[0].getValue()].gridPosition.c;
        // Set the direction we just moved
        if(newX == nx + 1) {
            ai.direction = DOWN;
        } else if(newX == nx - 1) {
            ai.direction = UP;
        } else if(newY == ny + 1) {
            ai.direction = RIGHT;
        } else if(newY == ny - 1) {
            ai.direction = LEFT;
        } else {
            ai.direction = null;
        }
        nx = newX;
        ny = newY;
        // Check if the path is open
        if(grid[nx][ny] === OPEN) {
            // Update location and grid index
            ai.gridLocation.x = nx;
            ai.gridLocation.y = ny;
            ai.index = getGridIndex({x: ai.gridLocation.x, y: ai.gridLocation.y});
            return ai;
        // If the movement causes a cop and robber to collide, end the game
        } else if (grid[nx][ny] != WALL && grid[nx][ny] != ai.team) {
            document.querySelector('.restart-layer .winner').textContent = 'The Cops caught the Robbers!';
            document.querySelector('.restart-layer').style.display = 'block';
            document.querySelector(".restart-layer button").addEventListener("click", reload);
        }
    }
    // If the new position is a wall, causes collision between two cops or two robbers, or returns no valid path, return null
    return null;
}

function getNearestOpponentPlayer(ai, players) {
    let smallestDist = Number.MAX_SAFE_INTEGER;
    let nearest = null;
    for(let i = 0; i < players.length; i++) {
        if((players[i].gridLocation.x === ai.x && players[i].gridLocation.y === ai.y) || players[i].team == ai.team) continue;
        let dist = getDistance(ai.x, ai.y, players[i].gridLocation.x, players[i].gridLocation.y);
        if(dist < smallestDist) {
            smallestDist = dist;
            nearest = players[i];
        }
    }
    return nearest;
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
        let oldLocation = getOldLocation(player);
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

export function getGridIndex(location) {
    // Determine the correpsonding grid index in the GRID_INFO array
    for(let i = 0; i < GRID_INFO.length; i++) {
        let grid = GRID_INFO[i].gridPosition;
        if(location.x === grid.r && location.y === grid.c) return i;
    }
}

function getFleeSpace(cop, location, grid) {
    // Move away from the cop's current direction, if possible
    if(cop.direction == RIGHT) {
        if(grid[location.x][location.y - 1] == OPEN) { // try left
            return {x: location.x, y: location.y - 1};
        } else if(grid[location.x - 1][location.y] == OPEN) { // try up
            return {x: location.x - 1, y: location.y};
        } else if(grid[location.x + 1][location.y] == OPEN) { // try down
            return {x: location.x + 1, y: location.y};
        }
        // invalid, so move right
        return {x: location.x, y: location.y + 1};
    } else if(cop.direction == LEFT) {
        if(grid[location.x][location.y + 1] == OPEN) { // try right
            return {x: location.x, y: location.y + 1};
        } else if(grid[location.x - 1][location.y] == OPEN) { // try up
            return {x: location.x - 1, y: location.y};
        } else if(grid[location.x + 1][location.y] == OPEN) { // try down
            return {x: location.x + 1, y: location.y};
        }
        // invalid, so move left
        return {x: location.x, y: location.y - 1};
    } else if(cop.direction == UP) {
        if(grid[location.x + 1][location.y] == OPEN) { // try down
            return {x: location.x + 1, y: location.y};
        } else if(grid[location.x][location.y - 1] == OPEN) { // try left
            return {x: location.x, y: location.y - 1};
        } else if(grid[location.x][location.y + 1] == OPEN) { // try right
            return {x: location.x, y: location.y + 1}
        }
        // invalid, so move up
        return {x: location.x - 1, y: location.y};
    } 
    // else, moving down
    if(grid[location.x][location.y - 1] == OPEN) { // try left
        return {x: location.x, y: location.y - 1};
    } else if(grid[location.x][location.y + 1] == OPEN) { // try right
        return {x: location.x, y: location.y + 1};
    } else if(grid[location.x - 1][location.y] == OPEN) { // try up
        return {x: location.x - 1, y: location.y};
    }
}
