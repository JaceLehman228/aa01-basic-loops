/*
Define a function called `validHexCode` that returns `true` if its string
parameter is a valid hex code.

A valid hex code must begin with a pound key `#` followed by 6 characters.
Each character must be a digit from 0-9 or an alphabetic character from A-F.
All alphabetic characters may be uppercase or lowercase.
*/

// Your code here 
function validHexCode(hexNum) {
  let hexCheck = 0;
  let charStr = 'abcdefghijklmnopqrstuvwxyz1234567890'
  if (hexNum[0] === '#' && hexNum.length === 7) {
    for (let i = 1; i < hexNum.length; i++) {
      if (charStr.includes(hexNum[i].toLowerCase()) === false) {
        hexCheck++;
      }
    }
    return hexCheck === 0;
  } else {
    return false;
  }
}
console.log(validHexCode("#123456"));  // true
console.log(validHexCode("!123456"));  // false
console.log(validHexCode("#123"));     // false
console.log(validHexCode("#1234567")); // false
console.log(validHexCode("1234567"));  // false
console.log(validHexCode("123456"));   // false
console.log(validHexCode("#ABCDEF"));  // true
console.log(validHexCode("#abcDEF"));  // true
console.log(validHexCode("#88ef29"));  // true
console.log(validHexCode("#222!E4"));  // false


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
try {
  module.exports = validHexCode;
} catch {}
