// Execute the code on dukelearntoprogram.com

var x = 3
var y = 4
var z = x + 2*y

print(y)

var image = new SimpleImage("chapel.png")
print(image)

print("Image Width: " + image.getWidth())
print("Image Height: " + image.getHeight())
print("Image Pixel: " + image.getPixel(20,36))
print("Image Red: " + image.getRed(90,8))

function square(x){
    return x*x
}

var resultSquare = square(4)
print ("Result Square function: " + resultSquare)


var resultCube = cube(4)
print ("Result Cube function: " + resultCube)

function concatenate(a, b){
    return a + b }
    
var resultConcatenate = concatenate("a", "b")
print("Result Concatenate function: " + resultConcatenate)