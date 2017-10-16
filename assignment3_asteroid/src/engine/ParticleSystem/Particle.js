import Obstacle from '../Obstacle'
import { getRandomNumber } from '../operations'
const MAX_CIRCLE = 360;

class Particle extends Obstacle {
    constructor(src, size, { x, y }, speed) {
        super(src, size, { x, y });
        this.setSpeed(speed);
        this.theta = getRandomNumber(MAX_CIRCLE);
    }

    setSpeed(speed) {
        this.speed = speed;
    }
}

export default Particle;