/*
Write a function leastCommonMultiple(num1, num2) that accepts two numbers as
arguments. The functions should return the smallest number that is divisible by
both num1 and num2.
*/

// Your code here 
function leastCommonMultiple(num1, num2) {
    let small = Math.min(num1, num2);
    let large = Math.max(num1, num2) 
    let i = large;
    while (i % small !== 0) {
        i += large;
    }
    return i;
}
console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = leastCommonMultiple;
