
/**
 * Write a description of Part1 here.
 * 
 * @author Juan Gonzalez 
 * @version 2102024
 */
public class Part1 {

    public String findSimpleGene(String dna){
        String result = "";
        int startDna = dna.indexOf("ATG");
        if(startDna == -1) {
            return "DNA is not valid";
        }
        int endDna = dna.indexOf("TAA", startDna + 3);
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
        String test1 = "ATAAATASFGASDASDASDASSGSDFSFSFSFSDF";
        String test2 = "ASDASDSATGAAAAAAAAA";
        String test3 = "ASDADDATGAAATAA";
        String test4 = "AAATGCCCTAACTAGATTAAGAAACC";
        
        /**System.out.print(findSimpleGene(test1));
        System.out.print(findSimpleGene(test2));
        System.out.print(findSimpleGene(test3));**/
        System.out.print(findSimpleGene(test4));
        
    }
    
    
}
