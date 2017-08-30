function Sprite(x, y, width, height, src) {
    this.X = x;
    this.Y = y;
    this.image = new Image();
    this.image.width = width;
    this.image.height = height;
    this.image.src = src;
  }

export { Sprite };