// Q. Wap to find the largest digit in a number

function largestDigitInANumber(number) {
    let largestDigit = 0;

    while (number > 0) {
        let r = number % 10;
        if (r > largestDigit) {
            largestDigit = r;
        }
        number = Math.floor(number / 10);
    }

    return largestDigit;
}

console.log(largestDigitInANumber(863));
console.log(largestDigitInANumber(571));
console.log(largestDigitInANumber(4971));
