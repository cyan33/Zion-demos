import Sprite from './engine/Sprite'
class Bullet extends Sprite {
    constructor(src, { width, height } , { x, y }, theta) {
        super(src, { width, height }, { x, y });
        this.theta = theta;
    }
}
export default Bullet
