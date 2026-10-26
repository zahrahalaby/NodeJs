/**
 * Programmer : zahra halabi
 *
 * Description:
 * This program checks whether a number is divisible by 2, 3, and 5.
 * It prints how many of these divisibility conditions are true.
 */

const num = 123;

// Check divisibility by 2, 3, and 5
const a = num % 2 === 0;
const b = num % 3 === 0;
const c = num % 5 === 0;

// Convert boolean values to numbers and count
// how many divisibility conditions are satisfied
const res = Number(a) + Number(b) + Number(c);

// Print the final result
console.log(res);
