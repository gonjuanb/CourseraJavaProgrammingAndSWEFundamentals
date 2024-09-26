function doSquare(){
let canvas = document.getElementById("canvas")
let slider = document.getElementById("sliderEx").value
canvas.style.backgroundColor = "blue"
let context = canvas.getContext("2d")
context.fillStyle = "yellow"

context.fillRect(0,0,slider,slider)

}