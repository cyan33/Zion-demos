import {getCenter, calculateCenter} from './operations'

class Sprite {
    constructor(src, size, { x, y }){
        if(size === undefined || size === null) {
            throw 'size must be provided';
        }
        this.src = src;
        this.size = size;
        this.position = { x, y };
        this.center = calculateCenter(this.position.x, this.position.y, this.size);
    }
}

export default Sprite
