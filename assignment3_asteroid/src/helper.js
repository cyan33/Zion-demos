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
    context.translate(ship.position.x, ship.position.y);
    // rotate by angle theta
    // let angle = ship.theta + Math.PI / 2;
    console.log(ship.theta);
    context.rotate(ship.theta);
    drawImageByUrl.call(context, ship.src, ship.position.x, ship.position.y, ship.size.width, ship.size.height);
    context.restore();
}