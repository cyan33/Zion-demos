import Sprite from './utils/sprite';
import Game from './game'

// let canvas = document.getElementById("alchemy_table");
// let context = canvas.getContext('2d');

// console.log(Sprite);
// The element array for combos (initial elements are tentative)
// var elements = new Array();
// names.push("air");
// names.push("earth");
// names.push("water");
// names.push("fire");

// Picture sources (will need updating)
// var sources = new Array();
// sources.push("https://i.pinimg.com/736x/e6/30/c9/e630c92cb45fd28c8a1f441387076d9f--college-board-college-life.jpg");
// sources.push("https://s-media-cache-ak0.pinimg.com/736x/42/44/57/424457167a1892fe810127d8c7758d82--entrance-wolf.jpg");

// var selectedImage = -1;


// var pictures = new Array();

// pictureA = new Sprite(20, 20, 200, 200, sources[0]);

// pictures.push(pictureA);

// var pictureB = new Sprite(250, 20, 200, 200, sources[1]);

// pictures.push(pictureB);

// canvas.addEventListener("click", handleClick);
// document.addEventListener("keydown", handleKeyDown);


// function handleKeyDown(e){
// 	switch(e.keyCode){
//   	case 37: //left
//     	selectedImage = Math.abs(1 - selectedImage);
//       break;
//     case 39: //right
//     	selectedImage = Math.abs(1 - selectedImage);
//       break;
//   }
  
// }

// function handleClick(e) {
//   selectedImage = e.clientX + " " + e.clientY;

//   for (var iter = 0; iter < pictures.length; iter++) {
//     if (checkSprite(pictures[iter], e.clientX, e.clientY)) {
//       selectedImage = iter;
//     }
//   }
// }

// function checkSprite(sprite, x, y) {
//   var minX = sprite.X;
//   var maxX = sprite.X + sprite.image.width;
//   var minY = sprite.Y;
//   var maxY = sprite.Y + sprite.image.height;
//   var mx = x;
//   var my = y;
//   console.log(minX + " " + maxX);
//   if (mx >= minX && mx <= maxX && my >= minY && my <= maxY) {

//     return true;
//   }
//   return false;
// }

// function update() {

// }

// function draw() {
//   canvas.width = canvas.width;
//   //context.drawImage(pictureA, pictureA.X, pictureA.Y, pictureA.width, pictureA.height);

//   context.font = "30px Verdana";
//   context.fillText("Selected Image: " + selectedImage, 100, 300);

//   //draw selected outline
//   if (selectedImage >= 0) {
//     context.beginPath();
//     context.lineWidth = "6";
//     context.strokeStyle = "red";
//     context.rect(pictures[selectedImage].X, pictures[selectedImage].Y, pictures[selectedImage].image.width, pictures[selectedImage].image.height);
//     context.stroke();
    
//   }
//     for (var iter = 0; iter < pictures.length; iter++) {
//     context.drawImage(pictures[iter].image, pictures[iter].X, pictures[iter].Y, pictures[iter].image.width, pictures[iter].image.height);

//   }

// }

// function game_loop() {
//   update();
//   draw();
// }

// setInterval(game_loop, 30);

// (function() {
//     let game = new Game();
//     game.init();
// })();
