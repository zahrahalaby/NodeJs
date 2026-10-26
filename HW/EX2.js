
/**
 * Programmer: Zahra halabi
 *
 * Description:
 * This program finds and prints all prime numbers
 * smaller than 237.
 */


function isPrime(num) {

    // Input validation
    if (!Number.isInteger(num) || num < 2) {
        return false;
    }

    // Check whether the number has a divisor
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Check all numbers smaller than 237
for (let num = 2; num < 237; num++) {

    // Print the number if it is prime
    if (isPrime(num)) {
        console.log(num);
    }
}
