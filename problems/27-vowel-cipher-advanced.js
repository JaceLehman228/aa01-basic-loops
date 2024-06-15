/*
Write a function vowelCipher that takes in a string and returns a new string
where every vowel becomes the next vowel in the alphabet.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function vowelCipher(str) {
    let vowels = 'aeiouaeiou';
    let cipherWord = '';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            cipherWord += vowels[vowels.indexOf(str[i]) + 1];
        } else {
            cipherWord += str[i];
        }
    }
    return cipherWord;
}
console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = vowelCipher;
