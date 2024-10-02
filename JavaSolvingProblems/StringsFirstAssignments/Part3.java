
/**
 * Write a description of Part3 here.
 * 
 * @author Juan Gonzalez 
 * @version 2102024
 */
public class Part3 {

    
    public boolean twoOcurrences(String a, String b){
    int firstSearch = b.indexOf(a);
    int secondSearch = b.indexOf(a, firstSearch + a.length());
    if(firstSearch == -1 || secondSearch == -1){
        return false; 
    }
    
    return true;
    
    }
    
    
    public String lastPart(String a, String b){
        String result = b;
        if(b.indexOf(a) > 0){
            int indexPart = b.indexOf(a) + a.length();
            result = b.substring(indexPart);
        }
        
        
        return result;
    }
    
    public void testTwoOcurrences(){
      System.out.println("TC1: " + twoOcurrences("by","A story by Abby Long" ) + "/n");
      System.out.println("TC2: " + twoOcurrences("a","Banana" ) + "/n");
      System.out.println("TC3: " + twoOcurrences("atg","ctgatgta" ) + "/n");
      
        
    }
    
    public void testLastPart(){
         System.out.println("TC1: " + lastPart("an","Banana" ) + "/n");
         System.out.println("TC2: " + lastPart("zoo","Forest" ) + "/n");
    }

}
