// Q. Waf to get the first element of an Array. Passing a parameter 'n' will return the first
// 'n' elements of an array

function retriveElements(arr, n = 1) {
    let newarr = [];
    if (n <= arr.length) {
        for (let i = 0; i < n; i++) {
            newarr.push(arr[i]);
        }
    }
    else{
        return `array doesnot have ${n} elemnets`
    }

    return newarr;
}
// console.log(retriveElements([12, 34, 59, 29, 88, 71], 8));
console.log(retriveElements([12, 34, 59, 29, 88, 71], 7));
