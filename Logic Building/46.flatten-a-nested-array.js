// Q. Wap to flatten the nested array

function flattenArray(arr) {
       return arr.flat(Infinity)
}

console.log(flattenArray([1,2,3,[4,5]]));
console.log(flattenArray([1,2,3,[4,5, [6, 7, [8,9]]]]));
