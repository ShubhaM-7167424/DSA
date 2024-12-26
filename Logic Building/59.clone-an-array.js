// Q. Wap to clone an array

function cloneArray(arr) {
    return [...arr];
}

let arr = [12, 3, 4, 55];

let newArr = cloneArray(arr);

console.log(arr);
console.log(newArr);

// =============================================================

function cloneArray2(arr) {
    let emptyArr = [];
    arr.forEach((element) => {
        emptyArr.push(element);
    });

    return emptyArr;
}

let array = [132, 23, 45, 59];

let newArray = cloneArray2(array);

// =============================================================

function cloneArray3(arr) {
    return arr.map((e) => {
        return e;
    });
}

const nayaArr = cloneArray3([28, 38, 85, 389]);

console.log(nayaArr);
