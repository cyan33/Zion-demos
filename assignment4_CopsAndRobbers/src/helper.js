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
