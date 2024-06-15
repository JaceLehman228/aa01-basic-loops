/*
Write a function tripletTrue that accepts a string as an argument. The function
should return a boolean indicating whether or not the the string contains three
of the same character consecutively.
*/

// Your code here 
function tripletTrue(str) {
    if (typeof str !== 'string') {
        return null;
    } else {
        let letterCheck = 0;
        for(let i = 0; i < str.length; i++) {
            if (str[i] === str[i + 1] && str[i] === str[i + 2]){
                letterCheck++;
            }
        }
        return letterCheck !== 0;     
    }
}
console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = tripletTrue;
