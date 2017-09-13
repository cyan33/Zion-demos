import Segment from './Segment'
import { SEGMENT_WIDTH, SNAKE_INIT_LENGTH } from './options'

export function drawWalls(context, width, height) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = 'black';
    context.strokeRect(0, 0, width, height);
}

export function initSnake() {
    let snakeSegments = []
    const size = { width: SEGMENT_WIDTH, height: SEGMENT_WIDTH };
    for (let x = 0; x < SNAKE_INIT_LENGTH; x++) {
        snakeSegments.push(new Segment(size, { x, y: 0 }));
    }
    return snakeSegments;
}

export function drawSnake(context, snakeSegments) {
    snakeSegments.forEach(s => {
        
    })
}