import Sprite from './engine/Sprite'
import { CLOCKWISE, COUNTERCLOCKWISE } from './options'

class Ship extends Sprite {
    constructor(src, { width, height } , { x, y }, velocity, rotation) {
        super(src, { width, height }, { x, y });
        this.velocity = velocity;
        this.rotation = rotation;
        this.heading = 0;
        this.theta = Math.PI / 2;
    }

    // Rotates the ship an angle theta clockwise or counterclockwise
    rotate(dir) {
        console.log('rotating ship');
        dir === CLOCKWISE? this.theta = this.theta++ * this.rotation : this.theta = this.theta-- * this.rotation;
    }

    // Increment the ship's current position
    move() {
        console.log('moving ship');
    }
}

export default Ship;