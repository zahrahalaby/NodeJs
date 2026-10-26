/**
 * Programmer: Zahra Halabi
 *
 * Description:
 * This program counts how many zeros exist in an array of integers
 * using a conditional expression without using if statements.
 */

const numbers = [0, 5, 0, 8, 3, 0, 1];

// Count zeros in the array using a conditional expression and the reduce method
const zeroCount = numbers.reduce((count, num) => num === 0 ? count + 1 : count, 0);

// Alternatively, you can use a for loop with a conditional expression
// for (let i = 0; i < numbers.length; i++) {
//     zeroCount += (numbers[i] === 0) ? 1 : 0;
// }

// Print the number of zeros
console.log(zeroCount);
