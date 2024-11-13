// Q. How to check if an object is an array or not ? Provide Some Code.

function checkArray(element) {
        return Array.isArray(element)
}

console.log(checkArray([]));
console.log(checkArray({}));
