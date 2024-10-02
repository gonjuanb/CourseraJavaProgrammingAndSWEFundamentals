
/**
 * Write a description of Part2 here.
 * 
 * @author Juan Gonzalez 
 * @version 2102024
 */
public class Part2 {

    
     public String findSimpleGene(String dna, String startCodon, String endCodon){
        String result = "";
        int startDna = dna.indexOf(startCodon);
        if(startDna == -1) {
            return "DNA is not valid";
        }
        int endDna = dna.indexOf(endCodon, startDna + 3);
        if( endDna == -1){
            return "DNA is not valid";
        }
        
        result = dna.substring(startDna, endDna+3);
        
        if ((result.length() % 3) != 0 ){
            return "DNA is not valid";
        }
        
        return result;
    }
    
    
    public void testSimpleGene(){
        String test1 = "gatgctataat";
        System.out.print(findSimpleGene(test1, "ATG", "TAA"));
        
        
    }
    
}
