
/**
 * Write a description of Part2 here.
 * 
 * @author Juan Gonzalez 
 * @version 5102024
 */
public class Part2 {

    public int howMany(String a, String b){
        int index = b.indexOf(a);
        boolean flag = true;
        if (index == -1){
            return 0;
        }
        int result = 1;
        while(index > 0){
          System.out.println("Index" + index + "Result" + result);  
          index = b.indexOf(a, index + 1);
          if(index <0 || index == b.length() || index == b.length()-2){
            break;
            } else {
          result = result + 1;}
          System.out.println("Index" + index + "Result" + result);  
        }
        
        return result;
    }

    public void testHowMany(){
    System.out.println("Test 1 - Result 3 " + howMany("GAA", "ATGAACGAATTGAATC"));
    System.out.println("Test 2 - Result 2 " + howMany("AA", "ATAAAA"));
    System.out.println("Test 2 - Result 0 " + howMany("AA", "ATAXA"));
    
    
    }
    
    
}

