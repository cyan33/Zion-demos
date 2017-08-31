export function clearCanvas(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function coordinateConversion(canvas, x, y) {
    var box = canvas.getBoundingRect();
    return {
        x: Math.round(x - box.left),
        y: Math.round(y - box.right)
    }
}

export function generateRandomPosition(canvas, middle = false) {
    let x, y;
    const getRandomNumBetween = (min, max) => Math.random() * (max - min) + min; 

    if (middle) {
        x = Math.round(getRandomNumBetween(canvas.width * 0.2, canvas.width * 0.8));
        y = Math.round(getRandomNumBetween(canvas.height * 0.2, canvas.height * 0.8));
    } else {
        x = Math.round(getRandomNumBetween(0, canvas.width));
        y = Math.round(getRandomNumBetween(0, canvas.height));
    }
    return { x, y };
}
