/*
Write a function sillyString that accepts a word as an argument. The functions
should return a new word where every vowel of the original word is followed by
'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function sillyString(word) {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u') {
            newWord += `${word[i]}b${word[i]}`;
        } else {
            newWord += word[i];
        }
    }
    return newWord;
}
console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sillyString;
