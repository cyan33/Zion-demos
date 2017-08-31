class Sprite {
    constructor(x = 0, y = 0, width = 64, height = 64, src = undefined) {
        this.X = x;
        this.Y = y;
        this.image = new Image();
        this.image.width = width;
        this.image.height = height;
        this.image.src = src;
    }
}

export default Sprite;