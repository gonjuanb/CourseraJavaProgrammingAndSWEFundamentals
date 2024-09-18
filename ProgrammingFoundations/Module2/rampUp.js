// Execute the code on dukelearntoprogram.com

function phrase3words(value1, value2, value3) {
    var answer = value1 + " " + value2 + " " + value3;
    return answer;
}

var result1 = phrase3words("smile", "at", "everyone");
print(result1);
var result2 = phrase3words("everyone", "wave", "back");
print(result2);
var result3 = phrase3words("coding", "is", "fun");
print(result3);

function reformatName(first, last) {
    return last + ", " + first
}

var result = reformatName("Susan", "Rodger");
print(result);
result = reformatName("Robert", "Duvall");
print(result);


function numberPixels(namefile) {
    var someImg = new SimpleImage(namefile);
    var height = someImg.getHeight();
    var width = someImg.getWidth();
    return height * width
}

var result = numberPixels("chapel.png");
print(result);
result = numberPixels("dinos.png");
print(result);


function perimeter(imageName) {
    var someImg = new SimpleImage(imageName);
    var height = someImg.getHeight();
    var width = someImg.getWidth();
    var perimeter = 2 * height + 2 * width;
    return perimeter
}

print(perimeter("rodger.png"));

function printPixel(nameImage, xpos, ypos) {
    var someImg = new SimpleImage(nameImage);
    print("Red is " + someImg.getRed(xpos, ypos))
    print("Green is " + someImg.getGreen(xpos, ypos))
    print("Blue is " + someImg.getBlue(xpos, ypos))
}

printPixel("drewgreen.png", 10, 10);
printPixel("drewgreen.png", 250, 500);

function sumPixel(nameOfImage, xpos, ypos){
    var someImg = new SimpleImage(nameOfImage);
    return someImg.getRed(xpos, ypos) + someImg.getGreen(xpos, ypos) + someImg.getBlue(xpos, ypos)
}

var answer = sumPixel("drewgreen.png", 250, 500);
print(answer);
answer = sumPixel("drewgreen.png", 10, 10);
print(answer);

var img = new SimpleImage(200,200);
for (var pixel of img.values()) {
    pixel.setBlue(0)
    pixel.setGreen(255)
    pixel.setRed(255)
}

print(img);


var image = new SimpleImage("chapel.png");
for (var pixel of image.values()){
    pixel.setRed(255)
}

print(image);

var image = new SimpleImage("chapel.png");
for (var pixel of image.values()){
    pixel.setRed(0)
}

print(image);


var image = new SimpleImage("eastereggs.jpg");

for (var pixel of image.values()){
    if(pixel.getRed() > 70){
        pixel.setRed(70)
    }
}

print(image);

var image = new SimpleImage("astrachan.jpg");


for(var pixel of image.values()){
    var height = image.getHeight()
    if(pixel.getY() > height - 10){
        pixel.setRed(0);
        pixel.setBlue(0);
        pixel.setGreen(0);
    }
}


print(image);

var image = new SimpleImage("chapel.png");

for(var pixel of image.values()){
    if(pixel.getX() < 50 && pixel.getY() < 50){
        pixel.setGreen(255)
        pixel.setBlue(0)
        pixel.setRed(0)
    }
}

print(image);


function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
    var img = someImage
    var height = cornerHeight
    var width = (someImage.getWidth() - cornerWidth) 
 for(var pixel of img.values()){
      if(pixel.getX() > width  && pixel.getY() < height){
        pixel.setGreen(green)
        pixel.setBlue(blue)
        pixel.setRed(red)
    }
   
 }

 return img

}

var picture = new SimpleImage("chapel.png");
var result = topRightCorner(30, 60, picture, 255, 255, 0);
print(result);
var picture2 = new SimpleImage("smalllion.jpg");
var result2 = topRightCorner(125, 20, picture2, 255, 0, 0);
print(result2);

function changeRed(width, height) {
    var picture = new SimpleImage(width, height);
    var red = 0;

    for (var pixel of picture.values()){
       pixel.setRed(red);
        pixel.setGreen(0);
        pixel.setBlue(0);
       if(pixel.getRed() < 255){
           red = red + 1
       } else {
           red = 0
       }
    }

    return picture;
}

