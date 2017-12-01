import { GRID, OPEN, WALL, COP, ROBBER, CANVAS_WIDTH, CANVAS_HEIGHT } from './options'



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
            if (GRID[row][col] === OPEN) {
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

export function movePlayer(player, direction, grid) {
    let nx = player.data.position.x;
    let ny = player.data.position.y;
    // Get new position based on position and direction
    if (direction === LEFT) nx -= 1;
    else if (direction === RIGHT) nx += 1;
    else if (direction === UP) ny -= 1;
    else if (direction === DOWN) ny += 1;
    // If the new position is open, move the player
    if (grid[nx][ny] === OPEN) {
        player.position.x = nx;
        player.position.y = ny;
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

export function updateGrid(grid, newData, oldData) {
    grid[oldData.position.x][oldData.position.y] = OPEN;
    grid[newData.data.position.x][newData.data.position.y] = newData.team;
    return grid;
}