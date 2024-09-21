// Q. Wap to find the average of an array elements

function averageOfAnArray(arr) {
    let sum = 0;
    let average = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    average = sum / arr.length;
    return { sum, average };
}

let arr = [1, 2, 3, 4, 5, 6];

console.log(averageOfAnArray(arr));
