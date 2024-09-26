function doBlue() {
let canvas = document.getElementById("canvas1")
canvas.style.backgroundColor = "blue"
let context = canvas.getContext("2d")
context.fillStyle = "yellow"
context.fillRect(10,10,60,60)

context.fillStyle = "black"
context.font = "20px Arial"
context.fillText("Hello", 15, 45)

}

function doOrange() {
let canvas = document.getElementById("canvas1")
let context = canvas.getContext("2d")
context.clearRect(0, 0, canvas.width, canvas.height);
canvas.style.backgroundColor = "orange"


}