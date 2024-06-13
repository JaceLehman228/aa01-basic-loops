/*
Define a function getLastVowel that takes in a string parameter and returns the
last vowel that appears sequentially in the string. If the string does not
contain a vowel, return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function getLastVowel(str) {
    let i = 0;
    let strVowels = '';
    while (i < str.length) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            strVowels += str[i];
        i++;
        }
    }
    console.log(strVowels.length);
    if (strVowels.length > 0) {
        return strVowels[strVowels.length - 1];
    } else {
        return null;
    }
}
 console.log(getLastVowel('battery'));      // 'e'
 console.log(getLastVowel('tunnel'));       // 'e'
 console.log(getLastVowel('dog'));          // 'o'
 console.log(getLastVowel('conventional')); // 'a'
 console.log(getLastVowel('rhythm'));       // null
 console.log(getLastVowel('try'));          // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = getLastVowel;
