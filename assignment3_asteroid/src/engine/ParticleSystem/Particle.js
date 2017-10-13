import Obstacle from '../Obstacle'

class Particle extends Obstacle {
    constructor(src, size, { x, y }, speed) {
        super(src, size, { x, y });
        this.setSpeed(speed);
    }

    setSpeed(speed) {
        this.speed = speed;
    }
}

export default Particle;