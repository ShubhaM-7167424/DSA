// Q. Wap to find the factorial of a number

function factorialOfANumber(number) {
    let factorial = 1;

    for (let i = number; i >= 1; i--) {
        factorial *= i;
    }
    return factorial;
}
console.log(factorialOfANumber(4));
console.log(factorialOfANumber(7));
console.log(factorialOfANumber(9));
