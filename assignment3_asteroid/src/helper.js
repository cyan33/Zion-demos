import { drawImageByUrl } from './engine/canvas'

export function drawWalls(context, width, height) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = 'black';
    context.strokeRect(0, 0, width, height);
}

export function drawShip(context, ship) {
    context.save();
    // translate origin to ship's location
    // context.translate(ship.position.x, ship.position.y);
    // rotate by angle theta
    // let angle = 90 * Math.PI / 180;
    // context.rotate(angle);
    drawImageByUrl.call(context, ship.src, ship.position.x, ship.position.y, ship.size.width, ship.size.height);
    context.restore();
}

export function drawAsteroids(context, asteroids) {
    console.log(asteroids);
    context.save();
    for(let i = 0; i < asteroids.length; i++) {
        let asteroid = asteroids[i];
        drawImageByUrl.call(context, asteroid.src, asteroid.position.x, asteroid.position.y, asteroid.size.width, asteroid.size.height);
    }
    context.restore();
}