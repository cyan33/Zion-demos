import { drawImageByUrl, drawRotate } from './engine/canvas'
import { UNIVERSE_BG, SHIP_SPRITE } from './options'

const sin = Math.sin
const cos = Math.cos
const PI = Math.PI

export function drawWalls(context, width, height) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.strokeStyle = 'black';
    context.strokeRect(0, 0, width, height);
}

export function drawShip(context, ship) {
    // drawShip according to its angle
    const { x, y } = ship.position;
    const { width, height } = ship.size;

    let img = new Image();
    img.src = SHIP_SPRITE;
    img.onload = () => {
        drawRotate(context, img, x, y, ship.theta);
    }
}

export function drawUniverse(context, width, height) {
    drawImageByUrl.call(context, UNIVERSE_BG, 0, 0, width, height);
}

export function marchForward(ship) {
    const { theta } = ship;
    const { x, y } = ship.position;

    // let dis = 10
    // let deltaX = 10 * sin()

    return {x,y}
}
