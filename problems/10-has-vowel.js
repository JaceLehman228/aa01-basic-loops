/*
Define a function hasVowel that takes in a string parameter. The function should
return a boolean, true if the string contains at least one vowel, false
otherwise.

Vowels are the letters "a", "e", "i", "o", "u".
*/

function hasVowel (str) {
    if (str.includes('a') || str.includes('e') || str.includes('i') || str.includes('o') || str.includes('u')) {
        return true;
    } else {
        return false;
    }
}

 console.log(hasVowel('dog'));          // => true
 console.log(hasVowel('conventional')); // => true
 console.log(hasVowel('rhythm'));       // => false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasVowel;
