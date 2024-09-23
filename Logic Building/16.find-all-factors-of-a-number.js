// Q. Wap to find all the factors of a number

function findAllFactorsOfANumber(number) {
    let result = [];

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            result.push(i);
        }
    }
    return result
}
console.log(findAllFactorsOfANumber(27));
console.log(findAllFactorsOfANumber(14));
console.log(findAllFactorsOfANumber(50));
