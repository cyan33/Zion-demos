import { GRID } from '/options'

export function drawWalls(context, width, height) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.fillStyle = 'black';
    context.strokeRect(0, 0, width, height);
}

export function drawGrid(context, width, height) {
    // draw tiles based on grid array
    // 0 = white, 1 = black
    // 9x9 grid so take canvas width and height divided by 9?
}

export function drawCops(context) {
    // TODO
    // draw only on 0 in grid array
}

export function drawRobbers(context) {
    // TODO
    // draw only on 0 in grid array
}