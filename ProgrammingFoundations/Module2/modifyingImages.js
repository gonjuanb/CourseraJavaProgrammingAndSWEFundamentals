// Execute the code on dukelearntoprogram.com


function putVerticalStripes (img) {
    var imgModified = img
    var thirdWidth = imgModified.getWidth()/3
    for(var pixel of imgModified.values()){
        if(pixel.getX() < thirdWidth){
            pixel.setRed(255)
        } else if (thirdWidth < pixel.getX() && pixel.getX() < (2 * thirdWidth)){
            pixel.setGreen(255) 
        } else if (pixel.getX() > (2 * thirdWidth) ) {
            pixel.setBlue(255)
        }
    }
    
    
return imgModified    
}


var image = new SimpleImage("hilton.jpg")
print (putVerticalStripes(image))


function swapRedGreen(img){
    var imgModified = img
    for(var pixel of imgModified.values()){
        var newRed = pixel.getGreen()
        var newGreen = pixel.getRed()
        pixel.setRed(newRed)
        pixel.setGreen(newGreen)
    }
    return img
    
}

var image = new SimpleImage("smallhands.png")
print (swapRedGreen(image))


function swapRedGreen(img){
    var imgModified = img
    for(var pixel of imgModified.values()){
      if(pixel.getRed() == 0 && pixel.getGreen() == 51 && pixel.getBlue() == 227){
          pixel.setRed(255)
          pixel.setGreen(255)
          pixel.setBlue(0)
      }
    }
    return img
    
}

var image = new SimpleImage("duke_blue_devil.png")
print (swapRedGreen(image))


function swapRedGreen(img){
    var imgModified = img
    for(var pixel of imgModified.values()){
      if(pixel.getRed() == 0 && pixel.getGreen() == 51 && pixel.getBlue() == 227){
          pixel.setRed(255)
          pixel.setGreen(255)
          pixel.setBlue(0)
      }
    }
    return img
    
}

var image = new SimpleImage("duke_blue_devil.png")
print (swapRedGreen(image))


var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
  if (y>img.getHeight()/2){
    px.setBlue(250);
  }
  if(x >= img.getWidth()/2 && y < img.getHeight()/2){
    px.setGreen(255);}
  
}
print (img);

var result = changeRed(256,200);
print(result);


function addBorder(img, borderThick){
    var imgModified = img
    var h = imgModified.getHeight()
    var w = imgModified.getWidth()
    for(var pixel of imgModified.values()){
    if(pixel.getY() < (h - (h-borderThick)) || pixel.getY() > h-borderThick){
        pixel.setRed(0);
        pixel.setBlue(0);
        pixel.setGreen(0);
     }
     if(pixel.getX() < (w - (w-borderThick)) || pixel.getX() > w-borderThick  ){
          pixel.setRed(0);
        pixel.setBlue(0);
        pixel.setGreen(0);
     }
    }    
    return imgModified
}


var image = new SimpleImage("smallpanda.png")
print(addBorder(image, 10))