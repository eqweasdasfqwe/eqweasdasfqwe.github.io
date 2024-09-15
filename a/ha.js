var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.font = "20px monospace";
var columns = [];
for (var x = 0; x < canvas.width; x += 20) {
    columns.push(0);
}
function real() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.01)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    columns.forEach((y, index) => {
        var text = String.fromCharCode(Math.random() * 94 + 33);
        var hue = Math.floor(Math.random() * 360);
        var saturation = Math.floor(Math.random() * 50 + 50);
        var lightness = Math.floor(Math.random() * 50);
        var color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        ctx.fillStyle = color;

        ctx.fillText(text, index * 20, y);

        if (y > 100 + Math.random() * 10000) {
            columns[index] = 0;
        } else {
            columns[index] = y + 10;
        }
    });
}
setInterval(real, 20);
