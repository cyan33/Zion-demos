class Spritesheet {
    constructor(url, frameWidth, frameHeight, frameSpeed, endFrame, { x, y }){
        this.url = url;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.frameSpeed = frameSpeed;
        this.endFrame = endFrame;
        this.offset = { x, y };
        this.init();
    }

    init() {
        this.img = new Image();
        this.numFrames;
        this.currentFrame = 0;
        this.counter = 0;
        this.img.onload = () => {
            this.numFrames = Math.floor(this.img.width / this.frameWidth);
        };
        this.img.src = this.url;
    }

    update() {
        if(this.counter === (this.frameSpeed - 1)) {
            this.currentFrame = (this.currentFrame + 1) % this.endFrame;
        }
        this.counter = (this.counter + 1) % this.frameSpeed;
    }
    
    
    
    //   this.draw = function(x, y){
    //       var row = Math.floor(currentFrame / numFrames);
    //     var col = Math.floor(currentFrame % numFrames);
        
    //     context.drawImage(image, col*frameWidth, row*frameHeight, frameWidth, frameHeight, x, y, frameWidth, frameHeight);
      
}

export default Spritesheet;