// Q. Wap to find the smallest digit in a number

function smallestDigitInANumber(number) {
    let smallestDigit = 9;

    while (number > 0) {
        let r = number % 10;
        if (r < smallestDigit) {
            smallestDigit = r;
        }
        number = Math.floor(number / 10);
    }
    return smallestDigit;
}

console.log(smallestDigitInANumber(368));
console.log(smallestDigitInANumber(741));
console.log(smallestDigitInANumber(945));
