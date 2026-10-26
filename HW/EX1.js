// developer - zahra halabi

// Check if a number is divisible by 2, 3, and 5 
// return the count of how many of these conditions are true

const num=123

const a = num % 2 === 0;
const b = num % 3 === 0;
const c = num % 5 === 0;

const res=  Number(a)+Number(b)+Number(c);
console.log(res);
