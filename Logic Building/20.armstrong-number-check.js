// Q. Wap to check weather a number is armstrong or not ex: 0, 153, 370, 371
// 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27

function isArmstrongNumber(number) {
    let temp = number;
    let sum = 0;

    while (number > 0) {
        let r = number % 10;
        sum += r * r * r;
        number = Math.floor(number / 10);
    }

    return sum === temp;
}

console.log(isArmstrongNumber(153));
console.log(isArmstrongNumber(0));
console.log(isArmstrongNumber(370));
console.log(isArmstrongNumber(453));
