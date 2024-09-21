// Q. Wap to find the sum of all array elements

function sumOfArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(sumOfArrayElements(arr));
