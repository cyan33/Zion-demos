import {getCenter, calculateCenter} from './operations'

class Sprite {
    constructor(src, { width, height }, { x, y }){
        // if(size.width === undefined || size.width === null || size.height === undefined || size.height === null) {
        //     throw 'size must be provided';
        // }
        //console.log(`dimensions: ${width} x ${height}`);
        this.src = src;
        this.size = { width, height };
        this.position = { x, y };
        this.center = calculateCenter(this.position.x, this.position.y, this.size);
    }
}

export default Sprite