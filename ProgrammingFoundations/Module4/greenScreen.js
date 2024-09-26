let fgImg
let bgImg

function loadForegroundImg() {
    let img = document.getElementById("imgForeground")
    let canvas = document.getElementById("foreground")
    fgImg = new SimpleImage(img)
    fgImg.drawTo(canvas)
}

function loadBackgroundImg() {
    let img = document.getElementById("imgBackground")
    let canvas = document.getElementById("background")
    bgImg = new SimpleImage(img)
    bgImg.drawTo(canvas)
}


function doGreenScreen() {
    let canvas = document.getElementById("foreground")
    let greenThreshold = 240 
    checkImg(fgImg)
    checkImg(bgImg)
    clearCanvas()
    let output = new SimpleImage(fgImg.getWidth(), fgImg.getHeight())
    for (const px of fgImg.values()) {
        let x = px.getX()
        let y = px.getY()
        if(px.getGreen() > greenThreshold){
            let bgPixel = bgImg.getPixel(x,y)
            output.setPixel(x, y, bgPixel)
        } else {
            output.setPixel(x,y, px)
        }
    }
    output.drawTo(canvas)

}



function checkImg(img) {
    if(img == null || ! img.complete()){
        alert("Image not loaded")
        return
    }
    
}


function clearCanvas() {
    for (const canvas of ["foreground", "background"]) {
        var paintcanvas = document.getElementById(canvas);
        var context = paintcanvas.getContext("2d");
        context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
    }
   
}