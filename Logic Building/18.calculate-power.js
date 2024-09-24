// Q. Wap to calculate power

function calculatePower(base, exponent) {
    let power = 1;
    for (let i = 1; i <= exponent; i++) {
        power *= base;
    }
    return power;
}

console.log(calculatePower(2, 3));
console.log(calculatePower(2, 5));
console.log(calculatePower(3, 4));
