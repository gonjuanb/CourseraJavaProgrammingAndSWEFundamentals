
/**
 * Write a description of Part1 here.
 * 
 * @author Juan Gonzalez 
 * @version 5102024
 */
public class Part1 {
    

public String findGene(String dna){
    int startIndex = dna.indexOf("ATG");
    int currIndex = dna.indexOf("TAA", startIndex +3);
    
    while (currIndex != -1) {
        if((currIndex - startIndex) % 3 == 0){
        return dna.substring(startIndex, currIndex+3);
        
        } else {
        currIndex = dna.indexOf(currIndex+1);
        }
    }
    return "";
}

public void testFindGene(){
    System.out.println(findGene("AATGCTAACTAGCTGACTAAT"));

}
public int findStopCodon(String dna, int startIndex, String stopCodon){
    int currIndex = dna.indexOf(stopCodon, startIndex+3);
    while (currIndex !=-1){
        int mod = (currIndex - startIndex) % 3;
        if(mod ==0){
        return currIndex;
        } else {
            currIndex = dna.indexOf(stopCodon, currIndex+1);    
 
        }
    
    }

return -1;


}


public String findGene(String dna, int where){
    int startIndex = dna.indexOf("ATG", where);
    if(startIndex == -1){
    return "";
    }
    
    int taaIndex = findStopCodon(dna, startIndex, "TAA");
    int tagIndex = findStopCodon(dna, startIndex, "TAG");
    int tgaIndex = findStopCodon(dna, startIndex, "TGA");
    
    int minIndex = 0;
    if (taaIndex == -1 || (tgaIndex != -1 && tgaIndex < taaIndex)){
        minIndex = tgaIndex;
    
    } else{
        minIndex = taaIndex;
    }
    if (minIndex == -1 || tagIndex !=1 && tagIndex < minIndex){
        minIndex = tagIndex;
    }
    
    if(minIndex == -1){
    return "";
    }
    

    return dna.substring(startIndex, minIndex + 3);
    
}

public void printAllGenes(String dna){
    int startIndex = 0;
    
    while(true){
        String currentGene = findGene(dna, startIndex);
        if(currentGene.isEmpty()){
        break;
    }        
        System.out.println(currentGene);
        startIndex = dna.indexOf(startIndex + currentGene.length());
        
    
    }
    


}


}
