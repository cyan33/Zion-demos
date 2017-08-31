import { EMOJI_SIZE } from '../options';

export function clearCanvas(canvas, context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

export function coordinateConversion(canvas, x, y) {
    var box = canvas.getBoundingRect();
    return {
        x: Math.round(x - box.left),
        y: Math.round(y - box.right)
    }
}

// TODO: should dnd the emoji from the sidebar into the canvas
export function generateRandomPosition(canvas, middle = false) {
    let x, y;
    const getRandomNumBetween = (min, max) => Math.random() * (max - min) + min; 
    const { width, height } = EMOJI_SIZE;

    if (middle) {
        x = Math.round(getRandomNumBetween(canvas.width * 0.2, canvas.width * 0.8 - width));
        y = Math.round(getRandomNumBetween(canvas.height * 0.2, canvas.height * 0.8 - height));
    } else {
        x = Math.round(getRandomNumBetween(0, canvas.width - width));
        y = Math.round(getRandomNumBetween(0, canvas.height - height));
    }
    return { x, y };
}
