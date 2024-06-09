/*BUILDING INTERACTIVE WEBSITES
Challenge Project: Mysterious Organism
Overview

Project Goals
Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents.
Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. 
The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an 
interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea 
is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:
The first parameter is a number (no two organisms should have the same number).
The second parameter is an array of 15 DNA bases.
pAequorFactory() should return an object that contains the properties specimenNum 
and dna that correspond to the parameters provided.

*/

/* Function returns a random DNA base. DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine). When returnRandBase() 
is called, it will randomly select a base and return the base ('A','T','C', or 'G').*/

const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
/* Function returns a random single strand of DNA containing 15 bases. 
  mockUpStrand() is used to generate an array containing 15 bases to represent a single DNA strand with 15 bases.*/

  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

  // A factory function to create multiply objects

  function pAequorFactory(specimenNum, dna) {
    return {
      number: specimenNum,
      _dna: dna,

      get dna() {
        return this._dna;
      },

      set dna(newDna) {
        this._dna = newDna;
      },
      get specimenNum() {
        return this.number;
      },
      /* Method to simulate a mutation. mutate() is responsible for randomly selecting a base in the object’s dna property 
         and changing the current base to a different base. Then .mutate() will return the object’s dna. 

         For example, if the randomly selected base is the 1st base and it is 'A', the base must be changed to 'T', 'C', or 'G'. 
         But it cannot be 'A' again.*/

      mutate() {
        let randomIndex = Math.floor(Math.random() * this._dna.length);
        let currentBase = this._dna[randomIndex];
        let newBase = returnRandBase(); // Get a random base

        // Ensure the new base is different from the current base
        while (newBase === currentBase) {
          newBase = returnRandBase();
        }

        // Replace the current base with the new base
        this._dna[randomIndex] = newBase;

        // Return the mutated DNA
        return this._dna;
      },

      /* Method .compareDNA() to compare dna sequences. 
      Your research team wants to be able to compare the DNA sequences of different P. aequor. .compareDNA() has one parameter, 
      another pAequor object.The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s 
.dna and compute how many bases are identical and in the same locations. 
.compareDNA() does not return anything, but prints a message that states the percentage of DNA the 
two objects have in common — use the .specimenNum to identify which pAequor objects are being compared.

For example:

ex1 = ['A', 'C', 'T', 'G']
ex2 = ['C', 'A', 'T', 'T']

ex1 and ex2 only have the 3rd element in common ('T') and therefore, 
have 25% (1/4) of their DNA in common. The resulting message would read something along the lines of: 
specimen #1 and specimen #2 have 25% DNA in common.*/

      compareDNA(pAequorNew) {
        let currentDna = this._dna;
        let anotherDna = pAequorNew.dna;
        let count = 0;
        for (let i = 0; i < currentDna.length; i++) {
          if (currentDna[i] === anotherDna[i]) {
            count++;
          }
        }
        let percentage = (count / currentDna.length) * 100;
        let percentageToDec = percentage.toFixed(2);
        console.log(
          `specimen #${this.number} and specimen #${pAequorNew.specimenNum} have ${percentageToDec}% DNA in common.`
        );
      },
/* P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.
.willLikelySurvive() returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. 
Otherwise, .willLikelySurvive() returns false.*/

      willLikelySurvive() {
        let countC = 0;
        let countG = 0;
        for (let i = 0; i < this._dna.length; i++) {
          if (this._dna[i] === "C") {
            countC++;
          }
          if (this._dna[i] === "G") {
            countG++;
          }
        }
        let percentageC = (countC / this._dna.length) * 100;
        let percentageG = (countG / this._dna.length) * 100;

        if (percentageC.toFixed() > 60 || percentageG.toFixed() > 60) {
          return true;
        } else return false;
      },
      /* Create a .complementStrand() method to the factory function’s object that returns the complementary DNA strand. 
      The rules are that 'A's match with 'T's and vice versa. Also, 'C's match with 'G's and vice versa. */

      complementStrand(){
        
        let strand1 = this._dna;
        let complementDna =[];
        for (let i = 0; i < strand1.length; i++)
         {
           if (strand1[i] === 'G') {
           complementDna.push('C');
         } else if (strand1[i] === 'C') {
           complementDna.push('G');
         } else if (strand1[i] === 'A') {
           complementDna.push('T');
         } else if (strand1[i] === 'T') {
           complementDna.push('A');
         }
         
         }
         return complementDna;
         }
    };
  }

// Create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array

  let surviveSpecimens = [];
  let number = 1;
  while (surviveSpecimens.length < 30) {
    let surviveSpecimen = pAequorFactory(number, mockUpStrand());
    if (surviveSpecimen.willLikelySurvive()) {
      surviveSpecimens.push(surviveSpecimen);
      number++;
    }
  }
  // testing complementStrand()

  console.log(surviveSpecimens[0]);
  console.log(surviveSpecimens[0].complementStrand());

  // testing compareDNA()

  surviveSpecimens[1].compareDNA(surviveSpecimens[2]);

  for (let obj of surviveSpecimens) {
    console.log(obj.number + "  " + obj.dna);
  }

  // Use the .compareDNA() to find the two most related instances of pAequor
  function findMostRelatedInstances(surviveSpecimens) {
    let mostRelatedPair = [];
    let maxSimilarity1 = 0;
    let maxSimilarity2 = 0;
    for (let i = 0; i < surviveSpecimens.length; i++) {
      for (j = i + 1; j < surviveSpecimens.length; j++) {
        let similarityPercentage = surviveSpecimens[i].compareDNA(
          surviveSpecimens[j]
        ).similarityPercentage;

        if (similarityPercentage > maxSimilarity1) {
          maxSimilarity1 = similarityPercentage;
          maxSimilarity2 = maxSimilarity1;
          mostRelatedPair = [
            surviveSpecimens[i].number,
            surviveSpecimens[j].number,
          ];
        } else if (similarityPercentage > maxSimilarity2) {
          maxSimilarity2 = similarityPercentage;
        }
      }
    }

    //return {mostRelatedPair, similarity: maxSimilarity1};
    return `The most related pair is (${mostRelatedPair[0]}, ${mostRelatedPair[1]}) with a similarity of ${maxSimilarity1}%`;
  }
  
  console.log(findMostRelatedInstances(surviveSpecimens));

