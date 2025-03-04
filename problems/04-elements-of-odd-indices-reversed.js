/*
Implement the `elementsOfOddIndicesReversed` function so that it
returns a new string containing all the elements with odd indices in the input
string in reverse order.
*/

function elementsOfOddIndicesReversed(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 !== 0) {
      newStr += str[i];
    }
  }
  return newStr.split('').reverse().join('');
}

 console.log(elementsOfOddIndicesReversed('academy')); // 'mdc'
 console.log(elementsOfOddIndicesReversed('planet'));  // 'tnl'
 console.log(elementsOfOddIndicesReversed('sport'));   // 'rp'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = elementsOfOddIndicesReversed;
