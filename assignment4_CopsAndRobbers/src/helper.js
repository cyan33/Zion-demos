import { GRID, OPEN, WALL, COP, ROBBER } from '/options'

const tileSize = 600 / 9;

export function drawWalls(context, width, height) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.fillStyle = 'black';
    context.strokeRect(0, 0, width, height);
}

// Goes through from top left across and fills in each tile with the appropriate color for now
export function drawGrid(context, width, height) {
    let x = 0;
    let y = 0;

    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (GRID[j,i] === OPEN) {
                context.fillStyle = 'white';
            } else if (GRID[j,i] === WALL) {
                context.fillStyle = 'black';
            } else if (GRID[j,i] === COP) {
                context.fillStyle = 'blue';
            } else if (GRID[j,i] === ROBBER) {
                context.fillStyle = 'red';
            }

            context.fillRect(i * tileSize, j * tileSize, tileSize, tileSize);

        }
    }
}

