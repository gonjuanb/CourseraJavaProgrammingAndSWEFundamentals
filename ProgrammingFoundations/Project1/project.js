let regularImg = null
let changeImg = null

function uploadImage() {
    let img = document.getElementById("imgLoad")
    let canvas = document.getElementById("canvas")
    regularImg = new SimpleImage(img)
    changeImg = new SimpleImage(img)
    regularImg.drawTo(canvas)

}


function doGrayscale() {
    if (!isNotImgLoaded(regularImg)) {
        let canvas = document.getElementById("canvas")
        for (var px of changeImg.values()) {
            var avg = getGrayValue(px.getRed(), px.getGreen(), px.getBlue())
            px.setRed(avg)
            px.setGreen(avg)
            px.setBlue(avg)
        }
        changeImg.drawTo(canvas)

    }
}

function getGrayValue(r, g, b) {
    let result = (r + g + b) / 3
    return result
}


function doRed() {
    if (!isNotImgLoaded(regularImg)) {
        let canvas = document.getElementById("canvas")
        for (var px of changeImg.values()) {
            var avg = isRedValueLessThan128(px.getRed(), px.getGreen(), px.getBlue())
            if (avg < 128) {
                px.setRed(avg * 2)
                px.setGreen(0)
                px.setBlue(0)
            } else {
                px.setRed(255)
                px.setGreen((avg * 2) - 255)
                px.setBlue((avg * 2) - 255)
            }
        }
        changeImg.drawTo(canvas)

    }
}



function isRedValueLessThan128(r, g, b) {
    let avgColor = (r + g + b) / 3
    return avgColor
}



function doCrazyFilter() {
    var h = changeImg.getHeight()
    var w = changeImg.getWidth()
    for (var pixel of changeImg.values()) {
        if (pixel.getY() < (h - (h - 40)) || pixel.getY() > h - 40) {
            pixel.setRed(0);
            pixel.setBlue(0);
            pixel.setGreen(0);
        }
        if (pixel.getX() < (w - (w - 40)) || pixel.getX() > w - 40) {
            pixel.setRed(0);
            pixel.setBlue(0);
            pixel.setGreen(0);
        }
        changeImg.drawTo(canvas)
    }
}


    function isNotImgLoaded(img) {
        if (img == null || !img.complete()) {
            alert("Image is not loaded, try again!")
            return false
        }

    }

    function reset() {
        let canvas = document.getElementById("canvas")
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        document.getElementById("imgLoad").value = null

    }