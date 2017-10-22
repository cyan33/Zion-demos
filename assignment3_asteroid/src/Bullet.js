import Sprite from './engine/Sprite'
class Bullet extends Sprite {
    constructor(src, { width, height } , { x, y }, velocity, theta) {
        super(src, { width, height }, { x, y });
        this.velocity = velocity;
        this.theta = theta;
    }
}
export default Bullet