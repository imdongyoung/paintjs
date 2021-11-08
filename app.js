const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strockStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function stratPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.strockStyle();
    }

}

function onMouseUp(event) {
    stopPainting();
}


if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", stratPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting)
}