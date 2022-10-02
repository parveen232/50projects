// canvas api mdn
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 20;
let color = 'black';
let x;
let y;

//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#moving_the_pen

function drawCircle(x, y) {
    ctx.beginPath();
    //https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo
    ctx.moveTo(x1, y1);
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo
    ctx.lineTo(x2, y2);
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
}

drawCircle(100, 200);
drawLine(200, 200, 500, 500);
