import Segment from './Segment'
import { 
    SEGMENT_WIDTH, SNAKE_INIT_LENGTH, LEFT, UP, RIGHT, DOWN,
    ROWS, COLS
} from './options'

export function drawWalls(context, width, height) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = 'black';
    context.strokeRect(0, 0, width, height);
}

export function initSnake() {
    // 600 x 600 => 40 x 40

    let snakeSegments = []
    for (let i = SNAKE_INIT_LENGTH - 1; i >= 0; i--) {
        // the position is the relative index, not the exact pixel
        snakeSegments.push(new Segment({}, { x: i, y: 0 }));
    }
    return snakeSegments;
}

function drawSingleSegment(context, { x, y }) {
    context.fillStyle = 'green';
    context.fillRect(x * SEGMENT_WIDTH, y * SEGMENT_WIDTH, SEGMENT_WIDTH, SEGMENT_WIDTH);
    context.strokeStyle = 'white';
    context.strokeRect(x * SEGMENT_WIDTH, y * SEGMENT_WIDTH, SEGMENT_WIDTH, SEGMENT_WIDTH);
}

export function drawSnake(context, snakeSegments) {
    context.save();
    snakeSegments.forEach(s => {
        const { x, y } = s.position;
        drawSingleSegment(context, { x, y });
    })
}

function isCollidesWall(head) {
    // head.x, head.y
    return head.x >= ROWS || head.x < 0 || head.y >= COLS || head.y < 0;
}

function isCollidesFood(head, food) {
    return head.x === food.x && head.y === food.y;
}

function isCollidesItself(head, snakeSegments) {
    for (let i = 0; i < snakeSegments.length; i++) {
        if (head.x == snakeSegments[i].position.x && head.y == snakeSegments[i].position.y) {
            return true;
        }
    }
    return false;
}

function updateLocalStorage(score) {
    let maxScore = localStorage.getItem('maxScore') || 0;
    if (score > maxScore) {
        localStorage.setItem('maxScore', score);
    }
}

function showRestartLayer() {

}

export function moveSnake() {
    const { snakeSegments, movingDirection } = this;
    // construct a new head segment according to the moving direction
    let nx = snakeSegments[0].position.x;
    let ny = snakeSegments[0].position.y;

    if (movingDirection === LEFT) nx -= 1;
    else if (movingDirection === RIGHT) nx += 1;
    else if (movingDirection === UP) ny -= 1;
    else if (movingDirection === DOWN) ny += 1;

    // check collision with itself or crosses the wall
    if (isCollidesWall({x: nx, y: ny}) || isCollidesItself({x: nx, y: ny}, snakeSegments)) {
        updateLocalStorage(this.score);

        // ask the user to refresh to replay the game
        if (window.confirm('Game over. Click OK to play again.')) {
            location.reload();
        } else {
            clearInterval(this.timer);
            return snakeSegments;
            showRestartLayer();
        }
    }

    // check if it eats food
    // score++

    let head = new Segment({}, { x: nx, y: ny });
    snakeSegments.pop();
    snakeSegments.unshift(head);

    return snakeSegments;
}
