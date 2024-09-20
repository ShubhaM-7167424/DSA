// Q. Wap to find the multiplication table of a number
// Q.Wap to find the multiplication table of numbers from n1 to n2

function multiplicationOfANumber(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}

console.log(multiplicationOfANumber(5));

console.log("function2");

function multiplicationOfANumber2(n1, n2) {
    for (let n = n1; n <= n2; n++) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${n} * ${i} = ${n * i}`);
        }
        console.log('\n');
        
    }
}

console.log(multiplicationOfANumber2(3, 7));
