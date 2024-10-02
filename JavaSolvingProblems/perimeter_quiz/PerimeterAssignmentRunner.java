import edu.duke.*;
import java.io.File;

public class PerimeterAssignmentRunner {
    public double getPerimeter (Shape s) {
        // Start with totalPerim = 0
        double totalPerim = 0.0;
        // Start wth prevPt = the last point 
        Point prevPt = s.getLastPoint();
        // For each point currPt in the shape,
        for (Point currPt : s.getPoints()) {
            // Find distance from prevPt point to currPt 
            double currDist = prevPt.distance(currPt);
            // Update totalPerim by currDist
            totalPerim = totalPerim + currDist;
            // Update prevPt to be currPt
            prevPt = currPt;
        }
        // totalPerim is the answer
        return totalPerim;
    }

    public int getNumPoints (Shape s) {
        int value = 0;
        
        for(Point currPt : s.getPoints()){
        value = value + 1;
        }
        return value;
    }

    public double getAverageLength(Shape s) {
        // Put code here
        double avg = 0.0;
        double perimeter = (double) getPerimeter(s);
        double numPoints = getNumPoints(s);
        avg = perimeter/numPoints;
        return avg;
    }

    public double getLargestSide(Shape s) {
        // Put code here
        double side = 0;
        Point prevPt = s.getLastPoint();
        
        for (Point currPt : s.getPoints()) {
            double actualSide = prevPt.distance(currPt);
            if(actualSide > side){
                side = actualSide;
            }
        }
        
        return side;
    }

    public double getLargestX(Shape s) {
        // Put code here
        double largestX = 0.0;
        for (Point currPt : s.getPoints()) {
           double actualX = currPt.getX();
           if(actualX > largestX){
               largestX = actualX;
           }
        }
        return largestX;
    }

    public double getLargestPerimeterMultipleFiles() {
        double largestPerimeter = 0.0;
        DirectoryResource dr = new DirectoryResource();
        for (File f : dr.selectedFiles()) {
            FileResource fr = new FileResource(f);
            Shape s = new Shape(fr);
            double perimeter = getPerimeter(s);
            if(perimeter > largestPerimeter){
                largestPerimeter = perimeter;
                System.out.println(f);
            }
            
        }
        return largestPerimeter;
    }

    public String getFileWithLargestPerimeter() {
        // Put code here
        File temp = null;    // replace this code
        return temp.getName();
    }

    public void testPerimeter () {
      FileResource fr = new FileResource();
        Shape s = new Shape(fr);
        double length = getPerimeter(s);
        System.out.println("perimeter = " + length);
        int numPoints = getNumPoints(s);
        System.out.println("Num Points = " + numPoints);
        double avg = getAverageLength(s);
        System.out.println("Avg = " + avg);
        double largestSide = getLargestSide(s);
        System.out.println("Largest Side = " + largestSide);
        double largestX = getLargestX(s);
        System.out.println("Largest X = " + largestX);
          /***double largestPerimeter = getLargestPerimeterMultipleFiles();
        System.out.println("Largest = " + largestPerimeter);***/
    }
    
    public void testPerimeterMultipleFiles() {
        double largestPerimeter = getLargestPerimeterMultipleFiles();
        System.out.println("Largest = " + largestPerimeter);
    }

    public void testFileWithLargestPerimeter() {
        // Put code here
    }

    // This method creates a triangle that you can use to test your other methods
    public void triangle(){
        Shape triangle = new Shape();
        triangle.addPoint(new Point(0,0));
        triangle.addPoint(new Point(6,0));
        triangle.addPoint(new Point(3,6));
        for (Point p : triangle.getPoints()){
            System.out.println(p);
        }
        double peri = getPerimeter(triangle);
        System.out.println("perimeter = "+peri);
    }

    // This method prints names of all files in a chosen folder that you can use to test your other methods
    public void printFileNames() {
        DirectoryResource dr = new DirectoryResource();
        for (File f : dr.selectedFiles()) {
            System.out.println(f);
        }
    }

    public static void main (String[] args) {
        PerimeterAssignmentRunner pr = new PerimeterAssignmentRunner();
        pr.testPerimeter();
    }
}
