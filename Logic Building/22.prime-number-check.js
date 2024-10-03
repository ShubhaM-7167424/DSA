// Q. Wap to check wheather a number is prime or not

function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num === 2) return true; // 2 is the only even prime number

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If divisible by any number, not prime
        }
    }

    return true; // If no divisors were found, the number is prime
}

console.log(isPrime(36));
console.log(isPrime(15));
console.log(isPrime(2));
console.log(isPrime(3));



