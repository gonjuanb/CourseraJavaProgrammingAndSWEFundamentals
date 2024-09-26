function onClick() {
    let canvas = document.getElementById("canvas")
    canvas.style.background = "blue"
 
}


function onChange(){
    let canvas = document.getElementById("canvas")
    let color = document.getElementById("picker").value
    canvas.style.background = color

}