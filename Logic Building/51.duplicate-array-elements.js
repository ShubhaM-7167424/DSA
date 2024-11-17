// Q. Make this work
// input  => [1,2,3,4,5]
// output => [1,2,3,4,5,1,2,3,4,5]

function Duplicate(arr) {
        return arr.concat(arr)
}

console.log(Duplicate([1,2,3,4,5]));
