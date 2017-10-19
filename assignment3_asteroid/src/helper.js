import { drawLoadedImage, drawRotate } from './engine/canvas'
import { UNIVERSE_BG, SHIP_SPRITE } from './options'
import { getDistance } from './engine/operations'

const sin = Math.sin
const cos = Math.cos
const PI = Math.PI

export function drawWalls(context, width, height) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = 'black';
    context.strokeRect(0, 0, width, height);
}

export function drawShip(context, shipImg, shipInstance, effect) {
    // drawShip according to its angle
    const { x, y } = ship.position;
    const { width, height } = shipInstance.size;

    drawRotate(context, shipImg, x, y, ship.theta, effect);
}

export function drawUniverse(context, universe, width, height) {
    context.drawImage(universe, 0, 0, width, height)
}

export function calculateMovement(ship, moveAmount, isForward) {
    const { theta } = ship;
    const { x, y } = ship.position;
    //Convert theta to radians
    let thetaRad = theta * PI/180;

    //Calculate changes to x and y
    let deltaX = moveAmount * sin(thetaRad);
    let deltaY = moveAmount * cos(thetaRad);

    //Calculate new position values
    var newX = x;
    var newY = y;
    if (isForward) {
        newX += deltaX;
        newY -= deltaY;
    } else {
        newX -= deltaX;
        newY += deltaY;
    }
    return {x:newX, y:newY}
}

export function getSpawnLocation(ship, asteroids) {
    let sum = 0;
    for(let i = 0; i < asteroids.length; i++) {
        let asteroid = asteroids[i];
        // Get distance to center of the canvas
        let dist = getDistance(asteroid.center.x, asteroid.center.y, ship.center.x, ship.center.y);
        sum += dist;
    }
    // get average
    let avrg = sum / asteroids.length;
    return {x: avrg, y: avrg};
}

export function checkCollision(asteroids, ship) {
    for(let i = 0; i < asteroids.length; i++) {
        // Check collision for each asteroid to ship
        let hit = asteroids[i].getCollision(ship, 20, 30);
        if(hit){
            return true;
        } 
    }
    return false;
}

export function checkBounds(position, width, height, offset) {
    const { x, y } = position;
    var newX = x;
    var newY = y;
    if (x > width) {
        newX = 0 - offset.width;
    } else if (x + offset.width < 0) {
        newX = width;
    }

    if(y > height) {
        newY = 0 - offset.height;
    } else if (y + offset.height < 0) {
        newY = height;
    }
    return{x: newX, y: newY}

}

export function drawAsteroids(context, asteroids, astImages) {
    context.save();
    for(let i = 0; i < asteroids.length; i++) {
        let asteroid = asteroids[i];
        drawLoadedImage.call(context, astImages[`ast${i + 1}`], asteroid.position.x, asteroid.position.y, asteroid.size.width, asteroid.size.height);
    }
    context.restore();
}

export function showRestartLayer() {
    document.querySelector('.restart-layer').style.display = 'block';
    document.querySelector("button").addEventListener("click", reload);
}

export function reload() {
    location.reload();
}
