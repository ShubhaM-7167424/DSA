// Q. Wap to find the sum of digits of a number
// Q. Wap to find the sum of digits reduced to a single number

function sumOfDigits(number) {
    let sum = 0;

    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    if (sum > 9) {
        sum = sumOfDigits(sum);
    }

    return sum;
}

console.log(sumOfDigits(835));
console.log(sumOfDigits(926));
console.log(sumOfDigits(123));

