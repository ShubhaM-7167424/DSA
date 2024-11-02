// Q. Wap to find the smalles of the three numbers

function smallestOfThreeNumbers(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else {
        return c;
    }
}
    
console.log(smallestOfThreeNumbers(1, 2, 3));
console.log(smallestOfThreeNumbers(23, 12, 3));
console.log(smallestOfThreeNumbers(40, 12, 33));
