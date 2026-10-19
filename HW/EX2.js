// find all prime numbers between 2 and 237  

for (let num = 2; num < 237; num++) {
    let isPrime = true;

    for (let i = 2; i * i <= num && isPrime; i++) {
        isPrime = num % i === 0 ? false : true;
    }

    if(isPrime) {
        console.log(num);
    }
}
