// Q. Wap to find largest of the three numbers

function largestOfThreeNumbers(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

console.log(largestOfThreeNumbers(1, 2, 3));
console.log(largestOfThreeNumbers(3, 15, 8));
console.log(largestOfThreeNumbers(40, 35, 39));
