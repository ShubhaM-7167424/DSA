// Q. Wap to find the smallest element in an array

function smallestElementInArray(arr) {
    let smallestElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallestElement) {
            smallestElement = arr[i];
        }
    }
    return smallestElement;
}

let arr = [38, 45, 23, 65, 16, 29, 7, 13];

console.log(smallestElementInArray(arr));
