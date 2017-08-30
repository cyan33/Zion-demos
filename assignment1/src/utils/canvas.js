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


