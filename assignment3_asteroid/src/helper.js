import { drawLoadedImage, drawRotate, insertText } from './engine/canvas'
import { UNIVERSE_BG, SHIP_SPRITE, ASTEROID_SOURCES, ASTEROID_SIZES } from './options'
import { getDistance, getRandomNumber } from './engine/operations'
import Bullet from './Bullet'

const sin = Math.sin
const cos = Math.cos
const PI = Math.PI
const RESPAWN_OFFSET = 30;

export function drawWalls(context, width, height) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = 'black';
    context.strokeRect(0, 0, width, height);
}

export function drawShip(context, shipImg, shipInstance, effect, shipStatus) {
    // drawShip according to its angle
    const { x, y } = shipInstance.position;
    const { width, height } = shipInstance.size;

    if(shipStatus.shipDestroyed) {
        drawExplosion(context, shipImg, x, y, ship.theta, shipStatus.spriteSheet);
    } else {
        drawRotate(context, shipImg, x, y, ship.theta, effect);
    }
}

function drawExplosion(context, img, x, y, degrees, effect) {
    context.save();
    context.translate(x + img.width / 2, y + img.height / 2);
    context.rotate(degrees * Math.PI / 180);
    let row = Math.floor(effect.currentFrame / effect.numFrames);
    let col = Math.floor(effect.currentFrame % effect.numFrames);
    context.drawImage(effect.img, col*effect.frameWidth, row*effect.frameHeight, effect.frameWidth, effect.frameHeight,
            (-img.width / 2) + effect.offset.x, (-img.height / 2) + effect.offset.y, effect.frameWidth, effect.frameHeight);
    context.restore();
}

export function drawUniverse(context, universe, width, height) {
    context.drawImage(universe, 0, 0, width, height)
}

export function calculateMovement(ship, location, moveAmount, isForward) {
    const { theta } = ship;
    const { x, y } = location;
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
export function createBullet(sprite, size, ship) {
    const { theta } = ship;
    let location = calculateMovement(ship, ship.center, 60, true);

    return new Bullet(sprite, size, location, theta);
}

export function removeBullet() {
    this.bullets.shift();
}
export function getSpawnLocation(ship, asteroids, width, height, hit) {
    let safeSpawn = false;
    let nextX;
    let nextY;
    while(!safeSpawn || nextX >= width || nextY >= height || nextX <= 20 || nextY <= 20) {
        nextX = getRandomNumber(width);
        nextY = getRandomNumber(height);
        for(let i = 0; i < asteroids.length; i++) {
            if(hit === i) continue;
            // Get distance to asteroid
            let asteroid = asteroids[i];
            let dist = getDistance(nextX, nextY, asteroid.position.x, asteroid.position.y);
            if(dist >= asteroid.size.width + ship.size.width + RESPAWN_OFFSET || dist >= asteroid.size.height + ship.size.height + RESPAWN_OFFSET) {
                safeSpawn = true;
            } else {
                safeSpawn = false;
            }
        }
    }
    return {x: nextX, y: nextY};
}

export function checkCollision(asteroids, obj, objOffset, boundsOffset) {
    for(let i = 0; i < asteroids.length; i++) {
        // Check collision for each asteroid to ship
        let hit = asteroids[i].getCollision(obj, 20, 30);
        if(hit){
            return {hit: true, asteroid: i};
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

export function getRandomAsteroid() {
    let image = ASTEROID_SOURCES[getRandomNumber(ASTEROID_SOURCES.length)];
    let dimensions = ASTEROID_SIZES[getRandomNumber(ASTEROID_SIZES.length)];
    return {src: image, size: dimensions};
}

export function drawAsteroids(context, asteroids, astImages) {
    context.save();
    for(let i = 0; i < asteroids.length; i++) {
        let asteroid = asteroids[i];
        drawLoadedImage.call(context, astImages[`ast${i + 1}`], asteroid.position.x, asteroid.position.y, asteroid.size.width, asteroid.size.height);
    }
    context.restore();
}
export function drawBullets(context, bullets, src) {
    context.save();
    for(let i = 0; i < bullets.length; i++) {
        let bullet = bullets[i];
        drawLoadedImage.call(context, src, bullet.position.x, bullet.position.y, bullet.size.width, bullet.size.height);
    }
    context.restore();
}

export function showRemainingLivesBanner(canvas, context, remainLives) {
    const liveText = `Remaining times of retries: ${remainLives}`;
    insertText(context, {
        text: liveText,
        font: '25px serif',
        position: { x: canvas.width / 2 - 150, y: canvas.height / 2 },
        color: 'white'
    });
}

export function showGameOverLayer(canvas, context) {
    // todo: add restart layer, just as assignment 2.
    const text = `Game over, refresh the page to restart.`
    insertText(context, {
        text,
        font: '25px serif',
        position: { x: canvas.width / 2 - 170, y: canvas.height / 2 },
        color: 'white'
    })
}
