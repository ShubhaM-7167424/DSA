// Q. Wap to remove the duplicates element in an array

function removeDuplicates(arr) {
    return arr.filter((value, index) => {
        console.log(value, index, arr.indexOf(value));

        return arr.indexOf(value) === index;
    });
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 2]));
console.log(removeDuplicates([23, 43, 45, 23, 50, 43]));

//? ******************************************************************

let arr = [11, 23, 45, 11, 45, 11, 45, 76, 45, 83, 11, 91];

function removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            arr.splice(arr.lastIndexOf(arr[i]), 1);
            --i;
        }
    }
    return arr;
}

console.log(removeDuplicates(arr));
// *******************************************************************

let array = [1, 6, 6, 6, 5];

function removeDuplicates(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (newArr.indexOf(array[i]) === -1) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

console.log(removeDuplicates(array));

//? *************************************************************

let arr2 = [1, 2, 7, 7, 7, 3];

function removeDuplicates(arr2) {
    let result = [];
    for (let i = 0; i < arr2.length; i++) {
        if (!result.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }
    return result;
}

console.log(removeDuplicates(arr2));
