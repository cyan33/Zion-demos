import Sprite from './engine/Sprite'
import { CLOCKWISE, COUNTERCLOCKWISE, SHIP_SPRITE } from './options'
import { drawRotate } from './engine/canvas'

const abs = Math.abs;

class Ship extends Sprite {
    constructor(src, { width, height } , { x, y }, velocity, rotation) {
        super(src, { width, height }, { x, y });
        this.velocity = velocity;
        this.rotation = rotation;
        this.heading = 0;
        this.theta = 90;
    }

    updatePosition({x, y}) {
        this.position = { x, y };
    }

    // Rotates the ship an angle theta clockwise or counterclockwise
    rotate(context, dir) {
        // context.save();
        // dir === CLOCKWISE? this.theta = abs(this.theta) : -abs(this.theta);
        // const {x, y} = this.position;
        // const {width, height} = this.size;
        // context.translate(x, y);
        // context.rotate(this.theta * Math.PI / 180);

        // let img = new Image();
        // img.onload = () => {
        //     console.log('draw')
        //     drawRotate(context, img, x, y, this.theta)
        // }
        // img.src = this.src;

        // context.restore();
    }

    // Increment the ship's current position
    move() {
        // console.log('moving ship');
    }
}

export default Ship;