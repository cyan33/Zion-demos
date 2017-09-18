import Segment from './Segment'
import { 
    SEGMENT_WIDTH, SNAKE_INIT_LENGTH, LEFT, UP, RIGHT, DOWN,
    ROWS, COLS, BAD_FOOD_TIMEOUT
} from './options'
import Food from "./Food";
import { getRandomNumber } from './utils/operations'


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
    context.restore();
}

function isCollidesWall(head) {
    // head.x, head.y
    return head.x >= ROWS || head.x < 0 || head.y >= COLS || head.y < 0;
}

function isCollidesFood(head, food, badFood) {
    if(head.x === food.x && head.y === food.y){
        return 1;
    } else if (badFood != null && head.x === badFood.position.x && head.y === badFood.position.y) {
        return -1;
    } else {
        return 0;
    }
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
    let highestScore = localStorage.getItem('highestScore') || 0;
    if (score > highestScore) {
        localStorage.setItem('highestScore', score);
    }
}

function showRestartLayer() {

}

export function moveSnake(badFood) {

    const { snakeSegments, movingDirection, food} = this;
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
    let head = new Segment({}, { x: nx, y: ny });
    // check if it eats food
    var collision = isCollidesFood({x: nx, y: ny}, food.position, badFood);
    if (collision == 1) {
        // score++ and call this.initScorePanel()
        this.currScore++;
        this.initScorePanel();
    } else if (collision == -1){
        this.currScore--;
        this.initScorePanel();
        snakeSegments.pop();
        snakeSegments.pop();
    } else {
        snakeSegments.pop();
    }

    snakeSegments.unshift(head);
    return snakeSegments;
}

export function checkFood(food, isBad) {
    if (food == null){
        return null;
    }
    const { snakeSegments } = this;
    let pos = snakeSegments[0].position;

    var newFood = food;
    // check if it eats food
    if (isCollidesFood(pos, food.position, null) != 0) {
        if(isBad){
            return null;
        }
        newFood = initFood();
    }
    return newFood;
}
export function  initFood() {
    var xPos = getRandomNumber(COLS);
    var yPos = getRandomNumber(ROWS);
    return new Food({}, {x:xPos, y:yPos});
}

export function  initBadFood() {
    var badFood = initFood();
    badFood = setTimeout(removeSpoiledFood(this.badFood), BAD_FOOD_TIMEOUT);
    return badFood;
}

function removeSpoiledFood(badFood){
    setTimeout(initBadFood, BAD_FOOD_TIMEOUT);
    return null;
}

export function drawFood(context, food, badFood) {
    context.save();
    context.fillStyle = '#de9f5f';
    context.fillRect(food.position.x * SEGMENT_WIDTH, food.position.y * SEGMENT_WIDTH, SEGMENT_WIDTH, SEGMENT_WIDTH);
    if (badFood != null){
        context.fillStyle = '#FF0000';
        context.fillRect(badFood.position.x * SEGMENT_WIDTH, badFood.position.y * SEGMENT_WIDTH, SEGMENT_WIDTH, SEGMENT_WIDTH);
    }
    context.restore();
}