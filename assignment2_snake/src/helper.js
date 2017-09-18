import Segment from './Segment'
import { 
    SEGMENT_WIDTH, SNAKE_INIT_LENGTH, LEFT, UP, RIGHT, DOWN,
    ROWS, COLS, OBSTACLE_SIZE, CANVAS_WIDTH, CANVAS_HEIGHT,
    FOOD_FROM_OBSTACLE, OBSTACLE_FROM_OBSTACLE, OBSTACLE_PROX
} from './options'
import Food from "./Food";
import { getRandomNumber, getDistance } from './utils/operations'
import Obstacle from './utils/Obstacle'

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

function isCollidesObstacle(head, obstacles) {
    // do collision check for each obstacle
    let closest = getClosestObstacle(head, obstacles);
    if(closest.getCollision(head.x, head.y, OBSTACLE_SIZE / OBSTACLE_PROX, 0.5)) return true;
    return false;
}

function getClosestObstacle(head, obstacles) {
    let smallest_dist = Number.MAX_VALUE;
    let closest_obs = null;
    for(let i = 0; i < obstacles.length; i++) {
        let obs = obstacles[i];
        let distance = getDistance(head.x, head.y, obs.center.x, obs.center.y);
        if(distance < smallest_dist) {
            smallest_dist = distance;
            closest_obs = obs;
        }
    }
    return closest_obs;
}

function updateLocalStorage(score) {
    let highestScore = localStorage.getItem('highestScore') || 0;
    if (score > highestScore) {
        localStorage.setItem('highestScore', score);
    }
}

function showRestartLayer() {
    document.querySelector('.restart-layer').style.display = 'block';
    document.querySelector("button").addEventListener("click", reload);
}

function reload() {
    location.reload();
}

function nearObstacles(obj, obstacles, offset) {
    // want to check for all obstacles
    let near = false;
    for(let i = 0; i < obstacles.length; i++) {
        let check = obstacles[i];
        // ensure not within distance range of check size
        if(check.nearObstacle(obj.position.x, obj.position.y, offset)) near = true;
    }
    return near;
}

export function moveSnake() {
    const { snakeSegments, movingDirection, food, obstacles} = this;
    // construct a new head segment according to the moving direction
    let nx = snakeSegments[0].position.x;
    let ny = snakeSegments[0].position.y;

    if (movingDirection === LEFT) nx -= 1;
    else if (movingDirection === RIGHT) nx += 1;
    else if (movingDirection === UP) ny -= 1;
    else if (movingDirection === DOWN) ny += 1;

    // check collision with itself, crosses the wall, or hits an obstacle
    if (isCollidesWall({x: nx, y: ny}) || isCollidesItself({x: nx, y: ny}, snakeSegments)
        || isCollidesObstacle({x: nx, y: ny}, obstacles)) {
        updateLocalStorage(this.score);

        clearInterval(this.timer);
        showRestartLayer();
    }
    let head = new Segment({}, { x: nx, y: ny });
    // check if it eats food
    if (isCollidesFood({x: nx, y: ny}, food.position)) {
        // score++ and call this.initScorePanel()
        this.currScore++;
        this.initScorePanel();
    } else {
        snakeSegments.pop();
    }

    snakeSegments.unshift(head);
    return snakeSegments;
}

export function checkFood() {
    const { snakeSegments, food, obstacles } = this;
    let pos = snakeSegments[0].position;

    let newFood = food;
    // check if it eats food
    if (isCollidesFood(pos, food.position)) {
        newFood = initFood(obstacles);
    }
    return newFood;
}
export function initFood(obstacles) {
    let food = null;
    do {
        let xPos = getRandomNumber(COLS);
        let yPos = getRandomNumber(ROWS);
        food = new Food({}, {x:xPos, y:yPos});
    } while(nearObstacles(food, obstacles, FOOD_FROM_OBSTACLE));
    
    return food;
}

export function drawFood(context, food) {
    context.save();
    context.fillStyle = '#de9f5f';
    context.fillRect(food.position.x * SEGMENT_WIDTH, food.position.y * SEGMENT_WIDTH, SEGMENT_WIDTH, SEGMENT_WIDTH);
    context.restore();
}

export function initObstacles(num_obs) {
    let obstacles = new Array();
    
    for(let i = 0; i < num_obs; i++){
        let x = 0;
        let y = 0;
        let obs = null;
        do {
            x = getRandomNumber(COLS);
            y = getRandomNumber(ROWS);
            obs = new Obstacle('', OBSTACLE_SIZE / SEGMENT_WIDTH, { x, y });
        } while(nearObstacles(obs, obstacles, getRandomNumber(OBSTACLE_FROM_OBSTACLE))
                || x > COLS - SEGMENT_WIDTH || y > ROWS - SEGMENT_WIDTH 
                || (x <= OBSTACLE_SIZE / SEGMENT_WIDTH && y <= OBSTACLE_SIZE / SEGMENT_WIDTH));
        obstacles.push(obs);
    }

    return obstacles;
}

export function drawObstacles(context, obstacles) {
    for(let i = 0; i < obstacles.length; i++) {
        let obstacle = obstacles[i];
        context.save();
        context.fillStyle = 'black';
        context.fillRect(obstacle.position.x * SEGMENT_WIDTH, obstacle.position.y * SEGMENT_WIDTH, OBSTACLE_SIZE, OBSTACLE_SIZE);
        context.restore();
    }
}