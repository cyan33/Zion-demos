import Sprite from './engine/Sprite'

class Bullet extends Sprite {
    constructor(src, { width, height } , { x, y }, velocity, index) {
        super(src, { width, height }, { x, y });
        console.log('creating bullet parameters');
        this.velocity = velocity;
        this.theta = 90;
        this.index = index;
        this.available = true;
        this.position = { x, y };
        console.log(this.position);
        this.init();
    }

    updatePosition({x, y}) {
        this.position = { x, y };
        this.updateCenter();
    }

    init() {
        this.img = new Image();
        this.img.onload = () => {
            console.log('bullet loaded');
        };
        this.img.src = this.src;
    }
}

export default Bullet;