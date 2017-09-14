import Sprite from './utils/Sprite'

class Food extends Sprite {
    constructor(size, { x, y }) {
        console.log({ x, y });
        super('', size, { x, y });
    }
}

export default Food