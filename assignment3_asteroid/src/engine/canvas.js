export function clearCanvas(canvas, context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

export function coordinateConversion(canvas, x, y) {
    let box = canvas.getBoundingRect();
    return {
        x: Math.round(x - box.left),
        y: Math.round(y - box.right)
    }
}

export function getBoundaries(pos, size) {
    const { x, y } = pos;
    const { width, height } = size;

    return {
        top: y,
        left: x,
        bottom: y + height,
        right: x + width,
    }
}

// TODO: should dnd the emoji from the sidebar into the canvas
export function generateRandomPosition(canvas, middle = false, size) {
    let x, y;
    const getRandomNumBetween = (min, max) => Math.random() * (max - min) + min; 
    const { width, height } = size;

    if (middle) {
        x = Math.round(getRandomNumBetween(canvas.width * 0.2, canvas.width * 0.8 - width));
        y = Math.round(getRandomNumBetween(canvas.height * 0.2, canvas.height * 0.8 - height));
    } else {
        x = Math.round(getRandomNumBetween(0, canvas.width - width));
        y = Math.round(getRandomNumBetween(0, canvas.height - height));
    }
    return { x, y };
}

export function drawImageByUrl(url, x, y, width, height) {
    // this refers to the canvas CONTEXT
    let img = new Image();
    img.src = url;

    this.drawImage(img, x, y, width, height);
}

export function insertText(context, options = { }) {
    const { text, font, position: { x, y }, color } = options;

    context.fillStyle = color;
    context.font = font;

    context.fillText(text, x, y);
}
