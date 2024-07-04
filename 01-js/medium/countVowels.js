/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let charOfstr = str.toLowerCase().split("");
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let countVowels = 0;
    charOfstr.forEach(element => {
      for(let i = 0; i < vowels.length; i++){
        if(element == vowels[i]){
          countVowels++;
          break;
        }
      }
    });
    return countVowels;
}
module.exports = countVowels;