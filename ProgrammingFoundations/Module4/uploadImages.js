let newImg
let grayImg

function upload() {
    let img = document.getElementById("img")
    let canvas = document.getElementById("canvasColor")
    newImg = new SimpleImage(img)
    grayImg = new SimpleImage(img)
    newImg.drawTo(canvas)
   
}


function makeGray() {
    let canvas = document.getElementById("canvasGray")
    for(var px of grayImg.values()){
        var avg = getGrayValue(px.getRed(), px.getGreen(), px.getBlue())
        px.setRed(avg)
        px.setGreen(avg)
        px.setBlue(avg)
    }
    grayImg.drawTo(canvas)
    
}

function getGrayValue(r, g, b){
    result = (r+g+b)/3
    return result
}