/*
Define a function called countVowels, that takes in a lowercased word parameter
and returns the number of vowels in the word.

Vowels are the letters "a", "e", "i", "o", "u".
*/

function countVowels (str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count += 1;
        }
    }
    return count;
} 

 console.log(countVowels("bootcamp")); // => 3
 console.log(countVowels("apple"));    // => 2
 console.log(countVowels("pizza"));    // => 2
 console.log(countVowels("try"));      // => 0

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = countVowels;
