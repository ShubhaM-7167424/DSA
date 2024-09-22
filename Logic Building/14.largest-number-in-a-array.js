// Q. Wap to find the largest element in an array

function largestNumberInArray(arr) {
    let largestNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i];
        }
    }
    return largestNumber;
}

let arr = [8, 14, 9, 23, 32, 21];

console.log(largestNumberInArray(arr));

// =======================================================================

function largestNumberInArray2(arr) {
    return Math.max(...arr);
}

console.log(largestNumberInArray2([19, 32, 7, 45, 37, 67, 55]));
