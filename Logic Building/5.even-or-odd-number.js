// Q. Wap to find weather the given number is even or odd

function isOddEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isOddEven(8));
console.log(isOddEven(9));

console.log("===================");

function isOddEven2(number) {
    return number % 2 === 0 ? true : false;
}

console.log(isOddEven2(38));
console.log(isOddEven2(127));

