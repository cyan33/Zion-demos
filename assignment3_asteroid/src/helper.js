import { drawImageByUrl } from './engine/canvas'
import { UNIVERSE_BG } from './options'

export function drawWalls(context, width, height) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = 'black';
    context.strokeRect(0, 0, width, height);
}

export function drawShip(context, ship) {
    // translate origin to ship's location
    // context.translate(ship.position.x, ship.position.y);
    // rotate by angle theta
    // let angle = 90 * Math.PI / 180;
    // context.rotate(angle);
    drawImageByUrl.call(context, ship.src, ship.position.x, ship.position.y, ship.size.width, ship.size.height);
}

export function drawUniverse(context, width, height) {
    drawImageByUrl.call(context, UNIVERSE_BG, 0, 0, width, height);
}
