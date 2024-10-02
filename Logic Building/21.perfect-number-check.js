// Q. Wap to check weather a number is perfect or not ex: 6, 28, 496
// if the sum of all factors except the number is equal to the number then it is a perfect number
// ex: 6 = 1 + 2 + 3

function isPerfectNumber(number) {
    let sum = 0;
    
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    return sum === number;
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(496));
console.log(isPerfectNumber(32));
