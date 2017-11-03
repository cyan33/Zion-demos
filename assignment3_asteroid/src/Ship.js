import Sprite from './engine/Sprite'

class Ship extends Sprite {
    constructor(src, { width, height } , { x, y }, velocity, rotation) {
        super(src, { width, height }, { x, y });
        this.velocity = velocity;
        this.rotation = rotation;
        this.heading = 0;
        this.theta = 90;
        this.invincible = false;
    }

    updatePosition({x, y}) {
        this.position = { x, y };
        this.updateCenter();
    }

    setInvincibility(invincible) {
        this.invincible = invincible;
    }
}

export default Ship;